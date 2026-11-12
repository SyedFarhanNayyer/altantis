import { ButtonLink } from "@/components/ui/ButtonLink";
import { smsAllowance } from "@/content/business-sms";

// Texts per plan as bars, scaled to the largest fixed allowance, so the
// difference between plans reads at a glance. Values come from plans.ts.
export function SmsAllowance() {
  const counts = smsAllowance.map((a) => Number.parseInt(a.value.replace(/,/g, ""), 10)).filter((n) => !Number.isNaN(n));
  const max = Math.max(...counts);

  return (
    <section aria-labelledby="sms-allowance-title" className="bg-soft-glow py-20 text-ink lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <p data-reveal="fade" className="font-display text-eyebrow text-subhead">
            Texts by Plan
          </p>
          <h2 id="sms-allowance-title" data-reveal="lines" className="text-h2">
            Texting comes <span className="font-bold">built into your plan.</span>
          </h2>
          <p data-reveal="fade" className="mt-4 max-w-[30rem] text-body text-ink/80">
            Every texting plan includes a monthly allowance. Need more? Add extra texts on any plan without changing
            plans.
          </p>
          <ButtonLink href="/pricing#compare" variant="outline-brand" data-reveal="fade" className="mt-8 w-full sm:w-auto sm:px-9">
            Compare All Plans
          </ButtonLink>
        </div>

        <dl className="grid content-center gap-6">
          {smsAllowance.map(({ plan, value }) => {
            const n = Number.parseInt(value.replace(/,/g, ""), 10);
            const fixed = !Number.isNaN(n);
            const none = value === "none";
            return (
              <div key={plan} className="grid gap-2 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-center sm:gap-6">
                <dt className="font-display text-title-sm font-bold">{plan}</dt>
                <dd className="relative flex h-12 items-center">
                  {none ? (
                    <span className="flex h-full w-full items-center rounded-full border border-line-strong/40 px-5 text-small text-ink/75">
                      Not included
                    </span>
                  ) : fixed ? (
                    <span
                      className="flex h-full min-w-fit items-center rounded-full bg-amber px-5 text-small font-bold whitespace-nowrap text-ink"
                      style={{ width: `${(n / max) * 100}%` }}
                    >
                      {value.replace("/", "per")}
                    </span>
                  ) : (
                    <span className="flex h-full w-full items-center rounded-full border border-dashed border-brand px-5 text-small font-bold text-brand-strong">
                      {value}: sized to your business
                    </span>
                  )}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
