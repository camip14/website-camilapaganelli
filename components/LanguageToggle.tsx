"use client";

import { useLanguage } from "@/lib/language";

export default function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      onClick={toggle}
      aria-label="Cambiar idioma / Switch language"
      style={{
        fontFamily: "var(--font-sans-ui), sans-serif",
        fontSize: "0.68rem",
        letterSpacing: "0.1em",
        background: "none",
        border: "0.5px solid var(--line)",
        borderRadius: "2px",
        padding: "0.4rem 0.6rem",
        color: "var(--muted)",
      }}
    >
      <span style={{ color: lang === "es" ? "var(--primary)" : "var(--muted)", fontWeight: lang === "es" ? 600 : 400 }}>
        ES
      </span>
      {" / "}
      <span style={{ color: lang === "en" ? "var(--primary)" : "var(--muted)", fontWeight: lang === "en" ? 600 : 400 }}>
        EN
      </span>
    </button>
  );
}
