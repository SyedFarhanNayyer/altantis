import { ArrowRight, Clock, Quotes } from "@phosphor-icons/react/ssr";
import { receptionistSetup } from "@/content/ai-receptionist";

// The AI Receptionist's signature drawing: the setup we build with you, drawn
// as a card with three parts (greeting, hours, where calls go). It uses a
// made-up dental office, so it's hidden from screen readers and summed up by
// the caption.
export function ReceptionistSetupCard() {
  const { greeting, hours, routes } = receptionistSetup;
  return (
    <figure className="rounded-[1.5rem] border border-line-light bg-card p-5 sm:p-7">
      <div aria-hidden="true" className="grid gap-5">
        <div>
          <p className="flex items-center gap-2 text-xs font-bold text-brand-strong">
            <Quotes size={16} weight="fill" />
            Greeting
          </p>
          <p className="mt-2 rounded-[1rem] bg-sand px-4 py-3 text-body-sm">“{greeting}”</p>
        </div>

        <div>
          <p className="flex items-center gap-2 text-xs font-bold text-brand-strong">
            <Clock size={16} weight="fill" />
            Business hours
          </p>
          <dl className="mt-2 grid grid-cols-2 gap-2">
            {hours.map((h) => (
              <div key={h.label} className="rounded-[1rem] border border-line-light px-4 py-3">
                <dt className="text-xs text-ink/70">{h.label}</dt>
                <dd className="font-display text-body-sm font-bold">{h.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <p className="flex items-center gap-2 text-xs font-bold text-brand-strong">
            <ArrowRight size={16} weight="bold" />
            Where calls go
          </p>
          <ul className="mt-2 grid gap-2">
            {routes.map((r) => (
              <li
                key={r.asks}
                className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 rounded-[1rem] border border-line-light px-4 py-3 text-small"
              >
                <span>{r.asks}</span>
                <ArrowRight size={14} className="text-brand" />
                <span className="justify-self-end rounded-full bg-brand/10 px-3 py-1 text-right font-bold text-brand-strong">
                  {r.goesTo}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <figcaption className="mt-5 border-t border-line pt-4 text-small text-ink/75">
        Example setup: a greeting, your business hours and a rule for where each kind of call goes.
      </figcaption>
    </figure>
  );
}
