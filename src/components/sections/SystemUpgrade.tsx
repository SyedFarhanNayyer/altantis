import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

const benefits = [
  { title: "Keep Your Numbers", body: "Customers dial the same numbers." },
  { title: "Keep Your Call Setup", body: "Your same extensions and menus." },
  { title: "Zero Downtime", body: "Old service stays live until testing passes." },
];

export function SystemUpgrade() {
  return (
    <section aria-labelledby="upgrade-title" className="bg-sand py-20 lg:pt-[5.9375rem] lg:pb-[5.875rem]">
      <div className="container-page">
        <div className="mx-auto max-w-[58.4375rem] text-center">
          <h2 id="upgrade-title" data-reveal="lines" className="text-h2">
            Old system upgrade, an old phone system is{" "}
            <span className="font-bold">costing you more than repairs.</span>
          </h2>
          <p data-reveal="fade" className="mx-auto mt-5 max-w-[59.8125rem] text-body">
            Carriers across California are shutting down copper lines. If your
            phones, fax, alarm or elevator still rely on them, they’ll stop
            working. Atlantis moves every line to a modern, tested connection
            before your deadline, so customers keep reaching you.
          </p>
        </div>

        <ul data-reveal="stagger" className="mt-14 grid gap-[1.875rem] md:grid-cols-3">
          {benefits.map((b) => (
            <li
              key={b.title}
              className="flex min-h-[8.5rem] gap-4 rounded-[0.3125rem] border border-dashed border-line-dashed py-5 pr-4 pl-3"
            >
              <Image
                src="/icons/check-circle.svg"
                alt=""
                width={42}
                height={42}
                className="mt-0.5 size-[2.625rem] shrink-0"
              />
              <div>
                <h3 className="font-display text-title font-bold">{b.title}</h3>
                <p className="mt-2 text-body-snug">{b.body}</p>
              </div>
            </li>
          ))}
        </ul>

        <div data-reveal="fade" className="mt-14 flex flex-wrap justify-center gap-[1.875rem]">
          <ButtonLink href="/contact" className="w-full sm:w-[20.125rem]">
            Get a Free System Review
          </ButtonLink>
          <ButtonLink href="/pricing" variant="outline-brand" className="w-full sm:w-[15.375rem]">
            Review Our Pricing
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
