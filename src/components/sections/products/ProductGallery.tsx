"use client";

import { Phone } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import type { Product } from "@/content/products";

// Main photo with a row of thumbnails below; choosing a thumbnail swaps the
// main photo. Every photo stays in the HTML.
export function ProductGallery({ images, name }: { images: Product["images"]; name: string }) {
  const [active, setActive] = useState(0);
  const main = images[active];

  return (
    <div>
      <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[1.25rem] bg-sand p-10 sm:p-16">
        {main ? (
          <Image
            key={main.src}
            src={main.src}
            alt={main.alt}
            width={main.width}
            height={main.height}
            sizes="(min-width: 1024px) 40vw, 90vw"
            priority={active === 0}
            unoptimized
            className="h-full w-full object-contain"
          />
        ) : (
          <Phone size={120} weight="thin" aria-hidden="true" className="text-brand/45" />
        )}
      </div>

      {images.length > 1 && (
        <ul className="mt-4 grid grid-cols-4 gap-3 sm:gap-4" aria-label={`${name} photos`}>
          {images.map((image, i) => (
            <li key={image.src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                aria-label={`Show photo ${i + 1} of ${images.length}: ${image.alt}`}
                className="flex aspect-square w-full cursor-pointer items-center justify-center rounded-[0.75rem] border-2 border-transparent bg-sand p-2 transition-colors hover:border-line focus-visible:border-brand aria-pressed:border-brand"
              >
                <Image
                  src={image.src}
                  alt=""
                  width={image.width}
                  height={image.height}
                  sizes="120px"
                  unoptimized
                  className="h-full w-full object-contain"
                />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
