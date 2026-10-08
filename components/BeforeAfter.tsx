import Section from "@/components/Section";
import { Prose } from "@/components/RichText";
import type { BeforeAfter as BeforeAfterData } from "@/lib/content-types";

function Column({ data, end = false }: { data: BeforeAfterData["start"]; end?: boolean }) {
  return (
    <div className={`ba__col${end ? " ba__col--end" : ""}`}>
      <h3 className="ba__title">{data.title}</h3>
      {data.items && (
        <ul>
          {data.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {data.text && <Prose text={data.text} className="" />}
    </div>
  );
}

// Dos columnas: de dónde partimos y adónde llegamos.
export default function BeforeAfter({ data }: { data: BeforeAfterData }) {
  return (
    <Section title={data.title}>
      <div className="ba">
        <Column data={data.start} />
        <span className="ba__arrow" aria-hidden="true">
          →
        </span>
        <Column data={data.end} end />
      </div>
    </Section>
  );
}
