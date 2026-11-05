import { Buildings, Heartbeat, Stethoscope, Tooth } from "@phosphor-icons/react/ssr";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { practiceTypes } from "@/content/healthcare";

const icons = { medical: Stethoscope, dental: Tooth, specialty: Heartbeat, multi: Buildings };

export function PracticeTypes() {
  return (
    <section aria-labelledby="practice-types-title" className="bg-sand py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading id="practice-types-title" eyebrow="Who We Work With">
          Set up for the way{" "}
          <span className="font-bold">your practice runs.</span>
        </SectionHeading>
        <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {practiceTypes.map(({ title, body, icon }) => {
            const Icon = icons[icon];
            return (
              <li key={title} className="border-t-2 border-brand pt-5">
                <Icon size={32} aria-hidden="true" className="text-brand" />
                <h3 className="mt-4 font-display text-title-sm font-bold">{title}</h3>
                <p className="mt-2 text-body-snug">{body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
