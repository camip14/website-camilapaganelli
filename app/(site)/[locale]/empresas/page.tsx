import type { Metadata } from "next";
import BeforeAfter from "@/components/BeforeAfter";
import CtaGroup from "@/components/CtaGroup";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PillarList from "@/components/PillarList";
import RichText, { Prose } from "@/components/RichText";
import Section from "@/components/Section";
import Steps from "@/components/Steps";
import Timeline from "@/components/Timeline";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const locale = params.locale as Locale;
  return buildMetadata(locale, "empresas", getContent("empresas", locale).meta);
}

export default function EmpresasPage({ params }: Props) {
  const locale = params.locale as Locale;
  const c = getContent("empresas", locale);

  return (
    <>
      <Header locale={locale} current="empresas" cta={c.headerCta} />
      <main id="contenido">
        <section className="hero">
          <div className="wrap">
            <h1 className="hero__title">{c.hero.headline}</h1>
            <p className="hero__lede">{c.hero.sub}</p>
            <CtaGroup items={c.hero.ctas} locale={locale} />
          </div>
        </section>

        <BeforeAfter data={c.beforeAfter} />

        <Section title={c.pillars.title}>
          <PillarList items={c.pillars.items} />
        </Section>

        <Section title={c.decision.title} tone="surface">
          <p className="lead">
            <RichText text={c.decision.text} />
          </p>
        </Section>

        <Section title={c.start.title}>
          <Timeline items={c.start.items} />
          <Prose text={c.start.note} />
        </Section>

        <Section title={c.ways.title}>
          <ul className="bullets">
            {c.ways.items.map((item) => (
              <li key={item}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
          <Prose text={c.ways.closing} />
        </Section>

        <Section id={c.connecta.id} title={c.connecta.title} tone="surface">
          <Prose text={c.connecta.intro} className="prose prose--strong" />
          <div style={{ marginTop: "1.75rem" }}>
            <Steps items={c.connecta.steps} marker="letter" />
          </div>
        </Section>

        <Section>
          <div className="callout callout--quiet">
            <Prose text={c.esg.text} className="" />
          </div>
        </Section>

        <Section title={c.background.title}>
          <div className="stack">
            <Prose text={c.background.text} />
            <Prose text={c.background.education} />
            <Prose text={c.background.tools} />
            <CtaGroup items={[c.casos]} locale={locale} textStyle />
          </div>
        </Section>

        <Section title={c.finalCta.title} tone="dark">
          <CtaGroup items={c.finalCta.ctas} locale={locale} />
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
