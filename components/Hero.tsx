"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const badges = [
  { label: "FP&A & BI", highlight: true },
  { label: "ESG", highlight: true },
  { label: "Automatización", highlight: true },
  { label: "Fractional · Proyectos · Advisory", highlight: false },
];

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: "5rem",
        paddingBottom: "4rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "62ch",
      }}
    >
      <motion.p
        {...fadeUp(0)}
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.14em",
          color: "var(--sage)",
        }}
      >
        Consultora independiente · Bariloche, Argentina
      </motion.p>

      {/* TODO(Cami): headline placeholder — reemplazar por una de las 5-10 variantes propias antes de publicar */}
      <motion.h1
        {...fadeUp(0.1)}
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "clamp(3rem, 6vw, 5rem)",
          fontWeight: 300,
          lineHeight: 1.1,
          letterSpacing: "-0.01em",
          color: "var(--primary)",
        }}
      >
        Información que{" "}
        <em style={{ fontStyle: "italic", color: "var(--sage)", fontWeight: 300 }}>
          sirve para decidir.
        </em>
      </motion.h1>

      <motion.p
        {...fadeUp(0.2)}
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "0.85rem",
          color: "var(--muted)",
          lineHeight: 1.75,
        }}
      >
        FP&A y BI, estrategia ESG y automatización de procesos para empresas que necesitan
        números claros y operaciones que funcionen. Análisis de datos, reportes de impacto
        y procesos que se ejecutan solos.
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
            key={badge.label}
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.65rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              padding: "0.3rem 0.7rem",
              border: badge.highlight ? "0.5px solid var(--sage)" : "0.5px solid var(--line)",
              backgroundColor: badge.highlight ? "rgba(143, 175, 138, 0.08)" : "transparent",
              color: badge.highlight ? "var(--sage)" : "var(--muted)",
              borderRadius: "2px",
            }}
          >
            {badge.label}
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
            fontFamily: "var(--font-dm-mono), monospace",
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
          Ver casos →
        </a>
        <a
          href="/contacto"
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            padding: "0.8rem 1.5rem",
            color: "var(--primary)",
            borderRadius: "2px",
            border: "0.5px solid var(--line)",
          }}
        >
          Contacto
        </a>
      </motion.div>
    </section>
  );
}
