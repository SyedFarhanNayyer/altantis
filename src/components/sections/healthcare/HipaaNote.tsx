import { ButtonLink } from "@/components/ui/ButtonLink";
import { hipaaTopics } from "@/content/healthcare";

// The question every practice asks, answered plainly and without a compliance
// claim. See the note in src/content/healthcare.ts before changing the wording.
export function HipaaNote() {
  return (
    <section aria-labelledby="hipaa-title">
      <div className="container-page">
        <div className="grid gap-8 rounded-[1.25rem] border border-line bg-card p-7 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 lg:p-12">
          <div>
            <h2 id="hipaa-title" data-reveal="lines" className="text-h2">
              A straight answer <span className="font-bold">on HIPAA.</span>
            </h2>
            <p data-reveal="fade" className="mt-3 text-body">
              HIPAA compliance depends on how a practice sets up and uses its
              phone system, so no phone system can settle it alone. Ask us before
              you switch, and bring your compliance lead’s requirements so we can
              go through them with you.
            </p>
            <ButtonLink href="/contact-us" variant="outline-brand" className="mt-6 w-full sm:w-auto sm:px-9">
              Ask About HIPAA
            </ButtonLink>
          </div>
          <div>
            <h3 className="font-display text-title-sm font-bold">Features worth raising</h3>
            <ul className="mt-3 border-b border-line">
              {hipaaTopics.map((topic) => (
                <li key={topic} className="border-t border-line py-3 text-body-snug">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
