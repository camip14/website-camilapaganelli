import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { htmlLocale, localePath, locales, type Locale } from "@/lib/locales";
import type { Meta } from "@/lib/content-types";

// Título/descripción por idioma vienen del contenido; canonical y hreflang se arman acá.
export function buildMetadata(locale: Locale, path: string, meta: Meta): Metadata {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[l] = localePath(l, path);
  languages["x-default"] = localePath("es", path);

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: localePath(locale, path), languages },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: localePath(locale, path),
      siteName: siteConfig.name,
      locale: htmlLocale[locale],
      type: "website",
    },
    twitter: { card: "summary", title: meta.title, description: meta.description },
  };
}
