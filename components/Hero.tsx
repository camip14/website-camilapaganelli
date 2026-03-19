"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const badges = [
  { label: "Crédito retail", highlight: true },
  { label: "AI & Automatización", highlight: true },
  { label: "Sustentabilidad", highlight: true },
  { label: "Fractional · Proyectos", highlight: false },
  { label: "EN / ES", highlight: false },
];

export default function Hero() {
  return (
    <section
      style={{
        paddingTop: "5rem",
        paddingBottom: "5rem",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "end",
        }}
        className="hero-grid"
      >
        {/* Columna izquierda */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <motion.p
            {...fadeUp(0)}
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--forest-mid)",
            }}
          >
            Consultora independiente · Buenos Aires
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(3.2rem, 6vw, 5.2rem)",
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              color: "var(--ink)",
            }}
          >
            Lo técnico, lo humano
            <br />y lo{" "}
            <em
              style={{
                fontStyle: "italic",
                color: "var(--forest)",
                fontWeight: 300,
              }}
            >
              sostenible.
            </em>
          </motion.h1>

          <motion.p
            {...fadeUp(0.2)}
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.82rem",
              color: "var(--warm-gray)",
              lineHeight: 1.7,
              maxWidth: "38ch",
            }}
          >
            Diseño productos y procesos que funcionan para el negocio,
            para el usuario y para el mundo.
          </motion.p>
        </div>

        {/* Columna derecha */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <motion.blockquote
            {...fadeUp(0.25)}
            style={{
              borderLeft: "2px solid var(--forest)",
              paddingLeft: "1.5rem",
              fontFamily: "var(--font-cormorant), serif",
              fontStyle: "italic",
              fontSize: "1.05rem",
              lineHeight: 1.65,
              color: "var(--ink)",
              fontWeight: 400,
            }}
          >
            "Trabajo en la intersección de lo que la tecnología puede
            hacer, lo que el negocio necesita y lo que vale la pena
            construir."
          </motion.blockquote>

          <motion.div
            {...fadeUp(0.35)}
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
                  border: badge.highlight
                    ? "0.5px solid var(--forest)"
                    : "0.5px solid var(--border-thin)",
                  backgroundColor: badge.highlight
                    ? "rgba(26, 58, 42, 0.06)"
                    : "transparent",
                  color: badge.highlight ? "var(--forest)" : "var(--warm-gray)",
                  borderRadius: "2px",
                }}
              >
                {badge.label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            align-items: start !important;
          }
        }
      `}</style>
    </section>
  );
}
