import { JsonLd } from "@/components/ui/JsonLd";
import { faqText, faqs } from "@/content/faq";
import { FaqSplit } from "./FaqSplit";

// The general FAQ, with its structured data, for the Business Phone Systems and
// Pricing pages.
export function Faq({ flushTop = false }: { flushTop?: boolean }) {
  return (
    <>
      <FaqSplit
        id="faq-title"
        flushTop={flushTop}
        title={
          <>
            <span className="font-bold">Questions</span> before you grow?
          </>
        }
        items={faqs}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: faqText(f) },
          })),
        }}
      />
    </>
  );
}
