import { ProductPage, productMetadata } from "@/components/sections/products/ProductPage";
import { w73p } from "@/content/products";

export const metadata = productMetadata(w73p);

export default function Page() {
  return <ProductPage product={w73p} />;
}
