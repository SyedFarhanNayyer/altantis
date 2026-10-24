import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function ClosingCta() {
  return (
    <section aria-labelledby="cta-title" className="relative isolate overflow-hidden bg-night">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/business-team-coworking.png"
          alt=""
          fill
          unoptimized
          className="object-cover"
        />
      </div>
      {/* Even scrim keeps white text legible on bright photos; fade grounds the button */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-night/45" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-night/0 to-night" />

      <div className="container-page flex min-h-[30rem] flex-col items-center justify-end pt-32 pb-[5.875rem] text-center text-on-dark lg:h-[35.4375rem]">
        <p data-reveal="fade" className="font-display text-eyebrow leading-5 tracking-[-0.02em]">
          Simple, Hassle-Free Business Phone Services
        </p>
        <h2 id="cta-title" data-reveal="lines" className="mt-2.5 max-w-[42.75rem] text-cta">
          Ready to answer more calls and{" "}
          <span className="font-bold">win more business?</span>
        </h2>
        <ButtonLink href="/contact" data-reveal="fade" className="mt-8 w-full sm:w-[18.875rem]">
          Get in Touch with Atlantis
        </ButtonLink>
      </div>
    </section>
  );
}
