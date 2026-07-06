import ServicePage from "@/components/ServicePage";

export default function ESG() {
  return (
    <ServicePage
      kicker="Servicio"
      title="ESG"
      intro="Diagnóstico y estrategia de sustentabilidad medibles, no checklists. La sustentabilidad no se declara — se mide. Trabajo desde el relevamiento inicial hasta la hoja de ruta hacia una certificación o un reporte de impacto."
      incluye={[
        "Diagnóstico ambiental, social y de gobernanza (ESG)",
        "Hoja de ruta hacia certificación B u otro estándar",
        "Definición de indicadores y línea base",
        "Reporting de impacto para inversores o clientes",
      ]}
      paraQuienEs={[
        "PyMEs que quieren certificarse como Empresa B",
        "Empresas que necesitan reportar impacto a stakeholders",
        "Organizaciones sin un punto de partida claro en sustentabilidad",
      ]}
    />
  );
}
