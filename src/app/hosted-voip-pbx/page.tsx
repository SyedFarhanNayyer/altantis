import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PbxComparison } from "@/components/sections/hosted-pbx/PbxComparison";
import { PbxHero } from "@/components/sections/hosted-pbx/PbxHero";
import { PbxOverview } from "@/components/sections/hosted-pbx/PbxOverview";
import { PbxPath } from "@/components/sections/hosted-pbx/PbxPath";
import { PbxReasons } from "@/components/sections/hosted-pbx/PbxReasons";
import { PbxSwitch } from "@/components/sections/hosted-pbx/PbxSwitch";
import { PlanRows } from "@/components/sections/PlanRows";
import { faqText } from "@/content/faq";
import { pbxPageFaqs, startingPrice } from "@/content/hosted-pbx";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/hosted-voip-pbx";
const title = "Hosted VoIP PBX for Business Phones | Atlantis Utility";
const description = `A hosted VoIP PBX gives your business extensions, menus and call routing from the cloud, with no PBX equipment on site. Plans start at ${startingPrice} per user.`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function HostedPbxPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "Hosted VoIP PBX",
          serviceType: "Hosted PBX phone system",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: pbxPageFaqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: faqText(f) },
          })),
        },
      ]}
    >
      <PbxHero />
      <PbxOverview />
      <PbxPath />
      <PbxReasons />
      <PbxComparison />
      <PbxSwitch />
      <PlanRows
        id="pbx-plans-title"
        title={
          <>
            Start with what you need.{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Add more as your team grows.</span>
          </>
        }
        intro="Each plan includes everything in the one before it, and you can change plans later."
      />
      <FaqSplit
        id="pbx-faq-title"
        title={
          <>
            Hosted PBX <span className="font-bold">questions.</span>
          </>
        }
        items={pbxPageFaqs}
      />
      <ClosingCta image="/images/hosted-pbx-agent-on-headset-call-wide.jpg" imagePosition="object-[72%_40%]" />
    </PageShell>
  );
}
