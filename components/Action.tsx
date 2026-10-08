import Link from "next/link";
import Pending from "@/components/Pending";
import type { ResolvedAction } from "@/lib/actions";

export type ActionVariant = "primary" | "secondary" | "text";

export default function Action({
  action,
  variant = "secondary",
  small = false,
}: {
  action: ResolvedAction;
  variant?: ActionVariant;
  small?: boolean;
}) {
  const className =
    variant === "text"
      ? "text-link"
      : `btn${variant === "primary" ? " btn--primary" : ""}${small ? " btn--small" : ""}`;

  // Destino todavía no definido (solo llega acá en desarrollo): botón punteado + marcador.
  if (!action.href) {
    return (
      <span className={`${className} btn--pending`} aria-disabled="true">
        {action.label}
        {action.pending && <Pending detail={action.pending} />}
      </span>
    );
  }

  const track = action.track ? { "data-track": action.track } : {};

  if (action.external) {
    return (
      <a
        className={className}
        href={action.href}
        target="_blank"
        rel="noopener noreferrer"
        {...(action.download ? { download: true } : {})}
        {...track}
      >
        {action.label}
      </a>
    );
  }

  if (action.href.startsWith("#")) {
    return (
      <a className={className} href={action.href}>
        {action.label}
      </a>
    );
  }

  return (
    <Link className={className} href={action.href} {...track}>
      {action.label}
    </Link>
  );
}
