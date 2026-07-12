"use client";

import { useLanguage } from "@/lib/language";

const copy = {
  sobreMi: { es: "Sobre mí", en: "About" },
  soporteContable: { es: "Soporte contable →", en: "Accounting support →" },
  tagline: { es: "FP&A & BI · ESG · Automatización · Argentina", en: "FP&A & BI · ESG · Automation · Argentina" },
};

export default function Footer() {
  const { lang } = useLanguage();
  return (
    <footer
      style={{
        borderTop: "0.5px solid var(--line)",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
        className="footer-inner"
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }} className="footer-left">
          <p
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "var(--muted)",
            }}
          >
            © 2026 · Camila Paganelli
          </p>
          <a
            href="/sobre-mi"
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "var(--muted)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")
            }
          >
            {copy.sobreMi[lang]}
          </a>
          <a
            href="https://contable.camipaganelli.com.ar"
            style={{
              fontFamily: "var(--font-sans-ui), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "var(--amber)",
              textDecoration: "underline",
            }}
          >
            {copy.soporteContable[lang]}
          </a>
        </div>
        <p
          style={{
            fontFamily: "var(--font-sans-ui), monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "var(--muted)",
          }}
        >
          {copy.tagline[lang]}
        </p>
      </div>

      <style jsx>{`
        @media (max-width: 480px) {
          .footer-inner {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
