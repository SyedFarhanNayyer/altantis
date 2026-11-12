import { ArrowRight, NotePencil } from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { LeadCard } from "@/components/sections/ai/LeadCard";
import { LeadPipeline } from "@/components/sections/ai/sales/LeadPipeline";
import { MissedVsAnswered } from "@/components/sections/ai/sales/MissedVsAnswered";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { salesPageFaqs, salesQuestions } from "@/content/ai-sales";
import { faqText } from "@/content/faq";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/ai-voice-agents/sales-agent";
const title = "AI Sales Agent for Inbound Calls | Atlantis";
const description =
  "An AI sales agent that answers new-customer calls, asks your questions, captures lead details and passes ready buyers to your sales team.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

// Concept: a pipeline. Two endings to the same call, the board leads move
// across, then what the agent asks and the lead it hands over.
export default function AiSalesAgentPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "AI Sales Agent",
          serviceType: "AI inbound sales phone agent",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: salesPageFaqs.map((f) => ({
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
            An AI Sales Agent That{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Picks Up New Leads</span>
          </>
        }
        body="New customers call when they’re ready to talk. Your AI sales agent answers, asks the questions you choose and passes ready buyers to your sales team, even when everyone’s busy."
        primary={{ label: "Set Up My AI Sales Agent", href: "/contact-us" }}
        secondary={{ label: "See a Lead It Captures", href: "#lead" }}
      />

      <MissedVsAnswered />

      <LeadPipeline />

      {/* Questions in, lead out. */}
      <section id="lead" aria-labelledby="sal-lead-title" className="scroll-mt-24 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading id="sal-lead-title" eyebrow="Lead Capture">
            Your questions in. <span className="font-bold">A ready lead out.</span>
          </SectionHeading>
          <p data-reveal="fade" className="mt-4 max-w-[40rem] text-body">
            You choose what the agent asks. Every answer is captured during the call, so your team knows who called,
            what they need and when.
          </p>
          <div className="mt-12 grid grid-cols-[minmax(0,1fr)] items-center gap-8 lg:mt-16 lg:grid-cols-[minmax(0,5fr)_auto_minmax(0,6fr)] lg:gap-10">
            <div className="rounded-[1.5rem] border border-line-light bg-card p-6 sm:p-8">
              <h3 className="flex items-center gap-2.5 font-display text-title font-bold">
                <NotePencil size={22} aria-hidden="true" className="text-brand" />
                Questions it asks
              </h3>
              <ol className="mt-5 grid gap-3">
                {salesQuestions.map((q, i) => (
                  <li key={q} className="flex items-start gap-3 rounded-[1rem] bg-sand px-4 py-3 text-body-sm">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-strong text-xs font-bold text-on-dark tabular-nums">
                      {i + 1}
                    </span>
                    {q}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-small text-ink/75">Examples. We set up the questions that fit your business.</p>
            </div>
            <span
              aria-hidden="true"
              className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-gradient text-on-dark max-lg:rotate-90"
            >
              <ArrowRight size={26} weight="bold" />
            </span>
            <LeadCard />
          </div>
          <p className="mt-10 text-small text-ink/75">
            Set up as a custom AI agent: included on Premium and Enterprise, or add it to Basic or Pro.{" "}
            <Link href="/pricing#compare" className="font-bold text-brand-strong underline underline-offset-4 hover:no-underline">
              Compare plans
            </Link>
          </p>
        </div>
      </section>

      <FaqSplit
        id="sal-faq-title"
        flushTop
        title={
          <>
            AI sales agent <span className="font-bold">questions, answered.</span>
          </>
        }
        items={salesPageFaqs}
        ctaLabel="Ask About the AI Sales Agent"
      />

      <ClosingCta />
    </PageShell>
  );
}
