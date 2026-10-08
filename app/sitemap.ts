import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";
import { localePath, locales, pagePaths } from "@/lib/locales";

// Solo páginas públicas. /archivo y /casos (oculto) no figuran.
export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pagePaths.map((path) => ({
      url: `${siteConfig.url}${localePath(locale, path)}`,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${siteConfig.url}${localePath(l, path)}`]),
        ),
      },
    })),
  );
}
