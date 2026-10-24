import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PlayCircleIcon } from "@/components/ui/PlayCircleIcon";

const steps = [
  "Every line identified",
  "The right replacement for each one",
  "Coordinated with your alarm and elevator providers",
  "Tested before your old lines are cancelled",
];

export function CopperShutdown() {
  return (
    <section aria-labelledby="copper-title" className="pt-20 lg:pt-[7.125rem]">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[minmax(0,36.6875fr)_minmax(0,37.25fr)] lg:gap-8">
        <div>
          <h2 id="copper-title" className="max-w-[36.6875rem] text-h2">
            Don’t let a <span className="font-bold">copper shutdown</span> cost
            you customers
          </h2>
          <p className="mt-3 max-w-[33.4375rem] text-body">
            Carriers across California are shutting down copper lines. If your
            phones, fax, alarm or elevator still rely on them, they’ll stop
            working. Atlantis moves every line to a modern, tested connection
            before your deadline, so customers keep reaching you.
          </p>
          <ul data-reveal="steps" className="mt-4">
            {steps.map((step) => (
              <li key={step} data-step className="flex items-start gap-4 text-body leading-[2.1875rem]">
                <Image
                  src="/icons/check.svg"
                  alt=""
                  width={19}
                  height={19}
                  className="mt-2 size-[1.1875rem] shrink-0"
                />
                {step}
              </li>
            ))}
          </ul>
          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/copper-line-audit" className="w-full sm:w-auto sm:px-9">
              Free Copper Line Audit
            </ButtonLink>
            <ButtonLink href="/voip-overview" variant="outline-brand" className="w-full sm:w-auto sm:px-8">
              <span className="inline-flex items-center gap-2">
                <PlayCircleIcon size={26} />
                VoIP Overview
              </span>
            </ButtonLink>
          </div>
        </div>

        <div data-reveal="wipe" data-wipe-from="right" className="relative aspect-[596/466] overflow-hidden rounded-[0.625rem] md:aspect-video lg:aspect-[596/466]">
          <Image
            src="/images/copper-line-team-meeting.jpg"
            alt="Atlantis team planning a business’s move off copper phone lines"
            fill
            unoptimized
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
