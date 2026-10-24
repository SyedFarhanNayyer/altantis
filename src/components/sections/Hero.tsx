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
        className="absolute inset-0 bg-gradient-to-r from-night/80 to-night/45 lg:hidden"
      />
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 hidden w-[61%] bg-gradient-to-r from-night from-[26%] to-night/0 opacity-70 lg:block"
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
        <div data-scroll-out className="max-w-[37.0625rem] text-on-dark">
          <h1 id="hero-title" data-intro="lines" className="text-h1">
            More Calls Answered
            {" "}
            <br />
            <span className="font-bold">More Business Won</span>
          </h1>

          <p data-intro className="mt-4 max-w-[35.75rem] text-body">
            Every missed call is a customer who might call your competitor next.
            Atlantis phone systems route every call to someone who can answer
            it, at the desk, on a cell phone or after hours. They’re installed
            and supported by the Atlantis team since 1984.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 sm:gap-5 lg:mt-11">
            <ButtonLink href="/contact" data-intro className="w-full sm:w-[18.25rem]">
              Request a Free Consultation
            </ButtonLink>
            <ButtonLink
              href="#free-offers"
              data-intro
              variant="outline-light"
              className="w-full sm:w-[16.625rem]"
            >
              See What You’re Missing
            </ButtonLink>
          </div>

          <div data-intro className="mt-8 flex items-center gap-4 lg:mt-16 lg:ml-[0.5625rem]">
            <AvatarGroup />
            <p className="text-small font-medium sm:whitespace-nowrap">
              Trusted by Top Companies
              {" "}
              <br />
              100K+ Satisfied customers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
