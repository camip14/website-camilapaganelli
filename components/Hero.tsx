"use client";

import { motion } from "framer-motion";
import { useLanguage, common } from "@/lib/language";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const content = {
  kicker: { es: "Consultora independiente · Bariloche, Argentina", en: "Independent consultant · Bariloche, Argentina" },
  intro: {
    es: "FP&A y BI, estrategia ESG y automatización de procesos para empresas que necesitan números claros y operaciones que funcionen. Análisis de datos, reportes de impacto y procesos que se ejecutan solos.",
    en: "FP&A and BI, ESG strategy, and process automation for companies that need clear numbers and operations that work. Data analysis, impact reporting, and processes that run themselves.",
  },
  trust: { es: "Experiencia con BBVA Argentina · Carrefour Argentina · Rapsodia", en: "Experience with BBVA Argentina · Carrefour Argentina · Rapsodia" },
};

const badges = [
  { label: { es: "FP&A & BI", en: "FP&A & BI" }, highlight: true },
  { label: { es: "ESG", en: "ESG" }, highlight: true },
  { label: { es: "Automatización", en: "Automation" }, highlight: true },
  { label: { es: "Fractional · Proyectos · Advisory", en: "Fractional · Projects · Advisory" }, highlight: false },
];

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section
      style={{
        paddingTop: "5rem",
        paddingBottom: "3rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "62ch",
      }}
    >
      <motion.p
        {...fadeUp(0)}
        style={{
          fontFamily: "var(--font-sans-ui), monospace",
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "var(--sage)",
        }}
      >
        {content.kicker[lang]}
      </motion.p>

      {/* TODO(Cami): headline placeholder — reemplazar por una de las 5-10 variantes propias antes de publicar */}
      <motion.h1
        {...fadeUp(0.1)}
        style={{
          fontFamily: "var(--font-serif-display), serif",
          fontSize: "clamp(3rem, 6vw, 5rem)",
          fontWeight: 400,
          lineHeight: 1.1,
          letterSpacing: "-0.01em",
          color: "var(--primary)",
        }}
      >
        {lang === "es" ? (
          <>
            Información que{" "}
            <em style={{ fontStyle: "italic", color: "var(--sage)", fontWeight: 400 }}>
              sirve para decidir.
            </em>
          </>
        ) : (
          <>
            Information that{" "}
            <em style={{ fontStyle: "italic", color: "var(--sage)", fontWeight: 400 }}>
              helps you decide.
            </em>
          </>
        )}
      </motion.h1>

      <motion.p
        {...fadeUp(0.2)}
        style={{
          fontFamily: "var(--font-sans-ui), monospace",
          fontSize: "0.85rem",
          color: "var(--muted)",
          lineHeight: 1.75,
        }}
      >
        {content.intro[lang]}
      </motion.p>

      <motion.div
        {...fadeUp(0.3)}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
        }}
      >
        {badges.map((badge) => (
          <span
            key={badge.label.es}
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              padding: "0.3rem 0.7rem",
              border: badge.highlight ? "0.5px solid var(--sage)" : "0.5px solid var(--line)",
              backgroundColor: badge.highlight ? "var(--sage-tint)" : "transparent",
              color: badge.highlight ? "var(--sage)" : "var(--muted)",
              borderRadius: "2px",
            }}
          >
            {badge.label[lang]}
          </span>
        ))}
      </motion.div>

      <motion.div
        {...fadeUp(0.4)}
        style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}
      >
        <a
          href="/casos"
          style={{
            fontFamily: "var(--font-sans-ui), monospace",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            padding: "0.8rem 1.5rem",
            backgroundColor: "var(--sage)",
            color: "var(--bg)",
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
            padding: "0.8rem 1.5rem",
            color: "var(--primary)",
            borderRadius: "2px",
            border: "0.5px solid var(--line)",
          }}
        >
          {common.contacto[lang]}
        </a>
      </motion.div>

      <motion.p
        {...fadeUp(0.5)}
        style={{
          fontFamily: "var(--font-sans-ui), monospace",
          fontSize: "0.68rem",
          letterSpacing: "0.08em",
          color: "var(--muted)",
          paddingTop: "1.5rem",
          borderTop: "0.5px solid var(--line)",
        }}
      >
        {content.trust[lang]}
      </motion.p>
    </section>
  );
}
