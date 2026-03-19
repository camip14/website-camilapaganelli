"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const works = [
  {
    company: "Banco regional · Argentina",
    period: "Proyecto independiente",
    title: "Recuperación de cartera incobrable vía AI conversacional",
    description:
      "Desarrollé el árbol de decisiones, la integración con base de datos y la automatización completa de un chatbot de financiamiento. Seguimiento de métricas vía SQL y dashboards en Power BI.",
    metrics: [
      { value: "+120%", label: "Contactabilidad" },
      { value: "Récord", label: "Recuperación de incobrables" },
    ],
  },
  {
    company: "BBVA Argentina",
    period: "2022–2025",
    title: "Primer banco tradicional en ofrecer préstamos a no clientes",
    description:
      "Lideré el funnel de préstamo personal + apertura de caja de ahorro simultáneos para no clientes. Múltiples productos de contratación aplicando Behavioral Economics para reducir fricciones y mejorar conversión.",
    metrics: [
      { value: "+8,44%", label: "Contratación de tarjetas" },
      { value: "+19,23%", label: "Activación inclusión financiera" },
    ],
  },
  {
    company: "PYME",
    period: "Proyecto independiente",
    title: "Diagnóstico de sustentabilidad para certificación B",
    description:
      "Acompañé a una empresa en el proceso de medición y evaluación de sus métricas de impacto como paso previo a la certificación como Empresa B. Relevé brechas, definí indicadores y construí el mapa de situación inicial.",
    metrics: [
      { value: "Completo", label: "Diagnóstico ambiental y social" },
      { value: "Trazada", label: "Hoja de ruta hacia certificación B" },
    ],
  },
];

export default function SelectedWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="trabajo"
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
          Trabajo seleccionado
        </span>
        <div
          style={{
            flex: 1,
            height: "0.5px",
            backgroundColor: "var(--border-thin)",
          }}
        />
      </div>

      {/* Grid separado por 1px usando background trick */}
      <motion.div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "1px",
          backgroundColor: "var(--border-thin)",
          border: "0.5px solid var(--border-thin)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
        className="work-grid"
      >
        {works.map((work, i) => (
          <motion.div
            key={work.title}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: i * 0.12,
            }}
            style={{
              backgroundColor: "var(--off-white)",
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor = "#eceae4";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.backgroundColor =
                "var(--off-white)";
            }}
          >
            {/* Empresa + período */}
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.62rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--forest-mid)",
                marginBottom: "0.6rem",
                minHeight: "2.5rem",
              }}
            >
              {work.company} · {work.period}
            </p>

            {/* Título */}
            <h3
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1.25rem",
                fontWeight: 400,
                color: "var(--ink)",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              {work.title}
            </h3>

            {/* Descripción */}
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.73rem",
                color: "var(--warm-gray)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
                flex: 1,
              }}
            >
              {work.description}
            </p>

            {/* Métricas */}
            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
              {work.metrics.map((metric) => (
                <div key={metric.label} style={{ minWidth: "80px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.5rem",
                      fontWeight: 300,
                      color: "var(--forest)",
                      lineHeight: 1,
                      marginBottom: "0.2rem",
                      minHeight: "2rem",
                    }}
                  >
                    {metric.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-mono), monospace",
                      fontSize: "0.6rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--warm-gray)",
                    }}
                  >
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .work-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
