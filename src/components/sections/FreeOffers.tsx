import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

const offers = [
  {
    title: "Free Site Survey",
    body: "A technician visits your office, reviews your phones, lines and network, and shows you where calls are slipping through. No cost and no obligation.",
    cta: "Book My Survey",
    href: "/free-site-survey",
  },
  {
    title: "Free Copper Line Audit",
    body: "Find out which of your lines (phones, fax, alarms, elevators) depend on copper, and how to switch them before your carrier’s deadline.",
    cta: "Check My Lines",
    href: "/copper-line-audit",
  },
  {
    title: "Free Quote Comparison",
    body: "Got a quote from another provider? Send it over. We’ll compare it line by line, including installation, phones and support, so you know the real cost.",
    cta: "Compare My Quote",
    href: "/quote-comparison",
  },
];

export function FreeOffers() {
  return (
    <section id="free-offers" aria-labelledby="offers-title" className="scroll-mt-24 pt-20 lg:pt-[4.375rem]">
      <div className="container-page">
        <SectionHeading id="offers-title" eyebrow="Start growing, at no cost." align="center">
          Three free ways to <span className="font-bold">win more calls</span>
        </SectionHeading>

        <ul data-reveal="stagger" className="mt-12 grid gap-[1.875rem] md:grid-cols-2 lg:mt-[3.375rem] lg:grid-cols-3">
          {offers.map((o) => (
            <li
              key={o.title}
              className="flex flex-col last:md:col-span-2 last:lg:col-span-1 rounded-[0.625rem] border border-line-light bg-card px-[1.6875rem] pt-8 pb-8"
            >
              <h3 className="px-1.5 font-display text-title-lg font-bold">{o.title}</h3>
              <p className="mt-5 mb-6 px-1.5 text-body">{o.body}</p>
              <ButtonLink
                href={o.href}
                variant="outline-brand"
                size="sm"
                className="mt-auto self-start"
              >
                {o.cta}
              </ButtonLink>
            </li>
          ))}
        </ul>

        <p data-reveal="fade" className="mt-8 text-center font-display text-caption lg:mt-[2.8125rem]">
          Find out what your phones could be doing for your business.
        </p>

        <hr className="mt-16 border-line lg:mt-[5.75rem]" />
      </div>
    </section>
  );
}
