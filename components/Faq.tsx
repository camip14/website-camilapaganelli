import RichText from "@/components/RichText";
import type { FaqItem } from "@/lib/content-types";

// <details> nativo: accesible y navegable con teclado, sin JavaScript.
export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>
            <RichText text={item.a} />
          </p>
        </details>
      ))}
    </div>
  );
}
