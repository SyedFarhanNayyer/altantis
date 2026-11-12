import { CheckCircle } from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PageHero } from "@/components/sections/PageHero";
import { NumberCard } from "@/components/sections/number-porting/NumberCard";
import { PhoneBill } from "@/components/sections/number-porting/PhoneBill";
import { PortingTimeline } from "@/components/sections/number-porting/PortingTimeline";
import { ReadyChecklist } from "@/components/sections/number-porting/ReadyChecklist";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqText } from "@/content/faq";
import { portingDelays, portingPageFaqs } from "@/content/number-porting";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/number-porting";
const title = "Business Number Porting | Keep Your Numbers | Atlantis";
const description =
  "Keep your business phone numbers when you switch. Atlantis handles the transfer, ships your phones ready to plug in, and coordinates the date with you.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function NumberPortingPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "Number Porting",
          serviceType: "Business phone number transfer",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: portingPageFaqs.map((f) => ({
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
            Switch Your Phone System,{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Keep Your Business Numbers</span>
          </>
        }
        body="Your customers already know your number. We move your main line, direct numbers, toll-free and fax numbers to Atlantis, and coordinate the transfer date with you, so calls keep reaching your team."
        primary={{ label: "Start My Number Transfer", href: "/contact-us" }}
        secondary={{ label: "See How It Works", href: "#how-it-works" }}
      />

      {/* What porting is, beside the number card: the number stays, the provider changes. */}
      <section aria-labelledby="porting-basics-title" className="py-20 lg:py-28">
        <div className="container-page grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <SectionHeading id="porting-basics-title" eyebrow="Number Porting">
              Same number. <span className="font-bold">New phone system.</span>
            </SectionHeading>
            <p data-reveal="fade" className="mt-4 max-w-[34rem] text-body">
              Number porting moves your phone numbers from your current provider to Atlantis. The number stays the
              same; only the company carrying your calls changes. We handle the paperwork and keep you updated until
              every number has moved.
            </p>
            <p data-reveal="fade" className="mt-4 max-w-[34rem] text-body">
              No new numbers to print on signs, cards or your website, and your listings, reviews and ads keep
              pointing to the right place. Number transfer is included on every plan.
            </p>
            <ButtonLink href="/pricing" variant="outline-brand" data-reveal="fade" className="mt-8 w-full sm:w-auto sm:px-9">
              See Plans and Pricing
            </ButtonLink>
          </div>
          <NumberCard />
        </div>
      </section>

      <PhoneBill />

      <PortingTimeline />

      {/* Before you start: a checklist visitors can tick off against their bill. */}
      <section aria-labelledby="porting-ready-title" className="py-20 lg:py-28">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <SectionHeading id="porting-ready-title" eyebrow="Before You Start">
              Five things to find <span className="font-bold">on your current bill.</span>
            </SectionHeading>
            <p data-reveal="fade" className="mt-4 max-w-[30rem] text-body">
              Having these ready keeps your transfer on schedule. Tick them off as you go, or just send us the bill
              and we’ll find them with you.
            </p>
            <ButtonLink href="/pots-line-replacement" variant="outline-brand" data-reveal="fade" className="mt-8 w-full max-sm:h-auto max-sm:min-h-15 max-sm:py-3 sm:w-auto sm:px-9">
              Replacing Copper Lines Too?
            </ButtonLink>
          </div>
          <ReadyChecklist />
        </div>
      </section>

      {/* Common delays, each paired with what we do about it. */}
      <section aria-labelledby="porting-delays-title" className="bg-sand py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading id="porting-delays-title" eyebrow="Avoiding Delays">
            What slows a transfer down, <span className="font-bold">and how we prevent it.</span>
          </SectionHeading>
          <ul className="mt-10 lg:mt-14">
            {portingDelays.map((d) => (
              <li
                key={d.topic}
                className="grid gap-x-10 gap-y-3 border-t border-line py-7 last:border-b lg:grid-cols-[minmax(0,4fr)_minmax(0,5fr)_minmax(0,5fr)]"
              >
                <h3 className="font-display text-route-title">{d.topic}</h3>
                <p className="text-body-snug text-ink/80">{d.before}</p>
                <p className="flex gap-3 text-body-snug font-medium">
                  <CheckCircle size={24} weight="fill" aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                  {d.after}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSplit
        id="porting-faq-title"
        title={
          <>
            Number porting <span className="font-bold">questions, answered.</span>
          </>
        }
        items={portingPageFaqs}
        ctaLabel="Ask About My Numbers"
      />

      <ClosingCta image={null} />
    </PageShell>
  );
}
