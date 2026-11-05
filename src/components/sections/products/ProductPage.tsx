import { DeviceMobile, GearSix, Monitor, PhoneCall, UsersThree, Waveform, WifiHigh } from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { PageHero } from "@/components/sections/PageHero";
import type { Product } from "@/content/products";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { ProductFeatures } from "./ProductFeatures";
import { ProductFigures } from "./ProductFigures";
import { ProductPhoto } from "./ProductPhoto";
import { ProductSpecs } from "./ProductSpecs";

const featureIcons = {
  desk: [Monitor, Waveform, PhoneCall, WifiHigh],
  cordless: [UsersThree, Waveform, GearSix, DeviceMobile],
};

const pageTitle = (product: Product) => `Yealink ${product.model} ${product.kind}: Specs and Features | Atlantis`;

export const productMetadata = (product: Product): Metadata => {
  const title = pageTitle(product);
  const { path, description } = product;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: { url: path, title, description },
    twitter: { title, description },
  };
};

// One information page per phone: no cart or prices, and every route leads to
// the contact page.
export function ProductPage({ product }: { product: Product }) {
  const { model, path, description } = product;
  const name = `Yealink ${model}`;
  const contact = `Ask About the ${model}`;

  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, pageTitle(product), description),
        {
          "@type": "Product",
          name,
          brand: { "@type": "Brand", name: "Yealink" },
          category: product.category,
          description,
          image: absoluteUrl(product.frontImage.src),
          url: absoluteUrl(path),
        },
      ]}
    >
      <PageHero
        title={
          <>
            {name} <br className="max-sm:hidden" />
            <span className="font-bold">{product.category}</span>
          </>
        }
        body={product.heroBody}
        primary={{ label: contact, href: "/contact-us" }}
        secondary={{ label: "See Specifications", href: "#specs" }}
        media={
          <ProductPhoto
            image={product.heroImage}
            note={product.note}
            callouts={product.callouts}
          />
        }
      />
      <ProductFigures title={`${name} at a glance`} figures={product.figures} />
      <ProductFeatures
        id="product-features-title"
        title={
          <>
            Key features <span className="font-bold">of the {model}.</span>
          </>
        }
        features={product.features.map((feature, i) => ({ ...feature, Icon: featureIcons[product.featureIcons][i] }))}
        image={product.frontImage}
      />
      <ProductSpecs product={name} contact={contact} specs={product.specs} />
      <ClosingCta />
    </PageShell>
  );
}
