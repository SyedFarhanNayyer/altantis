import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PlayCircleIcon } from "@/components/ui/PlayCircleIcon";

export function CopperShutdown() {
  return (
    <section aria-labelledby="copper-title" className="pt-20 lg:pt-[7.125rem]">
      <div className="container-page grid items-start gap-12 lg:items-center lg:grid-cols-[minmax(0,36.6875fr)_minmax(0,37.25fr)] lg:gap-8">
        <div>
          <h2 id="copper-title" className="max-w-[36.6875rem] text-h2">
            Don’t let a <span className="font-bold">copper shutdown</span> cost
            you customers
          </h2>
          <p className="mt-3 max-w-[33.4375rem] text-body">
            As copper phone services are phased out, businesses still rely on
            these lines for phones, fax machines, fire alarms, elevators and
            entry systems. Identify the lines in use and explore suitable
            alternatives to plan your transition before your carrier sets a
            deadline.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/pots-line-replacement" className="w-full sm:w-auto sm:px-9">
              Plan Your Transition
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
