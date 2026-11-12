import { ChatsCircle, ChatText, Desktop, DeviceMobile, PlugsConnected, UserCheck } from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { MediaSplit } from "@/components/sections/business-phone-systems/MediaSplit";
import { BenefitGrid } from "@/components/sections/BenefitGrid";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PageHero } from "@/components/sections/PageHero";
import { PlanRows } from "@/components/sections/PlanRows";
import { UcaasUseCases } from "@/components/sections/ucaas/UcaasUseCases";
import { faqText } from "@/content/faq";
import { basicPrice, benefits, comparison, planNotes, ucaasPageFaqs } from "@/content/ucaas";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/ucaas";

const benefitIcons = [ChatsCircle, UserCheck, Desktop, DeviceMobile, ChatText, PlugsConnected];
const title = "UCaaS: Unified Communications for Business | Atlantis Utility";
const description =
  "Atlantis UCaaS puts business calling, video meetings, team chat and texting on one system, managed from one portal. See plans and pricing per user.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function UcaasPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "UCaaS (Unified Communications as a Service)",
          serviceType: "Unified communications as a service",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: ucaasPageFaqs.map((f) => ({
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
            UCaaS That Brings Calls,{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Video and Chat Into One Place</span>
          </>
        }
        body="Your team shouldn’t need a separate app for every conversation. Atlantis UCaaS puts business calling, video meetings, team chat and texting on one system, managed from one portal."
        primary={{ label: "Plan My Team’s Setup", href: "/contact-us" }}
        secondary={{ label: "See Plans and Pricing", href: "/pricing" }}
      />

      <MediaSplit
        id="ucaas-basics-title"
        className="pt-20 lg:pt-28"
        eyebrow="Introduction to UCaaS"
        title={
          <>
            What is <span className="font-bold">UCaaS?</span>
          </>
        }
        intro="UCaaS (Unified Communications as a Service) is a cloud platform that combines the ways your business communicates. Instead of a phone system, a video tool and a chat app that don’t talk to each other, your team uses one service with one business identity."
        points={[
          "Calls, video, chat and texting from one provider",
          "Your business number goes wherever your team works",
          "Users and settings managed online in one admin portal",
        ]}
        primary={{ label: "Explore All Features", href: "/features" }}
        secondary={{ label: "Compare Plans", href: "/pricing#compare" }}
        image={{
          src: "/images/ucaas-man-on-video-call-at-laptop.jpg",
          alt: "Businessman with a coffee talking to a colleague on a video call from his laptop",
        }}
        aspect={1500 / 1000}
        imageSide="right"
      />

      <ComparisonTable
        id="ucaas-compare-title"
        eyebrow="Separate tools vs UCaaS"
        title={
          <>
            How UCaaS compares{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">with separate communication tools.</span>
          </>
        }
        intro="Many teams piece together a phone line, a video app and a chat tool over time. Here’s what changes when it all runs on one system."
        columns={["Separate tools", "Atlantis UCaaS"]}
        rows={comparison}
      />

      <BenefitGrid
        id="ucaas-benefits-title"
        eyebrow="Why teams switch to UCaaS"
        title={
          <>
            What your team gets{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">with UCaaS.</span>
          </>
        }
        action={{ label: "See What’s Included for My Team", href: "/pricing#compare" }}
        items={benefits.map((b, i) => ({ ...b, icon: benefitIcons[i] }))}
      />
      <UcaasUseCases />

      <MediaSplit
        id="ucaas-ready-title"
        className="pt-20 lg:pt-28"
        eyebrow="Getting ready"
        title={
          <>
            What you need{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">to switch to UCaaS.</span>
          </>
        }
        intro="Less than most businesses expect. Desk phones set themselves up when plugged in, and the apps are quick to install."
        points={[
          <>
            <strong>A stable internet connection:</strong> plan for about 100 Kbps
            each way for every call at the same time, and more for video.
          </>,
          <>
            <strong>Something to answer on:</strong> IP desk phones, the mobile
            app or the web phone.
          </>,
          <>
            <strong>Your current phone numbers:</strong> in most cases, they can
            move with you.
          </>,
          <>
            <strong>A list of your team:</strong> who needs a phone, who works
            remotely and who handles the most calls.
          </>,
        ]}
        primary={{ label: "Start Planning My Switch", href: "/contact-us" }}
        secondary={{ label: "Learn About Number Porting", href: "/number-porting" }}
        image={{
          src: "/images/ucaas-woman-on-laptop-call-with-earphones.jpg",
          alt: "Woman with earphones on a call from her laptop",
        }}
        aspect={1}
        imageSide="left"
      />

      <PlanRows
        id="ucaas-plans-title"
        eyebrow="Pricing"
        title={
          <>
            UCaaS <span className="font-bold">plans and pricing.</span>
          </>
        }
        only={["Pro", "Premium", "Enterprise"]}
        notes={planNotes}
        footnote={`Need calling only? Our Basic plan starts at ${basicPrice} per user per month. Taxes and fees not included.`}
        cta={{ label: "Compare all plans", href: "/pricing#compare" }}
        popularLabel="Most popular"
        planButtons
      />

      <FaqSplit
        id="ucaas-faq-title"
        title={
          <>
            UCaaS <span className="font-bold">questions, answered.</span>
          </>
        }
        items={ucaasPageFaqs}
        ctaLabel="Ask Us About UCaaS"
      />

      <ClosingCta image="/images/ucaas-video-meeting-on-laptop-wide.jpg" imagePosition="object-[70%_50%]" />
    </PageShell>
  );
}
