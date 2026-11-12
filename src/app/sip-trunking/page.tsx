import { ArrowsOutCardinal, GraduationCap, Hash, Lightning, PiggyBank, CloudArrowUp } from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { MediaSplit } from "@/components/sections/business-phone-systems/MediaSplit";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { DeviceCards } from "@/components/sections/DeviceCards";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PageHero } from "@/components/sections/PageHero";
import { SipAdapters } from "@/components/sections/sip-trunking/SipAdapters";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqText } from "@/content/faq";
import { benefits, comparison, phones, sipPageFaqs } from "@/content/sip-trunking";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/sip-trunking";
const title = "SIP Trunking for Business Phone Systems | Atlantis Utility";
const description =
  "SIP trunking connects your existing PBX to the internet, so you can move off copper phone lines and keep the phones, extensions and menus your team knows.";

const benefitIcons = [PiggyBank, Lightning, Hash, GraduationCap, ArrowsOutCardinal, CloudArrowUp];

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function SipTrunkingPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "SIP Trunking",
          serviceType: "SIP trunking for business phone systems",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: sipPageFaqs.map((f) => ({
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
            SIP Trunking That Keeps{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">the Phone System You Already Know</span>
          </>
        }
        body="Your team already knows its phones, extensions and menus. SIP trunking connects your existing PBX to the internet, so you can move off copper phone lines without starting over."
        primary={{ label: "Check My Phone System", href: "/contact-us" }}
        secondary={{ label: "Compare Plans", href: "/pricing#compare" }}
      />

      <MediaSplit
        id="sip-basics-title"
        className="pt-20 lg:pt-28"
        eyebrow="Introduction to SIP trunking"
        title={
          <>
            What is <span className="font-bold">SIP trunking?</span>
          </>
        }
        intro="SIP trunking is a way to connect an on-site business phone system (a PBX) to the phone network over your internet connection. It replaces the copper phone lines your PBX uses today. Your phones, extensions and call flows stay in place. Only the connection to the outside world changes."
        points={[
          "Your PBX makes and receives calls over the internet",
          "Your phones and extensions stay the way your team knows them",
          "Your current business numbers can move over in most cases",
        ]}
        primary={{ label: "See if Your PBX Can Connect", href: "/contact-us" }}
        secondary={{ label: "Learn About Hosted PBX", href: "/hosted-voip-pbx" }}
        image={{
          src: "/images/sip-trunking-man-on-call-at-desk.jpg",
          alt: "Business owner taking a call while writing notes at his desk",
        }}
        imageSide="right"
      />

      <ComparisonTable
        id="sip-compare-title"
        eyebrow="Copper lines vs SIP trunking"
        title={
          <>
            How SIP trunking compares{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">with copper phone lines.</span>
          </>
        }
        intro="Copper phone lines are reliable and familiar, but carriers are retiring them and each one is tied to physical wiring at your building. Here’s what changes with SIP trunking."
        columns={["Copper phone lines", "SIP trunking"]}
        rows={comparison}
      />

      <SipAdapters />

      <BenefitGrid
        id="sip-benefits-title"
        eyebrow="Why businesses choose SIP trunking"
        title={
          <>
            What your business gets{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">with SIP trunking.</span>
          </>
        }
        action={{ label: "Ask About SIP Trunking", href: "/contact-us" }}
        items={benefits.map((b, i) => ({ ...b, icon: benefitIcons[i] }))}
      />

      <section aria-labelledby="sip-phones-title" className="bg-sand py-20 lg:py-28">
        <div className="container-page">
          <SectionHeading id="sip-phones-title" eyebrow="Our phone system">
            Ready for new phones?{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Meet our Yealink lineup.</span>
          </SectionHeading>
          <p data-reveal="fade" className="mt-3 max-w-[44rem] text-body">
            When your team is ready to move beyond the PBX, our hosted phone system runs on Yealink desk and
            cordless phones. Each phone is set up before it ships, so it’s ready when you plug it in.
          </p>
          <div className="mt-10 lg:mt-12">
            <DeviceCards devices={phones} />
          </div>
          <div className="mt-10 flex flex-wrap gap-4 sm:gap-5">
            <ButtonLink href="/contact-us" data-reveal="fade" className="w-full sm:w-auto sm:px-9">
              Ask Which Phone Fits
            </ButtonLink>
            <ButtonLink href="/products" variant="outline-brand" data-reveal="fade" className="w-full sm:w-auto sm:px-9">
              See All Phones
            </ButtonLink>
          </div>
        </div>
      </section>

      <MediaSplit
        id="sip-ready-title"
        className="pt-20 lg:pt-28"
        eyebrow="Getting ready"
        title={
          <>
            What you need <span className="font-bold">for SIP trunking.</span>
          </>
        }
        intro="We’ll take a look at your current setup before anything changes. Here’s what helps:"
        points={[
          <>
            <strong>A PBX that supports SIP:</strong> most newer IP phone systems do. If yours is older, we’ll
            check what’s possible.
          </>,
          <>
            <strong>A stable internet connection:</strong> plan for about 100 Kbps each way for every call
            happening at the same time.
          </>,
          <>
            <strong>A count of your busiest moment:</strong> how many calls your team handles at once helps us
            size your service.
          </>,
          <>
            <strong>Your current phone numbers:</strong> in most cases, they can move with you.
          </>,
          <>
            <strong>A backup plan:</strong> choose where calls go if your power or internet goes out.
          </>,
        ]}
        primary={{ label: "Send Us Your PBX Details", href: "/contact-us" }}
        secondary={{ label: "Learn About Number Porting", href: "/number-porting" }}
        image={{
          src: "/images/sip-trunking-team-reviewing-tablet-outside-office.jpg",
          alt: "Two colleagues reviewing their phone setup on a tablet outside their office",
        }}
        aspect={4 / 5}
        imageSide="left"
      />

      <section aria-labelledby="sip-pricing-title" className="mt-20 bg-sand py-20 lg:mt-28 lg:py-24">
        <div className="container-page flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <SectionHeading id="sip-pricing-title" eyebrow="Pricing">
              SIP trunking <span className="font-bold">plans and pricing.</span>
            </SectionHeading>
            <p data-reveal="fade" className="mt-3 max-w-[44rem] text-body">
              SIP trunking is part of our Enterprise plan, which also includes multi-site management, custom
              dial plans and key system emulation. Pricing is built around your system, your locations and how
              many calls you handle at once.
            </p>
          </div>
          <div className="flex w-full shrink-0 flex-wrap gap-4 sm:w-auto sm:gap-5">
            <ButtonLink href="/contact-us" data-reveal="fade" className="w-full sm:w-auto sm:px-9">
              Get Enterprise Pricing
            </ButtonLink>
            <ButtonLink
              href="/pricing#compare"
              variant="outline-brand"
              data-reveal="fade"
              className="w-full sm:w-auto sm:px-9"
            >
              Compare All Plans
            </ButtonLink>
          </div>
        </div>
      </section>

      <FaqSplit
        id="sip-faq-title"
        title={
          <>
            SIP trunking <span className="font-bold">questions, answered.</span>
          </>
        }
        items={sipPageFaqs}
        ctaLabel="Ask Us About SIP Trunking"
      />

      <ClosingCta image="/images/sip-trunking-team-reviewing-tablet-wide.jpg" imagePosition="object-[30%_35%]" />
    </PageShell>
  );
}
