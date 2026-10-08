import Link from "next/link";
import Action from "@/components/Action";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { resolveAction } from "@/lib/actions";
import { getContent } from "@/lib/content";
import type { ActionItem } from "@/lib/content-types";
import { localePath, type Locale } from "@/lib/locales";

type NavKey = "empresas" | "pymes" | "emprendimientos" | "sobre-mi";

interface HeaderProps {
  locale: Locale;
  // "reduced" = logo, selector de idioma y volver al inicio (rutas de pymes y emprendimientos).
  variant?: "full" | "reduced";
  current?: NavKey;
  // CTA principal del header; cambia según la ruta.
  cta?: ActionItem;
}

export default function Header({ locale, variant = "full", current, cta }: HeaderProps) {
  const common = getContent("common", locale);
  const links: { key: NavKey; label: string }[] = [
    { key: "empresas", label: common.nav.empresas },
    { key: "pymes", label: common.nav.pymes },
    { key: "emprendimientos", label: common.nav.emprendimientos },
    { key: "sobre-mi", label: common.nav.sobreMi },
  ];
  const ctaAction = cta ? resolveAction(cta, locale) : null;

  return (
    <header className="header">
      <a className="skip-link" href="#contenido">
        {common.skipToContent}
      </a>
      <div className="wrap header__inner">
        <Link className="brand" href={localePath(locale)}>
          Cami Paganelli
        </Link>

        {variant === "full" && (
          <nav className="nav-desktop" aria-label={common.navLabel}>
            {links.map((link) => (
              <Link
                key={link.key}
                className="nav-link"
                href={localePath(locale, link.key)}
                aria-current={current === link.key ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="header__actions">
          {variant === "reduced" && (
            <Link className="back-link" href={localePath(locale)}>
              {common.backHome}
            </Link>
          )}
          <LocaleSwitcher locale={locale} label={common.switchLanguage} />
          {variant === "full" && ctaAction && (
            <span className="header__cta">
              <Action action={ctaAction} variant="primary" small />
            </span>
          )}
          {variant === "full" && (
            <details className="nav-mobile">
              <summary>{common.openMenu}</summary>
              <nav className="nav-mobile__panel" aria-label={common.navLabel}>
                {links.map((link) => (
                  <Link
                    key={link.key}
                    className="nav-link"
                    href={localePath(locale, link.key)}
                    aria-current={current === link.key ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
                {ctaAction && (
                  <div>
                    <Action action={ctaAction} variant="primary" small />
                  </div>
                )}
              </nav>
            </details>
          )}
        </div>
      </div>
    </header>
  );
}
