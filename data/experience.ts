import type { LocalizedText } from "@/data/cases";

export interface ExperienceEntry {
  role: LocalizedText;
  company: string;
  period: LocalizedText;
  bullets: LocalizedText[];
}

export interface SkillGroup {
  title: LocalizedText;
  items: string[];
}

export interface EducationEntry {
  title: string;
  institution: string;
}

export const cvIntro: LocalizedText = {
  es: "Profesional con formación en comunicación y finanzas. Experiencia en análisis económico, evaluación de viabilidad y toma de decisiones basada en evidencia, en entornos financieros complejos y regulados. Interés genuino y formación autodidacta en mercados de carbono, soluciones basadas en la naturaleza y financiamiento climático — en proceso de certificación formal en el área. Disponibilidad para viajes desde Bariloche, Patagonia, donde resido actualmente.",
  en: "A professional with a background in communications and finance. Experience in economic analysis, feasibility assessment, and evidence-based decision-making across complex, regulated financial environments. Genuine interest and self-taught grounding in carbon markets, nature-based solutions, and climate finance — currently pursuing formal certification in the field. Available to travel from Bariloche, Patagonia, where I currently live.",
};

export const experience: ExperienceEntry[] = [
  {
    role: {
      es: "Consultora Independiente — Finanzas, datos y estrategia",
      en: "Independent Consultant — Finance, Data & Strategy",
    },
    company: "Freelance",
    period: { es: "2018 – presente", en: "2018 – present" },
    bullets: [
      {
        es: "Desarrollé análisis de viabilidad económica y modelos de evaluación financiera para proyectos en tecnología, servicios financieros y retail.",
        en: "Developed economic feasibility analyses and financial evaluation models for projects in technology, financial services, and retail.",
      },
      {
        es: "Diseñé dashboards de performance y métricas de seguimiento para apoyar la toma de decisiones estratégicas en organizaciones en transformación digital.",
        en: "Designed performance dashboards and tracking metrics to support strategic decision-making in organizations undergoing digital transformation.",
      },
      {
        es: "Coordiné iniciativas multiactor integrando equipos técnicos, operativos y de negocio, adaptando enfoques a distintas realidades institucionales.",
        en: "Coordinated multi-stakeholder initiatives across technical, operations, and business teams, adapting approaches to different institutional realities.",
      },
    ],
  },
  {
    role: {
      es: "Lead de Producto y Experiencia | X-Sell Journey + Producto financiero",
      en: "Product & Experience Lead | Cross-Sell Journey + Financial Product",
    },
    company: "BBVA Argentina",
    period: { es: "Diciembre 2022 – 2026", en: "December 2022 – 2026" },
    bullets: [
      {
        es: "Lead de experiencia y analista senior en la jornada de x-sell, equipo responsable de maximizar la venta cruzada de productos financieros a clientes activos del banco.",
        en: "Experience lead and senior analyst on the cross-sell journey, the team responsible for maximizing cross-selling of financial products to the bank's active customers.",
      },
      {
        es: "Integré información financiera, de comportamiento y operativa para identificar oportunidades de negocio y apoyar decisiones estratégicas del área.",
        en: "Integrated financial, behavioral, and operational data to identify business opportunities and support the area's strategic decisions.",
      },
      {
        es: "Diseñé y mantuve dashboards de seguimiento de métricas de negocio, validando consultas SQL junto a equipos de datos.",
        en: "Designed and maintained business-metrics tracking dashboards, validating SQL queries together with data teams.",
      },
      {
        es: "Coordiné con equipos internos y áreas de cumplimiento regulatorio para asegurar la viabilidad y coherencia de las iniciativas propuestas.",
        en: "Coordinated with internal teams and regulatory compliance areas to ensure the viability and consistency of proposed initiatives.",
      },
      {
        es: "Seguimiento de KPIs y análisis de performance para medir el impacto de intervenciones y proponer mejoras continuas.",
        en: "Tracked KPIs and performance analysis to measure the impact of interventions and propose continuous improvements.",
      },
      {
        es: "Trabajé con múltiples stakeholders — producto, riesgo, compliance, tecnología, negocio — facilitando la articulación entre áreas con objetivos distintos.",
        en: "Worked across multiple stakeholders — product, risk, compliance, technology, business — facilitating alignment between areas with differing objectives.",
      },
    ],
  },
  {
    role: {
      es: "Analista Comercial y de Producto",
      en: "Commercial & Product Analyst",
    },
    company: "Experiencias anteriores",
    period: { es: "2009 – 2018", en: "2009 – 2018" },
    bullets: [
      {
        es: "Desarrollé un modelo financiero para evaluar la viabilidad de un programa de recuperación de equipos: proyección de volumen recuperable, estimación de costos operativos y análisis de retorno para apoyar una decisión de inversión.",
        en: "Built a financial model to assess the viability of an equipment-recovery program: recoverable-volume projections, operating-cost estimates, and return analysis to support an investment decision.",
      },
      {
        es: "Lideré iniciativas de transformación digital para empresas medianas, coordinando equipos técnicos y operativos y gestionando múltiples actores con objetivos distintos.",
        en: "Led digital transformation initiatives for mid-sized companies, coordinating technical and operations teams and managing multiple stakeholders with differing objectives.",
      },
      {
        es: "Desarrollé y presenté propuestas a equipos directivos, comunicando hallazgos técnicos de forma clara y adaptada a distintas audiencias.",
        en: "Developed and presented proposals to executive teams, communicating technical findings clearly and tailored to different audiences.",
      },
    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: { es: "Finanzas y economía", en: "Finance & economics" },
    items: [
      "Modelado financiero",
      "Evaluación de viabilidad",
      "Análisis económico",
      "Definición de KPIs",
      "Análisis de retorno",
      "Planificación financiera",
    ],
  },
  {
    title: { es: "Sustentabilidad", en: "Sustainability" },
    items: [
      "Finanzas climáticas",
      "Mercados de carbono (VCS, CCB, Plan Vivo) — certificación en curso",
      "Soluciones basadas en la naturaleza",
      "Sustentabilidad aplicada",
    ],
  },
  {
    title: { es: "Análisis y datos", en: "Analytics & data" },
    items: [
      "SQL / Teradata / MicroStrategy / MySQL",
      "Power BI / Tableau / Looker Studio / Google Analytics",
      "Excel / Google Sheets avanzado",
      "Análisis cuantitativo",
    ],
  },
  {
    title: { es: "Coordinación", en: "Coordination" },
    items: [
      "Gestión multiactor",
      "Coordinación de equipos",
      "Comunicación técnica a distintas audiencias",
      "Inglés nivel C1",
    ],
  },
];

export const education: EducationEntry[] = [
  { title: "Lic. en Comunicación Empresarial", institution: "Universidad de Palermo · 2018–2021" },
  { title: "Programa Gerente Financiero", institution: "IMB" },
  { title: "IBM Product Owner Professional Certificate", institution: "Coursera" },
  { title: "Banca Digital", institution: "UTDT" },
  { title: "Microsoft SQL Server Professional Certificate", institution: "Coursera" },
  { title: "SQL Fundamentals for Data Analysts", institution: "Coursera" },
  { title: "User Retention Analytics Specialization", institution: "Coursera" },
  { title: "Applied Sustainability for Technical Managers Specialization", institution: "Coursera" },
];
