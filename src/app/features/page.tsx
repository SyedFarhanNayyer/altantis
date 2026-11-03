import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FeatureDirectory } from "@/components/sections/features/FeatureDirectory";
import { PageHero } from "@/components/sections/PageHero";
import { webPageSchema } from "@/lib/schema";

const path = "/features";
const title = "Business Phone System Features | Atlantis Utility";
const description =
  "See every Atlantis business phone feature, from call routing, voicemail and mobile apps to team chat, call center tools, AI agents and CRM integrations.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function FeaturesPage() {
  return (
    <PageShell schema={[webPageSchema("WebPage", path, title, description)]}>
      <PageHero
        title={
          <>
            All <span className="font-bold">Features</span>
          </>
        }
        body="Everything an Atlantis phone system can do, from routing calls to running a call center. What’s included depends on your plan."
        primary={{ label: "Compare Plans", href: "/pricing#compare" }}
        secondary={{ label: "Contact Atlantis", href: "/contact-us" }}
      />
      <FeatureDirectory />
      <ClosingCta />
    </PageShell>
  );
}
