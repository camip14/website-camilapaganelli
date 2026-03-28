"use client";

import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Soluciones", href: "/#soluciones" },
    { label: "Áreas", href: "/#areas" },
    { label: "Proceso", href: "/#proceso" },
    { label: "Casos de éxito", href: "/#casos" },
    { label: "Sobre mí", href: "/about" },
  ];

  return (
    <nav
      style={{
        borderBottom: "0.5px solid var(--border-thin)",
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
        }}
      >
        {/* Logo */}
        <a
          href="/"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.1rem",
            fontWeight: 400,
            color: "var(--ink)",
            letterSpacing: "0.01em",
          }}
        >
          Camila Paganelli
        </a>

        {/* Links — ocultos en mobile */}
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--warm-gray)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "var(--warm-gray)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA — oculto en mobile */}
        <a
          href="#contacto"
          className="nav-cta"
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            padding: "0.5rem 1.1rem",
            border: "0.5px solid var(--forest)",
            color: "var(--forest)",
            borderRadius: "2px",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "var(--forest)";
            el.style.color = "var(--off-white)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.backgroundColor = "transparent";
            el.style.color = "var(--forest)";
          }}
        >
          Trabajemos
        </a>

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
              backgroundColor: "var(--ink)",
              transition: "transform 0.2s ease, opacity 0.2s ease",
              transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              backgroundColor: "var(--ink)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "1px",
              backgroundColor: "var(--ink)",
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
            borderTop: "0.5px solid var(--border-thin)",
            gap: "1.5rem",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-dm-mono), monospace",
                fontSize: "0.82rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--ink)",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              padding: "0.6rem 1.1rem",
              border: "0.5px solid var(--forest)",
              color: "var(--forest)",
              borderRadius: "2px",
              alignSelf: "flex-start",
            }}
          >
            Trabajemos
          </a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 768px) {
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
