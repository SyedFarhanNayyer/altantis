import { PhoneIncoming, Sparkle } from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export type FlowOutcome = { tag: string; title: string; body: string; icon: Icon };

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro: string;
  start: string;
  agent: { name: string; line: string };
  outcomes: FlowOutcome[];
  caption: string;
};

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line-light bg-card px-4 py-2 text-small font-bold whitespace-nowrap">
      {children}
    </span>
  );
}

function AgentNode({ name, line }: { name: string; line: string }) {
  return (
    <div className="w-full max-w-60 rounded-[1.5rem] border border-line-light bg-card p-5 text-center">
      <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-gradient text-on-dark">
        <Sparkle size={26} weight="fill" />
      </span>
      <p className="mt-3 font-display text-body-sm font-bold">{name}</p>
      <p className="mt-2 rounded-[0.75rem] bg-sand px-3 py-2.5 text-small">{line}</p>
    </div>
  );
}

function OutcomeCard({ outcome }: { outcome: FlowOutcome }) {
  const OutcomeIcon = outcome.icon;
  return (
    <div className="flex w-full max-w-72 items-start gap-3 rounded-[1.25rem] lg:w-72 border border-line-light bg-card p-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-[0.75rem] bg-brand/10 text-brand">
        <OutcomeIcon size={22} />
      </span>
      <span>
        <span className="block font-display text-body-sm font-bold">{outcome.title}</span>
        <span className="mt-0.5 block text-small text-ink/80">{outcome.body}</span>
      </span>
    </div>
  );
}

// How a call moves through an AI agent, drawn as a flow on the soft glow panel
// (the same drawing language as the Business SMS flow): the call comes in, the
// agent handles it, and it branches to each possible result. The drawing is
// decorative; the caption says it in words.
export function AgentFlow({ id, eyebrow, title, intro, start, agent, outcomes, caption }: Props) {
  const last = outcomes.length - 1;
  return (
    <section aria-labelledby={id} className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading id={id} eyebrow={eyebrow} align="center">
          {title}
        </SectionHeading>
        <p data-reveal="fade" className="mx-auto mt-4 max-w-[40rem] text-center text-body">
          {intro}
        </p>

        <figure className="mt-12 overflow-hidden rounded-[2rem] bg-soft-glow px-6 py-12 lg:mt-16 lg:px-12 lg:py-16">
          {/* Desktop: left to right, splitting into one branch per result. */}
          <div aria-hidden="true" className="hidden items-center justify-center lg:flex">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-[1.25rem] bg-brand-gradient text-on-dark">
              <PhoneIncoming size={30} weight="fill" />
            </span>
            <span className="h-px w-6 shrink-0 bg-line-strong/40" />
            <Pill>{start}</Pill>
            <span className="h-px w-6 shrink-0 bg-line-strong/40" />
            <AgentNode {...agent} />
            <span className="h-px w-6 shrink-0 bg-line-strong/40" />

            {/* Each row draws its own part of the vertical bracket, so the
                bracket meets every branch whatever the card heights. */}
            <div className="flex flex-col gap-5">
              {outcomes.map((o, i) => (
                <div key={o.title} className="relative flex items-center">
                  <span
                    className={`absolute left-0 w-px bg-line-strong/40 ${i === 0 ? "top-1/2" : "-top-2.5"} ${
                      i === last ? "bottom-1/2" : "-bottom-2.5"
                    }`}
                  />
                  <span className="h-px w-5 bg-line-strong/40" />
                  <Pill>{o.tag}</Pill>
                  <span className="h-px w-5 bg-line-strong/40" />
                  <OutcomeCard outcome={o} />
                </div>
              ))}
            </div>
          </div>

          {/* Phones and tablets: the same flow, top to bottom. */}
          <div aria-hidden="true" className="flex flex-col items-center lg:hidden">
            <span className="flex size-14 items-center justify-center rounded-[1.125rem] bg-brand-gradient text-on-dark">
              <PhoneIncoming size={26} weight="fill" />
            </span>
            <span className="h-5 w-px bg-line-strong/40" />
            <Pill>{start}</Pill>
            <span className="h-5 w-px bg-line-strong/40" />
            <AgentNode {...agent} />
            <span className="h-5 w-px bg-line-strong/40" />
            <div className="grid w-full justify-items-center gap-4 sm:grid-cols-2">
              {outcomes.map((o) => (
                <OutcomeCard key={o.title} outcome={o} />
              ))}
            </div>
          </div>

          <figcaption className="mx-auto mt-10 max-w-[40rem] text-center text-small text-ink/80">{caption}</figcaption>
        </figure>
      </div>
    </section>
  );
}
