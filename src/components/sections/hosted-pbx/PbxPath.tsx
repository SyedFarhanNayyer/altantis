import { CaretRight, Headset, PhoneIncoming, TreeStructure, WifiHigh } from "@phosphor-icons/react/ssr";
import { pbxPath } from "@/content/hosted-pbx";

const icons = [PhoneIncoming, TreeStructure, WifiHigh, Headset];

// How a hosted PBX carries a call, drawn as a signal path: each stop is a
// node on one line, so the order of the steps is the shape of the section.
export function PbxPath() {
  return (
    <section id="how-it-works" aria-labelledby="pbx-path-title" className="scroll-mt-24 bg-soft-glow py-20 text-ink lg:py-28">
      <div className="container-page">
        <div className="max-w-[44rem]">
          <p data-reveal="fade" className="font-display text-eyebrow text-subhead">
            How It Works
          </p>
          <h2 id="pbx-path-title" data-reveal="lines" className="text-h2">
            The path of a call, <span className="font-bold">from their phone to yours.</span>
          </h2>
        </div>

        <ol className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {pbxPath.map((step, i) => {
            const Icon = icons[i];
            const last = i === pbxPath.length - 1;
            return (
              <li key={step.title} className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 lg:block">
                {/* Connector to the next node: down the left on phones, across on desktop. */}
                {!last && (
                  <span aria-hidden="true" className="absolute top-16 bottom-[-2.5rem] left-8 border-l border-dashed border-line-strong/40 lg:top-8 lg:right-[-1.5rem] lg:bottom-auto lg:left-16 lg:border-t lg:border-l-0" />
                )}
                {!last && (
                  <CaretRight
                    size={18}
                    aria-hidden="true"
                    className="absolute top-[1.4375rem] right-[-1.3rem] hidden text-brand-strong lg:block"
                  />
                )}
                <span
                  className={`relative flex size-16 items-center justify-center rounded-full ${
                    last ? "bg-brand-gradient text-on-dark" : "border border-line-strong/40 bg-card"
                  }`}
                >
                  <Icon size={28} aria-hidden="true" />
                </span>
                <div className="lg:mt-6">
                  <p className="font-display text-small font-bold text-brand-strong tabular-nums">{i + 1} of {pbxPath.length}</p>
                  <h3 className="mt-1 font-display text-title-sm font-bold">{step.title}</h3>
                  <p className="mt-2 text-body-snug text-ink/80">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>

        <p data-reveal="fade" className="mt-14 max-w-[52rem] border-t border-line-strong/30 pt-6 text-body-snug text-ink/80">
          <strong className="text-ink">All it needs on your side:</strong> a stable internet connection and your
          phones. Plan for about 100 Kbps each way for every call happening at the same time.
        </p>
      </div>
    </section>
  );
}
