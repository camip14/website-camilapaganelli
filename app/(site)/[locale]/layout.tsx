import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/app/globals.css";
import Analytics from "@/components/Analytics";
import { fontClassName } from "@/lib/fonts";
import { defaultLocale, isLocale, locales } from "@/lib/locales";
import { siteConfig } from "@/site.config";

// Solo existen /es y /en; cualquier otro prefijo responde 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
};

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const locale = isLocale(params.locale) ? params.locale : defaultLocale;
  return (
    <html lang={locale} className={fontClassName}>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
