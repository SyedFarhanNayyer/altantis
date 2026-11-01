import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

const costs = [
  {
    title: "Monthly Service",
    body: "Priced per user or per line, with calling and features built in.",
    cta: "Request a Quote",
  },
  {
    title: "One-Time Setup",
    body: "Phones, installation and any cabling or conversion hardware your site needs.",
    cta: "Book a Site Survey",
  },
  {
    title: "Included With Every System",
    body: "Site survey, call flow design, number transfer, 911 setup, staff training and local support.",
    cta: "Compare My Current Quote",
  },
];

// Homepage Free Offers cards.
export function Investment() {
  return (
    <section id="pricing" aria-labelledby="pricing-title" className="scroll-mt-24 py-20 lg:pt-[6.25rem] lg:pb-[7.375rem]">
      <div className="container-page">
        <SectionHeading id="pricing-title" eyebrow="Pricing" align="center">
          Clear pricing,{" "}
          <br className="max-sm:hidden" />
          <span className="font-bold">itemized before work begins.</span>
        </SectionHeading>

        <ul data-reveal="stagger" className="mt-12 grid gap-[1.875rem] md:grid-cols-2 lg:mt-[3.375rem] lg:grid-cols-3">
          {costs.map((c) => (
            <li
              key={c.title}
              className="flex flex-col rounded-[0.625rem] border border-line-light bg-card px-[1.6875rem] pt-8 pb-8 last:md:col-span-2 last:lg:col-span-1"
            >
              <h3 className="px-1.5 font-display text-title-lg font-bold">{c.title}</h3>
              <p className="mt-5 mb-6 px-1.5 text-body">{c.body}</p>
              <ButtonLink href="/contact-us" variant="outline-brand" size="sm" className="mt-auto self-start">
                {c.cta}
              </ButtonLink>
            </li>
          ))}
        </ul>

        <p data-reveal="fade" className="mt-8 text-center font-display text-caption lg:mt-[2.8125rem]">
          One proposal, every cost listed, with no hidden fees.
        </p>
      </div>
    </section>
  );
}
