import ServicePage from "@/components/ServicePage";

export default function FPABI() {
  return (
    <ServicePage
      kicker="Servicio"
      title="FP&A & BI"
      intro="Modelos financieros, forecasting y dashboards que convierten datos dispersos en decisiones. Trabajo con Power BI, Microsoft Fabric, Databricks, Delta Lake y Azure Data Factory para que la información llegue lista para decidir, no para interpretar."
      incluye={[
        "Modelos de forecasting y budget vs. actual",
        "Dashboards ejecutivos en Power BI / Google Data Studio",
        "Arquitectura de datos: Fabric, Databricks, Delta Lake, Data Factory",
        "Reportes financieros recurrentes automatizados",
      ]}
      paraQuienEs={[
        "Equipos financieros sin capacidad de análisis dedicada",
        "Empresas con datos dispersos en múltiples sistemas",
        "Organizaciones que reportan a inversores o directorio",
      ]}
    />
  );
}
