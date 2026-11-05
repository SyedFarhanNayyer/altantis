import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProblemPanels } from "./ProblemPanels";

// Starts from what a practice manager already recognises, then shows the fix.
export function PhoneProblems() {
  return (
    <section aria-labelledby="phone-problems-title" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading id="phone-problems-title" eyebrow="Common Problems">
          The phone problems practices know,{" "}
          <br className="max-sm:hidden" />
          <span className="font-bold">and how we help solve them.</span>
        </SectionHeading>
        <div className="mt-10 lg:mt-14">
          <ProblemPanels />
        </div>
      </div>
    </section>
  );
}
