import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PageHero } from "@/components/sections/PageHero";
import { OfficeFloorPlan } from "@/components/sections/products/OfficeFloorPlan";
import { PhoneList } from "@/components/sections/products/PhoneList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { catalogFaqs, catalogPhones, catalogRows } from "@/content/catalog";
import { faqText } from "@/content/faq";
import { absoluteUrl, webPageSchema } from "@/lib/schema";

const path = "/products";
const title = "Yealink Phone Catalog: Desk and Cordless Phones | Atlantis";
const description =
  "Find the right Yealink phone for each part of your office, from the front desk to the warehouse floor. Compare the T54W, T53W and W73P cordless system.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function ProductsPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("CollectionPage", path, title, description),
        {
          "@type": "ItemList",
          itemListElement: catalogPhones.map((phone, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: `Yealink ${phone.name}`,
            url: absoluteUrl(phone.href),
          })),
        },
        {
          "@type": "FAQPage",
          mainEntity: catalogFaqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: faqText(f) },
          })),
        },
      ]}
    >
      <PageHero
        title={
          <>
            Yealink Phones,{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Chosen for Where Your Team Works</span>
          </>
        }
        body="The right phone depends on who’s using it and where they work. Start with a room in your office and see which phone suits it."
        primary={{ label: "Ask Which Phone Fits", href: "/contact-us" }}
        secondary={{ label: "Compare Phones", href: "#compare-phones" }}
      />

      <section aria-labelledby="floor-plan-title" className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading id="floor-plan-title" eyebrow="Your Office">
            Pick a room,{" "}
            <span className="font-bold">find the phone.</span>
          </SectionHeading>
          <div className="mt-10 lg:mt-14">
            <OfficeFloorPlan />
          </div>
        </div>
      </section>

      <section id="compare-phones" aria-labelledby="compare-phones-title" className="scroll-mt-24 bg-sand py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading id="compare-phones-title" eyebrow="Side by Side">
            Three phones, <span className="font-bold">compared.</span>
          </SectionHeading>
          <div
            role="region"
            aria-labelledby="compare-phones-title"
            tabIndex={0}
            className="relative mt-10 overflow-x-auto lg:mt-12"
          >
            <table className="w-full min-w-[46rem] table-fixed border-separate border-spacing-0">
              <caption className="sr-only">Yealink T54W, T53W and W73P compared</caption>
              <thead>
                <tr>
                  <td className="w-[22%] border-b border-line-strong" />
                  {catalogPhones.map((phone) => (
                    <th key={phone.name} scope="col" className="border-b border-line-strong px-4 pb-4 text-left">
                      <Link
                        href={phone.href}
                        className="font-display text-title-lg font-bold underline-offset-4 hover:text-brand-strong hover:underline focus-visible:text-brand-strong"
                      >
                        {phone.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {catalogRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className="border-b border-line py-4 pr-4 text-left align-top text-body-sm font-bold">
                      {row.label}
                    </th>
                    {row.values.map((value, i) => (
                      <td key={catalogPhones[i].name} className="border-b border-line px-4 py-4 align-top text-body-sm">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <PhoneList />

      <FaqSplit
        id="catalog-faq-title"
        title={
          <>
            Questions about <span className="font-bold">our phones.</span>
          </>
        }
        items={catalogFaqs}
      />
      <ClosingCta />
    </PageShell>
  );
}
