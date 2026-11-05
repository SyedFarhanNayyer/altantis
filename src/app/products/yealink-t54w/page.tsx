import { ProductPage, productMetadata } from "@/components/sections/products/ProductPage";
import { t54w } from "@/content/products";

export const metadata = productMetadata(t54w);

export default function Page() {
  return <ProductPage product={t54w} />;
}
