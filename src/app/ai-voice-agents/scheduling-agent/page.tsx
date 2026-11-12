import { ArrowsClockwise, Briefcase, CalendarPlus, CalendarX, Scissors, Stethoscope, Wrench } from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { BookingDemo } from "@/components/sections/ai/scheduling/BookingDemo";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { bookingActions, schedulingPageFaqs } from "@/content/ai-scheduling";
import { faqText } from "@/content/faq";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/ai-voice-agents/scheduling-agent";
const title = "AI Scheduling Agent: Book Appointments by Phone | Atlantis";
const description =
  "An AI scheduling agent that helps callers book, move or cancel appointments by phone, so your front desk isn’t stuck on scheduling calls. Included on Premium.";

const actionIcons = [CalendarPlus, ArrowsClockwise, CalendarX];

const bookers = [
  { icon: Stethoscope, name: "Clinics and practices" },
  { icon: Scissors, name: "Salons and spas" },
  { icon: Wrench, name: "Repair and home services" },
  { icon: Briefcase, name: "Professional offices" },
];

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

// Concept: a booking desk. Book a time yourself, then the three things callers
// ask for, then who it's for, set big.
export default function AiSchedulingAgentPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "AI Scheduling Agent",
          serviceType: "AI appointment booking by phone",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: schedulingPageFaqs.map((f) => ({
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
            An AI Scheduling Agent That{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Books Appointments by Phone</span>
          </>
        }
        body="Booking, moving and cancelling appointments takes up a lot of phone time. Your AI scheduling agent handles those calls, confirms every detail and leaves your front desk free for the people in front of them."
        primary={{ label: "Set Up My AI Scheduling Agent", href: "/contact-us" }}
        secondary={{ label: "Book a Time Yourself", href: "#book" }}
      />

      {/* Interactive: book a time. */}
      <section id="book" aria-labelledby="sch-book-title" className="scroll-mt-24 py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading id="sch-book-title" eyebrow="Try It" align="center">
            It offers what’s open. <span className="font-bold">The caller picks.</span>
          </SectionHeading>
          <p data-reveal="fade" className="mx-auto mt-4 max-w-[38rem] text-center text-body">
            Play the caller: choose a day and a time, and hear how the agent confirms it.
          </p>
          <div className="mx-auto mt-10 max-w-[64rem] lg:mt-14">
            <BookingDemo />
          </div>
        </div>
      </section>

      {/* Book, move, cancel: three columns, each with a big verb and a caller's line. */}
      <section aria-labelledby="sch-actions-title" className="bg-soft-glow py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading id="sch-actions-title" eyebrow="Every Scheduling Call">
            Book it, move it <span className="font-bold">or cancel it.</span>
          </SectionHeading>
          <ol className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-14">
            {bookingActions.map((a, i) => {
              const AIcon = actionIcons[i];
              return (
                <li key={a.title} className="flex flex-col rounded-[1.5rem] bg-card p-7 lg:p-9">
                  <div className="flex items-center justify-between">
                    <span className="flex size-14 items-center justify-center rounded-[1rem] bg-brand-gradient text-on-dark">
                      <AIcon size={28} aria-hidden="true" />
                    </span>
                    <span aria-hidden="true" className="font-display text-h2 font-bold text-line tabular-nums">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 text-h2 font-bold">{a.title}</h3>
                  <p className="mt-2 text-body-snug text-ink/80">{a.body}</p>
                  <p className="mt-auto pt-6 text-body-sm font-medium text-brand-strong italic">{a.example}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Who it's for: large type on a dark band. */}
      <section aria-labelledby="sch-who-title" className="bg-night py-20 text-on-dark lg:py-28">
        <div className="container-page">
          <p data-reveal="fade" className="font-display text-eyebrow text-amber">
            Made for Booking by Phone
          </p>
          <h2 id="sch-who-title" data-reveal="lines" className="max-w-[44rem] text-h2">
            If your customers call to book, <span className="font-bold">this agent is for you.</span>
          </h2>
          <ul className="mt-12 grid border-t border-on-dark/20 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {bookers.map(({ icon: BIcon, name }) => (
              <li
                key={name}
                className="flex items-center gap-4 border-b border-on-dark/20 py-7 md:odd:pr-8 lg:border-b-0 lg:not-last:border-r lg:px-6 lg:first:pl-0"
              >
                <BIcon size={36} aria-hidden="true" className="shrink-0 text-amber" />
                <span className="font-display text-title font-bold">{name}</span>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-body text-on-dark/85">
            AI booking and scheduling is included on Premium and Enterprise, or add it to Basic or Pro.{" "}
            <Link href="/pricing#compare" className="font-bold text-amber underline underline-offset-4 hover:no-underline">
              Compare plans
            </Link>
          </p>
        </div>
      </section>

      <FaqSplit
        id="sch-faq-title"
        title={
          <>
            AI scheduling agent <span className="font-bold">questions, answered.</span>
          </>
        }
        items={schedulingPageFaqs}
        ctaLabel="Ask About the AI Scheduling Agent"
      />

      <ClosingCta />
    </PageShell>
  );
}
