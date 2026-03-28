"use client";

const items = [
  "Estrategia de producto",
  "AI aplicada",
  "Negocio sostenible",
  "Fractional",
  "Proyectos acotados",
  "Advisory",
  "Automatización de procesos",
  "Crédito & finanzas",
  "Impacto medible",
  "Buenos Aires · Bariloche · Remoto",
];

const separator = "·";

export default function Marquee() {
  const content = items.flatMap((item) => [item, separator]);

  return (
    <div
      style={{
        borderTop: "0.5px solid var(--border-thin)",
        borderBottom: "0.5px solid var(--border-thin)",
        overflow: "hidden",
        paddingTop: "0.9rem",
        paddingBottom: "0.9rem",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marquee 28s linear infinite",
        }}
      >
        {/* Duplicamos para el loop continuo */}
        {[...content, ...content].map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "0.68rem",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: item === separator ? "var(--forest-mid)" : "var(--warm-gray)",
              paddingRight: item === separator ? "1.2rem" : "0",
              paddingLeft: item === separator ? "1.2rem" : "0",
              whiteSpace: "nowrap",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
