import { Moon, Sun } from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CallRouter } from "@/components/sections/ai/receptionist/CallRouter";
import { GreetingBand } from "@/components/sections/ai/receptionist/GreetingBand";
import { ReceptionistSetupCard } from "@/components/sections/ai/ReceptionistSetupCard";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { dayNight, receptionistPageFaqs } from "@/content/ai-receptionist";
import { faqText } from "@/content/faq";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/ai-voice-agents/ai-receptionist";
const title = "AI Receptionist for Business Calls | Atlantis";
const description =
  "An AI receptionist that answers your business calls, greets every caller and sends them to the right person or team. Included on Premium, or add it to any plan.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

// Concept: a switchboard. Hear the greeting, see a call routed, see the rules
// behind it, then how it behaves open or closed.
export default function AiReceptionistPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "AI Receptionist",
          serviceType: "AI phone receptionist",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: receptionistPageFaqs.map((f) => ({
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
            An AI Receptionist That{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Greets Every Caller</span>
          </>
        }
        body="Your AI receptionist answers your business number, finds out what each caller needs and sends them to the right person or team. Your front desk gets fewer interruptions, and callers get an answer instead of voicemail."
        primary={{ label: "Set Up My AI Receptionist", href: "/contact-us" }}
        secondary={{ label: "Try the Call Router", href: "#router" }}
      />

      <GreetingBand />

      {/* Interactive switchboard. */}
      <section id="router" aria-labelledby="rec-router-title" className="scroll-mt-24 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading id="rec-router-title" eyebrow="Try It">
            Callers say it their way. <span className="font-bold">It puts them through.</span>
          </SectionHeading>
          <p data-reveal="fade" className="mt-4 max-w-[40rem] text-body">
            No “press 1 for billing.” Pick what a caller might say, and see where your AI receptionist sends the call.
          </p>
          <div className="mt-10 lg:mt-14">
            <CallRouter />
          </div>
        </div>
      </section>

      {/* The rules behind it. */}
      <section aria-labelledby="rec-setup-card-title" className="bg-soft-glow py-20 lg:py-28">
        <div className="container-page grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-20">
          <ReceptionistSetupCard />
          <div className="lg:order-first">
            <SectionHeading id="rec-setup-card-title" eyebrow="Your Rules">
              Your greeting, your hours, <span className="font-bold">your call routing.</span>
            </SectionHeading>
            <p data-reveal="fade" className="mt-4 max-w-[32rem] text-body">
              We set your receptionist up with you: what it says when it answers, when you’re open, and who should
              take each kind of call. When your team or hours change, tell us and we update it.
            </p>
            <ButtonLink href="/contact-us" data-reveal="fade" className="mt-8 w-full max-sm:h-auto max-sm:min-h-15 max-sm:py-3 sm:w-auto sm:px-9">
              Plan My Call Routing
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Day and night. */}
      <section aria-labelledby="rec-hours-title" className="py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading id="rec-hours-title" eyebrow="Open or Closed" align="center">
            Answered the right way, <span className="font-bold">whatever the hour.</span>
          </SectionHeading>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14">
            {dayNight.map((block, i) => {
              const night = i === 1;
              const BlockIcon = night ? Moon : Sun;
              return (
                <div
                  key={block.title}
                  className={`rounded-[1.5rem] p-7 lg:p-10 ${night ? "bg-night text-on-dark" : "border border-line-light bg-card"}`}
                >
                  <span
                    className={`flex size-14 items-center justify-center rounded-full ${
                      night ? "bg-on-dark/10 text-amber" : "bg-amber/20 text-brand-strong"
                    }`}
                  >
                    <BlockIcon size={28} weight="fill" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 font-display text-route-title font-bold">{block.title}</h3>
                  <ul className="mt-5 grid gap-3">
                    {block.points.map((point) => (
                      <li
                        key={point}
                        className={`border-t pt-3 text-body-snug ${night ? "border-on-dark/20 text-on-dark/85" : "border-line text-ink/80"}`}
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <p className="mt-8 text-center text-small text-ink/75">
            Included on Premium and Enterprise. Add it to Basic or Pro.{" "}
            <Link href="/pricing#compare" className="font-bold text-brand-strong underline underline-offset-4 hover:no-underline">
              Compare plans
            </Link>
          </p>
        </div>
      </section>

      <FaqSplit
        id="rec-faq-title"
        flushTop
        title={
          <>
            AI receptionist <span className="font-bold">questions, answered.</span>
          </>
        }
        items={receptionistPageFaqs}
        ctaLabel="Ask About the AI Receptionist"
      />

      <ClosingCta />
    </PageShell>
  );
}
