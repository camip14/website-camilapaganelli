import RichText from "@/components/RichText";

type Step = string | { letter: string; text: string };

// marker "letter": lista con la inicial destacada (modelo C.O.N.E.C.T.A.).
// marker "none": el número ya va dentro del texto ("**1. Entender.** …").
export default function Steps({ items, marker = "none" }: { items: Step[]; marker?: "letter" | "none" }) {
  return (
    <ol className={`steps steps--${marker === "letter" ? "letter" : "plain"}`}>
      {items.map((item, i) => {
        const text = typeof item === "string" ? item : item.text;
        return (
          <li key={i}>
            {typeof item !== "string" && (
              <span className="steps__mark" aria-hidden="true">
                {item.letter}
              </span>
            )}
            <span>
              <RichText text={text} />
            </span>
          </li>
        );
      })}
    </ol>
  );
}
