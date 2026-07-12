import type { LocalizedText } from "@/data/cases";

export interface ServiceContent {
  slug: "fp-a-bi" | "esg" | "automatizacion";
  label: LocalizedText;
  description: LocalizedText;
  intro: LocalizedText;
  incluye: LocalizedText[];
  paraQuienEs: LocalizedText[];
}

export const services: ServiceContent[] = [
  {
    slug: "fp-a-bi",
    label: { es: "FP&A & BI", en: "FP&A & BI" },
    description: {
      es: "Modelos financieros, forecasting y dashboards que convierten datos dispersos en decisiones. Power BI, Microsoft Fabric, Databricks.",
      en: "Financial models, forecasting, and dashboards that turn scattered data into decisions. Power BI, Microsoft Fabric, Databricks.",
    },
    intro: {
      es: "Modelos financieros, forecasting y dashboards que convierten datos dispersos en decisiones. Trabajo con Power BI, Microsoft Fabric, Databricks, Delta Lake y Azure Data Factory para que la información llegue lista para decidir, no para interpretar.",
      en: "Financial models, forecasting, and dashboards that turn scattered data into decisions. I work with Power BI, Microsoft Fabric, Databricks, Delta Lake, and Azure Data Factory so information arrives ready to decide on, not to interpret.",
    },
    incluye: [
      { es: "Modelos de forecasting y budget vs. actual", en: "Forecasting models and budget vs. actual" },
      { es: "Dashboards ejecutivos en Power BI / Google Data Studio", en: "Executive dashboards in Power BI / Google Data Studio" },
      { es: "Arquitectura de datos: Fabric, Databricks, Delta Lake, Data Factory", en: "Data architecture: Fabric, Databricks, Delta Lake, Data Factory" },
      { es: "Reportes financieros recurrentes automatizados", en: "Automated recurring financial reports" },
    ],
    paraQuienEs: [
      { es: "Equipos financieros sin capacidad de análisis dedicada", en: "Finance teams without dedicated analytics capacity" },
      { es: "Empresas con datos dispersos en múltiples sistemas", en: "Companies with data scattered across multiple systems" },
      { es: "Organizaciones que reportan a inversores o directorio", en: "Organizations that report to investors or a board" },
    ],
  },
  {
    slug: "esg",
    label: { es: "ESG", en: "ESG" },
    description: {
      es: "Diagnósticos y estrategia de sustentabilidad medibles, no checklists. De la certificación B al reporting de impacto.",
      en: "Measurable sustainability diagnostics and strategy, not checklists. From B Corp certification to impact reporting.",
    },
    intro: {
      es: "Diagnóstico y estrategia de sustentabilidad medibles, no checklists. La sustentabilidad no se declara — se mide. Trabajo desde el relevamiento inicial hasta la hoja de ruta hacia una certificación o un reporte de impacto.",
      en: "Measurable sustainability diagnostics and strategy, not checklists. Sustainability isn't declared — it's measured. I work from the initial assessment through to a roadmap for certification or an impact report.",
    },
    incluye: [
      { es: "Diagnóstico ambiental, social y de gobernanza (ESG)", en: "Environmental, social, and governance (ESG) diagnostic" },
      { es: "Hoja de ruta hacia certificación B u otro estándar", en: "Roadmap toward B Corp or another certification" },
      { es: "Definición de indicadores y línea base", en: "Indicator definition and baseline" },
      { es: "Reporting de impacto para inversores o clientes", en: "Impact reporting for investors or clients" },
    ],
    paraQuienEs: [
      { es: "PyMEs que quieren certificarse como Empresa B", en: "SMEs that want to become certified B Corps" },
      { es: "Empresas que necesitan reportar impacto a stakeholders", en: "Companies that need to report impact to stakeholders" },
      { es: "Organizaciones sin un punto de partida claro en sustentabilidad", en: "Organizations without a clear sustainability starting point" },
    ],
  },
  {
    slug: "automatizacion",
    label: { es: "Automatización", en: "Automation" },
    description: {
      es: "Procesos que se ejecutan solos. Make, N8N y Botmaker para operaciones que escalan sin sumar gente.",
      en: "Processes that run themselves. Make, N8N, and Botmaker for operations that scale without adding headcount.",
    },
    intro: {
      es: "Procesos que se ejecutan solos. Diseño e implemento automatizaciones con Make, N8N y Botmaker para que los equipos dejen de perder tiempo en tareas repetitivas y puedan enfocarse en lo que realmente requiere criterio humano.",
      en: "Processes that run themselves. I design and implement automations with Make, N8N, and Botmaker so teams stop losing time on repetitive tasks and can focus on what actually requires human judgment.",
    },
    incluye: [
      { es: "Mapeo y rediseño de procesos operativos", en: "Mapping and redesign of operational processes" },
      { es: "Automatizaciones con Make, N8N y Botmaker", en: "Automations with Make, N8N, and Botmaker" },
      { es: "Chatbots y flujos conversacionales con AI", en: "Chatbots and AI-driven conversational flows" },
      { es: "Integración entre sistemas y bases de datos existentes", en: "Integration between existing systems and databases" },
    ],
    paraQuienEs: [
      { es: "Equipos saturados de tareas manuales y repetitivas", en: "Teams overloaded with manual, repetitive tasks" },
      { es: "Empresas que quieren escalar operaciones sin sumar headcount", en: "Companies that want to scale operations without adding headcount" },
      { es: "Áreas de cobranzas, atención al cliente o back office", en: "Collections, customer service, or back-office teams" },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
