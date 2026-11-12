import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { IntegrationDirectory } from "@/components/sections/integrations/IntegrationDirectory";
import { ScreenPopDemo } from "@/components/sections/integrations/ScreenPopDemo";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqText } from "@/content/faq";
import { askSteps, integrationPageFaqs } from "@/content/integrations";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/integrations";
const title = "Phone System Integrations: CRM, Teams & Email | Atlantis";
const description =
  "Connect your Atlantis phone system to your CRM, Microsoft Teams, email and browser. See which integrations come with each plan and ask about the apps you use.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function IntegrationsPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "Phone System Integrations",
          serviceType: "Business phone system integrations",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: integrationPageFaqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: faqText(f) },
          })),
        },
      ]}
    >
      <PageHero
        title={
          <>
            Connect Your Phone System{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">to the Tools You Already Use</span>
          </>
        }
        body="Link Atlantis to your CRM, Microsoft Teams, email and browser, so caller details, voicemails and call records show up where your team already works."
        primary={{ label: "Ask About My Apps", href: "/contact-us" }}
        secondary={{ label: "Browse Integrations", href: "#directory" }}
      />

      {/* The directory: filterable cards, each with the plan that includes it. */}
      <section id="directory" aria-labelledby="directory-title" className="scroll-mt-24 py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <SectionHeading id="directory-title" eyebrow="Integrations Directory">
              Fewer tabs, <span className="font-bold">faster answers.</span>
            </SectionHeading>
            <p data-reveal="fade" className="max-w-[30rem] text-body">
              Each integration shows the plan it comes with. Filter by what you want to connect.
            </p>
          </div>
          <div className="mt-10 lg:mt-12">
            <IntegrationDirectory />
          </div>
        </div>
      </section>

      <ScreenPopDemo />

      {/* Don't see your app: a short sequence for asking. */}
      <section aria-labelledby="ask-title" className="bg-sand py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <SectionHeading id="ask-title" eyebrow="Don’t See Your App?">
              Ask us. <span className="font-bold">We’ll check how it connects.</span>
            </SectionHeading>
            <ButtonLink href="/contact-us" data-reveal="fade" className="w-full shrink-0 max-sm:h-auto max-sm:min-h-15 max-sm:py-3 sm:w-auto sm:px-9">
              Ask About My Apps
            </ButtonLink>
          </div>
          <ol className="mt-10 grid gap-x-10 md:grid-cols-3 lg:mt-14">
            {askSteps.map((step, i) => (
              <li key={step.title} className="border-t border-line-strong/40 py-7">
                <span aria-hidden="true" className="font-display text-stat font-bold text-brand tabular-nums">
                  {i + 1}
                </span>
                <h3 className="mt-2 font-display text-title-sm font-bold">{step.title}</h3>
                <p className="mt-2 text-body-snug text-ink/80">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FaqSplit
        id="integrations-faq-title"
        title={
          <>
            Integration <span className="font-bold">questions, answered.</span>
          </>
        }
        items={integrationPageFaqs}
        ctaLabel="Ask About Integrations"
      />

      <ClosingCta />
    </PageShell>
  );
}
