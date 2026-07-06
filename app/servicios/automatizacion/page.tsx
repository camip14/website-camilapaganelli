import ServicePage from "@/components/ServicePage";

export default function Automatizacion() {
  return (
    <ServicePage
      kicker="Servicio"
      title="Automatización"
      intro="Procesos que se ejecutan solos. Diseño e implemento automatizaciones con Make, N8N y Botmaker para que los equipos dejen de perder tiempo en tareas repetitivas y puedan enfocarse en lo que realmente requiere criterio humano."
      incluye={[
        "Mapeo y rediseño de procesos operativos",
        "Automatizaciones con Make, N8N y Botmaker",
        "Chatbots y flujos conversacionales con AI",
        "Integración entre sistemas y bases de datos existentes",
      ]}
      paraQuienEs={[
        "Equipos saturados de tareas manuales y repetitivas",
        "Empresas que quieren escalar operaciones sin sumar headcount",
        "Áreas de cobranzas, atención al cliente o back office",
      ]}
    />
  );
}
