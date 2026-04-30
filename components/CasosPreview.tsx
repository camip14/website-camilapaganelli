"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cases } from "@/data/cases";

export default function CasosPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="casos-preview"
      style={{
        paddingTop: "3rem",
        paddingBottom: "3rem",
        borderTop: "0.5px solid var(--border-thin)",
      }}
    >
      {/* Divider label */}
      <div className="section-divider">
        <span>Casos de éxito</span>
      </div>

      {/* Grid */}
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
        className="casos-preview-grid"
      >
        {cases.map((caseItem, i) => (
          <motion.a
            key={caseItem.slug}
            href={`/casos/${caseItem.slug}`}
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
              textDecoration: "none",
              color: "inherit",
              transition: "background-color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#eceae4";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "var(--off-white)";
            }}
          >
            {/* Eje badge */}
            <span
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.58rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "0.2rem 0.5rem",
                border: "0.5px solid var(--forest)",
                backgroundColor: "rgba(26, 58, 42, 0.06)",
                color: "var(--forest)",
                borderRadius: "2px",
                alignSelf: "flex-start",
                marginBottom: "0.8rem",
              }}
            >
              {caseItem.ejeLabel}
            </span>

            {/* Empresa + período */}
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.62rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--forest-mid)",
                marginBottom: "0.6rem",
              }}
            >
              {caseItem.companyType} · {caseItem.period}
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
              {caseItem.title}
            </h3>

            {/* Descripción breve */}
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
              {caseItem.description}
            </p>

            {/* Métricas */}
            <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
              {caseItem.metrics.map((metric) => (
                <div key={metric.label} style={{ minWidth: "80px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "1.5rem",
                      fontWeight: 300,
                      color: "var(--forest)",
                      lineHeight: 1,
                      marginBottom: "0.2rem",
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
          </motion.a>
        ))}
      </motion.div>

      {/* CTA to full cases page */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <a
          href="/casos"
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            padding: "0.65rem 1.4rem",
            border: "0.5px solid var(--forest)",
            color: "var(--forest)",
            borderRadius: "2px",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "var(--forest)";
            el.style.color = "var(--off-white)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "transparent";
            el.style.color = "var(--forest)";
          }}
        >
          Ver todos los casos →
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .casos-preview-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
