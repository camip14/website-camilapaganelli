import type { Locale } from "@/lib/locales";
import type {
  CommonContent,
  EmpresasContent,
  EmprendimientosContent,
  HomeContent,
  PrivacidadContent,
  PymesContent,
  SobreMiContent,
} from "@/lib/content-types";

import commonEs from "@/content/common.es.json";
import commonEn from "@/content/common.en.json";
import homeEs from "@/content/home.es.json";
import homeEn from "@/content/home.en.json";
import empresasEs from "@/content/empresas.es.json";
import empresasEn from "@/content/empresas.en.json";
import pymesEs from "@/content/pymes.es.json";
import pymesEn from "@/content/pymes.en.json";
import emprendimientosEs from "@/content/emprendimientos.es.json";
import emprendimientosEn from "@/content/emprendimientos.en.json";
import sobreMiEs from "@/content/sobre-mi.es.json";
import sobreMiEn from "@/content/sobre-mi.en.json";
import privacidadEs from "@/content/privacidad.es.json";
import privacidadEn from "@/content/privacidad.en.json";

// Los JSON se tipan por cast: TypeScript ensancha los literales ("kind": string) al importarlos.
// La forma real se valida al generar cada ruta en `next build`.
interface PageMap {
  common: CommonContent;
  home: HomeContent;
  empresas: EmpresasContent;
  pymes: PymesContent;
  emprendimientos: EmprendimientosContent;
  "sobre-mi": SobreMiContent;
  privacidad: PrivacidadContent;
}

const content: { [K in keyof PageMap]: Record<Locale, PageMap[K]> } = {
  common: { es: commonEs as CommonContent, en: commonEn as CommonContent },
  home: { es: homeEs as HomeContent, en: homeEn as HomeContent },
  empresas: { es: empresasEs as EmpresasContent, en: empresasEn as EmpresasContent },
  pymes: { es: pymesEs as PymesContent, en: pymesEn as PymesContent },
  emprendimientos: {
    es: emprendimientosEs as EmprendimientosContent,
    en: emprendimientosEn as EmprendimientosContent,
  },
  "sobre-mi": { es: sobreMiEs as SobreMiContent, en: sobreMiEn as SobreMiContent },
  privacidad: { es: privacidadEs as PrivacidadContent, en: privacidadEn as PrivacidadContent },
};

export function getContent<K extends keyof PageMap>(page: K, locale: Locale): PageMap[K] {
  return content[page][locale];
}
