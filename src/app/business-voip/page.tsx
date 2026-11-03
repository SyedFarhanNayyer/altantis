import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { MediaSplit } from "@/components/sections/business-phone-systems/MediaSplit";
import { VoipBenefits } from "@/components/sections/business-voip/VoipBenefits";
import { VoipComparison } from "@/components/sections/business-voip/VoipComparison";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PageHero } from "@/components/sections/PageHero";
import { PlanRows } from "@/components/sections/PlanRows";
import { startingPrice, voipFaqs } from "@/content/business-voip";
import { faqText } from "@/content/faq";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/business-voip";
const title = "Business VoIP Phone Service and Plans | Atlantis Utility";
const description = `Business VoIP from Atlantis lets your team take calls on desk phones, cell phones and laptops. Plans start at ${startingPrice} per user per month.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function BusinessVoipPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "Business VoIP",
          serviceType: "Business VoIP phone service",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: voipFaqs.map((f) => ({
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
            Business VoIP Phone Service{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">That Goes Where Your Team Goes</span>
          </>
        }
        body={`Make and take business calls over the internet from a desk phone, cell phone or laptop. Plans start at ${startingPrice} per user per month, with unlimited calling to the US, Canada, Mexico and Puerto Rico.`}
        primary={{ label: "See Plans and Pricing", href: "/pricing" }}
        secondary={{ label: "Contact Atlantis", href: "/contact-us" }}
      />

      <MediaSplit
        id="voip-basics-title"
        className="pt-20 lg:pt-28"
        eyebrow="Introduction to VoIP"
        title={
          <>
            What is <span className="font-bold">business VoIP?</span>
          </>
        }
        intro="Business VoIP (Voice over Internet Protocol) is a phone service that carries calls over your internet connection instead of traditional copper phone lines. Your business gets one phone system, and your team can answer from any connected device."
        points={[
          "Calls travel as data over your internet connection",
          "Your business number isn’t tied to one desk or building",
          "Settings live online, so you can change them yourself",
        ]}
        primary={{ label: "See All Features", href: "/features" }}
        secondary={{ label: "Compare Plans", href: "/pricing#compare" }}
        image={{
          src: "/images/hw-employee-headset-call.jpg",
          alt: "Employee on a headset call working from a laptop and tablet",
        }}
        imageSide="right"
        play
      />

      <VoipComparison />
      <VoipBenefits />

      <MediaSplit
        id="voip-ready-title"
        eyebrow="Getting Ready"
        title={
          <>
            What you need{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">to switch to VoIP.</span>
          </>
        }
        intro="Less than most businesses expect. Desk phones set themselves up when plugged in, so there’s little to plan beyond a few basics."
        points={[
          <>
            <strong>A stable internet connection:</strong> plan for about 100 Kbps
            each way for every call at the same time, and more for video.
          </>,
          <>
            <strong>Something to answer on:</strong> IP desk phones, the mobile
            app or the web phone. Your current phones may also work.
          </>,
          <>
            <strong>Your current phone numbers:</strong> in most cases, they can
            move with you.
          </>,
          <>
            <strong>A backup plan:</strong> choose where calls go if your power
            or internet goes out.
          </>,
        ]}
        primary={{ label: "Talk to a Specialist", href: "/contact-us" }}
        secondary={{ label: "Explore Phone Systems", href: "/business-phone-systems" }}
        image={{
          src: "/images/hw-business-desk-phone-office.jpg",
          alt: "IP desk phone with a color screen on an office desk",
        }}
        imageSide="left"
      />

      <PlanRows
        id="voip-plans-title"
        title={
          <>
            Business VoIP <span className="font-bold">plans and pricing.</span>
          </>
        }
      />

      <FaqSplit
        id="voip-faq-title"
        title={
          <>
            Business VoIP <span className="font-bold">questions, answered.</span>
          </>
        }
        items={voipFaqs}
      />

      <ClosingCta />
    </PageShell>
  );
}
