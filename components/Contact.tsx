"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const contactLinks = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/cami-paganelli",
    href: "https://www.linkedin.com/in/cami-paganelli/",
    newTab: true,
  },
  {
    label: "Email",
    value: "camipaganelli@gmail.com",
    href: "mailto:camipaganelli@gmail.com",
    newTab: false,
  },
  {
    label: "Idioma",
    value: "Español · English",
    href: null,
    newTab: false,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contacto"
      style={{
        paddingTop: "4rem",
        paddingBottom: "5rem",
        borderTop: "0.5px solid var(--border-thin)",
      }}
    >
      <div
        ref={ref}
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="contact-grid"
      >
        {/* Columna izquierda */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <h2
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "2.8rem",
              fontWeight: 300,
              color: "var(--ink)",
              lineHeight: 1.1,
            }}
          >
            El primer paso es una conversación.
          </h2>

          <p
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.76rem",
              color: "var(--warm-gray)",
              lineHeight: 1.75,
              maxWidth: "36ch",
            }}
          >
            Abierta a roles fractional, proyectos acotados y advisory. Si algo de lo que
            leíste resuena, agendá una llamada.
          </p>

          <a
            href="https://calendar.app.google/5y7McQGirgbEtEdDA"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.7rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              padding: "0.85rem 1.6rem",
              backgroundColor: "var(--forest)",
              color: "var(--off-white)",
              borderRadius: "2px",
              alignSelf: "flex-start",
              border: "0.5px solid var(--forest)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "var(--ink)";
              el.style.borderColor = "var(--ink)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.backgroundColor = "var(--forest)";
              el.style.borderColor = "var(--forest)";
            }}
          >
            Hablemos →
          </a>
        </motion.div>

        {/* Columna derecha: links */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {contactLinks.map((link, i) => {
            const content = (
              <div
                key={link.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "0.5px solid var(--border-thin)",
                  padding: "1rem 0",
                  cursor: link.href ? "pointer" : "default",
                }}
                className="contact-link-row"
              >
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono), monospace",
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--warm-gray)",
                  }}
                >
                  {link.label}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "var(--ink)",
                    transition: "color 0.2s ease",
                  }}
                  className="contact-link-value"
                >
                  {link.value}
                </span>
              </div>
            );

            if (link.href) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.newTab ? "_blank" : undefined}
                  rel={link.newTab ? "noopener noreferrer" : undefined}
                  style={{ color: "inherit", textDecoration: "none" }}
                  onMouseEnter={(e) => {
                    const val = e.currentTarget.querySelector(".contact-link-value") as HTMLElement;
                    if (val) val.style.color = "var(--forest)";
                  }}
                  onMouseLeave={(e) => {
                    const val = e.currentTarget.querySelector(".contact-link-value") as HTMLElement;
                    if (val) val.style.color = "var(--ink)";
                  }}
                >
                  {content}
                </a>
              );
            }
            return content;
          })}
        </motion.div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
