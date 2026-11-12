import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aiAvailability, setupSteps } from "@/content/ai-agents";

// How an agent gets set up: four stages in one strip. Atlantis builds the agent
// from your information, so there's nothing for you to configure alone.
export function AiSetup({ id, agentName }: { id: string; agentName: string }) {
  return (
    <section aria-labelledby={id} className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading id={id} eyebrow="Getting Set Up">
          We build your {agentName.replace(/^AI /, "")} <span className="font-bold">from what you tell us.</span>
        </SectionHeading>
        <ol className="mt-10 grid overflow-hidden rounded-[1.25rem] border border-line sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {setupSteps.map((step, i) => (
            <li
              key={step.title}
              className="border-line p-6 not-last:border-b sm:p-8 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:not-last:border-r"
            >
              <p className="font-display text-small font-bold text-brand-strong tabular-nums">Step {i + 1}</p>
              <h3 className="mt-2 text-h2 font-bold">{step.title}</h3>
              <p className="mt-3 text-body-snug text-ink/80">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// AI agents by plan, read from plans.ts: a strip of four plan chips.
export function AiPlans({ id }: { id: string }) {
  return (
    <section aria-labelledby={id} className="bg-sand py-20 lg:py-24">
      <div className="container-page grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <SectionHeading id={id} eyebrow="AI Agents by Plan">
            Included on Premium. <span className="font-bold">Add it to any plan.</span>
          </SectionHeading>
          <ButtonLink href="/pricing#compare" variant="outline-brand" data-reveal="fade" className="mt-8 w-full sm:w-auto sm:px-9">
            Compare All Plans
          </ButtonLink>
        </div>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line sm:grid-cols-4">
          {aiAvailability.map(({ plan, value }) => {
            const included = value === "Included";
            return (
              <div key={plan} className={`p-6 ${included ? "bg-night text-on-dark" : "bg-card"}`}>
                <dt className="font-display text-title-sm font-bold">{plan}</dt>
                <dd className={`mt-3 inline-flex rounded-full px-3 py-1 text-small font-bold ${included ? "bg-amber text-ink" : "bg-sand text-ink"}`}>
                  {value}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
