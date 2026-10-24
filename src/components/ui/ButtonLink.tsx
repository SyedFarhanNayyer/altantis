import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline-light" | "outline-brand";
type Size = "lg" | "sm";

// Hover/focus lift: rises 4px on a long, soft ease-out and settles back
// on leave; pressing drops it again. Variants add their own brighten or tint.
export const lift =
  "transition-[translate,scale,filter,background-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 focus-visible:-translate-y-1 active:translate-y-0 active:scale-[0.98] active:duration-150 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-visible:translate-y-0";

const base = `${lift} inline-flex items-center justify-center rounded-full font-display font-bold whitespace-nowrap cursor-pointer`;

const variants: Record<Variant, string> = {
  primary: "bg-brand-gradient text-paper hover:brightness-105 focus-visible:brightness-105",
  "outline-light":
    "border border-on-dark text-on-dark hover:bg-on-dark/10 focus-visible:bg-on-dark/10",
  "outline-brand":
    "border border-brand text-brand-strong hover:bg-brand/8 focus-visible:bg-brand/8",
};

const sizes: Record<Size, string> = {
  lg: "h-15 px-6 text-label",
  sm: "h-[2.625rem] px-6 text-small tracking-[-0.03em]",
};

type Props = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({
  variant = "primary",
  size = "lg",
  className = "",
  ...props
}: Props) {
  return <Link className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
