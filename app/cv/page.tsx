"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { useLanguage, common } from "@/lib/language";
import { cvIntro, skillGroups, education } from "@/data/experience";

const copy = {
  kicker: { es: "CV", en: "Résumé" },
  title: { es: "Camila Paganelli", en: "Camila Paganelli" },
  experiencia: { es: "Experiencia", en: "Experience" },
  competencias: { es: "Competencias", en: "Skills" },
  educacion: { es: "Educación", en: "Education" },
  ctaTitle: { es: "¿Tenés un desafío similar?", en: "Have a similar challenge?" },
  ctaText: {
    es: "Contame tu situación y vemos cómo puedo ayudarte.",
    en: "Tell me about your situation and let's see how I can help.",
  },
};

export default function CVPage() {
  const { lang } = useLanguage();

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
              color: "var(--sage)",
              marginBottom: "1rem",
            }}
          >
            {copy.kicker[lang]}
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
            {copy.title[lang]}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.85rem",
              lineHeight: 1.85,
              color: "var(--muted)",
            }}
          >
            {cvIntro[lang]}
          </p>
        </div>

        <div style={{ paddingBottom: "4.5rem" }}>
          <p
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--sage)",
              marginBottom: "1.5rem",
            }}
          >
            {copy.experiencia[lang]}
          </p>
          <ExperienceTimeline />
        </div>

        <div
          style={{
            paddingTop: "3rem",
            paddingBottom: "3rem",
            borderTop: "0.5px solid var(--line)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--sage)",
              marginBottom: "2rem",
            }}
          >
            {copy.competencias[lang]}
          </p>
          <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2.5rem" }}>
            {skillGroups.map((group) => (
              <div key={group.title.es}>
                <h3
                  style={{
                    fontFamily: "var(--font-sans-ui), sans-serif",
                    fontWeight: 600,
                    fontSize: "0.88rem",
                    color: "var(--primary)",
                    marginBottom: "0.8rem",
                  }}
                >
                  {group.title[lang]}
                </h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", listStyle: "none" }}>
                  {group.items.map((item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: "var(--font-sans-ui), monospace",
                        fontSize: "0.78rem",
                        lineHeight: 1.6,
                        color: "var(--muted)",
                      }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            paddingTop: "3rem",
            paddingBottom: "4rem",
            borderTop: "0.5px solid var(--line)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--sage)",
              marginBottom: "1.5rem",
            }}
          >
            {copy.educacion[lang]}
          </p>
          <ul style={{ display: "flex", flexDirection: "column", gap: "0.7rem", listStyle: "none" }}>
            {education.map((item) => (
              <li
                key={item.title}
                style={{
                  fontFamily: "var(--font-sans-ui), monospace",
                  fontSize: "0.8rem",
                  lineHeight: 1.6,
                  color: "var(--primary)",
                }}
              >
                {item.title} <span style={{ color: "var(--muted)" }}>· {item.institution}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          style={{
            marginBottom: "4rem",
            padding: "2.5rem",
            border: "0.5px solid var(--line)",
            borderRadius: "2px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
          }}
          className="cv-cta"
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-serif-display), serif",
                fontSize: "1.6rem",
                fontWeight: 400,
                color: "var(--primary)",
                marginBottom: "0.4rem",
              }}
            >
              {copy.ctaTitle[lang]}
            </h3>
            <p style={{ fontFamily: "var(--font-sans-ui), monospace", fontSize: "0.76rem", color: "var(--muted)" }}>
              {copy.ctaText[lang]}
            </p>
          </div>
          <a
            href="/contacto"
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "0.8rem 1.5rem",
              backgroundColor: "var(--sage)",
              color: "var(--bg)",
              borderRadius: "2px",
              border: "0.5px solid var(--sage)",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            {common.hablemos[lang]}
          </a>
        </div>

        <Footer />
      </main>

      <style jsx>{`
        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          .cv-cta {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </>
  );
}
