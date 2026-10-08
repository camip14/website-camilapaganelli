import type { Metadata } from "next";
import ApplicationForm from "@/components/ApplicationForm";
import BeforeAfter from "@/components/BeforeAfter";
import CtaGroup from "@/components/CtaGroup";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RichText, { Prose } from "@/components/RichText";
import Section from "@/components/Section";
import Steps from "@/components/Steps";
import SummaryView from "@/components/SummaryView";
import { getContent } from "@/lib/content";
import type { Locale } from "@/lib/locales";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/site.config";

type Props = { params: { locale: string } };

export function generateMetadata({ params }: Props): Metadata {
  const locale = params.locale as Locale;
  return buildMetadata(locale, "emprendimientos", getContent("emprendimientos", locale).meta);
}

export default function EmprendimientosPage({ params }: Props) {
  const locale = params.locale as Locale;
  const c = getContent("emprendimientos", locale);

  if (c.variant === "summary") return <SummaryView content={c} locale={locale} />;

  // Sin destino configurado el formulario no se muestra en producción: no se simula un envío.
  const showForm = Boolean(siteConfig.formEndpoint) || siteConfig.showPending;
  const pairCtas = c.ctas.filter((item) => item.kind !== "form");

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

        <BeforeAfter data={c.beforeAfter} />

        <Section title={c.session.title}>
          <div className="stack">
            <p className="lead">{c.session.headline}</p>
            <Prose text={c.session.bring} />
            <Prose text={c.session.take} />
            <Prose text={c.session.note} />
            <div className="callout">
              <span className="callout__label">{c.session.exampleLabel}</span>
              <p>
                <RichText text={c.session.example} />
              </p>
            </div>
            <Prose text={c.session.price} className="prose prose--strong" />
          </div>
        </Section>

        <Section title={c.accompaniment.title} tone="surface">
          <Steps items={c.accompaniment.steps} />
        </Section>

        <Section title={c.modes.title}>
          <ul className="bullets">
            {c.modes.items.map((item) => (
              <li key={item}>
                <RichText text={item} />
              </li>
            ))}
          </ul>
        </Section>

        <Section title={c.risk.title}>
          <div className="stack">
            {c.risk.paragraphs.map((paragraph) => (
              <Prose key={paragraph} text={paragraph} />
            ))}
            <CtaGroup items={pairCtas} locale={locale} />
          </div>
        </Section>

        <Section title={c.whyMe.title} tone="surface">
          <div className="stack">
            <Prose text={c.whyMe.text} />
            <CtaGroup items={[c.whyMe.link]} locale={locale} textStyle />
          </div>
        </Section>

        <Section id={c.community.id} title={c.community.title}>
          <div className="stack">
            {c.community.paragraphs.map((paragraph) => (
              <Prose key={paragraph} text={paragraph} />
            ))}
            <Prose text={c.community.cohort} />
          </div>
          {showForm && (
            <div style={{ marginTop: "2.5rem" }}>
              <h3 className="about__block-title">{c.form.title}</h3>
              <Prose text={c.form.pendingDestination} />
              <div style={{ marginTop: "1rem" }}>
                <ApplicationForm form={c.form} locale={locale} />
              </div>
            </div>
          )}
        </Section>

        <Section title={c.faq.title}>
          <Faq items={c.faq.items} />
        </Section>

        <Section>
          <CtaGroup items={pairCtas} locale={locale} />
        </Section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
