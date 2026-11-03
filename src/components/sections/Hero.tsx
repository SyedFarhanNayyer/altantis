import { HeroMedia } from "@/components/animation/HeroMedia";
import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col justify-center overflow-hidden bg-night"
    >
      <HeroMedia />

      {/* Overlays from Figma: left wash, top and bottom fades */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-night/88 to-night/55 lg:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-[66%] bg-gradient-to-r from-night from-[32%] to-night/0 opacity-85 lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[6.6875rem] bg-gradient-to-b from-night to-night/0 opacity-70"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-[12.25rem] bg-gradient-to-t from-night to-night/0"
      />

      {/* Fills one screen; top padding clears the 92px header */}
      <div className="container-page relative pt-[6.5rem] pb-10 lg:pt-[7.75rem] lg:pb-12">
        <div data-scroll-out className="max-w-[44rem] text-on-dark">
          <h1 id="hero-title" data-intro="lines" className="mb-4 font-display text-tagline text-amber">
            Celebrate life and stay connected to what matters.
          </h1>
          <h2 data-intro="lines" className="text-hero-title">
            Business Phone Systems.{" "}
            <span className="font-bold">Built to Elevate Your Business.</span>
          </h2>

          <p data-intro className="mt-4 max-w-[35.75rem] text-body">
            Stay connected with customers at the office, on your mobile or after
            hours. Atlantis business phone systems bring flexible call routing
            and everyday calling features together, with phones preconfigured
            for easy setup and ongoing support from our team.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 sm:gap-5 lg:mt-11">
            <ButtonLink href="/contact" data-intro className="w-full sm:w-[18.25rem]">
              Request a Free Consultation
            </ButtonLink>
            <ButtonLink
              href="/business-phone-systems"
              data-intro
              variant="outline-light"
              className="w-full sm:w-[16.625rem]"
            >
              Explore Our Phone Solutions
            </ButtonLink>
          </div>

          <div data-intro className="mt-8 flex items-center gap-4 lg:mt-16 lg:ml-[0.5625rem]">
            <AvatarGroup />
            <p className="text-small font-medium sm:whitespace-nowrap">
              Trusted by Top Companies
              {" "}
              <br />
              1000+ Satisfied customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
