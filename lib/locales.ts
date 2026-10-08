export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "es";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const otherLocale = (locale: Locale): Locale => (locale === "es" ? "en" : "es");

export const htmlLocale: Record<Locale, string> = { es: "es_AR", en: "en_US" };

export const pagePaths = ["", "empresas", "pymes", "emprendimientos", "sobre-mi", "privacidad"] as const;
export type PagePath = (typeof pagePaths)[number];

export function localePath(locale: Locale, path: string = ""): string {
  return path ? `/${locale}/${path}` : `/${locale}`;
}
