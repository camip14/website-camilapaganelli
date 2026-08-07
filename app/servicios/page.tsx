"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage, common } from "@/lib/language";
import { services } from "@/data/services";

const copy = {
  kicker: { es: "Servicios", en: "Services" },
  title: { es: "En qué te puedo ayudar", en: "What I can help with" },
  intro: {
    es: "Cinco líneas de trabajo, un mismo método: entender el problema antes de proponer una herramienta.",
    en: "Five lines of work, one method: understand the problem before proposing a tool.",
  },
};

export default function ServiciosPage() {
  const { lang } = useLanguage();

  return (
    <>
      <Nav />
      <main className="site-wrapper">
        <section style={{ paddingTop: "4rem", paddingBottom: "5rem" }}>
          <div style={{ marginBottom: "3rem", maxWidth: "60ch" }}>
            <p
              style={{
                fontFamily: "var(--font-sans-ui), monospace",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--sage)",
                marginBottom: "0.75rem",
              }}
            >
              {copy.kicker[lang]}
            </p>
            <h1
              style={{
                fontFamily: "var(--font-serif-display), serif",
                fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--primary)",
                marginBottom: "1rem",
              }}
            >
              {copy.title[lang]}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-sans-ui), monospace",
                fontSize: "0.82rem",
                color: "var(--muted)",
                lineHeight: 1.7,
              }}
            >
              {copy.intro[lang]}
            </p>
          </div>

          <div
            className="servicios-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
          >
            {services.map((service) => {
              const accent = service.accent === "amber" ? "var(--amber)" : "var(--sage)";
              const accentTint = service.accent === "amber" ? "var(--amber-tint)" : "var(--sage-tint)";
              return (
                <a
                  key={service.slug}
                  href={`/servicios/${service.slug}`}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    padding: "1.75rem",
                    border: `0.5px solid ${service.accent === "amber" ? accent : "var(--line)"}`,
                    backgroundColor: service.accent === "amber" ? accentTint : "transparent",
                    borderRadius: "2px",
                    textDecoration: "none",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-serif-display), serif",
                      fontSize: "1.5rem",
                      fontWeight: 400,
                      color: "var(--primary)",
                    }}
                  >
                    {service.label[lang]}
                  </h2>
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
                </a>
              );
            })}
          </div>
        </section>

        <Footer />
      </main>

      <style jsx>{`
        @media (max-width: 900px) {
          .servicios-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
