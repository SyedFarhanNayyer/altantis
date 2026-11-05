import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function About() {
  return (
    <section aria-labelledby="about-title" className="bg-sand py-20 lg:pt-[4.3125rem] lg:pb-[6.5625rem]">
      <div className="container-page grid items-start gap-10 lg:grid-cols-2 lg:items-center lg:gap-12 xl:gap-[4.375rem]">
        <div data-reveal="wipe" data-wipe-from="right" className="relative aspect-[566/567] overflow-hidden rounded-[0.625rem] md:aspect-video lg:order-last lg:aspect-[566/567]">
          <Image
            src="/images/atlantis-team-reviewing-screen.png"
            alt="Atlantis team members working together at a computer"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div>
          <h2 id="about-title" className="text-h2">
            Keeping
            {" "}
            <br />
            <span className="font-bold">businesses connected.</span>
          </h2>
          <p className="mt-[1.125rem] text-body">
            Atlantis delivers business phone solutions that connect people,
            teams and locations. From cloud phone systems to flexible call
            management, our services are tailored to your business, with
            preconfigured phones, straightforward setup and ongoing support.
          </p>

          <ButtonLink href="/contact-us" className="mt-10 w-full sm:w-[12.4375rem]">
            Get a Free Quote
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
