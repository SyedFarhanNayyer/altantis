import { PhoneIncoming, Ticket } from "@phosphor-icons/react/ssr";
import { sampleTicket } from "@/content/ai-support";

// The AI Support Agent's signature drawing: a support ticket written up from a
// call, ready for your team. The caller is made up, so the drawing is hidden
// from screen readers and summed up by the caption.
export function TicketCard() {
  const t = sampleTicket;
  return (
    <figure className="relative">
      {/* A second card peeking out behind, so it reads as a queue of tickets. */}
      <div aria-hidden="true" className="absolute inset-x-6 -top-3 h-12 rounded-[1.5rem] border border-line-light bg-card/70" />
      <div aria-hidden="true" className="relative rounded-[1.5rem] border border-line-light bg-card p-5 sm:p-7">
        <div className="flex items-center justify-between gap-4">
          <span className="flex items-center gap-2.5 font-display text-title font-bold">
            <span className="flex size-10 items-center justify-center rounded-[0.75rem] bg-brand-gradient text-on-dark">
              <Ticket size={20} weight="fill" />
            </span>
            Ticket {t.id}
          </span>
          <span className="rounded-full bg-amber/25 px-3 py-1 text-xs font-bold text-ink">New</span>
        </div>

        <p className="mt-5 font-display text-route-title font-bold">{t.issue}</p>
        <p className="mt-2 text-body-sm text-ink/80">{t.detail}</p>

        <dl className="mt-6 grid gap-px overflow-hidden rounded-[1rem] border border-line bg-line sm:grid-cols-2">
          {[
            ["Caller", t.caller],
            ["Phone", t.phone],
            ["Team", t.team],
            ["Follow up", t.priority],
          ].map(([term, def]) => (
            <div key={term} className="bg-card px-4 py-3">
              <dt className="text-xs text-ink/70">{term}</dt>
              <dd className="font-display text-body-sm font-bold">{def}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-5 flex items-center gap-2 text-small font-bold text-brand-strong">
          <PhoneIncoming size={16} weight="fill" />
          Created from a call by your AI support agent
        </p>
      </div>
      <figcaption className="relative mt-4 text-small text-ink/75">
        Example ticket: the caller’s details and issue, written up so your team can follow up without asking again.
      </figcaption>
    </figure>
  );
}
