import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Prose } from "@/components/RichText";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const locale = params.locale as Locale;
  return buildMetadata(locale, "privacidad", getContent("privacidad", locale).meta);
}

export default function PrivacidadPage({ params }: Props) {
  const locale = params.locale as Locale;
  const c = getContent("privacidad", locale);

  return (
    <>
      <Header locale={locale} />
      <main id="contenido">
        <section className="hero">
          <div className="wrap">
            <h1 className="hero__title">{c.title}</h1>
            <div className="stack" style={{ marginTop: "1.5rem" }}>
              <Prose text={c.scope} />
              <Prose text={c.legal} />
            </div>
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
