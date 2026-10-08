import Action from "@/components/Action";
import CtaGroup from "@/components/CtaGroup";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Prose } from "@/components/RichText";
import { resolveAction } from "@/lib/actions";
import type { SummaryPage } from "@/lib/content-types";
import type { Locale } from "@/lib/locales";

// Versión resumida (EN de /pymes y /emprendimientos): titular, texto breve, CTAs y una nota.
export default function SummaryView({ content, locale }: { content: SummaryPage; locale: Locale }) {
  const link = content.link ? resolveAction(content.link, locale) : null;

  return (
    <>
      <Header locale={locale} variant="reduced" />
      <main id="contenido">
        <section className="hero">
          <div className="wrap">
            <h1 className="hero__title">{content.hero.headline}</h1>
            {content.hero.paragraphs.map((paragraph) => (
              <Prose key={paragraph} text={paragraph} className="hero__lede" />
            ))}
            <CtaGroup items={content.ctas} locale={locale} />
            {content.note && (
              <p className="prose" style={{ marginTop: "2.5rem" }}>
                {content.note} {link && <Action action={link} variant="text" />}
                {link && "."}
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
