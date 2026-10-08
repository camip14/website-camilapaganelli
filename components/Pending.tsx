import { siteConfig } from "@/site.config";

// Marcador [PENDIENTE]: visible solo en desarrollo (o con NEXT_PUBLIC_SHOW_PENDING=1).
// En producción no renderiza nada: el dato no se inventa ni se muestra a medias.
export default function Pending({ detail }: { detail: string }) {
  if (!siteConfig.showPending) return null;
  return (
    <span className="pending" role="note">
      PENDIENTE: {detail}
    </span>
  );
}
