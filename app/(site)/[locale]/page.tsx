import type { Metadata } from "next";
import CtaGroup from "@/components/CtaGroup";
import DoorCards from "@/components/DoorCards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Prose } from "@/components/RichText";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const locale = params.locale as Locale;
  return buildMetadata(locale, "", getContent("home", locale).meta);
}

export default function HomePage({ params }: Props) {
  const locale = params.locale as Locale;
  const c = getContent("home", locale);

  return (
    <>
      <Header locale={locale} />
      <main id="contenido">
        <section className="hero">
          <div className="wrap">
            <h1 className="hero__title">{c.hero.headline}</h1>
          </div>
        </section>

        <div className="wrap">
          <DoorCards doors={c.doors} locale={locale} />
        </div>

        <section className="credibility" style={{ marginTop: "3.5rem" }}>
          <div className="wrap">
            <Prose text={c.credibility.text} className="prose prose--strong" />
            <CtaGroup items={c.credibility.links} locale={locale} textStyle />
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
