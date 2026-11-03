import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import type { Faq } from "@/content/faq";
import { FaqAccordion } from "./FaqAccordion";

type Props = {
  id: string;
  title: ReactNode;
  items: Faq[];
  /** Drops the top spacing when the section above already leaves room. */
  flushTop?: boolean;
};

// The FAQ used on every page except /faq. The heading stays in view beside the
// answers on desktop.
export function FaqSplit({ id, title, items, flushTop = false }: Props) {
  return (
    <section aria-labelledby={id} className={`pb-20 lg:pb-28 ${flushTop ? "" : "pt-20 lg:pt-28"}`}>
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 id={id} data-reveal="lines" className="text-h2">
            {title}
          </h2>
          <p className="mt-3 text-body">
            Can’t find what you’re looking for? Our team can talk it through with you.
          </p>
          <ButtonLink href="/contact-us" variant="outline-brand" className="mt-6 w-full sm:w-auto sm:px-9">
            Contact Atlantis
          </ButtonLink>
        </div>
        <FaqAccordion items={items} className="border-t border-line" />
      </div>
    </section>
  );
}
