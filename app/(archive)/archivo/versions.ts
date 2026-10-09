// Versiones anteriores del sitio. Nada se borra: cada una tiene un tag inmutable en GitHub
// (la copia permanente) y, mientras Vercel no la dé de baja, una URL de preview.
//
// Las URLs de preview de Vercel piden iniciar sesión en la cuenta del proyecto y caducan por
// retención (Settings > Deployment Retention). Para recuperar una versión cuyo deployment ya no
// exista, se vuelve a desplegar su branch o su tag.

const REPO = "https://github.com/camip14/website-camilapaganelli";
const vercel = (alias: string) => `https://${alias}.vercel.app`;

export interface ArchivedVersion {
  id: string;
  name: string;
  date: string;
  description: string;
  tag?: string;
  branch: string;
  commit: string;
  previewUrl?: string;
  liveUrl?: string;
  note?: string;
}

export const repoUrl = REPO;

export const versions: ArchivedVersion[] = [
  {
    id: "v1",
    name: "v1 · Sitio original",
    date: "2026-03-19",
    description:
      "Primer sitio: hero, áreas, cómo trabajo, trabajo seleccionado y contacto. Cormorant Garamond + DM Mono, paleta bosque y tinta.",
    tag: "archivo/v1-original",
    branch: "archivo/v1-original",
    commit: "ae7bbe1",
    previewUrl: vercel("website-camilapaganelli-git-archivo-v1-bbd508-camip14s-projects"),
    note: "Fue la versión en producción (rama main) hasta octubre de 2026.",
  },
  {
    id: "v2",
    name: "v2 · Ejes y casos",
    date: "2026-04-30",
    description:
      "Reposicionamiento en tres ejes (Impacto Sostenible, Inteligencia de Datos, Eficiencia Operativa) y casos de éxito con storytelling.",
    tag: "archivo/v2-ejes",
    branch: "preview-v2",
    commit: "26c079d",
    previewUrl: vercel("website-camilapaganelli-git-preview-v2-camip14s-projects"),
    note: "El deployment original había caducado; se volvió a desplegar desde git.",
  },
  {
    id: "v3",
    name: "v3 · Handoff",
    date: "2026-07-06",
    description:
      "Arquitectura del handoff: FP&A & BI, ESG y Automatización, paleta oscura sage y ámbar, página de casos.",
    tag: "archivo/v3-handoff",
    branch: "handoff-rebuild",
    commit: "912bc6e",
    previewUrl: vercel("website-camilapaganelli-git-handoff-rebuild-camip14s-projects"),
  },
  {
    id: "v4",
    name: "v4 · Iteración 1",
    date: "2026-08-07",
    description:
      "Rediseño claro (Crimson Text + Montserrat), CV, selector ES/EN y cinco servicios, incluidos Planificación y Soporte Contable.",
    tag: "archivo/v4-iteracion-1",
    branch: "iteracion-1",
    commit: "810c446",
    previewUrl: vercel("website-camilapaganelli-git-iteracion-1-camip14s-projects"),
  },
  {
    id: "contable",
    name: "Sitio de soporte contable",
    date: "2026-07-06",
    description:
      "Sitio de una página para estudios contables, publicado aparte en un subdominio. Su código vivía solo en una carpeta local; ahora está en esta branch.",
    branch: "archivo/contable",
    commit: "7431b95",
    previewUrl: vercel("website-camilapaganelli-git-archivo-contable-camip14s-projects"),
    liveUrl: "https://contable.camipaganelli.com.ar",
  },
];
