import {
  ChatText,
  FileText,
  HandPalm,
  IdentificationBadge,
  Image as PhotoIcon,
  Lock,
  UserCheck,
  VideoCamera,
} from "@phosphor-icons/react/ssr";
import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SmsAllowance } from "@/components/sections/business-sms/SmsAllowance";
import { SmsCallsAndTexts, SmsWhyText } from "@/components/sections/business-sms/SmsExtras";
import { SmsFlow } from "@/components/sections/business-sms/SmsFlow";
import { TextingPhoto } from "@/components/sections/business-sms/TextingPhoto";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { FaqSplit } from "@/components/sections/FaqSplit";
import { PageHero } from "@/components/sections/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { goodPractice, sendTypes, smsPageFaqs } from "@/content/business-sms";
import { faqText } from "@/content/faq";
import { absoluteUrl, webPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

const path = "/business-sms";
const title = "Business SMS: Text From Your Business Number | Atlantis";
const description =
  "Send and receive texts, photos and files from your business number. Business texting is included on Pro, Premium and Enterprise plans from Atlantis.";

const sendIcons = [ChatText, PhotoIcon, VideoCamera, FileText];
const practiceIcons = [IdentificationBadge, UserCheck, HandPalm, Lock];

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function BusinessSmsPage() {
  return (
    <PageShell
      schema={[
        webPageSchema("WebPage", path, title, description),
        {
          "@type": "Service",
          name: "Business SMS",
          serviceType: "Business text messaging (SMS/MMS)",
          description,
          url: absoluteUrl(path),
          provider: { "@id": `${site.url}/#organization` },
        },
        {
          "@type": "FAQPage",
          mainEntity: smsPageFaqs.map((f) => ({
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
            Text Customers From{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">Your Business Number</span>
          </>
        }
        body="Customers would often rather text than call. Answer them from the same number they already know, with photos, files and quick replies, from your desk or your phone."
        primary={{ label: "Add Texting to My Plan", href: "/contact-us" }}
        secondary={{ label: "See Texts by Plan", href: "/pricing#compare" }}
      />

      <SmsFlow />

      {/* What a text can carry: a photo of a customer reading a reply, beside four large tiles. */}
      <section aria-labelledby="sms-send-title" className="bg-sand py-20 lg:py-28">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <TextingPhoto
            src="/images/business-sms-woman-reading-customer-text.jpg"
            alt="Woman smiling as she reads a text from a business on her phone"
            focus="object-[30%_50%]"
            className="aspect-[4/3] lg:order-2 lg:aspect-auto lg:h-full lg:min-h-[32rem]"
            bubbles={[{ from: "business", text: "Your quote is ready, with photos of each option.", position: "top-[8%] right-[5%]" }]}
          />
          <div>
            <SectionHeading id="sms-send-title" eyebrow="SMS and MMS">
              More than words. <span className="font-bold">Send what explains it best.</span>
            </SectionHeading>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line sm:grid-cols-2">
              {sendTypes.map((type, i) => {
                const Icon = sendIcons[i];
                return (
                  <li key={type.title} className="bg-paper p-6 lg:p-7">
                    <Icon size={32} aria-hidden="true" className="text-brand" />
                    <h3 className="mt-4 font-display text-route-title font-bold">{type.title}</h3>
                    <p className="mt-1.5 text-body-snug text-ink/80">{type.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Desk or on the go: the same thread on the desktop and mobile apps. */}
      <section aria-labelledby="sms-anywhere-title" className="py-20 lg:py-28">
        <div className="container-page grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div className="lg:order-2">
            <SectionHeading id="sms-anywhere-title" eyebrow="Reply From Anywhere">
              At your desk or on the go, <span className="font-bold">one conversation.</span>
            </SectionHeading>
            <p data-reveal="fade" className="mt-4 max-w-[34rem] text-body">
              Start a thread on the desktop app and pick it up on your phone when you head out. Every reply goes out
              from your business number, wherever you send it from.
            </p>
            <ul className="mt-8 max-w-[34rem]">
              {[
                { title: "Reply from your computer", body: "The desktop app keeps texts beside your calls while you work." },
                { title: "Carry on from your phone", body: "Pick up the same conversation in the mobile app when you head out." },
                { title: "Keep personal numbers private", body: "Every reply goes out from your business number." },
              ].map((row) => (
                <li key={row.title} className="border-b border-line py-5 first:border-t">
                  <h3 className="font-display text-title font-bold">{row.title}</h3>
                  <p className="mt-1 text-body-snug text-ink/80">{row.body}</p>
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact-us" data-reveal="fade" className="mt-8 w-full max-sm:h-auto max-sm:min-h-15 max-sm:py-3 sm:w-auto sm:px-9">
              Add Texting to My Plan
            </ButtonLink>
          </div>
          <TextingPhoto
            src="/images/business-sms-restaurant-owner-texting.jpg"
            alt="Café owner smiling as he replies to a customer text at the counter"
            focus="object-[38%_45%]"
            className="aspect-[4/3] lg:order-1"
            bubbles={[]}
          />
        </div>
      </section>

      <SmsWhyText />

      <SmsCallsAndTexts />

      <SmsAllowance />

      {/* Texting the right way: an opt-out in action beside the four rules. */}
      <section aria-labelledby="sms-rules-title" className="py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <SectionHeading id="sms-rules-title" eyebrow="Texting the Right Way">
              Keep customers happy <span className="font-bold">and carriers on side.</span>
            </SectionHeading>
            <ButtonLink
              href="/contact-us"
              variant="outline-brand"
              data-reveal="fade"
              className="w-full shrink-0 max-sm:h-auto max-sm:min-h-15 max-sm:py-3 sm:w-auto sm:px-9"
            >
              Ask About Registration
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
            <TextingPhoto
              src="/images/business-sms-woman-texting-outside-office.jpg"
              alt="Professional woman smiling at a text message outside an office building"
              focus="object-[62%_50%]"
              className="aspect-[4/3] lg:aspect-auto lg:min-h-[26rem]"
              bubbles={[{ from: "business", text: "You’re unsubscribed and won’t get more texts from us.", position: "top-[8%] left-[5%]" }]}
            />
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {goodPractice.map((rule, i) => {
                const Icon = practiceIcons[i];
                return (
                  <li key={rule.title} className="border-t-2 border-brand py-6">
                    <Icon size={28} aria-hidden="true" className="text-brand" />
                    <h3 className="mt-3 font-display text-title-sm font-bold">{rule.title}</h3>
                    <p className="mt-2 text-body-snug text-ink/80">{rule.body}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <FaqSplit
        id="sms-faq-title"
        flushTop
        title={
          <>
            Business texting <span className="font-bold">questions, answered.</span>
          </>
        }
        items={smsPageFaqs}
        ctaLabel="Ask About Business Texting"
      />

      <ClosingCta image="/images/business-sms-texting-at-desk-wide.jpg" imagePosition="object-[40%_50%]" />
    </PageShell>
  );
}
