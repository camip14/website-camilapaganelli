"use client";

import { useLanguage } from "@/lib/language";

const copy = {
  kicker: { es: "Capacidades", en: "Capabilities" },
  title: { es: "Cómo trabajo, con qué herramientas", en: "How I work, and with what tools" },
};

const icons = {
  analysis: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.2" y2="16.2" />
    </svg>
  ),
  tools: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M14.5 3.5a4 4 0 0 0-5.4 5.4L3 15v4h4l6.1-6.1a4 4 0 0 0 5.4-5.4l-3.1 3.1-2.4-2.4Z" />
    </svg>
  ),
  coordination: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="6" cy="7" r="2.2" />
      <circle cx="18" cy="7" r="2.2" />
      <circle cx="12" cy="18" r="2.2" />
      <line x1="7.6" y1="8.6" x2="10.6" y2="16.2" />
      <line x1="16.4" y1="8.6" x2="13.4" y2="16.2" />
      <line x1="8.2" y1="7" x2="15.8" y2="7" />
    </svg>
  ),
};

const capabilities = [
  {
    icon: "analysis" as const,
    title: { es: "Análisis y estrategia", en: "Analysis and strategy" },
    description: {
      es: "Modelado financiero, evaluación de viabilidad, definición de KPIs y análisis cuantitativo para fundamentar cada decisión con evidencia, no intuición.",
      en: "Financial modeling, feasibility assessment, KPI definition, and quantitative analysis to ground every decision in evidence, not intuition.",
    },
  },
  {
    icon: "tools" as const,
    title: { es: "Implementación y herramientas", en: "Implementation and tools" },
    description: {
      es: "SQL, Power BI, Tableau, Databricks, Make y N8N. La estrategia sin ejecución técnica se queda en el papel — yo hago las dos partes.",
      en: "SQL, Power BI, Tableau, Databricks, Make, and N8N. Strategy without technical execution stays on paper — I do both parts.",
    },
  },
  {
    icon: "coordination" as const,
    title: { es: "Coordinación y gobernanza", en: "Coordination and governance" },
    description: {
      es: "Gestión multiactor, documentación funcional y trazabilidad de datos para que lo que construyo se entienda y se mantenga después de que me voy.",
      en: "Multi-stakeholder management, functional documentation, and data traceability so what I build is understood and maintained after I'm gone.",
    },
  },
];

export default function Capabilities() {
  const { lang } = useLanguage();

  return (
    <section
      style={{
        paddingTop: "4.5rem",
        paddingBottom: "4.5rem",
        borderTop: "0.5px solid var(--line)",
      }}
    >
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
          maxWidth: "40ch",
        }}
      >
        {copy.title[lang]}
      </h2>

      <div className="capabilities-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem" }}>
        {capabilities.map((cap) => (
          <div key={cap.title.es}>
            <div style={{ color: "var(--sage)", marginBottom: "1rem" }}>{icons[cap.icon]}</div>
            <h3
              style={{
                fontFamily: "var(--font-sans-ui), sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                color: "var(--primary)",
                marginBottom: "0.75rem",
              }}
            >
              {cap.title[lang]}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-sans-ui), monospace",
                fontSize: "0.8rem",
                lineHeight: 1.75,
                color: "var(--muted)",
              }}
            >
              {cap.description[lang]}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .capabilities-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
