import type { Lang } from "@/lib/language";

export type Eje = "impacto-sostenible" | "inteligencia-de-datos" | "eficiencia-operativa";

export interface LocalizedText {
  es: string;
  en: string;
}

export interface CaseMetric {
  value: string;
  label: LocalizedText;
}

export interface CaseStudy {
  slug: string;
  eje: Eje;
  company: string;
  companyType: LocalizedText;
  period: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
  description: LocalizedText;
  context: LocalizedText;
  problem: LocalizedText;
  solution: LocalizedText;
  results: LocalizedText;
  learning: LocalizedText;
  metrics: CaseMetric[];
  tags: LocalizedText[];
}

export const ejes: Record<Eje, LocalizedText> = {
  "impacto-sostenible": {
    es: "Impacto Sostenible",
    en: "Sustainable Impact",
  },
  "inteligencia-de-datos": {
    es: "Inteligencia de Datos",
    en: "Data Intelligence",
  },
  "eficiencia-operativa": {
    es: "Eficiencia Operativa",
    en: "Operational Efficiency",
  },
};

export function ejeLabel(eje: Eje, lang: Lang): string {
  return ejes[eje][lang];
}

export const cases: CaseStudy[] = [
  {
    slug: "recuperacion-cartera-ai",
    eje: "eficiencia-operativa",
    company: "Banco regional",
    companyType: { es: "Banca · Argentina", en: "Banking · Argentina" },
    period: { es: "Proyecto independiente", en: "Independent project" },
    title: {
      es: "Recuperación de cartera incobrable vía AI conversacional",
      en: "Recovering bad debt through conversational AI",
    },
    subtitle: {
      es: "+120% de contactabilidad con automatización completa",
      en: "+120% contact rate with full automation",
    },
    description: {
      es: "Desarrollé el árbol de decisiones, la integración con base de datos y la automatización completa de un chatbot de financiamiento.",
      en: "Built the decision tree, database integration, and full automation for a debt-recovery chatbot.",
    },
    context: {
      es: "Un banco regional argentino tenía una cartera incobrable significativa con tasas de contactabilidad muy bajas. Los procesos de recuperación eran manuales, costosos y con resultados decrecientes. El equipo de cobranzas estaba saturado y las herramientas existentes no escalaban.",
      en: "An Argentine regional bank had significant bad debt and very low contact rates. Recovery processes were manual, costly, and yielding diminishing results. The collections team was overloaded and existing tools didn't scale.",
    },
    problem: {
      es: "La contactabilidad era baja porque dependía de llamadas telefónicas en horarios limitados. No había segmentación inteligente de deudores ni personalización del mensaje. El costo por contacto efectivo era alto y la tasa de recuperación venía en caída.",
      en: "Contact rates were low because they depended on phone calls in limited hours. There was no smart debtor segmentation or message personalization. Cost per effective contact was high and the recovery rate was falling.",
    },
    solution: {
      es: "Diseñé e implementé un chatbot conversacional con AI que automatizó el proceso completo de contacto y negociación. Construí el árbol de decisiones, integré la base de datos del banco para personalizar cada interacción, y armé dashboards en Power BI para seguimiento de métricas vía SQL.",
      en: "I designed and implemented an AI conversational chatbot that automated the full contact and negotiation process. I built the decision tree, integrated the bank's database to personalize each interaction, and built Power BI dashboards for metrics tracking via SQL.",
    },
    results: {
      es: "La contactabilidad subió un 120%. Se alcanzó un récord histórico en recuperación de incobrables. El costo por contacto efectivo bajó significativamente y el equipo de cobranzas pudo enfocarse en los casos que realmente requerían intervención humana.",
      en: "Contact rates rose 120%. Bad-debt recovery hit an all-time high. Cost per effective contact dropped significantly, and the collections team could focus on cases that genuinely needed human intervention.",
    },
    learning: {
      es: "La AI conversacional en cobranzas no reemplaza al equipo humano — lo potencia. La clave fue diseñar el árbol de decisiones con empatía: no se trata de presionar al deudor sino de facilitarle una salida. Eso cambió completamente las tasas de respuesta.",
      en: "Conversational AI in collections doesn't replace the human team — it empowers it. The key was designing the decision tree with empathy: it's not about pressuring the debtor but giving them an easy way out. That changed response rates completely.",
    },
    metrics: [
      { value: "+120%", label: { es: "Contactabilidad", en: "Contact rate" } },
      { value: "Récord", label: { es: "Recuperación de incobrables", en: "Bad-debt recovery" } },
    ],
    tags: [
      { es: "AI conversacional", en: "Conversational AI" },
      { es: "Automatización", en: "Automation" },
      { es: "Cobranzas", en: "Collections" },
      { es: "Power BI", en: "Power BI" },
    ],
  },
  {
    slug: "prestamos-no-clientes-bbva",
    eje: "inteligencia-de-datos",
    company: "BBVA Argentina",
    companyType: { es: "Banca · Argentina", en: "Banking · Argentina" },
    period: { es: "2022–2025", en: "2022–2025" },
    title: {
      es: "Primer banco tradicional en ofrecer préstamos a no clientes",
      en: "First traditional bank to offer loans to non-customers",
    },
    subtitle: {
      es: "+19% en activación de inclusión financiera",
      en: "+19% in financial-inclusion activation",
    },
    description: {
      es: "Lideré el funnel de préstamo personal + apertura de caja de ahorro simultáneos para no clientes.",
      en: "Led the funnel for simultaneous personal loan + savings account opening for non-customers.",
    },
    context: {
      es: "BBVA Argentina quería expandir su base de clientes ofreciendo productos financieros a personas que no tenían cuenta en el banco. Era un desafío regulatorio, técnico y de experiencia de usuario: nadie en la banca tradicional argentina lo había logrado.",
      en: "BBVA Argentina wanted to expand its customer base by offering financial products to people without an account at the bank. It was a regulatory, technical, and UX challenge: no traditional bank in Argentina had pulled it off.",
    },
    problem: {
      es: "El funnel de conversión para nuevos clientes tenía fricciones enormes. La apertura de cuenta y la solicitud de préstamo eran procesos separados, largos y con alta tasa de abandono. No había datos de comportamiento previo para scoring, y los equipos internos no estaban alineados.",
      en: "The conversion funnel for new customers had enormous friction. Account opening and loan applications were separate, lengthy processes with high drop-off. There was no prior behavioral data for scoring, and internal teams weren't aligned.",
    },
    solution: {
      es: "Diseñé un flujo unificado de préstamo personal + apertura de caja de ahorro simultáneos. Apliqué principios de Behavioral Economics para reducir fricciones en cada paso. Trabajé con múltiples productos de contratación optimizando la conversión en cada touchpoint.",
      en: "I designed a unified flow for simultaneous personal loan and savings account opening. I applied behavioral economics principles to reduce friction at every step, and worked across multiple onboarding products optimizing conversion at each touchpoint.",
    },
    results: {
      es: "La contratación de tarjetas subió un 8,44%. La activación de inclusión financiera creció un 19,23%. BBVA se convirtió en el primer banco tradicional argentino en ofrecer préstamos a no clientes de forma completamente digital.",
      en: "Card signups rose 8.44%. Financial-inclusion activation grew 19.23%. BBVA became the first traditional Argentine bank to offer loans to non-customers fully digitally.",
    },
    learning: {
      es: "Behavioral Economics aplicado a fintech no es un nice-to-have — es el diferenciador. Pequeños cambios en el copy, el orden de los pasos y los defaults tienen impacto enorme en conversión. La clave fue medir obsesivamente cada micro-conversión.",
      en: "Behavioral economics applied to fintech isn't a nice-to-have — it's the differentiator. Small changes in copy, step order, and defaults have a huge impact on conversion. The key was obsessively measuring every micro-conversion.",
    },
    metrics: [
      { value: "+8,44%", label: { es: "Contratación de tarjetas", en: "Card signups" } },
      { value: "+19,23%", label: { es: "Activación inclusión financiera", en: "Financial-inclusion activation" } },
    ],
    tags: [
      { es: "Behavioral Economics", en: "Behavioral Economics" },
      { es: "Inclusión financiera", en: "Financial inclusion" },
      { es: "Funnel optimization", en: "Funnel optimization" },
      { es: "Producto digital", en: "Digital product" },
    ],
  },
  {
    slug: "diagnostico-sustentabilidad-pyme",
    eje: "impacto-sostenible",
    company: "PYME",
    companyType: { es: "Empresa B · Argentina", en: "B Corp · Argentina" },
    period: { es: "Proyecto independiente", en: "Independent project" },
    title: {
      es: "Diagnóstico de sustentabilidad para certificación B",
      en: "Sustainability diagnostic for B Corp certification",
    },
    subtitle: {
      es: "Hoja de ruta completa hacia certificación como Empresa B",
      en: "A complete roadmap toward B Corp certification",
    },
    description: {
      es: "Acompañé a una empresa en el proceso de medición y evaluación de sus métricas de impacto como paso previo a la certificación.",
      en: "I supported a company through measuring and assessing its impact metrics as a step ahead of certification.",
    },
    context: {
      es: "Una PYME argentina quería certificarse como Empresa B pero no tenía claridad sobre su punto de partida. No habían medido su impacto ambiental ni social de forma sistemática, y no sabían qué brechas cerrar ni en qué orden priorizar.",
      en: "An Argentine SME wanted to become a certified B Corp but had no clarity on its starting point. They hadn't systematically measured their environmental or social impact, and didn't know which gaps to close or in what order.",
    },
    problem: {
      es: "Sin un diagnóstico claro, la empresa estaba invirtiendo esfuerzo en acciones de sustentabilidad dispersas y sin estrategia. No había indicadores definidos, no se medía nada de forma consistente, y la distancia a la certificación era una incógnita.",
      en: "Without a clear diagnostic, the company was investing effort in scattered, unstrategic sustainability actions. There were no defined indicators, nothing was measured consistently, and the distance to certification was unknown.",
    },
    solution: {
      es: "Relevé el estado actual de la empresa en todas las dimensiones de impacto B (gobernanza, trabajadores, comunidad, medio ambiente, clientes). Definí indicadores clave, construí el mapa de situación inicial y tracé una hoja de ruta priorizada hacia la certificación.",
      en: "I assessed the company's current state across all B Impact dimensions (governance, workers, community, environment, customers). I defined key indicators, mapped the baseline, and drew a prioritized roadmap toward certification.",
    },
    results: {
      es: "Se completó el diagnóstico ambiental y social integral. Se trazó la hoja de ruta hacia la certificación B con hitos claros y priorizados. La empresa pasó de acciones dispersas a una estrategia de sustentabilidad coherente y medible.",
      en: "A comprehensive environmental and social diagnostic was completed. The roadmap to B Corp certification was drawn with clear, prioritized milestones. The company moved from scattered actions to a coherent, measurable sustainability strategy.",
    },
    learning: {
      es: "La sustentabilidad no es un checklist — es un cambio de mentalidad operativa. Las empresas que más avanzan son las que dejan de ver la certificación como el objetivo y empiezan a usarla como framework para mejorar su gestión real.",
      en: "Sustainability isn't a checklist — it's an operational mindset shift. The companies that progress the most are the ones that stop treating certification as the goal and start using it as a framework to improve how they actually run the business.",
    },
    metrics: [
      { value: "Completo", label: { es: "Diagnóstico ambiental y social", en: "Environmental & social diagnostic" } },
      { value: "Trazada", label: { es: "Hoja de ruta hacia certificación B", en: "Roadmap to B Corp certification" } },
    ],
    tags: [
      { es: "Certificación B", en: "B Corp certification" },
      { es: "Sustentabilidad", en: "Sustainability" },
      { es: "Métricas de impacto", en: "Impact metrics" },
      { es: "Diagnóstico", en: "Diagnostic" },
    ],
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getCasesByEje(eje: Eje): CaseStudy[] {
  return cases.filter((c) => c.eje === eje);
}
