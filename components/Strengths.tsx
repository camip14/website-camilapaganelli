"use client";

import { useLanguage } from "@/lib/language";

const copy = {
  kicker: { es: "Dónde aporto más valor", en: "Where I add the most value" },
  intro: {
    es: "No vendo servicios genéricos de consultoría. Esto es lo que me distingue en cada uno de los tres.",
    en: "I don't sell generic consulting services. Here's what sets me apart in each of the three.",
  },
};

const strengths = [
  {
    title: { es: "Rigor de datos desde la banca", en: "Data rigor forged in banking" },
    description: {
      es: "Tres años armando dashboards y validando SQL en BBVA Argentina, un entorno regulado donde un número mal reportado tiene consecuencias reales. Ese estándar no baja cuando trabajo con una PyME.",
      en: "Three years building dashboards and validating SQL at BBVA Argentina, a regulated environment where a misreported number has real consequences. That standard doesn't drop when I work with an SME.",
    },
  },
  {
    title: { es: "Sustentabilidad medible, no relato", en: "Measurable sustainability, not a narrative" },
    description: {
      es: "Formación en mercados de carbono y estándares como VCS, CCB y Plan Vivo. La certificación B es un framework de gestión, no una etiqueta para el sitio web.",
      en: "Trained in carbon markets and standards like VCS, CCB, and Plan Vivo. B Corp certification is a management framework, not a website badge.",
    },
  },
  {
    title: { es: "Automatización que no depende de mí", en: "Automation that doesn't depend on me" },
    description: {
      es: "El objetivo de cada automatización es quedar funcionando sin que el equipo necesite volver a llamarme. Diseño para que se sostenga sola, no para generar dependencia.",
      en: "The goal of every automation is to keep running without the team needing to call me back. I design for it to hold on its own, not to create dependency.",
    },
  },
];

export default function Strengths() {
  const { lang } = useLanguage();

  return (
    <section
      style={{
        backgroundColor: "var(--dark-bg)",
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
            marginBottom: "1rem",
          }}
        >
          {copy.kicker[lang]}
        </p>
        <p
          style={{
            fontFamily: "var(--font-serif-display), serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 400,
            color: "var(--dark-primary)",
            maxWidth: "48ch",
            marginBottom: "3rem",
            lineHeight: 1.3,
          }}
        >
          {copy.intro[lang]}
        </p>

        <div className="strengths-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}>
          {strengths.map((s) => (
            <div key={s.title.es}>
              <h3
                style={{
                  fontFamily: "var(--font-sans-ui), sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "var(--dark-primary)",
                  marginBottom: "0.75rem",
                }}
              >
                {s.title[lang]}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans-ui), monospace",
                  fontSize: "0.8rem",
                  lineHeight: 1.75,
                  color: "var(--dark-muted)",
                }}
              >
                {s.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .strengths-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
