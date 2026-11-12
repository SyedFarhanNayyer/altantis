import type { Icon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  action: { label: string; href: string };
  items: { title: string; body: string; icon: Icon }[];
};

// Six outcomes in ruled columns, in the same register as the Business VoIP
// and All Features pages.
export function BenefitGrid({ id, eyebrow, title, action, items }: Props) {
  return (
    <section aria-labelledby={id} className="py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <SectionHeading id={id} eyebrow={eyebrow}>
            {title}
          </SectionHeading>
          <ButtonLink
            href={action.href}
            variant="outline-brand"
            data-reveal="fade"
            className="w-full shrink-0 sm:w-auto sm:px-9"
          >
            {action.label}
          </ButtonLink>
        </div>

        <ul className="mt-10 grid gap-x-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {items.map(({ title: itemTitle, body, icon: ItemIcon }) => (
            <li key={itemTitle} className="border-t border-line py-7">
              <ItemIcon size={30} aria-hidden="true" className="text-brand" />
              <h3 className="mt-4 font-display text-title-sm font-bold">{itemTitle}</h3>
              <p className="mt-2 text-body-snug">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
