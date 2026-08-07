"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useLanguage, common } from "@/lib/language";
import { getServiceBySlug, type ServiceContent } from "@/data/services";

const sectionCopy = {
  kicker: { es: "Servicio", en: "Service" },
  incluye: { es: "Qué incluye", en: "What's included" },
  paraQuienEs: { es: "Para quién es", en: "Who it's for" },
  metodo: { es: "Cómo trabajo", en: "How I work" },
};

const method = [
  {
    number: "01",
    title: { es: "Diagnóstico", en: "Diagnosis" },
    description: {
      es: "Entiendo el problema real antes de proponer nada. Sin eso, cualquier solución es genérica.",
      en: "I understand the real problem before proposing anything. Without that, any solution is generic.",
    },
  },
  {
    number: "02",
    title: { es: "Diseño", en: "Design" },
    description: {
      es: "Construyo la solución específica para tu contexto, no una plantilla adaptada a último momento.",
      en: "I build the solution specific to your context, not a template adapted at the last minute.",
    },
  },
  {
    number: "03",
    title: { es: "Implementación", en: "Implementation" },
    description: {
      es: "Dejo el proceso, el dashboard o la automatización funcionando sin que dependa de mí.",
      en: "I leave the process, dashboard, or automation running without depending on me.",
    },
  },
];

export default function ServicePage({ slug }: { slug: ServiceContent["slug"] }) {
  const { lang } = useLanguage();
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const accent = service.accent === "amber" ? "var(--amber)" : "var(--sage)";
  const accentTint = service.accent === "amber" ? "var(--amber-tint)" : "var(--sage-tint)";

  return (
    <>
      <Nav />
      <main className="site-wrapper">
        <div style={{ paddingTop: "5rem", paddingBottom: "3rem", maxWidth: "62ch" }}>
          <p
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: accent,
              marginBottom: "1rem",
            }}
          >
            {sectionCopy.kicker[lang]}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif-display), serif",
              fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--primary)",
              marginBottom: "1.5rem",
            }}
          >
            {service.label[lang]}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.85rem",
              lineHeight: 1.8,
              color: "var(--muted)",
            }}
          >
            {service.intro[lang]}
          </p>

          {service.note && (
            <p
              style={{
                fontFamily: "var(--font-sans-ui), monospace",
                fontSize: "0.8rem",
                lineHeight: 1.75,
                color: "var(--primary)",
                marginTop: "1.5rem",
                padding: "1.25rem 1.5rem",
                border: `0.5px solid ${accent}`,
                backgroundColor: accentTint,
                borderRadius: "2px",
              }}
            >
              {service.note[lang]}
            </p>
          )}
        </div>

        <div
          className="service-detail-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            paddingBottom: "4rem",
            borderBottom: "0.5px solid var(--line)",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans-ui), monospace",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: accent,
                marginBottom: "1rem",
              }}
            >
              {sectionCopy.incluye[lang]}
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.9rem", listStyle: "none" }}>
              {service.incluye.map((item) => (
                <li
                  key={item.es}
                  style={{
                    fontFamily: "var(--font-sans-ui), monospace",
                    fontSize: "0.82rem",
                    lineHeight: 1.7,
                    color: "var(--primary)",
                    paddingLeft: "1.2rem",
                    borderLeft: "0.5px solid var(--line)",
                  }}
                >
                  {item[lang]}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-sans-ui), monospace",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: accent,
                marginBottom: "1rem",
              }}
            >
              {sectionCopy.paraQuienEs[lang]}
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.9rem", listStyle: "none" }}>
              {service.paraQuienEs.map((item) => (
                <li
                  key={item.es}
                  style={{
                    fontFamily: "var(--font-sans-ui), monospace",
                    fontSize: "0.82rem",
                    lineHeight: 1.7,
                    color: "var(--muted)",
                    paddingLeft: "1.2rem",
                    borderLeft: "0.5px solid var(--line)",
                  }}
                >
                  {item[lang]}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: accent,
              marginBottom: "2rem",
            }}
          >
            {sectionCopy.metodo[lang]}
          </p>
          <div className="method-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2rem" }}>
            {method.map((step) => (
              <div key={step.number}>
                <p
                  style={{
                    fontFamily: "var(--font-serif-display), serif",
                    fontSize: "1.6rem",
                    color: accent,
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.number}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-sans-ui), sans-serif",
                    fontWeight: 600,
                    fontSize: "0.92rem",
                    color: "var(--primary)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {step.title[lang]}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans-ui), monospace",
                    fontSize: "0.78rem",
                    lineHeight: 1.7,
                    color: "var(--muted)",
                  }}
                >
                  {step.description[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ padding: "3rem 0 4rem", textAlign: "center" }}>
          <a
            href="/contacto"
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "0.85rem 1.8rem",
              backgroundColor: accent,
              color: "var(--bg)",
              borderRadius: "2px",
              border: `0.5px solid ${accent}`,
            }}
          >
            {common.hablemos[lang]}
          </a>
        </div>

        <Footer />
      </main>

      <style jsx>{`
        @media (max-width: 768px) {
          .service-detail-grid,
          .method-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
