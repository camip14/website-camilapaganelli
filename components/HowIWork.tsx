"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const items = [
  {
    title: "Roles fractional",
    type: "Liderazgo flexible",
    description:
      "Me integro al equipo con una dedicación definida. Ideal para organizaciones que necesitan liderazgo de producto sénior sin el costo de una posición full-time.",
    benefit: "El producto avanza. El equipo aprende.",
  },
  {
    title: "Proyectos acotados",
    type: "Entrega definida",
    description:
      "Diagnóstico, estrategia de producto, investigación de usuarios, lanzamientos. Scope claro, entregables concretos, timeline realista.",
    benefit: "Problema definido, solución entregada, resultado medible.",
  },
  {
    title: "Advisory continuo",
    type: "Sounding board",
    description:
      "Para equipos que necesitan un par estratégico con experiencia en productos digitales complejos. Revisión de roadmap, validación de decisiones, perspectiva externa.",
    benefit: "Perspectiva externa cuando el equipo está demasiado adentro.",
  },
];

export default function HowIWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="proceso"
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        borderTop: "0.5px solid var(--border-thin)",
      }}
    >
      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "4rem",
        }}
        className="how-grid"
      >
        {/* Columna izquierda sticky */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: "sticky",
            top: "2rem",
            alignSelf: "start",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "2rem",
              fontWeight: 300,
              color: "var(--ink)",
              lineHeight: 1.2,
            }}
          >
            Cómo trabajo
          </h2>
        </motion.div>

        {/* Columna derecha: ítems apilados */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1 + i * 0.1,
              }}
              style={{
                borderTop: "0.5px solid var(--border-thin)",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  marginBottom: "0.75rem",
                  gap: "1rem",
                }}
                className="how-item-header"
              >
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontStyle: "italic",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "var(--ink)",
                  }}
                >
                  {item.title}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.62rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--forest-mid)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.type}
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.76rem",
                  color: "var(--warm-gray)",
                  lineHeight: 1.75,
                  marginBottom: "0.75rem",
                }}
              >
                {item.description}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontStyle: "italic",
                  fontSize: "0.95rem",
                  color: "var(--forest)",
                  lineHeight: 1.5,
                }}
              >
                {item.benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .how-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .how-grid > div:first-child {
            position: static !important;
          }
          .how-item-header {
            flex-direction: column !important;
            gap: 0.25rem !important;
          }
        }
      `}</style>
    </section>
  );
}
