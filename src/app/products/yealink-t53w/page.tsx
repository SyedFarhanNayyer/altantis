import { ProductPage, productMetadata } from "@/components/sections/products/ProductPage";
import { t53w } from "@/content/products";

export const metadata = productMetadata(t53w);

export default function Page() {
  return <ProductPage product={t53w} />;
}
