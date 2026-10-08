"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { otherLocale, type Locale } from "@/lib/locales";

// Cambia solo el prefijo de idioma y conserva el resto de la ruta actual.
export default function LocaleSwitcher({ locale, label }: { locale: Locale; label: string }) {
  const pathname = usePathname() || `/${locale}`;
  const target = otherLocale(locale);
  const href = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${target}`);

  return (
    <Link
      className="locale-switch"
      href={href}
      hrefLang={target}
      lang={target}
      aria-label={label}
      data-track="language_change"
      data-track-label={target}
    >
      <span aria-current={locale === "es" ? "true" : undefined}>ES</span>
      <span aria-hidden="true">|</span>
      <span aria-current={locale === "en" ? "true" : undefined}>EN</span>
    </Link>
  );
}
