export type Eje = "impacto-sostenible" | "inteligencia-de-datos" | "eficiencia-operativa";

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  eje: Eje;
  ejeLabel: string;
  company: string;
  companyType: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  context: string;
  problem: string;
  solution: string;
  results: string;
  learning: string;
  metrics: CaseMetric[];
  tags: string[];
}

export const ejes: Record<Eje, { label: string; description: string }> = {
  "impacto-sostenible": {
    label: "Impacto Sostenible",
    description:
      "Estrategia, medición y transformación para organizaciones que quieren que su impacto ambiental sea parte de su propuesta de valor.",
  },
  "inteligencia-de-datos": {
    label: "Inteligencia de Datos",
    description:
      "Análisis, dashboards y decisiones basadas en datos. Desde la infraestructura hasta el insight accionable.",
  },
  "eficiencia-operativa": {
    label: "Eficiencia Operativa",
    description:
      "Procesos que funcionan, automatizaciones que escalan y operaciones que liberan al equipo para pensar.",
  },
};

export const cases: CaseStudy[] = [
  {
    slug: "recuperacion-cartera-ai",
    eje: "eficiencia-operativa",
    ejeLabel: "Eficiencia Operativa",
    company: "Banco regional",
    companyType: "Banca · Argentina",
    period: "Proyecto independiente",
    title: "Recuperación de cartera incobrable vía AI conversacional",
    subtitle: "+120% de contactabilidad con automatización completa",
    description:
      "Desarrollé el árbol de decisiones, la integración con base de datos y la automatización completa de un chatbot de financiamiento.",
    context:
      "Un banco regional argentino tenía una cartera incobrable significativa con tasas de contactabilidad muy bajas. Los procesos de recuperación eran manuales, costosos y con resultados decrecientes. El equipo de cobranzas estaba saturado y las herramientas existentes no escalaban.",
    problem:
      "La contactabilidad era baja porque dependía de llamadas telefónicas en horarios limitados. No había segmentación inteligente de deudores ni personalización del mensaje. El costo por contacto efectivo era alto y la tasa de recuperación venía en caída.",
    solution:
      "Diseñé e implementé un chatbot conversacional con AI que automatizó el proceso completo de contacto y negociación. Construí el árbol de decisiones, integré la base de datos del banco para personalizar cada interacción, y armé dashboards en Power BI para seguimiento de métricas vía SQL.",
    results:
      "La contactabilidad subió un 120%. Se alcanzó un récord histórico en recuperación de incobrables. El costo por contacto efectivo bajó significativamente y el equipo de cobranzas pudo enfocarse en los casos que realmente requerían intervención humana.",
    learning:
      "La AI conversacional en cobranzas no reemplaza al equipo humano — lo potencia. La clave fue diseñar el árbol de decisiones con empatía: no se trata de presionar al deudor sino de facilitarle una salida. Eso cambió completamente las tasas de respuesta.",
    metrics: [
      { value: "+120%", label: "Contactabilidad" },
      { value: "Récord", label: "Recuperación de incobrables" },
    ],
    tags: ["AI conversacional", "Automatización", "Cobranzas", "Power BI"],
  },
  {
    slug: "prestamos-no-clientes-bbva",
    eje: "inteligencia-de-datos",
    ejeLabel: "Inteligencia de Datos",
    company: "BBVA Argentina",
    companyType: "Banca · Argentina",
    period: "2022–2025",
    title: "Primer banco tradicional en ofrecer préstamos a no clientes",
    subtitle: "+19% en activación de inclusión financiera",
    description:
      "Lideré el funnel de préstamo personal + apertura de caja de ahorro simultáneos para no clientes.",
    context:
      "BBVA Argentina quería expandir su base de clientes ofreciendo productos financieros a personas que no tenían cuenta en el banco. Era un desafío regulatorio, técnico y de experiencia de usuario: nadie en la banca tradicional argentina lo había logrado.",
    problem:
      "El funnel de conversión para nuevos clientes tenía fricciones enormes. La apertura de cuenta y la solicitud de préstamo eran procesos separados, largos y con alta tasa de abandono. No había datos de comportamiento previo para scoring, y los equipos internos no estaban alineados.",
    solution:
      "Diseñé un flujo unificado de préstamo personal + apertura de caja de ahorro simultáneos. Apliqué principios de Behavioral Economics para reducir fricciones en cada paso. Trabajé con múltiples productos de contratación optimizando la conversión en cada touchpoint.",
    results:
      "La contratación de tarjetas subió un 8,44%. La activación de inclusión financiera creció un 19,23%. BBVA se convirtió en el primer banco tradicional argentino en ofrecer préstamos a no clientes de forma completamente digital.",
    learning:
      "Behavioral Economics aplicado a fintech no es un nice-to-have — es el diferenciador. Pequeños cambios en el copy, el orden de los pasos y los defaults tienen impacto enorme en conversión. La clave fue medir obsesivamente cada micro-conversión.",
    metrics: [
      { value: "+8,44%", label: "Contratación de tarjetas" },
      { value: "+19,23%", label: "Activación inclusión financiera" },
    ],
    tags: ["Behavioral Economics", "Inclusión financiera", "Funnel optimization", "Producto digital"],
  },
  {
    slug: "diagnostico-sustentabilidad-pyme",
    eje: "impacto-sostenible",
    ejeLabel: "Impacto Sostenible",
    company: "PYME",
    companyType: "Empresa B · Argentina",
    period: "Proyecto independiente",
    title: "Diagnóstico de sustentabilidad para certificación B",
    subtitle: "Hoja de ruta completa hacia certificación como Empresa B",
    description:
      "Acompañé a una empresa en el proceso de medición y evaluación de sus métricas de impacto como paso previo a la certificación.",
    context:
      "Una PYME argentina quería certificarse como Empresa B pero no tenía claridad sobre su punto de partida. No habían medido su impacto ambiental ni social de forma sistemática, y no sabían qué brechas cerrar ni en qué orden priorizar.",
    problem:
      "Sin un diagnóstico claro, la empresa estaba invirtiendo esfuerzo en acciones de sustentabilidad dispersas y sin estrategia. No había indicadores definidos, no se medía nada de forma consistente, y la distancia a la certificación era una incógnita.",
    solution:
      "Relevé el estado actual de la empresa en todas las dimensiones de impacto B (gobernanza, trabajadores, comunidad, medio ambiente, clientes). Definí indicadores clave, construí el mapa de situación inicial y tracé una hoja de ruta priorizada hacia la certificación.",
    results:
      "Se completó el diagnóstico ambiental y social integral. Se trazó la hoja de ruta hacia la certificación B con hitos claros y priorizados. La empresa pasó de acciones dispersas a una estrategia de sustentabilidad coherente y medible.",
    learning:
      "La sustentabilidad no es un checklist — es un cambio de mentalidad operativa. Las empresas que más avanzan son las que dejan de ver la certificación como el objetivo y empiezan a usarla como framework para mejorar su gestión real.",
    metrics: [
      { value: "Completo", label: "Diagnóstico ambiental y social" },
      { value: "Trazada", label: "Hoja de ruta hacia certificación B" },
    ],
    tags: ["Certificación B", "Sustentabilidad", "Métricas de impacto", "Diagnóstico"],
  },
];

export function getCaseBySlug(slug: string): CaseStudy | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getCasesByEje(eje: Eje): CaseStudy[] {
  return cases.filter((c) => c.eje === eje);
}
