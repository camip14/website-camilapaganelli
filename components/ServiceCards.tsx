"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage, common } from "@/lib/language";
import { services } from "@/data/services";

const sectionCopy = {
  kicker: { es: "Servicios", en: "Services" },
  title: { es: "En qué te puedo ayudar", en: "What I can help with" },
};

export default function ServiceCards() {
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
        className="service-cards-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "2rem",
        }}
      >
        {services.map((service, i) => {
          const accent = service.accent === "amber" ? "var(--amber)" : "var(--sage)";
          return (
            <motion.a
              key={service.slug}
              href={`/servicios/${service.slug}`}
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
                  fontFamily: "var(--font-serif-display), serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: "var(--primary)",
                }}
              >
                {service.label[lang]}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-sans-ui), monospace",
                  fontSize: "0.78rem",
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                {service.description[lang]}
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.45rem", listStyle: "none" }}>
                {service.incluye.slice(0, 3).map((item) => (
                  <li
                    key={item.es}
                    style={{
                      fontFamily: "var(--font-sans-ui), monospace",
                      fontSize: "0.72rem",
                      lineHeight: 1.6,
                      color: "var(--primary)",
                      paddingLeft: "0.9rem",
                      borderLeft: `0.5px solid ${accent}`,
                    }}
                  >
                    {item[lang]}
                  </li>
                ))}
              </ul>
              <span
                style={{
                  fontFamily: "var(--font-sans-ui), monospace",
                  fontSize: "0.68rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: accent,
                  marginTop: "auto",
                  paddingTop: "0.5rem",
                }}
              >
                {common.verMas[lang]}
              </span>
            </motion.a>
          );
        })}
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
