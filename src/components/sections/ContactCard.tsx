import { ButtonLink } from "@/components/ui/ButtonLink";
import { business } from "@/lib/site";

// "Still have a question?" card: phone, email and hours, with a link to
// the contact page.
export function ContactCard({ title, className = "" }: { title: string; className?: string }) {
  return (
    <div className={`rounded-[1.25rem] bg-sand p-6 lg:p-8 ${className}`}>
      <p className="font-display text-title-lg font-bold">{title}</p>
      <p className="mt-2 text-body-sm text-ink/80">
        Talk to a specialist, {business.hoursSummary}.
      </p>
      <dl className="mt-6 space-y-4">
        <div>
          <dt className="text-small text-ink/75">Call</dt>
          <dd>
            <a
              href={`tel:${business.phone.tel}`}
              className="font-display text-title font-bold text-brand-strong underline-offset-4 hover:underline focus-visible:underline"
            >
              {business.phone.display}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-small text-ink/75">Email</dt>
          <dd>
            <a
              href={`mailto:${business.email}`}
              className="text-body-sm font-medium break-all underline-offset-4 hover:text-brand-strong hover:underline focus-visible:underline"
            >
              {business.email}
            </a>
          </dd>
        </div>
      </dl>
      <ButtonLink href="/contact-us" variant="outline-brand" size="sm" className="mt-7">
        Send Us a Message
      </ButtonLink>
    </div>
  );
}
