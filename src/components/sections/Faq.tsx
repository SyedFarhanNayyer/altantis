import { JsonLd } from "@/components/ui/JsonLd";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/content/faq";
import { FaqAccordion } from "./FaqAccordion";

export function Faq() {
  return (
    <section aria-labelledby="faq-title" className="py-20 lg:pt-[5.75rem] lg:pb-[8.375rem]">
      <div className="container-page">
        <SectionHeading id="faq-title" eyebrow="Frequently Asked Questions" align="center">
          <span className="font-bold">Questions</span> before you grow?
        </SectionHeading>

        <FaqAccordion items={faqs} />
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
    </section>
  );
}
