"use client";

import { useLanguage, common } from "@/lib/language";

const copy = {
  title: { es: "Primero el problema, después la solución.", en: "First the problem, then the solution." },
  text: {
    es: "No busco vender un servicio genérico de consultoría. Busco entender qué está pasando realmente y construir algo que siga funcionando cuando ya no esté ahí.",
    en: "I'm not trying to sell a generic consulting service. I'm trying to understand what's actually happening and build something that keeps working after I'm gone.",
  },
};

export default function ClosingCTA() {
  const { lang } = useLanguage();

  return (
    <section
      style={{
        backgroundColor: "var(--dark-bg)",
        marginLeft: "calc(50% - 50vw)",
        marginRight: "calc(50% - 50vw)",
        paddingLeft: "calc(50vw - 50%)",
        paddingRight: "calc(50vw - 50%)",
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div className="site-wrapper" style={{ maxWidth: "1100px" }}>
        <h2
          style={{
            fontFamily: "var(--font-serif-display), serif",
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 400,
            color: "var(--dark-primary)",
            marginBottom: "1.25rem",
            maxWidth: "22ch",
          }}
        >
          {copy.title[lang]}
        </h2>
        <p
          style={{
            fontFamily: "var(--font-sans-ui), monospace",
            fontSize: "0.88rem",
            lineHeight: 1.8,
            color: "var(--dark-muted)",
            maxWidth: "48ch",
            marginBottom: "2.5rem",
          }}
        >
          {copy.text[lang]}
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a
            href="/casos"
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "0.85rem 1.7rem",
              backgroundColor: "var(--sage)",
              color: "var(--dark-bg)",
              borderRadius: "2px",
              border: "0.5px solid var(--sage)",
            }}
          >
            {common.verCasos[lang]}
          </a>
          <a
            href="/contacto"
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "0.85rem 1.7rem",
              color: "var(--dark-primary)",
              borderRadius: "2px",
              border: "0.5px solid var(--dark-line)",
            }}
          >
            {common.hablemos[lang]}
          </a>
        </div>
      </div>
    </section>
  );
}
