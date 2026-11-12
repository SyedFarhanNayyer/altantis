import { DeviceCards } from "@/components/sections/DeviceCards";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { steps } from "@/content/pots";
import { adapters } from "@/content/sip-trunking";

// How the switch works, on a dark band: four numbered steps (a real sequence),
// then the adapters that keep analog devices running.
export function PotsSteps() {
  return (
    <section id="how-it-works" aria-labelledby="pots-steps-title" className="scroll-mt-24 bg-soft-glow py-20 text-ink lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <p data-reveal="fade" className="font-display text-eyebrow text-subhead">
              How It Works
            </p>
            <h2 id="pots-steps-title" data-reveal="lines" className="text-h2">
              From copper to connected,{" "}
              <br className="max-sm:hidden" />
              <span className="font-bold">without a site visit.</span>
            </h2>
          </div>
          <ButtonLink href="/contact-us" data-reveal="fade" className="w-full shrink-0 sm:w-auto sm:px-9">
            Start With My Phone Bill
          </ButtonLink>
        </div>

        <ol className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-line-strong/30 py-7">
              <span aria-hidden="true" className="font-display text-title-lg font-bold text-brand-strong tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-title-sm font-bold">{step.title}</h3>
              <p className="mt-2 text-body-snug text-ink/80">{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 border-t border-line-strong/30 pt-14 lg:mt-20 lg:pt-20">
          <h3 data-reveal="lines" className="font-display text-route-title">
            Adapters that keep <span className="font-bold">analog devices working.</span>
          </h3>
          <p data-reveal="fade" className="mt-3 max-w-[44rem] text-body text-ink/80">
            An analog telephone adapter connects an alarm panel, call box, fax machine or analog phone to your
            internet connection. Pick the size by how many devices it needs to carry.
          </p>
          <div className="mt-10 text-ink">
            <DeviceCards devices={adapters} />
          </div>
        </div>
      </div>
    </section>
  );
}
