// Formato de las strings de contenido (ver components/RichText.tsx):
//   **negrita**   *cursiva*   {{pending:detalle}}  (marcador [PENDIENTE], visible solo en desarrollo)

export type ActionKind =
  | "internal" // href = ruta bajo el idioma actual, p. ej. "empresas" o "empresas#conecta"
  | "whatsapp"
  | "booking"
  | "cv"
  | "linkedin"
  | "form" // href = ancla del formulario; se oculta si no hay endpoint
  | "casos"; // [OCULTO] hasta habilitar casos

export interface ActionItem {
  kind: ActionKind;
  label: string;
  href?: string;
}

export interface Meta {
  title: string;
  description?: string;
}

export interface CommonContent {
  nav: { empresas: string; pymes: string; emprendimientos: string; sobreMi: string };
  navLabel: string;
  openMenu: string;
  closeMenu: string;
  skipToContent: string;
  backHome: string;
  switchLanguage: string;
  footer: { privacy: string; location: string; rights: string };
  notFound: { title: string; back: string };
}

export interface HomeContent {
  meta: Meta;
  hero: { headline: string };
  doors: { title: string; subtitle: string; href: string; track: string }[];
  credibility: { text: string; links: ActionItem[] };
}

export interface BeforeAfter {
  title?: string;
  start: { title: string; items?: string[]; text?: string };
  end: { title: string; items?: string[]; text?: string };
}

export interface EmpresasContent {
  meta: Meta;
  headerCta: ActionItem;
  hero: { headline: string; sub: string; ctas: ActionItem[] };
  beforeAfter: BeforeAfter;
  pillars: { title: string; items: { question: string; lead: string; text: string }[] };
  decision: { title: string; text: string };
  start: { title: string; items: string[]; note: string };
  ways: { title: string; items: string[]; closing: string };
  connecta: { id: string; title: string; intro: string; steps: { letter: string; text: string }[] };
  esg: { text: string };
  background: { title: string; text: string; education: string; tools: string };
  casos: ActionItem;
  finalCta: { title: string; ctas: ActionItem[] };
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface PymesFull {
  variant: "full";
  meta: Meta;
  ctas: ActionItem[];
  hero: { headline: string; sub: string };
  problem: { title: string; bullets: string[]; closing: string };
  beforeAfter: BeforeAfter;
  how: { title: string; steps: string[] };
  timeline: { title: string; items: string[]; note: string };
  modes: { title: string; items: string[]; closing: string };
  privacy: { title: string; text: string };
  risk: { title: string; text: string; price: string };
  whoFor: { title: string; text: string };
  whyMe: { title: string; paragraphs: string[]; casos: ActionItem };
  faq: { title: string; items: FaqItem[]; note: string };
}

export interface SummaryPage {
  variant: "summary";
  meta: Meta;
  hero: { headline: string; paragraphs: string[] };
  ctas: ActionItem[];
  note?: string;
  link?: ActionItem;
}

export type PymesContent = PymesFull | SummaryPage;

export interface FormField {
  id: string;
  label: string;
  type: "text" | "textarea" | "select" | "radio" | "checkbox";
  options?: string[];
  required?: boolean;
  // Si el campo es "select" y faltan las opciones, se muestra como texto libre y, en desarrollo, este marcador.
  pendingOptions?: string;
  placeholder?: string;
}

export interface EmprendimientosFull {
  variant: "full";
  meta: Meta;
  ctas: ActionItem[];
  hero: { headline: string; sub: string };
  beforeAfter: BeforeAfter;
  session: {
    title: string;
    headline: string;
    bring: string;
    take: string;
    note: string;
    exampleLabel: string;
    example: string;
    price: string;
  };
  accompaniment: { title: string; steps: string[] };
  modes: { title: string; items: string[] };
  risk: { title: string; paragraphs: string[] };
  whyMe: { title: string; text: string; link: ActionItem };
  community: { id: string; title: string; paragraphs: string[]; cohort: string };
  form: {
    title: string;
    fields: FormField[];
    privacyLabel: string;
    privacyLink: string;
    submit: string;
    sending: string;
    confirmation: string;
    error: string;
    pendingDestination: string;
  };
  faq: { title: string; items: FaqItem[] };
}

export type EmprendimientosContent = EmprendimientosFull | SummaryPage;

export interface SobreMiContent {
  meta: Meta;
  headline: string;
  blocks: { title: string; paragraphs: string[]; link?: ActionItem }[];
  image: { alt: string; pending: string };
  final: { title: string; ctas: ActionItem[] };
}

export interface PrivacidadContent {
  meta: Meta;
  title: string;
  scope: string;
  legal: string;
}
