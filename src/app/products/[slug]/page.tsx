import { Check } from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ProductGrid } from "@/components/sections/products/ProductGrid";
import { ProductGallery } from "@/components/sections/products/ProductGallery";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getProduct,
  type Product,
  productName,
  productPath,
  products,
  similarProducts,
} from "@/content/products";
import { absoluteUrl, webPageSchema } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

const pageTitle = (p: Product) => `${productName(p)} ${p.kind}: Features and Specs | Atlantis`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProduct((await params).slug);
  // src/proxy.ts turns unknown slugs into a real 404 before this runs.
  if (!product) notFound();
  const title = pageTitle(product);
  const path = productPath(product);
  const { description } = product;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { url: path, title, description },
    twitter: { title, description },
  };
}

// One template for every phone: photo on the left; name, overview and
// features on the right; the specification table below; then three similar
// phones. No cart or prices: every route leads to the contact page.
export default async function ProductDetailPage({ params }: Props) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const name = productName(product);
  const path = productPath(product);
  const contact = `Ask About the ${product.model}`;

  return (
    <PageShell
      solidHeader
      schema={[
        webPageSchema("WebPage", path, pageTitle(product), product.description),
        {
          "@type": "Product",
          name,
          model: product.model,
          brand: { "@type": "Brand", name: product.brand },
          category: product.kind,
          description: product.description,
          ...(product.images.length > 0 && { image: product.images.map((i) => absoluteUrl(i.src)) }),
          url: absoluteUrl(path),
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
            { "@type": "ListItem", position: 3, name, item: absoluteUrl(path) },
          ],
        },
      ]}
    >
      <section aria-labelledby="hero-title" className="bg-canvas text-ink">
        <div className="container-page pt-32 pb-16 lg:pt-40 lg:pb-24">
          <nav aria-label="Breadcrumb" data-intro>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-small text-ink/75">
              <li>
                <Link href="/" className="underline-offset-4 hover:text-brand-strong hover:underline focus-visible:text-brand-strong">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/products" className="underline-offset-4 hover:text-brand-strong hover:underline focus-visible:text-brand-strong">
                  Products
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-bold text-ink">
                {product.model}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid items-start gap-10 lg:mt-10 lg:grid-cols-2 lg:gap-16">
            <ProductGallery images={product.images} name={name} />

            <div>
              <p data-intro className="font-display text-eyebrow text-subhead">
                {product.brand}
              </p>
              <h1 id="hero-title" data-intro="lines" className="mt-1 text-h2 font-bold">
                {product.model}
              </h1>
              <p data-intro className="mt-2 text-body-sm text-ink/75">
                {product.kind}, {product.series}
              </p>
              <p data-intro className="mt-5 max-w-[37.5rem] text-body text-ink/85">
                {product.overview}
              </p>

              <p data-intro className="mt-5 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-small">
                {product.mobileWebAccess ? (
                  <>
                    <Check size={16} weight="bold" aria-hidden="true" className="shrink-0 text-brand" />
                    Mobile and web access
                  </>
                ) : (
                  "Mobile and web access: not applicable"
                )}
              </p>

              <h2 data-intro className="mt-9 font-display text-title font-bold">
                Key features
              </h2>
              <ul data-intro className="mt-4 space-y-3">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-body-sm text-ink/85">
                    <Check size={18} weight="bold" aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-4 sm:gap-5">
                <ButtonLink href="/contact-us" data-intro className="w-full sm:w-auto sm:px-9">
                  {contact}
                </ButtonLink>
                <ButtonLink href="#specs" data-intro variant="outline-brand" className="w-full sm:w-auto sm:px-9">
                  See Specifications
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="specs" aria-labelledby="specs-title" className="scroll-mt-24 bg-sand py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading id="specs-title" eyebrow="Specifications">
              {product.model} <span className="font-bold">at a glance.</span>
            </SectionHeading>
            <p data-reveal="fade" className="mt-3 text-body">
              We configure every phone to your specifications and test it before it ships, so it’s ready
              when you plug it in. Not sure this is the right phone? Tell us how your team works and
              we’ll help you choose.
            </p>
          </div>

          <table className="w-full rounded-[0.625rem] border border-line bg-card">
            <caption className="sr-only">{name} specifications</caption>
            <tbody>
              {product.specs.map((spec, i) => (
                <tr key={spec.label}>
                  <th
                    scope="row"
                    className={`w-[38%] py-4 pr-4 pl-5 text-left align-top text-body-sm font-bold sm:pl-7 ${i ? "border-t border-line" : ""}`}
                  >
                    {spec.label}
                  </th>
                  <td className={`py-4 pr-5 align-top text-body-sm sm:pr-7 ${i ? "border-t border-line" : ""}`}>
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="similar-title" className="py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading id="similar-title" eyebrow="You May Also Like">
              Other similar <span className="font-bold">products.</span>
            </SectionHeading>
            <ButtonLink href="/products" variant="outline-brand" size="sm" data-reveal="fade">
              See All Phones
            </ButtonLink>
          </div>
          <div className="mt-10 lg:mt-12">
            <ProductGrid products={similarProducts(product)} />
          </div>
        </div>
      </section>

      <ClosingCta image={null} />
    </PageShell>
  );
}
