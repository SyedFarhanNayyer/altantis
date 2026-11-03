import type { Icon } from "@phosphor-icons/react";
import {
  BellRinging,
  ClockCountdown,
  DeviceMobile,
  EnvelopeSimple,
  Headset,
  PhoneIncoming,
  Queue,
  UserCheck,
  UsersThree,
  Voicemail,
} from "@phosphor-icons/react/ssr";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { callScenarios, type FlowIcon } from "@/content/hosted-pbx";
import { CallSimulator } from "./CallSimulator";

const icons: Record<FlowIcon, Icon> = {
  incoming: PhoneIncoming,
  attendant: Headset,
  group: UsersThree,
  answered: UserCheck,
  hours: ClockCountdown,
  greeting: Voicemail,
  inbox: EnvelopeSimple,
  queue: Queue,
  ring: BellRinging,
  mobile: DeviceMobile,
};

// A centred hero that hands straight into the simulator, whose card overlaps
// the dark ground: the demonstration is the first thing on the page.
export function PbxHero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="bg-night px-[var(--gutter)] pt-36 pb-40 text-center text-on-dark lg:pt-44 lg:pb-48">
        <h1 id="hero-title" data-intro="lines" className="mx-auto max-w-[56rem] text-h1">
          Hosted VoIP PBX:{" "}
          <br className="max-sm:hidden" />
          <span className="font-bold">Your Phone System in the Cloud</span>
        </h1>
        <p data-intro className="mx-auto mt-5 max-w-[37.5rem] text-body text-on-dark/85">
          Give every caller a professional welcome and every call a clear route,
          with no PBX equipment to buy, house or maintain.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
          <ButtonLink href="/pricing" data-intro className="w-full sm:w-auto sm:px-9">
            See Plans and Pricing
          </ButtonLink>
          <ButtonLink href="/contact-us" data-intro variant="outline-light" className="w-full sm:w-auto sm:px-9">
            Contact Atlantis
          </ButtonLink>
        </div>
      </div>

      <div className="container-page relative -mt-28 lg:-mt-32">
        <div className="rounded-[1.25rem] border border-line bg-card p-5 sm:p-8 lg:p-12">
          <h2 className="text-center font-display text-route-title">
            How your hosted PBX handles every call.
          </h2>
          <p className="mx-auto mt-2 mb-7 max-w-[34rem] text-center text-body-snug">
            Choose a situation to follow one call through your hosted PBX.
          </p>
          <CallSimulator
            scenarios={callScenarios.map(({ id, label }) => ({ id, label }))}
            panels={callScenarios.map((scenario) => (
              <div key={scenario.id}>
                <div className="relative">
                  {/* Runs from the first node to the last: down on small screens, across on desktop. */}
                  <span
                    aria-hidden="true"
                    className="absolute top-7 bottom-16 left-7 w-0.5 bg-line lg:right-[calc((100%-4.5rem)/4-1.75rem)] lg:bottom-auto lg:h-0.5 lg:w-auto"
                  >
                    <span data-flow-line className="block size-full origin-top bg-brand lg:origin-left" />
                  </span>
                  <ol className="relative grid gap-6 lg:grid-cols-4">
                    {scenario.steps.map((step) => {
                      const Icon = icons[step.icon];
                      return (
                        <li key={step.title} data-flow-node className="flex gap-4 lg:block">
                          <span className="grid size-14 shrink-0 place-items-center rounded-full bg-brand text-on-dark">
                            <Icon size={26} aria-hidden="true" />
                          </span>
                          <div className="lg:mt-4">
                            <h3 className="font-display text-title-sm font-bold">{step.title}</h3>
                            <p className="mt-1 text-body-sm">{step.body}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>
                <p className="mt-8 border-t border-line pt-5 text-center text-small font-medium">{scenario.plan}</p>
              </div>
            ))}
          />
        </div>
      </div>
    </section>
  );
}
