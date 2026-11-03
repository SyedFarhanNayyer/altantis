import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans } from "@/content/plans";

// A short price list that hands off to the full Pricing page, where plan
// details live. The most popular plan is the one black row.
export function PlanRows({ id, title, intro }: { id: string; title: ReactNode; intro?: ReactNode }) {
  return (
    <section aria-labelledby={id} className="mt-20 bg-sand py-20 lg:mt-28 lg:py-28">
      <div className="container-page">
        <SectionHeading id={id}>{title}</SectionHeading>
        {intro && (
          <p data-reveal="fade" className="mt-3 max-w-[44rem] text-body">
            {intro}
          </p>
        )}

        <ul className="mt-10 lg:mt-12">
          {plans.map((plan) => (
            <li
              key={plan.name}
              className={`grid gap-x-8 gap-y-1 px-5 py-5 sm:grid-cols-[9rem_minmax(0,1fr)_auto] sm:items-baseline ${
                plan.popular ? "rounded-[0.625rem] bg-night text-on-dark" : "border-b border-line"
              }`}
            >
              <h3 className="font-display text-title-lg font-bold">{plan.name}</h3>
              <p className={`text-body-snug ${plan.popular ? "text-on-dark/85" : ""}`}>
                {plan.description}
                {plan.popular && (
                  <span className="ml-3 inline-block rounded-full bg-amber px-2.5 py-0.5 font-display text-xs font-bold whitespace-nowrap text-ink">
                    Most Popular
                  </span>
                )}
              </p>
              <p className={`font-display text-title-lg tabular-nums ${plan.popular ? "text-amber" : ""}`}>
                {plan.price}{" "}
                <span className={`font-body text-small ${plan.popular ? "text-on-dark/85" : ""}`}>{plan.unit}</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-small">Taxes and fees not included.</p>
          <ButtonLink href="/pricing" className="w-full shrink-0 sm:w-auto sm:px-9">
            See Plans and Pricing
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
