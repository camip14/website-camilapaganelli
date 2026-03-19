"use client";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "0.5px solid var(--border-thin)",
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
        <div style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }} className="footer-left">
          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "var(--warm-gray)",
            }}
          >
            © 2026 · Cami Paganelli
          </p>
          <a
            href="/about"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.1em",
              color: "var(--warm-gray)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--ink)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color = "var(--warm-gray)")
            }
          >
            Sobre mí
          </a>
        </div>
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.1em",
            color: "var(--warm-gray)",
          }}
        >
          Lo técnico, lo humano y lo sostenible · Argentina
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
