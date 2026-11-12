import { Phone } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import type { Product } from "@/content/products";

// A product card's photo on a sand panel. A phone without a photo shows a
// phone outline, so every card keeps the same shape. Decorative here: the
// card's title names the phone.
export function ProductVisual({ product }: { product: Product }) {
  const image = product.images[0];
  return (
    <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[0.875rem] bg-sand p-8">
      {image ? (
        <Image
          src={image.src}
          alt=""
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 45vw, 90vw"
          unoptimized
          className="h-full w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 motion-reduce:transition-none"
        />
      ) : (
        <Phone size={72} weight="thin" aria-hidden="true" className="text-brand/45" />
      )}
    </div>
  );
}
