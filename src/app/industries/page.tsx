import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { IndustryIndex } from "@/components/sections/industries/IndustryIndex";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { industries, industryAnchor, industryPlaceholderImage } from "@/content/industries";
import { absoluteUrl, webPageSchema } from "@/lib/schema";

const path = "/industries";
const title = "Business Phone Systems by Industry | Atlantis";
const description =
  "See how Atlantis phone systems fit your industry, from healthcare and construction to retail, restaurants and churches. Find the setup that suits your team.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function IndustriesPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("CollectionPage", path, title, description),
        {
          "@type": "ItemList",
          itemListElement: industries.map((industry, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: industry.name,
            url: absoluteUrl(industry.href),
          })),
        },
      ]}
    >
      <PageHero
        title={
          <>
            Business Phone Systems <br className="max-sm:hidden" />
            <span className="font-bold">Set Up for Your Industry</span>
          </>
        }
        body="A clinic, a job site and a restaurant all use their phones differently. Find your industry and see how Atlantis can fit the way your team works."
        primary={{ label: "Talk to Atlantis", href: "/contact-us" }}
        secondary={{ label: "See Plans and Pricing", href: "/pricing" }}
      />
      <IndustryIndex />

      {/* The photo takes 60% and swaps sides on every other row; on small screens it leads. */}
      <div className="container-page divide-y divide-line-light py-20 lg:py-28">
        {industries.map((industry, i) => {
          const id = industryAnchor(industry.href);
          return (
            <section
              key={industry.href}
              aria-labelledby={id}
              className={`grid grid-cols-[minmax(0,1fr)] items-center gap-8 py-14 first:pt-0 last:pb-0 lg:gap-16 lg:py-20 ${
                i % 2 ? "lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]" : "lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
              }`}
            >
              <div className={`relative aspect-[3/2] overflow-hidden rounded-[0.625rem] ${i % 2 ? "lg:order-last" : ""}`}>
                <Image
                  src={industryPlaceholderImage.src}
                  alt={industryPlaceholderImage.alt}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 id={id} className="scroll-mt-32 font-display text-industry-title font-bold">
                  {industry.name}
                </h2>
                <p className="mt-3 max-w-[32rem] text-body">{industry.body}</p>
                <ButtonLink
                  href={industry.href}
                  variant="outline-brand"
                  className="mt-6 w-full text-center max-xl:h-auto max-xl:min-h-15 max-xl:whitespace-normal max-xl:py-3 sm:w-auto sm:px-9"
                >
                  Explore {industry.name}
                </ButtonLink>
              </div>
            </section>
          );
        })}
      </div>

      <ClosingCta />
    </PageShell>
  );
}
