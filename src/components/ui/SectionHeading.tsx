import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
};

// Section title used across the homepage: an optional brand-coloured
// kicker line above an h2 that mixes regular and bold weights.
export function SectionHeading({
  id,
  eyebrow,
  children,
  align = "left",
  className = "",
}: Props) {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p data-reveal="fade" className="font-display text-eyebrow text-brand-strong">{eyebrow}</p>
      )}
      <h2 id={id} data-reveal="lines" className="text-h2 text-ink">
        {children}
      </h2>
    </div>
  );
}
