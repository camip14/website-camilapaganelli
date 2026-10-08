import { Fragment } from "react";
import Pending from "@/components/Pending";
import { siteConfig } from "@/site.config";

// Formato mínimo de las strings de contenido:  **negrita**  *cursiva*  {{pending:detalle}}
const TOKEN = /(\{\{pending:[^}]*\}\}|\*\*[^*]+\*\*|\*[^*]+\*)/g;

export default function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN).filter((part) => part !== "");
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("{{pending:")) return <Pending key={i} detail={part.slice(10, -2).trim()} />;
        if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
        if (part.startsWith("*")) return <em key={i}>{part.slice(1, -1)}</em>;
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

// ¿Queda algo visible una vez que se esconden los marcadores pendientes?
export function hasVisibleText(text: string): boolean {
  const visible = siteConfig.showPending ? text : text.replace(/\{\{pending:[^}]*\}\}/g, "");
  return visible.trim() !== "";
}

export function Prose({
  text,
  className = "prose",
}: {
  text: string;
  className?: string;
}) {
  if (!hasVisibleText(text)) return null;
  return (
    <p className={className}>
      <RichText text={text} />
    </p>
  );
}
