"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage, common } from "@/lib/language";
import { cases, ejeLabel } from "@/data/cases";

const sectionCopy = {
  kicker: { es: "Casos de éxito", en: "Case studies" },
  title: { es: "Resultados que hablan", en: "Results that speak for themselves" },
};

export default function CasosPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { lang } = useLanguage();

  return (
    <section
      ref={ref}
      style={{
        paddingTop: "3rem",
        paddingBottom: "5rem",
        borderTop: "0.5px solid var(--line)",
      }}
    >
      <div style={{ marginBottom: "2.5rem" }}>
        <p
          style={{
            fontFamily: "var(--font-sans-ui), monospace",
            fontSize: "0.68rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--sage)",
            marginBottom: "0.6rem",
          }}
        >
          {sectionCopy.kicker[lang]}
        </p>
        <h2
          style={{
            fontFamily: "var(--font-serif-display), serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
            fontWeight: 400,
            color: "var(--primary)",
          }}
        >
          {sectionCopy.title[lang]}
        </h2>
      </div>

      <div
        className="casos-preview-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          marginBottom: "2.5rem",
        }}
      >
        {cases.map((caseItem, i) => (
          <motion.a
            key={caseItem.slug}
            href={`/casos/${caseItem.slug}`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            style={{
              border: "0.5px solid var(--line)",
              borderRadius: "2px",
              padding: "1.75rem",
              display: "flex",
              flexDirection: "column",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans-ui), monospace",
                fontSize: "0.58rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "0.2rem 0.5rem",
                border: "0.5px solid var(--sage)",
                backgroundColor: "var(--sage-tint)",
                color: "var(--sage)",
                borderRadius: "2px",
                alignSelf: "flex-start",
                marginBottom: "1rem",
              }}
            >
              {ejeLabel(caseItem.eje, lang)}
            </span>

            <h3
              style={{
                fontFamily: "var(--font-serif-display), serif",
                fontSize: "1.3rem",
                fontWeight: 400,
                color: "var(--primary)",
                lineHeight: 1.25,
                marginBottom: "0.6rem",
              }}
            >
              {caseItem.title[lang]}
            </h3>

            <p
              style={{
                fontFamily: "var(--font-sans-ui), monospace",
                fontSize: "0.76rem",
                color: "var(--muted)",
                lineHeight: 1.65,
                marginBottom: "1.25rem",
                flex: 1,
              }}
            >
              {caseItem.description[lang]}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {caseItem.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag.es}
                  style={{
                    fontFamily: "var(--font-sans-ui), monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.06em",
                    padding: "0.2rem 0.5rem",
                    border: "0.5px solid var(--line)",
                    color: "var(--muted)",
                    borderRadius: "2px",
                  }}
                >
                  {tag[lang]}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <a
        href="/casos"
        style={{
          fontFamily: "var(--font-sans-ui), monospace",
          fontSize: "0.72rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--sage)",
        }}
      >
        {common.verCasos[lang]}
      </a>

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
