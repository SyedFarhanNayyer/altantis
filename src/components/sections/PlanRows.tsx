import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans } from "@/content/plans";

// A short price list that hands off to the full Pricing page, where plan
// details live. The most popular plan is the one black row.
type Props = {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Plan names to show (default: all). */
  only?: string[];
  /** A page's own line for a plan, in place of the plan's description. */
  notes?: Record<string, string>;
  /** Replaces the "Taxes and fees not included." line. */
  footnote?: ReactNode;
  cta?: { label: string; href: string };
  /** Badge on the most popular plan (default "Most Popular"). */
  popularLabel?: string;
  /** Adds each plan's own button ("Get Started With Pro"), linking to the contact page. */
  planButtons?: boolean;
};

export function PlanRows({
  id,
  eyebrow,
  title,
  intro,
  only,
  notes,
  footnote = "Taxes and fees not included.",
  cta = { label: "See Plans and Pricing", href: "/pricing" },
  popularLabel = "Most Popular",
  planButtons = false,
}: Props) {
  const shown = only ? plans.filter((p) => only.includes(p.name)) : plans;
  return (
    <section aria-labelledby={id} className="mt-20 bg-sand py-20 lg:mt-28 lg:py-28">
      <div className="container-page">
        <SectionHeading id={id} eyebrow={eyebrow}>
          {title}
        </SectionHeading>
        {intro && (
          <p data-reveal="fade" className="mt-3 max-w-[44rem] text-body">
            {intro}
          </p>
        )}

        <ul className="mt-10 lg:mt-12">
          {shown.map((plan) => (
            <li
              key={plan.name}
              className={`grid gap-x-8 gap-y-1 px-5 py-5 sm:items-baseline ${
                planButtons
                  ? "sm:grid-cols-[9rem_minmax(0,1fr)_auto] lg:grid-cols-[9rem_minmax(0,1fr)_auto_auto] lg:items-center"
                  : "sm:grid-cols-[9rem_minmax(0,1fr)_auto]"
              } ${
                plan.popular ? "rounded-[0.625rem] bg-night text-on-dark" : "border-b border-line"
              }`}
            >
              <h3 className="font-display text-title-lg font-bold">{plan.name}</h3>
              <p className={`text-body-snug ${plan.popular ? "text-on-dark/85" : ""}`}>
                {notes?.[plan.name] ?? plan.description}
                {plan.popular && (
                  <span className="ml-3 inline-block rounded-full bg-amber px-2.5 py-0.5 font-display text-xs font-bold whitespace-nowrap text-ink">
                    {popularLabel}
                  </span>
                )}
              </p>
              <p className={`font-display text-title-lg tabular-nums ${plan.popular ? "text-amber" : ""}`}>
                {plan.price}{" "}
                <span className={`font-body text-small ${plan.popular ? "text-on-dark/85" : ""}`}>{plan.unit}</span>
              </p>
              {planButtons && (
                <ButtonLink
                  href="/contact-us"
                  size="sm"
                  variant={plan.popular ? "primary" : "outline-brand"}
                  className="mt-3 justify-self-start sm:col-span-3 lg:col-span-1 lg:mt-0"
                >
                  {plan.cta}
                </ButtonLink>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small">{footnote}</p>
          <ButtonLink href={cta.href} className="w-full shrink-0 sm:w-auto sm:px-9">
            {cta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
