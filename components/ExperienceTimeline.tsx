"use client";

import { useLanguage, common } from "@/lib/language";
import { experience } from "@/data/experience";

const sectionCopy = {
  kicker: { es: "Experiencia", en: "Experience" },
  title: { es: "Antes de ser consultora", en: "Before going independent" },
};

interface ExperienceTimelineProps {
  limit?: number;
  showLink?: boolean;
  heading?: boolean;
}

export default function ExperienceTimeline({ limit, showLink, heading }: ExperienceTimelineProps) {
  const { lang } = useLanguage();
  const entries = limit ? experience.slice(0, limit) : experience;

  const list = (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
      {entries.map((entry) => (
        <div
          key={`${entry.company}-${entry.role.es}`}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "2rem",
            paddingTop: "2rem",
            borderTop: "0.5px solid var(--line)",
          }}
          className="experience-row"
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-serif-display), serif",
                fontSize: "1.2rem",
                color: "var(--primary)",
                marginBottom: "0.3rem",
              }}
            >
              {entry.company}
            </p>
            <p
              style={{
                fontFamily: "var(--font-sans-ui), sans-serif",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--sage)",
              }}
            >
              {entry.period[lang]}
            </p>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-sans-ui), sans-serif",
                fontWeight: 600,
                fontSize: "0.92rem",
                color: "var(--primary)",
                marginBottom: "0.9rem",
              }}
            >
              {entry.role[lang]}
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.6rem", listStyle: "none" }}>
              {entry.bullets.map((bullet) => (
                <li
                  key={bullet.es}
                  style={{
                    fontFamily: "var(--font-sans-ui), sans-serif",
                    fontSize: "0.82rem",
                    lineHeight: 1.7,
                    color: "var(--muted)",
                  }}
                >
                  {bullet[lang]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      {showLink && (
        <a
          href="/cv"
          style={{
            fontFamily: "var(--font-sans-ui), sans-serif",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            color: "var(--sage)",
            alignSelf: "flex-start",
          }}
        >
          {common.verCvCompleto[lang]}
        </a>
      )}

      <style jsx>{`
        @media (max-width: 640px) {
          .experience-row {
            grid-template-columns: 1fr !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );

  if (!heading) return list;

  return (
    <section style={{ paddingTop: "4.5rem", paddingBottom: "4.5rem", borderTop: "0.5px solid var(--line)" }}>
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
        {sectionCopy.kicker[lang]}
      </p>
      <h2
        style={{
          fontFamily: "var(--font-serif-display), serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
          fontWeight: 400,
          color: "var(--primary)",
          marginBottom: "2.5rem",
        }}
      >
        {sectionCopy.title[lang]}
      </h2>
      {list}
    </section>
  );
}
