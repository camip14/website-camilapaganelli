"use client";

import { useState } from "react";
import { useLanguage, common } from "@/lib/language";
import LanguageToggle from "@/components/LanguageToggle";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLanguage();

  const links = [
    { label: { es: "FP&A & BI", en: "FP&A & BI" }, href: "/servicios/fp-a-bi" },
    { label: { es: "ESG", en: "ESG" }, href: "/servicios/esg" },
    { label: { es: "Automatización", en: "Automation" }, href: "/servicios/automatizacion" },
    { label: { es: "Sobre mí", en: "About" }, href: "/sobre-mi" },
    { label: { es: "Casos", en: "Case Studies" }, href: "/casos" },
    { label: common.cv, href: "/cv" },
  ];

  return (
    <nav
      style={{
        borderBottom: "0.5px solid var(--line)",
      }}
    >
      <div
        className="site-wrapper"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          gap: "1.5rem",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-serif-display), serif",
            fontSize: "1.1rem",
            fontWeight: 400,
            color: "var(--primary)",
            letterSpacing: "0.01em",
            flexShrink: 0,
          }}
        >
          Camila Paganelli
        </a>

        {/* Links — ocultos en mobile */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: "1.75rem",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-sans-ui), sans-serif",
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--muted)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--primary)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")
              }
            >
              {link.label[lang]}
            </a>
          ))}
        </div>

        {/* CTA + toggle — ocultos en mobile */}
        <div className="nav-cta" style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexShrink: 0 }}>
          <LanguageToggle />
          <a
            href="/contacto"
            style={{
              fontFamily: "var(--font-sans-ui), sans-serif",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "0.5rem 1.1rem",
              border: "0.5px solid var(--sage)",
              color: "var(--sage)",
              borderRadius: "2px",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "var(--sage)";
              el.style.color = "var(--bg)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "transparent";
              el.style.color = "var(--sage)";
            }}
          >
            {common.contacto[lang]}
          </a>
        </div>

        {/* Hamburger — visible en mobile */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            padding: "4px",
            cursor: "pointer",
          }}
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              backgroundColor: "var(--primary)",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              backgroundColor: "var(--primary)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              backgroundColor: "var(--primary)",
              transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="nav-drawer"
          style={{
            display: "none",
            flexDirection: "column",
            padding: "1.5rem 2rem 2rem",
            borderTop: "0.5px solid var(--line)",
            gap: "1.5rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-sans-ui), sans-serif",
                fontSize: "0.82rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--primary)",
              }}
            >
              {link.label[lang]}
            </a>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <LanguageToggle />
            <a
              href="/contacto"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-sans-ui), sans-serif",
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                padding: "0.6rem 1.1rem",
                border: "0.5px solid var(--sage)",
                color: "var(--sage)",
                borderRadius: "2px",
              }}
            >
              {common.contacto[lang]}
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 900px) {
          .nav-links,
          .nav-cta {
            display: none !important;
          }
          .nav-hamburger {
            display: flex !important;
          }
          .nav-drawer {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}
