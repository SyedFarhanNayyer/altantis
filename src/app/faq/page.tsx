import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactCard } from "@/components/sections/ContactCard";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { faqGroups, faqText } from "@/content/faq";
import { breadcrumbTrail } from "@/lib/pages";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";

const path = "/faq";
const title = "Business Phone System FAQ | Atlantis Utility";
const description =
  "Answers about business phone system pricing, switching without downtime, keeping your numbers, equipment, 911 setup and local support from Atlantis.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function FaqPage() {
  const trail = breadcrumbTrail(path);
  const all = faqGroups.flatMap((g) => g.items);

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
        breadcrumbSchema(trail),
      ]}
    >
      <PageHero
        trail={trail}
        title={
          <>
            Frequently asked questions{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">about business phone systems</span>
          </>
        }
        body="Straight answers about pricing, switching, equipment and support. If yours isn’t here, our team is a phone call away."
        contents={faqGroups.map((g) => ({ label: g.title, href: `#${g.id}` }))}
      />

      <div className="container-page grid gap-14 py-20 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] lg:gap-16 lg:py-28 xl:gap-24">
        <div className="space-y-14 lg:space-y-20">
          {faqGroups.map((g) => (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-title`} className="scroll-mt-28">
              <h2 id={`${g.id}-title`} data-reveal="lines" className="text-h2 text-ink">
                {g.title}
              </h2>
              <FaqAccordion items={g.items} className="mt-4 border-t border-line" />
            </section>
          ))}
        </div>

        <aside aria-label="Contact Atlantis" className="lg:sticky lg:top-28 lg:self-start">
          <ContactCard title="Still have a question?" />
        </aside>
      </div>
    </PageShell>
  );
}
