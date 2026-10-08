import Action, { type ActionVariant } from "@/components/Action";
import { resolveAction } from "@/lib/actions";
import type { ActionItem } from "@/lib/content-types";
import type { Locale } from "@/lib/locales";

// El primer elemento visible es el botón principal; los demás son secundarios.
// Si ningún elemento es visible (producción sin destinos definidos), no renderiza nada.
export default function CtaGroup({
  items,
  locale,
  textStyle = false,
  equalWeight = false,
}: {
  items: ActionItem[];
  locale: Locale;
  textStyle?: boolean;
  // Todos los botones con el mismo peso visual (p. ej. las tres puertas al final de /sobre-mi).
  equalWeight?: boolean;
}) {
  const resolved = items
    .map((item) => resolveAction(item, locale))
    .filter((action): action is NonNullable<typeof action> => action !== null);

  if (resolved.length === 0) return null;

  return (
    <div className="cta-group">
      {resolved.map((action, i) => {
        const variant: ActionVariant = textStyle ? "text" : i === 0 && !equalWeight ? "primary" : "secondary";
        return <Action key={`${action.label}-${i}`} action={action} variant={variant} />;
      })}
    </div>
  );
}
