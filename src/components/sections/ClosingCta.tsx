import Image from "next/image";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";

type Props = {
  eyebrow?: string;
  title?: ReactNode;
  image?: string;
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
  image = "/images/business-team-coworking.png",
  imagePosition = "object-center",
}: Props) {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-night">
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt=""
          fill
          unoptimized
          className={`object-cover ${imagePosition}`}
        />
      </div>
      {/* Even scrim keeps white text legible on bright photos; fade grounds the button */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-night/45" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-night/0 to-night" />

      <div className="container-page flex min-h-[30rem] flex-col items-center justify-end pt-32 pb-[5.875rem] text-center text-on-dark lg:h-[35.4375rem]">
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
