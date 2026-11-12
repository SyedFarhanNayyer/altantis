import { Check } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { type Product, productName, productPath } from "@/content/products";
import { ProductVisual } from "./ProductVisual";

// Shop-style grid, three to a row on desktop. The photo, the title and
// "Learn More" all open the phone's page. The photo link is skipped by
// keyboard and screen readers, since the title link right after it goes to
// the same page.
export function ProductGrid({ products, headingLevel = "h3" }: { products: Product[]; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[1.875rem]">
      {products.map((p) => (
        <li key={p.slug}>
          <article className="group relative flex h-full flex-col rounded-[1.25rem] border border-line bg-card p-4 transition-colors duration-300 focus-within:border-brand hover:border-brand sm:p-5">
            <Link href={productPath(p)} tabIndex={-1} aria-hidden="true" className="block">
              <ProductVisual product={p} />
            </Link>
            <div className="flex flex-1 flex-col px-1 pt-5 pb-1">
              <p className="text-small font-bold text-subhead">{p.brand}</p>
              <Heading className="mt-1 font-display text-title-lg font-bold text-ink">
                <Link
                  href={productPath(p)}
                  className="underline-offset-4 transition-colors hover:text-brand-strong hover:underline focus-visible:text-brand-strong"
                >
                  {p.model}
                </Link>
              </Heading>
              <p className="mt-2 text-body-sm text-ink/80">{p.tagline}</p>
              {p.mobileWebAccess && (
                <p className="mt-3 flex items-center gap-2 text-small text-ink/80">
                  <Check size={16} weight="bold" aria-hidden="true" className="shrink-0 text-brand" />
                  Mobile and web access
                </p>
              )}
              <div className="mt-auto pt-6">
                <ButtonLink
                  href={productPath(p)}
                  size="sm"
                  variant="outline-brand"
                  aria-label={`Learn more about the ${productName(p)}`}
                >
                  Learn More
                </ButtonLink>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
