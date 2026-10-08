import RichText from "@/components/RichText";

export default function Timeline({ items }: { items: string[] }) {
  return (
    <ol className="timeline">
      {items.map((item) => (
        <li key={item}>
          <RichText text={item} />
        </li>
      ))}
    </ol>
  );
}
