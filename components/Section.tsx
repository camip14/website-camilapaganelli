import type { ReactNode } from "react";

export default function Section({
  id,
  title,
  tone = "default",
  children,
}: {
  id?: string;
  title?: string;
  tone?: "default" | "surface" | "dark";
  children: ReactNode;
}) {
  const className = `section${tone === "surface" ? " section--surface" : ""}${tone === "dark" ? " section--dark" : ""}`;
  return (
    <section id={id} className={className}>
      <div className="wrap">
        {title && <h2 className="section__title">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
