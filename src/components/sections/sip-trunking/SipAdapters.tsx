import { ButtonLink } from "@/components/ui/ButtonLink";
import { DeviceCards } from "@/components/sections/DeviceCards";
import { adapters, ataSteps } from "@/content/sip-trunking";

// Analog telephone adapters on a dark band: what an adapter does, the three
// steps a call takes (a real sequence, so numbered), then the four models.
export function SipAdapters() {
  return (
    <section aria-labelledby="sip-ata-title" className="bg-soft-glow py-20 text-ink lg:py-28">
      <div className="container-page">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-20">
          <div>
            <p data-reveal="fade" className="font-display text-eyebrow text-subhead">
              Analog telephone adapters
            </p>
            <h2 id="sip-ata-title" data-reveal="lines" className="text-h2">
              Keep your analog phones{" "}
              <br className="max-sm:hidden" />
              <span className="font-bold">working over SIP.</span>
            </h2>
            <p data-reveal="fade" className="mt-4 max-w-[37.5rem] text-body text-ink/80">
              Not every phone in your building needs to be replaced. An analog telephone adapter (ATA) is a
              small box that converts the signal from a standard analog phone into SIP, so it can make and take
              calls over your internet connection like the rest of your system.
            </p>
            <p data-reveal="fade" className="mt-4 max-w-[37.5rem] text-body text-ink/80">
              We set up each adapter before it ships and manage it through a cloud device management platform,
              so settings and updates can be handled remotely.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 sm:gap-5">
              <ButtonLink href="/contact-us" data-reveal="fade" className="w-full sm:w-auto sm:px-9">
                Ask Which Adapter Fits
              </ButtonLink>
              <ButtonLink
                href="/pots-line-replacement"
                variant="outline-brand"
                data-reveal="fade"
                className="w-full max-sm:h-auto max-sm:min-h-15 max-sm:py-3 max-sm:whitespace-normal sm:w-auto sm:px-9"
              >
                Plan Your Copper Line Transition
              </ButtonLink>
            </div>
          </div>

          <ol className="self-center">
            {ataSteps.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-t border-line-strong/30 py-6">
                <span aria-hidden="true" className="font-display text-title-lg font-bold text-brand-strong tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-title-sm font-bold">{step.title}</h3>
                  <p className="mt-1 text-body-snug text-ink/80">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 text-ink lg:mt-20">
          <DeviceCards devices={adapters} />
        </div>
      </div>
    </section>
  );
}
