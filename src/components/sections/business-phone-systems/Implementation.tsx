import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  { title: "Site Survey", body: "We review your building, cabling, network, current bill and call flow." },
  { title: "Design & Proposal", body: "You receive an itemized proposal in plain language." },
  { title: "Installation", body: "Our technicians install and program every phone and device." },
  { title: "Number Transfer", body: "Your numbers move while existing service stays live." },
  {
    title: "Test & Handover",
    body: "Every line is tested and your staff is trained before old service is cancelled.",
  },
];

// Homepage Upgrade section as a numbered sequence: the order is the point.
export function Implementation() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="scroll-mt-24 bg-sand py-20 lg:pt-[5.9375rem] lg:pb-[5.875rem]"
    >
      <div className="container-page">
        <SectionHeading id="process-title" eyebrow="Our Process" align="center">
          A planned changeover,{" "}
          <br className="max-sm:hidden" />
          <span className="font-bold">with no gap in service.</span>
        </SectionHeading>

        <ol data-reveal="stagger" className="mt-14 grid gap-[1.875rem] sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="flex flex-col rounded-[0.3125rem] border border-dashed border-line-dashed px-5 pt-5 pb-6"
            >
              <span
                aria-hidden="true"
                className="flex size-[2.625rem] items-center justify-center rounded-full border-2 border-amber font-display text-title font-bold text-brand-strong"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-title-sm font-bold">
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-2 text-body-snug">{s.body}</p>
            </li>
          ))}
        </ol>

        <div data-reveal="fade" className="mt-12 flex flex-col items-center gap-6 text-center">
          <p className="max-w-[46rem] text-body">
            <span className="font-bold">Typical timeline:</span> most single-site
            offices are installed in about a day once equipment arrives. Number
            transfers are scheduled with your current carrier.
          </p>
          <ButtonLink href="/contact-us" className="w-full sm:w-auto sm:px-9">
            Book a Site Survey
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
