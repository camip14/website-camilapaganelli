"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const solutions = [
  {
    problem:
      "Necesito liderazgo de producto senior, pero no el costo de una contratación permanente.",
    solution:
      "Rol fractional con ownership real. Me integro al equipo con dedicación definida, tomo decisiones y avanzo el roadmap.",
    tag: "Fractional",
  },
  {
    problem:
      "Tenemos procesos manuales que frenan el negocio y el equipo no tiene tiempo de resolverlos.",
    solution:
      "Diagnóstico, priorización e implementación. Desde chatbots hasta automatización de flujos internos, con foco en impacto medible.",
    tag: "AI & Automatización",
  },
  {
    problem:
      "Queremos que la sustentabilidad sea parte de nuestra propuesta de valor, no solo de un reporte.",
    solution:
      "Diagnóstico de impacto, definición de indicadores y hoja de ruta hacia certificación o reporte externo.",
    tag: "Negocio Sostenible",
  },
  {
    problem:
      "Tengo un problema de producto concreto que necesita resolución, no una consultoría indefinida.",
    solution:
      "Proyecto acotado con scope claro, entregables definidos y timeline realista. Sin retainers innecesarios.",
    tag: "Proyecto acotado",
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="soluciones"
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        borderTop: "0.5px solid var(--border-thin)",
      }}
    >
      {/* Divider label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.2rem",
          marginBottom: "2.5rem",
        }}
      >
        <div style={{ flex: 1, height: "0.5px", backgroundColor: "var(--border-thin)" }} />
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.65rem",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "var(--warm-gray)",
            whiteSpace: "nowrap",
          }}
        >
          ¿Reconocés alguno de estos problemas?
        </span>
        <div style={{ flex: 1, height: "0.5px", backgroundColor: "var(--border-thin)" }} />
      </div>

      <motion.div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1px",
          backgroundColor: "var(--border-thin)",
          border: "0.5px solid var(--border-thin)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
        className="solutions-grid"
      >
        {solutions.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            style={{
              backgroundColor: "var(--off-white)",
              padding: "2rem 1.8rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = "#eceae4";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = "var(--off-white)";
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.6rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--forest-mid)",
              }}
            >
              {item.tag}
            </span>

            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1.15rem",
                fontWeight: 400,
                color: "var(--ink)",
                lineHeight: 1.35,
              }}
            >
              "{item.problem}"
            </p>

            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.73rem",
                color: "var(--warm-gray)",
                lineHeight: 1.75,
              }}
            >
              {item.solution}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .solutions-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
