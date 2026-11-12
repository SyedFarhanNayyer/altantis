import { ArrowsClockwise, Buildings, Hash, Plugs, Receipt, Warning } from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { MediaSplit } from "@/components/sections/business-phone-systems/MediaSplit";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PageHero } from "@/components/sections/PageHero";
import { PotsDevices } from "@/components/sections/pots/PotsDevices";
import { PotsSteps } from "@/components/sections/pots/PotsSteps";
import { faqText } from "@/content/faq";
import { benefits, potsPageFaqs, replacements } from "@/content/pots";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/pots-line-replacement";
const title = "POTS Line Replacement for Businesses | Atlantis Utility";
const description =
  "Replace retiring copper POTS lines without losing your alarms, elevator phones, fax or numbers. Atlantis plans each line and ships equipment ready to plug in.";

const benefitIcons = [Plugs, Hash, Receipt, Buildings, ArrowsClockwise, Warning];

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function PotsLineReplacementPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "POTS Line Replacement",
          serviceType: "Copper phone line (POTS) replacement",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: potsPageFaqs.map((f) => ({
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
            Replace Your Copper Phone Lines,{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Keep Every Device Working</span>
          </>
        }
        body="Carriers are retiring copper POTS lines. We find every line in your building, choose the right replacement for each one, and ship the equipment ready to plug in, so your phones, alarms and entry systems keep working."
        primary={{ label: "Plan My Copper Line Switch", href: "/contact-us" }}
        secondary={{ label: "See How It Works", href: "#how-it-works" }}
      />

      <MediaSplit
        id="pots-basics-title"
        className="pt-20 lg:pt-28"
        eyebrow="Copper Line Retirement"
        title={
          <>
            Copper is going away.{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Switch on your schedule.</span>
          </>
        }
        intro="POTS (plain old telephone service) lines run over copper wiring that carriers are phasing out. Repairs take longer, prices keep rising, and once a retirement notice arrives, the deadline is set for you. Planning now means you choose the timing and test every line before anything changes."
        points={[
          "Carriers are raising prices and slowing repairs on copper",
          "A retirement notice sets a deadline you didn’t choose",
          "Many buildings have lines nobody has checked in years",
        ]}
        primary={{ label: "Get My Lines Reviewed", href: "/contact-us" }}
        secondary={{ label: "Read the Copper Retirement Guide", href: "/blog/copper-line-retirement" }}
        image={{
          src: "/images/placeholder-photo.svg",
          alt: "Atlantis team planning a business’s move off copper phone lines",
        }}
        imageSide="right"
      />

      <PotsDevices />

      <BenefitGrid
        id="pots-benefits-title"
        eyebrow="Why Switch With Atlantis"
        title={
          <>
            What stays the same,{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">and what gets easier.</span>
          </>
        }
        action={{ label: "Talk to a Specialist", href: "/contact-us" }}
        items={benefits.map((b, i) => ({ ...b, icon: benefitIcons[i] }))}
      />

      <ComparisonTable
        id="pots-lines-title"
        eyebrow="Line by Line"
        title={
          <>
            The right replacement{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">for every line.</span>
          </>
        }
        intro="Not every copper line needs the same fix. Here’s where each type of line usually goes once it’s off copper."
        columns={["On copper today", "With Atlantis"]}
        rows={replacements}
      />

      <PotsSteps />

      <MediaSplit
        id="pots-sites-title"
        className="pt-20 lg:pt-28"
        eyebrow="Multiple Locations"
        title={
          <>
            Copper lines spread{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">across several sites?</span>
          </>
        }
        intro="Offices, stores, clinics and properties often have copper lines in many buildings, each on its own bill. We put every line on one list and roll out the switch in the order that works for you."
        points={[
          "One inventory of every line at every site",
          "Roll out by building, region or deadline",
          "Numbers, adapters and service on one account",
        ]}
        primary={{ label: "Plan a Multi-Site Rollout", href: "/contact-us" }}
        secondary={{ label: "Explore SIP Trunking", href: "/sip-trunking" }}
        image={{
          src: "/images/placeholder-photo.svg",
          alt: "Office team reviewing their locations together on a tablet",
        }}
        imageSide="left"
      />

      <FaqSplit
        id="pots-faq-title"
        title={
          <>
            POTS replacement <span className="font-bold">questions, answered.</span>
          </>
        }
        items={potsPageFaqs}
        ctaLabel="Ask About My Copper Lines"
      />

      <ClosingCta />
    </PageShell>
  );
}
