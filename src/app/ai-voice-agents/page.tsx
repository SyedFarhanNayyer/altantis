import {
  CalendarCheck,
  ChartLineUp,
  ChatCircleDots,
  Check,
  Headset,
  Lifebuoy,
  Ticket,
  UserSwitch,
} from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { AgentCallTabs } from "@/components/sections/ai/AgentCallTabs";
import { AgentFlow } from "@/components/sections/ai/AgentFlow";
import { AiPlans, AiSetup } from "@/components/sections/ai/AiShared";
import { MediaSplit } from "@/components/sections/business-phone-systems/MediaSplit";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { agents, aiPageFaqs } from "@/content/ai-agents";
import { faqText } from "@/content/faq";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/ai-voice-agents";
const title = "AI Voice Agents for Business Calls | Atlantis";
const description =
  "AI voice agents that answer your business calls, route callers, answer questions, book appointments and create tickets. Included on Premium, or add them to any plan.";

const agentIcons = { receptionist: Headset, support: Lifebuoy, sales: ChartLineUp, scheduling: CalendarCheck };

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function AiVoiceAgentsPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "AI Voice Agents",
          serviceType: "AI phone answering for business",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: aiPageFaqs.map((f) => ({
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
            AI Voice Agents That{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Answer Every Call</span>
          </>
        }
        body="When your team is busy, Atlantis AI agents pick up. They greet callers, answer common questions, book appointments and create support tickets, then pass the call to a person when it needs one."
        primary={{ label: "Talk to Us About AI Agents", href: "/contact-us" }}
        secondary={{ label: "Meet the Agents", href: "#agents" }}
      />

      {/* Hear it work: tabs that play an example call for each agent. */}
      <section aria-labelledby="ai-demo-title" className="py-20 lg:py-28">
        <div className="container-page grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <div>
            <SectionHeading id="ai-demo-title" eyebrow="See It Answer">
              A helpful voice <span className="font-bold">on every line.</span>
            </SectionHeading>
            <p data-reveal="fade" className="mt-4 max-w-[32rem] text-body">
              Pick an agent to see how it handles a real kind of call. Each one works from your business information
              and knows when to bring in your team.
            </p>
            <ul className="mt-8 grid max-w-[32rem] gap-4 border-t border-line pt-6">
              {[
                "Answers on your business number, like a member of your team",
                "Handles routine calls so your staff can focus",
                "Passes the call to a person when it needs one",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-body-snug">
                  <Check size={20} weight="bold" aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <AgentCallTabs />
        </div>
      </section>

      {/* Meet the agents: one card per agent, each linking to its page. */}
      <section id="agents" aria-labelledby="agents-title" className="scroll-mt-24 bg-soft-glow py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading id="agents-title" eyebrow="Meet the Agents">
            Four agents, <span className="font-bold">one for every kind of call.</span>
          </SectionHeading>
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14">
            {agents.map((agent, i) => {
              const AgentIcon = agentIcons[agent.key];
              return (
                <li key={agent.key}>
                  <Link
                    href={agent.href}
                    className="group flex h-full flex-col rounded-[1.5rem] border border-line-light bg-card p-7 transition-[translate,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-brand focus-visible:-translate-y-1 focus-visible:border-brand motion-reduce:hover:translate-y-0 lg:p-9"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex size-14 items-center justify-center rounded-[1rem] bg-brand-gradient text-on-dark">
                        <AgentIcon size={28} aria-hidden="true" />
                      </span>
                      <span aria-hidden="true" className="font-display text-small font-bold text-ink/50 tabular-nums">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-route-title font-bold">{agent.name}</h3>
                    <p className="mt-2 text-body-snug text-ink/80">{agent.summary}</p>
                    <ul className="mt-5 grid gap-2 border-t border-line pt-5">
                      {agent.can.map((item) => (
                        <li key={item} className="flex gap-2.5 text-body-sm">
                          <Check size={18} weight="bold" aria-hidden="true" className="mt-0.5 shrink-0 text-brand" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto pt-6 text-small font-bold text-brand-strong underline-offset-4 group-hover:underline">
                      Explore {agent.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <AgentFlow
        id="ai-flow-title"
        eyebrow="How It Works"
        title={
          <>
            One call in. <span className="font-bold">The right result out.</span>
          </>
        }
        intro="Every call to your business number reaches your AI agent first, or only when your team is busy. You choose. The agent works out what the caller needs and takes care of it."
        start="Customer calls"
        agent={{ name: "Your AI agent", line: "Listens, understands the request and acts on it." }}
        outcomes={[
          { tag: "Route", title: "Sent to the right person", body: "Sales, billing or support, by name or need.", icon: UserSwitch },
          { tag: "Answer", title: "Question answered", body: "Hours, services and policies, from your info.", icon: ChatCircleDots },
          { tag: "Book", title: "Appointment booked", body: "New bookings, changes and cancellations.", icon: CalendarCheck },
          { tag: "Ticket", title: "Support ticket created", body: "Details captured for your team to follow up.", icon: Ticket },
        ]}
        caption="A call comes in, the AI agent handles it, and it ends as a routed call, an answered question, a booked appointment or a new support ticket."
      />

      <MediaSplit
        id="ai-team-title"
        className="pb-20 lg:pb-28"
        eyebrow="AI and Your Team"
        title={
          <>
            Your agents handle the routine.{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Your people handle the rest.</span>
          </>
        }
        intro="AI agents don’t replace your team. They take the calls that don’t need a person, so your staff can give their full attention to the ones that do."
        points={[
          "Fewer interruptions for your front desk",
          "Callers get an answer instead of voicemail",
          "Calls that need a person go straight to one",
        ]}
        primary={{ label: "Talk to Us About AI Agents", href: "/contact-us" }}
        secondary={{ label: "See All Features", href: "/features" }}
        image={{
          src: "/images/hosted-pbx-team-headset-calls.jpg",
          alt: "Three team members on headset calls working at desks in an office",
        }}
        imageSide="left"
      />

      <AiSetup id="ai-setup-title" agentName="AI agents" />

      <AiPlans id="ai-plans-title" />

      <FaqSplit
        id="ai-faq-title"
        title={
          <>
            AI voice agent <span className="font-bold">questions, answered.</span>
          </>
        }
        items={aiPageFaqs}
        ctaLabel="Ask About AI Agents"
      />

      <ClosingCta />
    </PageShell>
  );
}
