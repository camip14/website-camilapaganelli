import { repoUrl, versions } from "./versions";

export default function ArchivoPage() {
  return (
    <main id="contenido">
      <div className="wrap" style={{ paddingBlock: "4rem" }}>
        <p className="label">Archivo</p>
        <h1 className="hero__title" style={{ marginTop: "0.75rem" }}>
          Versiones anteriores del sitio
        </h1>
        <p className="prose" style={{ marginTop: "1.5rem" }}>
          Ninguna versión se borró. La copia permanente de cada una es su tag en GitHub. Las URLs de Vercel son
          cómodas para verlas funcionando, pero piden iniciar sesión en la cuenta del proyecto y pueden caducar por
          la retención de deployments: si alguna ya no abre, se vuelve a desplegar desde su branch o su tag.
        </p>

        <ul style={{ marginTop: "3rem", display: "grid", gap: "1.25rem" }}>
          {versions.map((version) => (
            <li key={version.id} className="pillar">
              <h2 className="pillar__q">{version.name}</h2>
              <p className="label" style={{ marginBottom: "0.75rem" }}>
                {version.date}
              </p>
              <p>{version.description}</p>
              {version.note && (
                <p className="muted" style={{ marginTop: "0.5rem" }}>
                  {version.note}
                </p>
              )}
              <p className="muted" style={{ marginTop: "1rem", fontSize: "0.85rem" }}>
                Branch <code>{version.branch}</code>
                {version.tag && (
                  <>
                    {" "}
                    · tag <code>{version.tag}</code>
                  </>
                )}{" "}
                · commit <code>{version.commit}</code>
              </p>
              <div className="cta-group" style={{ marginTop: "1.25rem" }}>
                {version.previewUrl && (
                  <a className="btn" href={version.previewUrl} target="_blank" rel="noopener noreferrer">
                    Abrir en Vercel
                  </a>
                )}
                {version.liveUrl && (
                  <a className="btn" href={version.liveUrl} target="_blank" rel="noopener noreferrer">
                    Sitio publicado
                  </a>
                )}
                <a
                  className="text-link"
                  href={`${repoUrl}/tree/${version.tag ? `refs/tags/${version.tag}` : `refs/heads/${version.branch}`}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver código en GitHub
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
