import { CaretDown, Check, Plus } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { plans } from "@/content/plans";

// One ruled rate sheet rather than separate cards, so prices and lists can be
// read straight across. Each plan is a subgrid: header, features and add-ons
// line up from column to column. Pro is the dark column, as it is in the table.
//
// `standalone` is for a page whose hero already introduces the plans: the
// visible heading goes (a hidden one keeps the outline in order) and the
// section brings its own top spacing.
export function Plans({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      id="plans"
      aria-labelledby="plans-title"
      className={`scroll-mt-24 pb-20 lg:pb-28 ${standalone ? "pt-20 lg:pt-28" : ""}`}
    >
      <div className="container-page">
        {standalone ? (
          <h2 id="plans-title" className="sr-only">
            Plans and prices
          </h2>
        ) : (
          <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div>
              <SectionHeading id="plans-title">
                Business Phone <span className="font-bold">Plans</span>
              </SectionHeading>
              <p data-reveal="fade" className="mt-3 max-w-[38rem] text-body">
                Pick the plan that fits your team. Every plan includes a business
                number, texting, mobile app, and phone menu.
              </p>
            </div>
            <ButtonLink href="#compare" variant="outline-brand" data-reveal="fade" className="w-full shrink-0 sm:w-auto sm:px-9">
              Features
            </ButtonLink>
          </div>
        )}

        <div className="grid gap-px overflow-hidden rounded-[0.625rem] border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => {
            const dark = plan.popular;
            return (
              <article
                key={plan.name}
                className={`row-span-3 grid grid-rows-subgrid gap-y-0 ${dark ? "bg-night text-on-dark" : "bg-card text-ink"}`}
              >
                <div className="flex flex-col p-6 xl:p-7">
                  <div className="flex min-h-7 items-center justify-between gap-3">
                    <h3 className="font-display text-title-lg font-bold">{plan.name}</h3>
                    {plan.popular && (
                      <span className="rounded-full bg-amber px-2.5 py-1 font-display text-xs font-bold whitespace-nowrap text-ink">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <p className={`mt-2 mb-6 text-body-snug ${dark ? "text-on-dark/85" : ""}`}>{plan.description}</p>

                  <p className="mt-auto flex flex-col">
                    <span className="font-display text-stat tabular-nums">{plan.price}</span>
                    <span className={`text-small ${dark ? "text-on-dark/85" : ""}`}>{plan.unit}</span>
                  </p>

                  <ButtonLink
                    href="/contact-us"
                    variant={dark ? "primary" : "outline-brand"}
                    className="mt-6 w-full lg:px-2"
                  >
                    {plan.cta}
                  </ButtonLink>
                  <a
                    href="#compare"
                    className={`mt-3 inline-flex min-h-6 items-center justify-center gap-1.5 self-center text-small font-medium underline-offset-4 hover:underline ${dark ? "text-amber" : "text-brand-strong"}`}
                  >
                    See all features
                    <CaretDown size={14} weight="bold" aria-hidden="true" />
                  </a>
                </div>

                <div className={`border-t px-6 py-6 xl:px-7 ${dark ? "border-on-dark/15" : "border-line"}`}>
                  <h4 className="font-display text-small font-bold">Features</h4>
                  {plan.includes && (
                    <p className={`mt-2 text-small font-medium ${dark ? "text-on-dark/85" : ""}`}>{plan.includes}</p>
                  )}
                  <ul className="mt-3 space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-2.5 text-body-sm">
                        <Check
                          size={18}
                          weight="bold"
                          aria-hidden="true"
                          className={`mt-[0.2rem] shrink-0 ${dark ? "text-amber" : "text-brand"}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`border-t px-6 py-6 xl:px-7 ${dark ? "border-on-dark/15" : "border-line"}`}>
                  <h4 className="font-display text-small font-bold">Add-ons</h4>
                  <ul className="mt-3 space-y-2">
                    {plan.addOns.map((addOn) => (
                      <li key={addOn} className={`flex items-start gap-2.5 text-small ${dark ? "text-on-dark/85" : ""}`}>
                        <Plus size={14} weight="bold" aria-hidden="true" className="mt-[0.2rem] shrink-0" />
                        {addOn}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-small">
          Taxes and fees not included. Questions about plans or add-ons?{" "}
          <Link href="/contact-us" className="font-medium text-brand-strong underline underline-offset-4 hover:no-underline">
            Ask us
          </Link>{" "}
          and we’ll help you pick.
        </p>
      </div>
    </section>
  );
}
