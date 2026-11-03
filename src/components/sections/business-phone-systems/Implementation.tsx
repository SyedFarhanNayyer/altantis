import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Proposal and Configuration",
    body: "You receive an itemized proposal in plain language, and we configure your phones and call flow.",
  },
  { title: "Self Installation", body: "Set up your preconfigured phones yourself, with our team on hand to help." },
  { title: "Shipping", body: "Your phones are shipped to your location, ready to plug in." },
  { title: "Testing", body: "Every line and call route is tested to confirm it works." },
  { title: "Handover", body: "Your staff learns the system, and our team stays available for support." },
];

// A single timeline on the sand ground: the line is the sequence, so the
// steps need no boxes. Across on desktop, where each step is a subgrid so
// numbers, titles and copy line up; down the left edge on smaller screens.
export function Implementation() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="scroll-mt-24 bg-sand py-20 lg:py-28"
    >
      <div className="container-page">
        <SectionHeading id="process-title" eyebrow="Our Process">
          A planned changeover,{" "}
          <br className="max-sm:hidden" />
          <span className="font-bold">with no gap in service.</span>
        </SectionHeading>

        <ol
          data-reveal="stagger"
          className="mt-12 grid lg:mt-16 lg:grid-cols-5 lg:grid-rows-[auto_auto_auto]"
        >
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="relative border-l border-line-strong/40 pb-10 pl-7 last:border-l-transparent last:pb-0 lg:row-span-3 lg:grid lg:grid-rows-subgrid lg:border-t lg:border-l-0 lg:pt-7 lg:pr-8 lg:pb-0 lg:pl-0 lg:last:pr-0"
            >
              <span
                aria-hidden="true"
                className="absolute top-0 -left-[0.3125rem] size-[0.5625rem] rounded-full bg-brand lg:-top-[0.3125rem] lg:left-0"
              />
              <span aria-hidden="true" className="block font-display text-stat text-brand">
                {i + 1}
              </span>
              <h3 className="mt-3 font-display text-title-sm font-bold">
                <span className="sr-only">Step {i + 1}: </span>
                {s.title}
              </h3>
              <p className="mt-2 max-w-[34rem] text-body-snug">{s.body}</p>
            </li>
          ))}
        </ol>

        <p data-reveal="fade" className="mt-12 border-t border-line pt-8 text-body lg:mt-16">
          <span className="font-bold">Typical timeline:</span> most single-site
          offices are installed in about a day once equipment arrives. Number
          transfers are scheduled with your current carrier.
        </p>
      </div>
    </section>
  );
}
