import type { Metadata } from "next";
import BeforeAfter from "@/components/BeforeAfter";
import CtaGroup from "@/components/CtaGroup";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RichText, { Prose, hasVisibleText } from "@/components/RichText";
import Section from "@/components/Section";
import Steps from "@/components/Steps";
import SummaryView from "@/components/SummaryView";
import Timeline from "@/components/Timeline";
import { hasVisibleActions } from "@/lib/actions";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const locale = params.locale as Locale;
  return buildMetadata(locale, "pymes", getContent("pymes", locale).meta);
}

export default function PymesPage({ params }: Props) {
  const locale = params.locale as Locale;
  const c = getContent("pymes", locale);

  if (c.variant === "summary") return <SummaryView content={c} locale={locale} />;

  return (
    <>
      <Header locale={locale} variant="reduced" />
      <main id="contenido">
        <section className="hero">
          <div className="wrap">
            <h1 className="hero__title">{c.hero.headline}</h1>
            <p className="hero__lede">{c.hero.sub}</p>
            <CtaGroup items={c.ctas} locale={locale} />
          </div>
        </section>

        <Section title={c.problem.title}>
          <ul className="bullets">
            {c.problem.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <Prose text={c.problem.closing} className="prose prose--strong" />
        </Section>

        <BeforeAfter data={c.beforeAfter} />

        <Section title={c.how.title}>
          <Steps items={c.how.steps} />
        </Section>

        <Section title={c.timeline.title} tone="surface">
          <Timeline items={c.timeline.items} />
          <Prose text={c.timeline.note} />
        </Section>

        <Section title={c.modes.title}>
          <ul className="bullets">
            {c.modes.items.map((item) => (
              <li key={item}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
          <Prose text={c.modes.closing} />
        </Section>

        <Section title={c.privacy.title}>
          <Prose text={c.privacy.text} />
        </Section>

        <Section title={c.risk.title} tone="surface">
          <div className="stack">
            <Prose text={c.risk.text} />
            <Prose text={c.risk.price} className="prose prose--strong" />
            <CtaGroup items={c.ctas} locale={locale} />
          </div>
        </Section>

        <Section title={c.whoFor.title}>
          <Prose text={c.whoFor.text} />
        </Section>

        <Section title={c.whyMe.title}>
          <div className="stack">
            {c.whyMe.paragraphs.map((paragraph) => (
              <Prose key={paragraph} text={paragraph} />
            ))}
            <CtaGroup items={[c.whyMe.casos]} locale={locale} textStyle />
          </div>
        </Section>

        <Section title={c.faq.title}>
          <Faq items={c.faq.items} />
          {hasVisibleText(c.faq.note) && (
            <div style={{ marginTop: "1rem" }}>
              <Prose text={c.faq.note} />
            </div>
          )}
        </Section>

        {hasVisibleActions(c.ctas, locale) && (
          <Section>
            <CtaGroup items={c.ctas} locale={locale} />
          </Section>
        )}
      </main>
      <Footer locale={locale} />
    </>
  );
}
