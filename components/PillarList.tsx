import type { EmpresasContent } from "@/lib/content-types";

// Cada pilar lleva su pregunta de negocio como encabezado.
export default function PillarList({ items }: { items: EmpresasContent["pillars"]["items"] }) {
  return (
    <div className="pillars">
      {items.map((item) => (
        <article key={item.question} className="pillar">
          <h3 className="pillar__q">{item.question}</h3>
          <p>
            <strong>{item.lead}</strong> {item.text}
          </p>
        </article>
      ))}
    </div>
  );
}
