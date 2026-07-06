export default function Home() {
  return (
    <main className="site-wrapper" style={{ paddingTop: "2.5rem", paddingBottom: "4rem" }}>
      {/* Mini nav */}
      <a
        href="https://camipaganelli.com.ar"
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--muted)",
        }}
      >
        ← Sitio principal
      </a>

      {/* Hero */}
      <section style={{ paddingTop: "3.5rem", paddingBottom: "3rem", maxWidth: "60ch" }}>
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.7rem",
            textTransform: "uppercase",
            letterSpacing: "0.14em",
            color: "var(--amber)",
            marginBottom: "1rem",
          }}
        >
          Soporte operativo
        </p>
        <h1
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2.4rem, 5vw, 3.4rem)",
            fontWeight: 300,
            lineHeight: 1.15,
            color: "var(--primary)",
            marginBottom: "1.5rem",
          }}
        >
          Soporte operativo para estudios contables.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.85rem",
            lineHeight: 1.85,
            color: "var(--muted)",
            marginBottom: "1.5rem",
          }}
        >
          Arranco la carrera de Contador Público en agosto de 2026. No tengo matrícula ni puedo
          firmar documentación formal — esto no es un servicio de contador, es soporte operativo
          para el trabajo que un estudio contable necesita resolver todos los días.
        </p>
      </section>

      {/* Diferencial */}
      <section
        style={{
          paddingTop: "2rem",
          paddingBottom: "3rem",
          borderTop: "0.5px solid var(--line)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.68rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--amber)",
            marginBottom: "1rem",
          }}
        >
          Diferencial
        </p>
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.82rem",
            lineHeight: 1.85,
            color: "var(--primary)",
          }}
        >
          Tres años de background en datos en BBVA Argentina, Excel avanzado y Power BI. Donde
          otro soporte junior carga planillas, yo puedo ordenar y visualizar la información para
          que el estudio la use de verdad.
        </p>
      </section>

      {/* Qué incluye — placeholder pendiente de validar con Cami */}
      <section
        style={{
          paddingTop: "2rem",
          paddingBottom: "3rem",
          borderTop: "0.5px solid var(--line)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.68rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            color: "var(--amber)",
            marginBottom: "1rem",
          }}
        >
          Qué incluye
        </p>
        {/* TODO(Cami): validar esta lista antes de publicar — ¿tomás todas estas tareas? ¿falta algo? */}
        <ul style={{ display: "flex", flexDirection: "column", gap: "0.8rem", listStyle: "none" }}>
          {[
            "Carga y organización de datos contables",
            "Armado de planillas de Excel avanzado",
            "Dashboards de seguimiento en Power BI",
            "Tareas administrativas y de back office",
          ].map((item) => (
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
      </section>

      {/* Contacto */}
      <section
        style={{
          paddingTop: "2rem",
          borderTop: "0.5px solid var(--line)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "flex-start",
        }}
      >
        <a
          href="mailto:camipaganelli@gmail.com"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontStyle: "italic",
            fontSize: "1.1rem",
            color: "var(--primary)",
          }}
        >
          camipaganelli@gmail.com
        </a>
        <a
          href="https://calendar.app.google/ykJMUfkcGjD5E9J67"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontSize: "0.72rem",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
            padding: "0.8rem 1.5rem",
            backgroundColor: "var(--amber)",
            color: "var(--bg)",
            borderRadius: "2px",
            border: "0.5px solid var(--amber)",
          }}
        >
          Agendar una llamada →
        </a>
      </section>
    </main>
  );
}
