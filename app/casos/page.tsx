"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cases } from "@/data/cases";

export default function CasosPage() {
  return (
    <>
      <Nav />
      <main className="site-wrapper">
        <section style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--sage)",
                marginBottom: "0.75rem",
              }}
            >
              Casos de éxito
            </p>
            <h1
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--primary)",
                marginBottom: "1rem",
              }}
            >
              Resultados que hablan.
            </h1>
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.82rem",
                color: "var(--muted)",
                lineHeight: 1.7,
                maxWidth: "52ch",
              }}
            >
              Cada proyecto tiene un contexto, un problema concreto y una solución medible.
            </p>
          </div>

          <div
            className="casos-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {cases.map((caseItem, i) => (
              <motion.a
                key={caseItem.slug}
                href={`/casos/${caseItem.slug}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                style={{
                  border: "0.5px solid var(--line)",
                  borderRadius: "2px",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.58rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "0.2rem 0.5rem",
                    border: "0.5px solid var(--sage)",
                    backgroundColor: "rgba(143, 175, 138, 0.08)",
                    color: "var(--sage)",
                    borderRadius: "2px",
                    alignSelf: "flex-start",
                    marginBottom: "1rem",
                  }}
                >
                  {caseItem.ejeLabel}
                </span>

                <p
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.62rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--sage)",
                    marginBottom: "0.6rem",
                  }}
                >
                  {caseItem.companyType} · {caseItem.period}
                </p>

                <h2
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.4rem",
                    fontWeight: 400,
                    color: "var(--primary)",
                    lineHeight: 1.2,
                    marginBottom: "0.75rem",
                  }}
                >
                  {caseItem.title}
                </h2>

                <p
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.76rem",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                    flex: 1,
                  }}
                >
                  {caseItem.description}
                </p>

                <div style={{ display: "flex", gap: "1.5rem" }}>
                  {caseItem.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontSize: "1.6rem",
                          fontWeight: 300,
                          color: "var(--sage)",
                          lineHeight: 1,
                          marginBottom: "0.2rem",
                        }}
                      >
                        {metric.value}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-dm-mono), monospace",
                          fontSize: "0.58rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "var(--muted)",
                        }}
                      >
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </section>

        <Footer />
      </main>

      <style jsx>{`
        @media (max-width: 900px) {
          .casos-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
