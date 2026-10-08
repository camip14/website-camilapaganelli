// Recurso gráfico del sistema de diseño (bloques de color + líneas finas). Se usa en /sobre-mi
// mientras no haya foto o ilustración definitiva; es decorativo.
export default function BrandGraphic({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 480"
      role="img"
      aria-label=""
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="400" height="480" fill="var(--surface)" />
      <rect x="40" y="0" width="150" height="480" fill="var(--sage)" />
      <rect x="210" y="90" width="110" height="170" fill="var(--amber)" />
      <rect x="210" y="260" width="110" height="80" fill="var(--sage-tint)" />
      <rect x="320" y="0" width="80" height="480" fill="var(--dark-bg)" />
      <line x1="40" y1="140" x2="400" y2="140" stroke="var(--line)" strokeOpacity="0.7" />
      <line x1="40" y1="220" x2="400" y2="220" stroke="var(--line)" strokeOpacity="0.7" />
      <line x1="40" y1="380" x2="400" y2="380" stroke="var(--line)" strokeOpacity="0.7" />
    </svg>
  );
}
