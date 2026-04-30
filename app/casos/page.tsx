"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { cases, ejes, type Eje } from "@/data/cases";

const ejeKeys: (Eje | "todos")[] = ["todos", "impacto-sostenible", "inteligencia-de-datos", "eficiencia-operativa"];

function CasosContent() {
  const searchParams = useSearchParams();
  const initialEje = (searchParams.get("eje") as Eje | null) || "todos";
  const [activeFilter, setActiveFilter] = useState<Eje | "todos">(initialEje);

  useEffect(() => {
    const eje = searchParams.get("eje") as Eje | null;
    if (eje && ejeKeys.includes(eje)) {
      setActiveFilter(eje);
    }
  }, [searchParams]);

  const filteredCases =
    activeFilter === "todos" ? cases : cases.filter((c) => c.eje === activeFilter);

  return (
    <>
      <main className="site-wrapper">
        <section style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
          {/* Header */}
          <div style={{ marginBottom: "3rem" }}>
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--forest-mid)",
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
                color: "var(--ink)",
                marginBottom: "1rem",
              }}
            >
              Resultados que hablan.
            </h1>
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.82rem",
                color: "var(--warm-gray)",
                lineHeight: 1.7,
                maxWidth: "52ch",
              }}
            >
              Cada proyecto tiene un contexto, un problema concreto y una solución medible.
              Filtrá por eje para encontrar los más relevantes.
            </p>
          </div>

          {/* Filters */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
            }}
          >
            {ejeKeys.map((key) => {
              const isActive = activeFilter === key;
              const label = key === "todos" ? "Todos" : ejes[key].label;
              return (
                <button
                  key={key}
                  onClick={() => setActiveFilter(key)}
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    padding: "0.45rem 1rem",
                    border: isActive
                      ? "0.5px solid var(--forest)"
                      : "0.5px solid var(--border-thin)",
                    backgroundColor: isActive
                      ? "var(--forest)"
                      : "transparent",
                    color: isActive ? "var(--off-white)" : "var(--warm-gray)",
                    borderRadius: "2px",
                    cursor: "pointer",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Cases grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1px",
              backgroundColor: "var(--border-thin)",
              border: "0.5px solid var(--border-thin)",
              borderRadius: "2px",
              overflow: "hidden",
            }}
            className="casos-grid"
          >
            {filteredCases.map((caseItem, i) => (
              <motion.a
                key={caseItem.slug}
                href={`/casos/${caseItem.slug}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
                style={{
                  backgroundColor: "var(--off-white)",
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
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
                    marginBottom: "1rem",
                  }}
                >
                  {caseItem.ejeLabel}
                </span>

                {/* Company info */}
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

                {/* Title */}
                <h2
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.5rem",
                    fontWeight: 400,
                    color: "var(--ink)",
                    lineHeight: 1.2,
                    marginBottom: "0.75rem",
                  }}
                >
                  {caseItem.title}
                </h2>

                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "var(--forest)",
                    lineHeight: 1.5,
                    marginBottom: "1rem",
                  }}
                >
                  {caseItem.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.76rem",
                    color: "var(--warm-gray)",
                    lineHeight: 1.7,
                    marginBottom: "1.5rem",
                    flex: 1,
                  }}
                >
                  {caseItem.description}
                </p>

                {/* Metrics */}
                <div style={{ display: "flex", gap: "2rem", marginBottom: "1.5rem" }}>
                  {caseItem.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p
                        style={{
                          fontFamily: "var(--font-cormorant), serif",
                          fontSize: "1.8rem",
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

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {caseItem.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-dm-mono), monospace",
                        fontSize: "0.58rem",
                        letterSpacing: "0.06em",
                        padding: "0.2rem 0.5rem",
                        border: "0.5px solid var(--border-thin)",
                        color: "var(--warm-gray)",
                        borderRadius: "2px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>

          {filteredCases.length === 0 && (
            <div
              style={{
                padding: "4rem 2rem",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-dm-mono), monospace",
                  fontSize: "0.82rem",
                  color: "var(--warm-gray)",
                }}
              >
                No hay casos en este eje todavía. Pronto.
              </p>
            </div>
          )}
        </section>

        <Footer />
      </main>

      <style jsx>{`
        @media (max-width: 768px) {
          .casos-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

export default function CasosPage() {
  return (
    <>
      <Nav />
      <Suspense fallback={null}>
        <CasosContent />
      </Suspense>
    </>
  );
}
