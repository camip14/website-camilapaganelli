import type { LocalizedText } from "@/data/cases";

export interface ServiceContent {
  slug: "fp-a-bi" | "esg" | "automatizacion" | "planificacion" | "soporte-contable";
  label: LocalizedText;
  description: LocalizedText;
  intro: LocalizedText;
  incluye: LocalizedText[];
  paraQuienEs: LocalizedText[];
  /** Disclaimer honesto opcional, se muestra como callout debajo del intro. */
  note?: LocalizedText;
  /** Color de acento de la página. Default: sage. */
  accent?: "sage" | "amber";
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
  {
    slug: "planificacion",
    label: { es: "Planificación", en: "Planning" },
    description: {
      es: "Planificación de demanda, ventas y finanzas integrada, tipo S&OP: que abastecimiento, comercial y finanzas trabajen sobre el mismo número.",
      en: "Integrated demand, sales, and financial planning, S&OP-style: supply chain, commercial, and finance working off the same number.",
    },
    intro: {
      es: "Planificación de demanda, ventas y finanzas como un mismo ejercicio, no tres planillas que no se hablan. Trabajo el ciclo completo de planificación — supply chain, comercial y financiera — para que la operación no dependa de improvisar cada mes.",
      en: "Demand, sales, and financial planning as a single exercise, not three spreadsheets that don't talk to each other. I work the full planning cycle — supply chain, commercial, and financial — so the operation doesn't run on improvising every month.",
    },
    incluye: [
      { es: "Planificación de demanda y abastecimiento (S&OP)", en: "Demand and supply planning (S&OP)" },
      { es: "Forecast comercial y de ventas", en: "Commercial and sales forecasting" },
      { es: "Presupuesto y planificación financiera anual", en: "Annual budgeting and financial planning" },
      { es: "Modelos de escenarios: stock, inversión, capacidad", en: "Scenario models: inventory, investment, capacity" },
    ],
    paraQuienEs: [
      { es: "Empresas con quiebres de stock o sobre-stock recurrentes", en: "Companies with recurring stockouts or overstock" },
      { es: "Equipos comerciales y de supply chain que planifican por separado", en: "Commercial and supply chain teams that plan separately" },
      { es: "Organizaciones que arman el presupuesto anual a mano", en: "Organizations that build their annual budget by hand" },
    ],
  },
  {
    slug: "soporte-contable",
    label: { es: "Soporte Contable", en: "Accounting Support" },
    description: {
      es: "Carga de datos, Excel avanzado y dashboards en Power BI para estudios contables. Soporte operativo, no un servicio de contador.",
      en: "Data entry, advanced Excel, and Power BI dashboards for accounting firms. Operational support, not an accountant's service.",
    },
    intro: {
      es: "Soporte operativo para estudios contables: carga y organización de datos, armado de planillas y dashboards de seguimiento. Tres años de background en datos en BBVA Argentina, Excel avanzado y Power BI — donde otro soporte junior carga planillas, yo puedo ordenar y visualizar la información para que el estudio la use de verdad.",
      en: "Operational support for accounting firms: data entry and organization, spreadsheet building, and tracking dashboards. Three years of data background at BBVA Argentina, advanced Excel, and Power BI — where another junior hire just loads spreadsheets, I can organize and visualize the information so the firm actually uses it.",
    },
    note: {
      es: "Arranco la carrera de Contador Público en agosto de 2026. No tengo matrícula ni puedo firmar documentación formal — esto no es un servicio de contador, es soporte operativo para el trabajo que un estudio contable necesita resolver todos los días.",
      en: "I'm starting my Certified Public Accountant degree in August 2026. I don't hold a license and can't sign formal documentation — this isn't an accountant's service, it's operational support for the work an accounting firm needs to handle every day.",
    },
    // TODO(Cami): validar esta lista antes de publicar — ¿tomás todas estas tareas? ¿falta algo?
    incluye: [
      { es: "Carga y organización de datos contables", en: "Accounting data entry and organization" },
      { es: "Armado de planillas de Excel avanzado", en: "Advanced Excel spreadsheet building" },
      { es: "Dashboards de seguimiento en Power BI", en: "Tracking dashboards in Power BI" },
      { es: "Tareas administrativas y de back office", en: "Administrative and back-office tasks" },
    ],
    paraQuienEs: [
      { es: "Estudios contables que necesitan soporte operativo, no otro contador", en: "Accounting firms that need operational support, not another accountant" },
      { es: "Equipos que cargan datos a mano y quieren pasarlo a dashboards", en: "Teams that enter data by hand and want to move it into dashboards" },
      { es: "Estudios que recién empiezan a ordenar su información en Excel/Power BI", en: "Firms just starting to organize their information in Excel/Power BI" },
    ],
    accent: "amber",
  },
];

export function getServiceBySlug(slug: string): ServiceContent | undefined {
  return services.find((s) => s.slug === slug);
}
