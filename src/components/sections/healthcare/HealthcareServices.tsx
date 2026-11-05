import { CaretRight } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { healthcareServices } from "@/content/healthcare";

export function HealthcareServices() {
  return (
    <section aria-labelledby="healthcare-services-title" className="py-20 lg:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="healthcare-services-title" eyebrow="Our Services">
            Everything behind{" "}
            <span className="font-bold">the front desk phone.</span>
          </SectionHeading>
          <p data-reveal="fade" className="mt-3 text-body">
            These are the services that keep calls moving across your practice.
          </p>
        </div>
        <ul className="border-b border-line">
          {healthcareServices.map((service) => (
            <li key={service.href} className="border-t border-line">
              <Link
                href={service.href}
                className="group/row flex items-center justify-between gap-6 py-6 transition-colors hover:text-brand-strong focus-visible:text-brand-strong"
              >
                <span>
                  <span className="block font-display text-title-lg font-bold">{service.title}</span>
                  <span className="mt-1 block text-body-snug text-ink">{service.body}</span>
                </span>
                <CaretRight
                  size={22}
                  weight="bold"
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-hover/row:translate-x-1 motion-reduce:transition-none"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
