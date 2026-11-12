import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PageHero } from "@/components/sections/PageHero";
import { ProductGrid } from "@/components/sections/products/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { catalogFaqs } from "@/content/catalog";
import { faqText } from "@/content/faq";
import { productName, productPath, products } from "@/content/products";
import { absoluteUrl, webPageSchema } from "@/lib/schema";

const path = "/products";
const title = "Business Phones: Grandstream and Yealink | Atlantis";
const description =
  "Grandstream and Yealink desk and cordless phones, configured to your specifications and shipped ready to plug in. Compare features and specs for each phone.";

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
          itemListElement: products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: productName(p),
            url: absoluteUrl(productPath(p)),
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
            Business Phones,{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Configured and Ready to Plug In</span>
          </>
        }
        body="Desk and cordless phones from Grandstream and Yealink. We set up each one for your business and ship it ready to use."
        primary={{ label: "Ask Which Phone Fits", href: "/contact-us" }}
        secondary={{ label: "See Plans and Pricing", href: "/pricing" }}
      />

      <section id="all-phones" aria-labelledby="all-phones-title" className="scroll-mt-24 py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading id="all-phones-title" eyebrow="All Phones">
              Find the right phone <span className="font-bold">for your team.</span>
            </SectionHeading>
            <p data-reveal="fade" className="text-body-sm text-ink/80">
              {products.length} phones
            </p>
          </div>
          <div className="mt-10 lg:mt-12">
            <ProductGrid products={products} headingLevel="h3" />
          </div>
        </div>
      </section>

      <FaqSplit
        id="catalog-faq-title"
        title={
          <>
            Questions about <span className="font-bold">our phones.</span>
          </>
        }
        items={catalogFaqs}
      />
      <ClosingCta image={null} />
    </PageShell>
  );
}
