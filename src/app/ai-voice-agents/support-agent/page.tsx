import { CurrencyDollar, MapPin, Package, Scroll } from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { AskTheAgent } from "@/components/sections/ai/support/AskTheAgent";
import { TicketCard } from "@/components/sections/ai/TicketCard";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { knowledge, supportPageFaqs } from "@/content/ai-support";
import { faqText } from "@/content/faq";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/ai-voice-agents/support-agent";
const title = "AI Support Agent for Customer Calls | Atlantis";
const description =
  "An AI support agent that answers common customer questions from your business information and creates support tickets from calls. Included on Premium.";

const knowledgeIcons = [MapPin, Package, Scroll, CurrencyDollar];

// The life of a support request, from the call to your team's follow-up.
const ticketSteps = [
  { title: "Caller explains the problem", body: "In their own words, without waiting on hold." },
  { title: "The agent checks your information", body: "If the answer is there, the caller gets it right away." },
  { title: "A ticket is written up", body: "Name, number and the issue, captured during the call." },
  { title: "Your team follows up", body: "With the full story already in front of them." },
];

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

// Concept: a knowledge desk. Ask it something, see what it knows, then follow a
// request that needs a person all the way to a ticket.
export default function AiSupportAgentPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "AI Support Agent",
          serviceType: "AI customer support phone agent",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: supportPageFaqs.map((f) => ({
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
            An AI Support Agent for the{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Questions You Hear Every Day</span>
          </>
        }
        body="Your AI support agent answers common customer questions from your business information. When a caller needs more help, it writes up a support ticket or passes the call to your team."
        primary={{ label: "Set Up My AI Support Agent", href: "/contact-us" }}
        secondary={{ label: "Ask It a Question", href: "#ask" }}
      />

      {/* Interactive: ask the agent. */}
      <section id="ask" aria-labelledby="sup-ask-title" className="scroll-mt-24 py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <SectionHeading id="sup-ask-title" eyebrow="Ask It Something">
              The same questions, <span className="font-bold">answered every time.</span>
            </SectionHeading>
            <p data-reveal="fade" className="max-w-[26rem] text-body">
              Pick a question a customer might ask a store. Each answer shows where it came from.
            </p>
          </div>
          <div className="mt-10 lg:mt-14">
            <AskTheAgent />
          </div>
        </div>
      </section>

      {/* Bento: what it knows, around a large photo. */}
      <section aria-labelledby="sup-knowledge-title" className="bg-sand py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading id="sup-knowledge-title" eyebrow="What It Knows">
            Answers from your information, <span className="font-bold">in your words.</span>
          </SectionHeading>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:grid-rows-2">
            <div
              data-reveal="wipe"
              className="relative min-h-[18rem] overflow-hidden rounded-[1.5rem] md:col-span-2 lg:row-span-2"
            >
              <Image
                src="/images/support-agent-headset-call.jpg"
                alt="Support team member on a headset call at her computer"
                fill
                unoptimized
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <p className="absolute inset-x-4 bottom-4 rounded-[1rem] bg-night/80 px-5 py-4 text-body-sm text-on-dark backdrop-blur-sm">
                You tell us what customers ask and how you answer. We set the agent up with it and test it with you.
              </p>
            </div>
            {knowledge.map((k, i) => {
              const KIcon = knowledgeIcons[i];
              return (
                <div key={k.title} className="rounded-[1.5rem] bg-paper p-6">
                  <KIcon size={28} aria-hidden="true" className="text-brand" />
                  <h3 className="mt-4 font-display text-title font-bold">{k.title}</h3>
                  <p className="mt-1.5 text-body-sm text-ink/80">{k.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* A request, followed to the ticket: timeline beside the ticket itself. */}
      <section aria-labelledby="sup-ticket-title" className="py-20 lg:py-28">
        <div className="container-page grid grid-cols-[minmax(0,1fr)] items-start gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
          <div>
            <SectionHeading id="sup-ticket-title" eyebrow="When It Needs a Person">
              Nothing slips through. <span className="font-bold">Every request gets written up.</span>
            </SectionHeading>
            <ol className="relative mt-10 grid gap-8 border-l-2 border-line pl-8">
              {ticketSteps.map((step, i) => (
                <li key={step.title} className="relative">
                  <span
                    aria-hidden="true"
                    className={`absolute top-0.5 -left-[2.6875rem] flex size-6 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                      i === 2 ? "bg-brand-gradient text-on-dark" : "border-2 border-line bg-canvas text-ink"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <h3 className="font-display text-title-sm font-bold">{step.title}</h3>
                  <p className="mt-1 text-body-snug text-ink/80">{step.body}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-small text-ink/75">
              Included on Premium and Enterprise. Add it to Basic or Pro.{" "}
              <Link href="/pricing#compare" className="font-bold text-brand-strong underline underline-offset-4 hover:no-underline">
                Compare plans
              </Link>
            </p>
          </div>
          <div className="lg:sticky lg:top-32">
            <TicketCard />
          </div>
        </div>
      </section>

      <FaqSplit
        id="sup-faq-title"
        flushTop
        title={
          <>
            AI support agent <span className="font-bold">questions, answered.</span>
          </>
        }
        items={supportPageFaqs}
        ctaLabel="Ask About the AI Support Agent"
      />

      <ClosingCta />
    </PageShell>
  );
}
