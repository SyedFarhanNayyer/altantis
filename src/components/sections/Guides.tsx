import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";

const guides = [
  {
    title: "The Real Cost of Missed Business Calls",
    summary: "What unanswered calls cost a small business, and simple ways to fix it.",
    href: "/news/real-cost-of-missed-business-calls",
    image: "/images/guide-missed-business-calls.png",
    alt: "Small business owner missing an incoming phone call",
    position: "object-[0%_51%]",
  },
  {
    title: "Copper Line Retirement: Protect Your Business Before the Deadline",
    summary: "Which lines are affected, what replaces them, and how to plan the switch.",
    href: "/news/copper-line-retirement",
    image: "/images/guide-copper-line-retirement.jpg",
    alt: "Copper telephone cables being retired",
    position: "object-[100%_71%]",
  },
  {
    title: "5 Signs Your Phone System Is Costing You Customers",
    summary: "Warning signs your current setup is turning callers away.",
    href: "/news/signs-your-phone-system-is-costing-you-customers",
    image: "/images/guide-phone-system-signs.jpg",
    alt: "Office desk phone with an outdated phone system",
    position: "object-[0%_69%]",
  },
];

export function Guides() {
  return (
    <section aria-labelledby="guides-title" className="pb-20 lg:pb-[7.375rem]">
      <div className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <h2 id="guides-title" data-reveal="lines" className="text-h2 leading-tight">
            <span className="font-bold">Grow smarter</span> with these guides.
          </h2>
          <ButtonLink href="/news" data-reveal="fade" className="w-full sm:w-[18.875rem]">
            Explore All News and Updates
          </ButtonLink>
        </div>

        <ul data-reveal="stagger" className="mt-12 grid gap-[1.875rem] md:grid-cols-2 lg:mt-[4.1875rem] lg:grid-cols-3">
          {guides.map((g) => (
            <li key={g.href} className="group/item last:md:col-span-2 last:lg:col-span-1">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-line-light bg-card group-last/item:md:flex-row group-last/item:lg:flex-col">
                <div className="relative aspect-[380/226] overflow-hidden group-last/item:md:aspect-auto group-last/item:md:min-h-56 group-last/item:md:w-1/2 group-last/item:lg:aspect-[380/226] group-last/item:lg:min-h-0 group-last/item:lg:w-auto">
                  <Image
                    src={g.image}
                    alt={g.alt}
                    fill
                    unoptimized
                    className={`object-cover ${g.position} transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
                  />
                </div>
                <div className="flex flex-1 flex-col px-[1.0625rem] pt-5 pb-5 group-last/item:md:px-6 group-last/item:md:pt-6 group-last/item:lg:px-[1.0625rem] group-last/item:lg:pt-5">
                  <h3 className="font-display text-card-title font-bold text-night">
                    <Link href={g.href} className="after:absolute after:inset-0">
                      {g.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-body-sm tracking-[-0.02em] text-night">{g.summary}</p>
                  <span
                    aria-hidden="true"
                    className="mt-auto pt-6 font-display text-small leading-[1.5625rem] font-bold tracking-[-0.02em] text-brand-strong group-hover:underline"
                  >
                    Read More
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
