import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ComparePlans } from "@/components/sections/business-phone-systems/ComparePlans";
import { Plans } from "@/components/sections/business-phone-systems/Plans";
import { Faq } from "@/components/sections/Faq";
import { PageHero } from "@/components/sections/PageHero";
import { webPageSchema } from "@/lib/schema";

const path = "/pricing";
const title = "Business Phone Plans and Pricing | Atlantis Utility";
const description =
  "Compare Atlantis business phone plans from $19.99 per user per month. See what’s included in Basic, Pro, Premium and Enterprise, plus available add-ons.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function PricingPage() {
  return (
    <PageShell schema={[webPageSchema("WebPage", path, title, description)]}>
      <PageHero
        title={
          <>
            Business Phone <span className="font-bold">Plans</span>
          </>
        }
        body="Pick the plan that fits your team. Every plan includes a business number, mobile app, and phone menu."
        primary={{ label: "Contact Atlantis", href: "/contact-us" }}
        secondary={{ label: "Features", href: "#compare" }}
      />
      <Plans standalone />
      <ComparePlans allOpen />
      <Faq />
      <ClosingCta
        eyebrow="Simple Setup. Plug and Play."
        image="/images/placeholder-photo.svg"
        imagePosition="object-[center_20%]"
        title={
          <>
            Let’s get your business connected <span className="font-bold">with Atlantis.</span>
          </>
        }
      />
    </PageShell>
  );
}
