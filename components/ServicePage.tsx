"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

interface ServicePageProps {
  kicker: string;
  title: string;
  intro: string;
  incluye: string[];
  paraQuienEs: string[];
}

export default function ServicePage({ kicker, title, intro, incluye, paraQuienEs }: ServicePageProps) {
  return (
    <>
      <Nav />
      <main className="site-wrapper">
        <div style={{ paddingTop: "5rem", paddingBottom: "3rem", maxWidth: "62ch" }}>
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.14em",
              color: "var(--sage)",
              marginBottom: "1rem",
            }}
          >
            {kicker}
          </p>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              color: "var(--primary)",
              marginBottom: "1.5rem",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.85rem",
              lineHeight: 1.8,
              color: "var(--muted)",
            }}
          >
            {intro}
          </p>
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
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--sage)",
                marginBottom: "1rem",
              }}
            >
              Qué incluye
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.9rem", listStyle: "none" }}>
              {incluye.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.82rem",
                    lineHeight: 1.7,
                    color: "var(--primary)",
                    paddingLeft: "1.2rem",
                    borderLeft: "0.5px solid var(--line)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--sage)",
                marginBottom: "1rem",
              }}
            >
              Para quién es
            </p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.9rem", listStyle: "none" }}>
              {paraQuienEs.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.82rem",
                    lineHeight: 1.7,
                    color: "var(--muted)",
                    paddingLeft: "1.2rem",
                    borderLeft: "0.5px solid var(--line)",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ padding: "3rem 0 4rem", textAlign: "center" }}>
          <a
            href="/contacto"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "0.85rem 1.8rem",
              backgroundColor: "var(--sage)",
              color: "var(--bg)",
              borderRadius: "2px",
              border: "0.5px solid var(--sage)",
            }}
          >
            Hablemos →
          </a>
        </div>

        <Footer />
      </main>

      <style jsx>{`
        @media (max-width: 768px) {
          .service-detail-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
