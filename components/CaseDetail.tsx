"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/cases";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
});

const storyBlocks: { key: keyof CaseStudy; number: string; label: string }[] = [
  { key: "context", number: "01", label: "Contexto" },
  { key: "problem", number: "02", label: "Problema" },
  { key: "solution", number: "03", label: "Solución" },
  { key: "results", number: "04", label: "Resultados" },
  { key: "learning", number: "05", label: "Aprendizaje" },
];

export default function CaseDetail({ caseData }: { caseData: CaseStudy }) {
  return (
    <section style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
      {/* Back link */}
      <motion.a
        {...fadeUp(0)}
        href="/casos"
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "0.68rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--warm-gray)",
          display: "inline-block",
          marginBottom: "2rem",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLAnchorElement).style.color = "var(--warm-gray)")
        }
      >
        ← Todos los casos
      </motion.a>

      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
        {/* Eje badge */}
        <motion.span
          {...fadeUp(0.05)}
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.6rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            padding: "0.25rem 0.6rem",
            border: "0.5px solid var(--forest)",
            backgroundColor: "rgba(26, 58, 42, 0.06)",
            color: "var(--forest)",
            borderRadius: "2px",
            display: "inline-block",
            marginBottom: "1rem",
          }}
        >
          {caseData.ejeLabel}
        </motion.span>

        <motion.p
          {...fadeUp(0.1)}
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.68rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--forest-mid)",
            marginBottom: "0.75rem",
          }}
        >
          {caseData.companyType} · {caseData.period}
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            color: "var(--ink)",
            marginBottom: "1rem",
            maxWidth: "36ch",
          }}
        >
          {caseData.title}
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: "1.15rem",
            color: "var(--forest)",
            lineHeight: 1.5,
            maxWidth: "48ch",
          }}
        >
          {caseData.subtitle}
        </motion.p>
      </div>

      {/* Metrics bar */}
      <motion.div
        {...fadeUp(0.25)}
        style={{
          display: "flex",
          gap: "3rem",
          padding: "1.5rem 2rem",
          border: "0.5px solid var(--border-thin)",
          borderRadius: "2px",
          marginBottom: "3rem",
          backgroundColor: "rgba(26, 58, 42, 0.03)",
        }}
        className="metrics-bar"
      >
        {caseData.metrics.map((metric) => (
          <div key={metric.label}>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "2rem",
                fontWeight: 300,
                color: "var(--forest)",
                lineHeight: 1,
                marginBottom: "0.3rem",
              }}
            >
              {metric.value}
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.62rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--warm-gray)",
              }}
            >
              {metric.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Story blocks */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "0",
        }}
        className="story-grid"
      >
        {storyBlocks.map((block, i) => (
          <motion.div
            key={block.key}
            {...fadeUp(0.3 + i * 0.08)}
            style={{
              display: "contents",
            }}
          >
            {/* Left: label */}
            <div
              style={{
                borderTop: "0.5px solid var(--border-thin)",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                paddingRight: "2rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.6rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "var(--forest-mid)",
                  marginBottom: "0.4rem",
                }}
              >
                {block.number}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.3rem",
                  fontWeight: 400,
                  color: "var(--ink)",
                  fontStyle: "italic",
                }}
              >
                {block.label}
              </h3>
            </div>

            {/* Right: content */}
            <div
              style={{
                borderTop: "0.5px solid var(--border-thin)",
                paddingTop: "1.5rem",
                paddingBottom: "1.5rem",
                paddingLeft: "2rem",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.82rem",
                  color: block.key === "solution" ? "var(--ink)" : "var(--warm-gray)",
                  lineHeight: 1.85,
                  fontWeight: block.key === "solution" ? 400 : 300,
                }}
              >
                {caseData[block.key] as string}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tags */}
      <motion.div
        {...fadeUp(0.7)}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem",
          marginTop: "2.5rem",
          paddingTop: "1.5rem",
          borderTop: "0.5px solid var(--border-thin)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.62rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--warm-gray)",
            marginRight: "0.5rem",
            alignSelf: "center",
          }}
        >
          Tags:
        </span>
        {caseData.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.06em",
              padding: "0.25rem 0.6rem",
              border: "0.5px solid var(--border-thin)",
              color: "var(--warm-gray)",
              borderRadius: "2px",
            }}
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        {...fadeUp(0.75)}
        style={{
          marginTop: "4rem",
          padding: "2.5rem",
          border: "0.5px solid var(--border-thin)",
          borderRadius: "2px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
        }}
        className="case-cta"
      >
        <div>
          <h3
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.6rem",
              fontWeight: 300,
              color: "var(--ink)",
              marginBottom: "0.4rem",
            }}
          >
            ¿Tenés un desafío similar?
          </h3>
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.76rem",
              color: "var(--warm-gray)",
            }}
          >
            Contame tu situación y vemos cómo puedo ayudarte.
          </p>
        </div>
        <a
          href="/#contacto"
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            padding: "0.75rem 1.4rem",
            backgroundColor: "var(--forest)",
            color: "var(--off-white)",
            borderRadius: "2px",
            border: "0.5px solid var(--forest)",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "var(--ink)";
            el.style.borderColor = "var(--ink)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "var(--forest)";
            el.style.borderColor = "var(--forest)";
          }}
        >
          Hablemos →
        </a>
      </motion.div>

      <style jsx>{`
        @media (max-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr !important;
          }
          .metrics-bar {
            flex-direction: column !important;
            gap: 1.5rem !important;
          }
          .case-cta {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
