import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { CallerRoutes } from "@/components/sections/healthcare/CallerRoutes";
import { HealthcareServices } from "@/components/sections/healthcare/HealthcareServices";
import { HipaaNote } from "@/components/sections/healthcare/HipaaNote";
import { PhoneProblems } from "@/components/sections/healthcare/PhoneProblems";
import { PracticeTypes } from "@/components/sections/healthcare/PracticeTypes";
import { PageHero } from "@/components/sections/PageHero";
import { PlanRows } from "@/components/sections/PlanRows";
import { faqText } from "@/content/faq";
import { healthcareFaqs } from "@/content/healthcare";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/industries/healthcare";
const title = "Healthcare Phone Systems for Medical Offices | Atlantis";
const description =
  "Phone systems for medical, dental and specialty practices. Route appointments, billing and refills to the right person, from the morning rush to after hours.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function HealthcarePage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "Healthcare Phone Systems",
          serviceType: "Business phone systems for healthcare practices",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: healthcareFaqs.map((f) => ({
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
            Healthcare Phone Systems{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold text-balance sm:block">That Get Patients to the Right Person</span>
          </>
        }
        body="Your front desk is checking in patients, answering questions and picking up the phone at the same time. Atlantis helps you send each call where it belongs, so fewer of them depend on one person being free."
        primary={{ label: "Talk to Atlantis", href: "/contact-us" }}
        secondary={{ label: "See Plans and Pricing", href: "/pricing" }}
      />
      <CallerRoutes />
      <PhoneProblems />
      <PracticeTypes />
      <HealthcareServices />
      <HipaaNote />
      <PlanRows
        id="healthcare-plans-title"
        title={
          <>
            Plans that fit{" "}
            <span className="font-bold">the size of your practice.</span>
          </>
        }
        intro="Most small offices start with Basic or Pro. Practices that need call queues usually choose Premium, and larger or multi-location practices can ask about Enterprise."
      />
      <FaqSplit
        id="healthcare-faq-title"
        title={
          <>
            Healthcare phone <span className="font-bold">questions.</span>
          </>
        }
        items={healthcareFaqs}
      />
      <ClosingCta />
    </PageShell>
  );
}
