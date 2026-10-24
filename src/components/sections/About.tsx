import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

const stats = [
  { value: "1000+", label: "Businesses served" },
  { value: "456+", label: "Phones installed" },
];

export function About() {
  return (
    <section aria-labelledby="about-title" className="bg-sand py-20 lg:pt-[4.3125rem] lg:pb-[6.5625rem]">
      <div className="container-page grid items-start gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-[4.375rem]">
        <div data-reveal="wipe" className="relative aspect-[566/567] overflow-hidden rounded-[0.625rem] md:aspect-video lg:aspect-[566/567]">
          <Image
            src="/images/atlantis-team-reviewing-screen.png"
            alt="Atlantis team members working together at a computer"
            fill
            unoptimized
            className="object-cover"
          />
        </div>

        <div className="lg:pt-[0.875rem]">
          <h2 id="about-title" className="text-h2">
            Four decades of keeping
            {" "}
            <br />
            <span className="font-bold">businesses connected.</span>
          </h2>
          <p className="mt-[1.125rem] text-body">
            Since 1984, Atlantis has helped California businesses answer more
            calls and grow with confidence. Our own technicians handle every
            survey, installation and support call, so you always know who’s
            looking after your system.
          </p>
          <p className="mt-10 text-[1.125rem] leading-7 font-bold">
            Since 1984 Serving California businesses
          </p>

          <dl className="mt-5 flex items-center">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex flex-col-reverse ${i > 0 ? "ml-6 border-l border-line pl-6 sm:ml-[3.375rem] sm:pl-[3.375rem]" : ""}`}
              >
                <dt className="mt-1 ml-1.5 font-display text-body">{s.label}</dt>
                <dd className="font-display text-stat font-bold text-amber tabular-nums">{s.value}</dd>
              </div>
            ))}
          </dl>

          <ButtonLink href="/contact" className="mt-12 w-full sm:w-[12.4375rem]">
            Get a Free Quote
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
