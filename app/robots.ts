import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";

// No se lista /archivo a propósito: nombrarla acá la anunciaría. Esa página se protege con noindex.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
