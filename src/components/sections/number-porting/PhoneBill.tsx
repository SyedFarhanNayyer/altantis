import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { billLines } from "@/content/number-porting";

// What moves with you, laid out as the lines on a phone bill: the document
// customers already have in hand when they start.
export function PhoneBill() {
  return (
    <section aria-labelledby="porting-numbers-title" className="bg-sand py-20 lg:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="porting-numbers-title" eyebrow="What You Can Bring">
            Every number on <span className="font-bold">your bill can come along.</span>
          </SectionHeading>
          <p data-reveal="fade" className="mt-4 max-w-[30rem] text-body">
            Send us a recent bill and we’ll go through it line by line with you, so no number gets left behind or
            cancelled by mistake.
          </p>
          <ButtonLink href="/contact-us" data-reveal="fade" className="mt-8 w-full sm:w-auto sm:px-9">
            Send Us Your Phone Bill
          </ButtonLink>
        </div>

        <div className="rounded-[1.25rem] border border-line-light bg-card px-5 py-6 sm:px-9 sm:py-8">
          <div className="flex items-baseline justify-between gap-4 border-b-2 border-ink pb-4">
            <p className="font-display text-title font-bold">Your phone bill</p>
            <p className="text-small text-ink/75">Status after the switch</p>
          </div>
          <ul>
            {billLines.map((line) => (
              <li
                key={line.title}
                className="grid gap-x-6 gap-y-2 border-b border-dashed border-line-dashed py-5 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start"
              >
                <div>
                  <h3 className="font-display text-card-title font-bold">{line.title}</h3>
                  <p className="mt-1 text-body-sm text-ink/80">{line.body}</p>
                </div>
                <span
                  className={`justify-self-start rounded-full px-3 py-1 text-small font-bold sm:justify-self-end ${
                    line.status === "Moves with you" ? "bg-brand/10 text-brand-strong" : "border border-line text-ink"
                  }`}
                >
                  {line.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
