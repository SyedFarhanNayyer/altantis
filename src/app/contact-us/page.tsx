import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { webPageSchema } from "@/lib/schema";

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

      <div className="container-page py-20 lg:py-28">
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
      </div>
    </PageShell>
  );
}
