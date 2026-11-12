import { Camera } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  /** `null` shows a plain black band with no photo. */
  image?: string | null;
  /** Tailwind object-position class, for photos whose subject isn't centered. */
  imagePosition?: string;
};

export function ClosingCta({
  eyebrow = "Your Next Business Connection Starts Here.",
  title = (
    <>
      Ready to make your next connection <span className="font-bold">with Atlantis.</span>
    </>
  ),
  image = "/images/placeholder-photo.svg",
  imagePosition = "object-center",
}: Props) {
  // Placeholder photos show as a visible striped banner with dark text and no
  // scrim, so it's obvious which banner still needs its real photo.
  const placeholder = image?.includes("placeholder") ?? false;
  const src = placeholder ? "/images/placeholder-banner.svg" : image;
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-night">
      {image && (
        <>
          <div className="absolute inset-0 -z-10">
            <Image
              src={src as string}
              alt=""
              fill
              unoptimized
              className={`object-cover ${placeholder ? "object-top" : imagePosition}`}
            />
          </div>
          {/* Even scrim keeps white text legible on bright photos; fade grounds the button */}
          {!placeholder && (
            <>
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-night/45" />
              <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-night/0 to-night" />
            </>
          )}
        </>
      )}

      <div
        className={`container-page flex flex-col items-center text-center ${placeholder ? "text-ink" : "text-on-dark"} ${
          image
            ? "min-h-[30rem] justify-end pt-32 pb-[5.875rem] lg:h-[35.4375rem]"
            : "justify-center py-20 lg:py-28"
        }`}
      >
        {placeholder && (
          <p className="mb-10 inline-flex items-center gap-2.5 rounded-full border-2 border-dashed border-brand-strong bg-card px-5 py-2.5 text-small font-bold text-ink">
            <Camera size={20} aria-hidden="true" className="text-brand-strong" />
            Photo needed: banner background
          </p>
        )}
        <p data-reveal="fade" className="font-display text-eyebrow leading-5 tracking-[-0.02em]">
          {eyebrow}
        </p>
        <h2 id="cta-title" data-reveal="lines" className="mt-2.5 max-w-[42.75rem] text-cta">
          {title}
        </h2>
        <ButtonLink href="/contact-us" data-reveal="fade" className="mt-8 w-full sm:w-[18.875rem]">
          Get in Touch with Sales
        </ButtonLink>
      </div>
    </section>
  );
}
