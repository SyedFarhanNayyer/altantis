import { portingSteps } from "@/content/number-porting";

// How a transfer works as a timeline. The two bars underneath show the point
// of the whole process: your current service keeps running until Atlantis is live.
export function PortingTimeline() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="porting-steps-title"
      className="scroll-mt-24 bg-soft-glow py-20 text-ink lg:py-28"
    >
      <div className="container-page">
        <p data-reveal="fade" className="font-display text-eyebrow text-subhead">
          How It Works
        </p>
        <h2 id="porting-steps-title" data-reveal="lines" className="max-w-[44rem] text-h2">
          Your old service stays on <span className="font-bold">until your new one is live.</span>
        </h2>

        <ol className="relative mt-12 grid gap-8 border-l border-line-strong/30 pl-7 lg:mt-16 lg:grid-cols-4 lg:gap-10 lg:border-t lg:border-l-0 lg:pt-10 lg:pl-0">
          {portingSteps.map((step, i) => (
            <li key={step.title} className="relative">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[2.0625rem] size-3 rounded-full bg-brand lg:-top-[2.9375rem] lg:left-0"
              />
              <p className="font-display text-small font-bold text-brand-strong tabular-nums">Step {i + 1}</p>
              <h3 className="mt-2 font-display text-title-sm font-bold">{step.title}</h3>
              <p className="mt-2 text-body-snug text-ink/80">{step.body}</p>
            </li>
          ))}
        </ol>

        <figure className="mt-14 lg:mt-16">
          <div aria-hidden="true" className="hidden gap-y-3 lg:grid lg:grid-cols-4 lg:gap-x-10">
            <div className="col-span-4 flex h-11 items-center rounded-full border border-line-strong/40 px-5 text-small font-bold">
              Your current provider: active
            </div>
            <div className="col-span-2 col-start-3 flex h-11 items-center rounded-full bg-brand-strong px-5 text-small font-bold text-on-dark">
              Atlantis: phones plugged in, then live
            </div>
          </div>
          <figcaption className="text-body-snug text-ink/80 lg:mt-5">
            Keep your current service active through every step. Cancel it only after your numbers are ringing on
            Atlantis.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
