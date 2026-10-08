import type { Metadata } from "next";
import BrandGraphic from "@/components/BrandGraphic";
import CtaGroup from "@/components/CtaGroup";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Pending from "@/components/Pending";
import { Prose } from "@/components/RichText";
import Section from "@/components/Section";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const locale = params.locale as Locale;
  return buildMetadata(locale, "sobre-mi", getContent("sobre-mi", locale).meta);
}

export default function SobreMiPage({ params }: Props) {
  const locale = params.locale as Locale;
  const c = getContent("sobre-mi", locale);

  return (
    <>
      <Header locale={locale} current="sobre-mi" />
      <main id="contenido">
        <section className="hero">
          <div className="wrap">
            <h1 className="hero__title">{c.headline}</h1>
          </div>
        </section>

        <section className="section">
          <div className="wrap about">
            <div>
              {c.blocks.map((block) => (
                <div key={block.title} className="about__block">
                  <h2 className="about__block-title">{block.title}</h2>
                  <div className="stack">
                    {block.paragraphs.map((paragraph) => (
                      <Prose key={paragraph} text={paragraph} />
                    ))}
                  </div>
                  {block.link && <CtaGroup items={[block.link]} locale={locale} textStyle />}
                </div>
              ))}
            </div>

            {/* Imagen: la foto o ilustración es un dato pendiente; mientras tanto, recurso gráfico del sistema. */}
            <div>
              <BrandGraphic className="about__graphic" />
              <Pending detail={c.image.pending} />
            </div>
          </div>
        </section>

        <Section title={c.final.title}>
          <CtaGroup items={c.final.ctas} locale={locale} equalWeight />
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
