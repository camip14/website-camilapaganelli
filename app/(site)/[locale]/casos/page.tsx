import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pending from "@/components/Pending";
import type { Locale } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/site.config";

type Props = { params: { locale: string } };

const titles: Record<Locale, string> = { es: "Casos de negocio", en: "Business cases" };

// [OCULTO] Esta ruta responde 404 hasta que NEXT_PUBLIC_ENABLE_CASOS=1 y haya al menos un caso real
// (aunque sea anonimizado) con: contexto, qué pasaba, qué se recomendó o construyó, qué cambió
// (con una métrica verificable) y etiqueta de público. Los casos ilustrativos o demos deben rotularse
// "Caso ilustrativo, con datos ficticios".
export function generateMetadata({ params }: Props): Metadata {
  const locale = params.locale as Locale;
  return buildMetadata(locale, "casos", { title: `${titles[locale]} | Cami Paganelli` });
}

export default function CasosPage({ params }: Props) {
  if (!siteConfig.casosEnabled) notFound();
  const locale = params.locale as Locale;

  return (
    <>
      <Header locale={locale} />
      <main id="contenido">
        <section className="hero">
          <div className="wrap">
            <h1 className="hero__title">{titles[locale]}</h1>
            <Pending detail="casos reales o un panel demo rotulado como ilustrativo" />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
