import { siteConfig } from "@/site.config";
import { localePath, type Locale } from "@/lib/locales";
import type { ActionItem } from "@/lib/content-types";

export interface ResolvedAction {
  label: string;
  href: string; // vacío = el destino todavía no está definido (solo se muestra en desarrollo)
  external: boolean;
  track?: string;
  download?: boolean;
  pending?: string; // detalle del dato que falta
}

export function hasVisibleActions(items: ActionItem[], locale: Locale): boolean {
  return items.some((item) => resolveAction(item, locale) !== null);
}

// Devuelve null cuando el elemento no debe renderizarse (producción sin destino, o bloque [OCULTO]).
export function resolveAction(item: ActionItem, locale: Locale): ResolvedAction | null {
  const base = { label: item.label, external: false };

  const external = (url: string, pending: string, track?: string, download?: boolean): ResolvedAction | null => {
    if (url) return { ...base, href: url, external: true, track, download };
    return siteConfig.showPending ? { ...base, href: "", pending, track } : null;
  };

  switch (item.kind) {
    case "internal": {
      const [path, hash] = (item.href ?? "").split("#");
      return { ...base, href: localePath(locale, path) + (hash ? `#${hash}` : "") };
    }
    case "casos":
      return siteConfig.casosEnabled ? { ...base, href: localePath(locale, "casos") } : null;
    case "whatsapp":
      return external(siteConfig.whatsappUrl, "número de WhatsApp", "whatsapp_click");
    case "booking":
      return external(siteConfig.bookingUrl, "link de agenda", "booking_click");
    case "cv":
      return external(siteConfig.cvUrl, "archivo del CV", "cv_download", true);
    case "linkedin":
      return external(siteConfig.linkedinUrl, "URL de LinkedIn");
    case "form":
      if (siteConfig.formEndpoint) return { ...base, href: `#${item.href ?? ""}` };
      return siteConfig.showPending ? { ...base, href: "", pending: "destino del formulario" } : null;
  }
}
