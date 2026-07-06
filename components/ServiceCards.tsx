"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  {
    label: "FP&A & BI",
    href: "/servicios/fp-a-bi",
    description:
      "Modelos financieros, forecasting y dashboards que convierten datos dispersos en decisiones. Power BI, Microsoft Fabric, Databricks.",
  },
  {
    label: "ESG",
    href: "/servicios/esg",
    description:
      "Diagnósticos y estrategia de sustentabilidad medibles, no checklists. De la certificación B al reporting de impacto.",
  },
  {
    label: "Automatización",
    href: "/servicios/automatizacion",
    description:
      "Procesos que se ejecutan solos. Make, N8N y Botmaker para operaciones que escalan sin sumar gente.",
  },
];

export default function ServiceCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        paddingTop: "3rem",
        paddingBottom: "5rem",
        borderTop: "0.5px solid var(--line)",
      }}
    >
      <div
        className="service-cards-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
        }}
      >
        {services.map((service, i) => (
          <motion.a
            key={service.href}
            href={service.href}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "1.75rem",
              border: "0.5px solid var(--line)",
              borderRadius: "2px",
              textDecoration: "none",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                color: "var(--primary)",
              }}
            >
              {service.label}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.78rem",
                lineHeight: 1.7,
                color: "var(--muted)",
              }}
            >
              {service.description}
            </p>
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--sage)",
                marginTop: "auto",
              }}
            >
              Ver más →
            </span>
          </motion.a>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .service-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
