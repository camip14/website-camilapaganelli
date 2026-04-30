"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ejes, type Eje } from "@/data/cases";

const ejesData: { id: Eje; number: string; tags: string[] }[] = [
  {
    id: "impacto-sostenible",
    number: "01",
    tags: [
      "Estrategia de sustentabilidad",
      "Finanzas sostenibles",
      "Métricas e indicadores de impacto",
      "Certificación B y frameworks ESG",
    ],
  },
  {
    id: "inteligencia-de-datos",
    number: "02",
    tags: [
      "Análisis y visualización de datos",
      "Dashboards y reportes automatizados",
      "Data-driven decision making",
      "SQL, Power BI, Python",
    ],
  },
  {
    id: "eficiencia-operativa",
    number: "03",
    tags: [
      "Automatización de procesos",
      "Optimización de operaciones",
      "AI aplicada a flujos de trabajo",
      "Reducción de fricción operativa",
    ],
  },
];

export default function Ejes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="ejes" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      {/* Divider label */}
      <div className="section-divider">
        <span>Ejes de práctica</span>
      </div>

      {/* Grid */}
      <motion.div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          border: "0.5px solid var(--border-thin)",
          borderRadius: "2px",
        }}
        className="ejes-grid"
      >
        {ejesData.map((eje, i) => {
          const data = ejes[eje.id];
          return (
            <motion.a
              key={eje.id}
              href={`/casos?eje=${eje.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              style={{
                padding: "2rem 1.8rem",
                borderRight:
                  i < ejesData.length - 1 ? "0.5px solid var(--border-thin)" : "none",
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
                transition: "background-color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "rgba(26, 58, 42, 0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.62rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--forest-mid)",
                  marginBottom: "0.75rem",
                }}
              >
                {eje.number}
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.6rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.15,
                }}
              >
                {data.label}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.75rem",
                  color: "var(--warm-gray)",
                  lineHeight: 1.7,
                  marginBottom: "1.25rem",
                }}
              >
                {data.description}
              </p>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.35rem",
                  marginBottom: "1.5rem",
                  flex: 1,
                }}
              >
                {eje.tags.map((tag) => (
                  <li
                    key={tag}
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "0.65rem",
                      color: "var(--forest-mid)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    → {tag}
                  </li>
                ))}
              </ul>

              <span
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--forest)",
                }}
              >
                Ver casos →
              </span>
            </motion.a>
          );
        })}
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .ejes-grid {
            grid-template-columns: 1fr !important;
          }
          .ejes-grid > a {
            border-right: none !important;
            border-bottom: 0.5px solid var(--border-thin);
          }
          .ejes-grid > a:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
