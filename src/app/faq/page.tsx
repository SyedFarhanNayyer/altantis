import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactCard } from "@/components/sections/ContactCard";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FaqTopicNav, type TopicCategory } from "@/components/sections/faq/FaqTopicNav";
import { PageHero } from "@/components/sections/PageHero";
import { smsFaqs } from "@/content/business-sms";
import { aiFaqs } from "@/content/ai-agents";
import { receptionistFaqs } from "@/content/ai-receptionist";
import { supportFaqs } from "@/content/ai-support";
import { salesFaqs } from "@/content/ai-sales";
import { schedulingFaqs } from "@/content/ai-scheduling";
import { integrationFaqs } from "@/content/integrations";
import { voipFaqs } from "@/content/business-voip";
import { catalogFaqs } from "@/content/catalog";
import { type Faq, faqGroups, faqText } from "@/content/faq";
import { healthcareFaqs } from "@/content/healthcare";
import { pbxFaqs } from "@/content/hosted-pbx";
import { portingFaqs } from "@/content/number-porting";
import { potsFaqs } from "@/content/pots";
import { sipFaqs } from "@/content/sip-trunking";
import { ucaasFaqs } from "@/content/ucaas";
import { webPageSchema } from "@/lib/schema";

const path = "/faq";
const title = "Business Phone System FAQ | Atlantis Utility";
const description =
  "Answers about business phone system pricing, switching without downtime, keeping your numbers, equipment, 911 setup and support from Atlantis.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

// Every FAQ on the site: the general groups, then each page's own questions.
// A question that already appears in an earlier group isn't repeated.
const seen = new Set<string>();
const unique = (items: Faq[]) =>
  items.filter((f) => {
    if (seen.has(f.question)) return false;
    seen.add(f.question);
    return true;
  });
const groups = [
  ...faqGroups,
  { id: "phones", title: "Phones", items: catalogFaqs },
  { id: "business-voip", title: "Business VoIP", items: voipFaqs },
  { id: "hosted-pbx", title: "Hosted PBX", items: pbxFaqs },
  { id: "ucaas", title: "UCaaS", items: ucaasFaqs },
  { id: "sip-trunking", title: "SIP Trunking", items: sipFaqs },
  { id: "pots-replacement", title: "POTS Line Replacement", items: potsFaqs },
  { id: "number-porting", title: "Number Porting", items: portingFaqs },
  { id: "business-sms", title: "Business SMS", items: smsFaqs },
  { id: "integrations", title: "Integrations", items: integrationFaqs },
  { id: "ai-voice-agents", title: "AI Voice Agents", items: aiFaqs },
  { id: "ai-receptionist", title: "AI Receptionist", items: receptionistFaqs },
  { id: "ai-support-agent", title: "AI Support Agent", items: supportFaqs },
  { id: "ai-sales-agent", title: "AI Sales Agent", items: salesFaqs },
  { id: "ai-scheduling-agent", title: "AI Scheduling Agent", items: schedulingFaqs },
  { id: "healthcare", title: "Healthcare", items: healthcareFaqs },
]
  .map((g) => ({ ...g, items: unique(g.items) }))
  .filter((g) => g.items.length > 0);

// The sidebar groups the topics into a few categories.
const categoryOf = (id: string) =>
  id.startsWith("ai-") ? "AI Agents" : id === "healthcare" ? "Industries" : faqGroups.some((g) => g.id === id) ? "General" : "Phone Systems";
const categories: TopicCategory[] = ["General", "Phone Systems", "AI Agents", "Industries"]
  .map((title) => ({
    title,
    topics: groups.filter((g) => categoryOf(g.id) === title).map((g) => ({ id: g.id, title: g.title, count: g.items.length })),
  }))
  .filter((c) => c.topics.length > 0);

export default function FaqPage() {
  const all = groups.flatMap((g) => g.items);

  return (
    <PageShell
      schema={[
        {
          ...webPageSchema("FAQPage", path, title, description),
          mainEntity: all.map((f) => ({
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
            Frequently asked questions{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">about business phone systems</span>
          </>
        }
        body="Straight answers about pricing, switching, equipment and support. If yours isn’t here, our team is a phone call away."
      />

      <div className="container-page grid grid-cols-[minmax(0,1fr)] gap-10 py-20 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-16 lg:py-28 xl:gap-24">
        <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:self-start lg:overflow-y-auto lg:pb-4" data-lenis-prevent>
          <FaqTopicNav categories={categories} />
        </aside>

        <div className="space-y-14 lg:space-y-20">
          {categories.map((c) => (
            <div key={c.title} className="space-y-14 lg:space-y-20">
              {c.topics.map((t) => {
                const g = groups.find((x) => x.id === t.id)!;
                return (
                  <section key={g.id} id={g.id} aria-labelledby={`${g.id}-title`} className="scroll-mt-28">
                    <p className="font-display text-small font-bold text-subhead">{c.title}</p>
                    <h2 id={`${g.id}-title`} data-reveal="lines" className="text-h2 text-ink">
                      {g.title}
                    </h2>
                    <FaqAccordion items={g.items} className="mt-4 border-t border-line" />
                  </section>
                );
              })}
            </div>
          ))}

          <aside aria-label="Contact Atlantis" className="pt-4">
            <ContactCard title="Still have a question?" />
          </aside>
        </div>
      </div>
    </PageShell>
  );
}
