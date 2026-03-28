"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const areas = [
  {
    number: "01",
    title: "Producto & Estrategia",
    description:
      "Defino qué construir y por qué. Trabajo con equipos que necesitan claridad antes de ejecutar.",
    tags: [
      "Estrategia de producto",
      "Diagnóstico y rediseño",
      "Productos con lógica compleja",
      "Flujos de usuario de punta a punta",
    ],
    cta: "/#soluciones",
  },
  {
    number: "02",
    title: "AI & Automatización",
    description:
      "Diseño e implemento con foco en impacto operativo medible. Desde procesos manuales hasta productos con capa de inteligencia.",
    tags: [
      "Automatización de procesos",
      "Agentes conversacionales",
      "Integración de AI en productos existentes",
      "De cero a implementado",
    ],
    cta: "/#soluciones",
  },
  {
    number: "03",
    title: "Negocio Sostenible",
    description:
      "Para organizaciones que quieren que su impacto ambiental sea parte de su propuesta de valor, no un ítem de compliance.",
    tags: [
      "Sustentabilidad como ventaja competitiva",
      "Métricas e indicadores de impacto",
      "Transformación de procesos operativos",
      "Industrias con huella compleja",
    ],
    cta: "/#soluciones",
  },
];

export default function Areas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="areas" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      {/* Divider label */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1.2rem",
          marginBottom: "2.5rem",
        }}
      >
        <div
          style={{
            flex: 1,
            height: "0.5px",
            backgroundColor: "var(--border-thin)",
          }}
        />
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
          Áreas de práctica
        </span>
        <div
          style={{
            flex: 1,
            height: "0.5px",
            backgroundColor: "var(--border-thin)",
          }}
        />
      </div>

      {/* Grid con borde único rectangular */}
      <motion.div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          border: "0.5px solid var(--border-thin)",
          borderRadius: "2px",
        }}
        className="areas-grid"
      >
        {areas.map((area, i) => (
          <motion.div
            key={area.number}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
            style={{
              padding: "2rem 1.8rem",
              borderRight:
                i < areas.length - 1 ? "0.5px solid var(--border-thin)" : "none",
              transition: "background-color 0.2s ease",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor =
                "rgba(26, 58, 42, 0.04)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = "transparent";
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
              {area.number}
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
              {area.title}
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
              {area.description}
            </p>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem", marginBottom: "1.5rem" }}>
              {area.tags.map((tag) => (
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

            <a
              href={area.cta}
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.62rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--forest-mid)",
                alignSelf: "flex-start",
                marginTop: "auto",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--forest-mid)")
              }
            >
              Explorar área →
            </a>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .areas-grid {
            grid-template-columns: 1fr !important;
          }
          .areas-grid > div {
            border-right: none !important;
            border-bottom: 0.5px solid var(--border-thin);
          }
          .areas-grid > div:last-child {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
