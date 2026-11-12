import { ArrowsLeftRight, Star } from "@phosphor-icons/react/ssr";
import { sampleLead } from "@/content/ai-sales";

// The AI Sales Agent's signature drawing: a new lead written up from a call,
// with the answers the caller gave and where the call went next. The caller is
// made up, so the drawing is hidden from screen readers and summed up by the
// caption.
export function LeadCard() {
  const l = sampleLead;
  const initials = l.name
    .split(" ")
    .map((w) => w[0])
    .join("");
  return (
    <figure>
      <div aria-hidden="true" className="overflow-hidden rounded-[1.5rem] border border-line-light bg-card">
        <div className="flex items-center justify-between gap-4 bg-night px-5 py-4 text-on-dark sm:px-7">
          <span className="flex items-center gap-2 text-small font-bold">
            <Star size={16} weight="fill" className="text-amber" />
            New lead from a call
          </span>
          <span className="text-xs text-on-dark/70">Just now</span>
        </div>
        <div className="p-5 sm:p-7">
          <div className="flex items-center gap-4">
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-strong font-display text-title font-bold text-on-dark">
              {initials}
            </span>
            <div className="min-w-0">
              <p className="font-display text-route-title font-bold">{l.name}</p>
              <p className="text-small text-ink/75">
                {l.company} · <span className="whitespace-nowrap">{l.phone}</span>
              </p>
            </div>
          </div>

          <dl className="mt-6 grid gap-px overflow-hidden rounded-[1rem] border border-line bg-line">
            {[
              ["Looking for", l.need],
              ["Timeline", l.timeline],
            ].map(([term, def]) => (
              <div key={term} className="grid gap-1 bg-card px-4 py-3 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-4">
                <dt className="text-xs text-ink/70 sm:pt-0.5">{term}</dt>
                <dd className="font-display text-body-sm font-bold">{def}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 flex items-center gap-2.5 rounded-full bg-brand/10 px-4 py-2.5 text-small font-bold text-brand-strong">
            <ArrowsLeftRight size={18} weight="bold" />
            {l.status}
          </p>
        </div>
      </div>
      <figcaption className="mt-4 text-small text-ink/75">
        Example lead: the caller’s answers, captured during the call, and the call passed to the right person.
      </figcaption>
    </figure>
  );
}
