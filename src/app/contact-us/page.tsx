import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { webPageSchema } from "@/lib/schema";
import { business } from "@/lib/site";

const path = "/contact-us";
const title = "Contact Atlantis | Business Phone Systems";
const description =
  "Call, email or send a message to Atlantis about a new business phone system, copper line replacement or support. Based in Ventura, CA.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

const { address } = business;

export default function ContactPage() {
  return (
    <PageShell schema={[webPageSchema("ContactPage", path, title, description)]}>
      <PageHero
        title={
          <>
            Talk to an Atlantis{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">phone system specialist</span>
          </>
        }
        body="Tell us about your business and what you need, or call us during office hours."
      />

      <div className="container-page grid gap-14 py-20 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-16 lg:py-28 xl:gap-24">
        <section aria-labelledby="message-title">
          <h2 id="message-title" data-reveal="lines" className="text-h2 text-ink">
            Get in touch with <span className="font-bold">Atlantis Team.</span>
          </h2>
          <p data-reveal="fade" className="mt-3 max-w-[35rem] text-body">
            Have a question or want to discuss something with us? Fill out the
            form below and let us know the best way to reach you.
          </p>
          <div className="mt-10 rounded-[1.25rem] border border-line-light bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </section>

        <aside aria-labelledby="details-title" className="lg:pt-2">
          <h2 id="details-title" className="font-display text-title-lg font-bold">
            Contact details
          </h2>

          <dl className="mt-6 divide-y divide-line border-y border-line">
            <div className="py-5">
              <dt className="text-small text-ink/75">Call</dt>
              <dd className="mt-1">
                <a
                  href={`tel:${business.phone.tel}`}
                  className="font-display text-title font-bold text-brand-strong underline-offset-4 hover:underline focus-visible:underline"
                >
                  {business.phone.display}
                </a>
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-small text-ink/75">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${business.email}`}
                  className="text-body font-medium break-all underline-offset-4 hover:text-brand-strong hover:underline focus-visible:underline"
                >
                  {business.email}
                </a>
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-small text-ink/75">Visit</dt>
              <dd className="mt-1 text-body">
                <address className="not-italic">
                  {business.legalName}
                  <br />
                  {address.street}
                  <br />
                  {address.city}, {address.region} {address.postalCode}
                </address>
                <a
                  href={address.mapUrl}
                  className="mt-2 inline-block font-display text-label font-bold text-brand-strong underline-offset-4 hover:underline focus-visible:underline"
                >
                  Get directions
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </PageShell>
  );
}
