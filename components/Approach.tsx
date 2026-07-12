"use client";

import { useLanguage } from "@/lib/language";

const copy = {
  kicker: { es: "Cómo pienso", en: "How I think" },
  title: { es: "Mi enfoque de trabajo", en: "My approach to work" },
};

const steps = [
  {
    number: "01",
    title: { es: "Empiezo por el negocio, no por la herramienta.", en: "I start with the business, not the tool." },
    text: {
      es: "Antes de abrir Excel, Power BI o proponer una automatización, entiendo qué decisión se está tratando de tomar y quién la toma. La herramienta es lo último que elijo, no lo primero.",
      en: "Before opening Excel, Power BI, or proposing an automation, I understand what decision is actually being made and who's making it. The tool is the last thing I choose, not the first.",
    },
  },
  {
    number: "02",
    title: { es: "Exploro antes de concluir.", en: "I explore before I conclude." },
    text: {
      es: "Me tomo el tiempo de entender bien el problema antes de proponer nada. La mayoría de los problemas de datos, ESG o procesos son en realidad problemas de comunicación entre áreas con objetivos distintos.",
      en: "I take the time to really understand the problem before proposing anything. Most data, ESG, or process problems are actually communication problems between areas with different goals.",
    },
  },
  {
    number: "03",
    title: { es: "Diseño para que se sostenga sin mí.", en: "I design for it to hold up without me." },
    text: {
      es: "El trabajo no termina cuando entrego el dashboard o la automatización. Termina cuando el equipo puede seguir usándolo sin necesitar que yo vuelva.",
      en: "The work doesn't end when I deliver the dashboard or the automation. It ends when the team can keep using it without needing me to come back.",
    },
  },
];

export default function Approach() {
  const { lang } = useLanguage();

  return (
    <section
      style={{
        backgroundColor: "var(--surface)",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        paddingLeft: "calc(50vw - 50%)",
        paddingRight: "calc(50vw - 50%)",
        paddingTop: "4.5rem",
        paddingBottom: "4.5rem",
      }}
    >
      <div className="site-wrapper">
        <p
          style={{
            fontFamily: "var(--font-sans-ui), monospace",
            fontSize: "0.68rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--sage)",
            marginBottom: "0.75rem",
          }}
        >
          {copy.kicker[lang]}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-serif-display), serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
            fontWeight: 400,
            color: "var(--primary)",
            marginBottom: "3rem",
          }}
        >
          {copy.title[lang]}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {steps.map((step) => (
            <div
              key={step.number}
              className="approach-row"
              style={{ display: "grid", gridTemplateColumns: "5rem 1fr", gap: "1.5rem" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif-display), serif",
                  fontSize: "2.4rem",
                  fontWeight: 400,
                  color: "var(--sage)",
                  lineHeight: 1,
                }}
              >
                {step.number}
              </p>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif-display), serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "var(--primary)",
                    marginBottom: "0.6rem",
                    maxWidth: "40ch",
                  }}
                >
                  {step.title[lang]}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans-ui), monospace",
                    fontSize: "0.85rem",
                    lineHeight: 1.8,
                    color: "var(--muted)",
                    maxWidth: "52ch",
                  }}
                >
                  {step.text[lang]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .approach-row {
            grid-template-columns: 1fr !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
