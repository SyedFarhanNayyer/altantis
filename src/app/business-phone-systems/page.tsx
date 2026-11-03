import type { Metadata } from "next";
import { Cursor } from "@/components/animation/Cursor";
import { MotionDirector } from "@/components/animation/MotionDirector";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ComparePlans } from "@/components/sections/business-phone-systems/ComparePlans";
import { Hardware } from "@/components/sections/business-phone-systems/Hardware";
import { Implementation } from "@/components/sections/business-phone-systems/Implementation";
import { MediaSplit } from "@/components/sections/business-phone-systems/MediaSplit";
import { media } from "@/components/sections/business-phone-systems/media";
import { Outcomes } from "@/components/sections/business-phone-systems/Outcomes";
import { Plans } from "@/components/sections/business-phone-systems/Plans";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { Faq } from "@/components/sections/Faq";
import { PageHero } from "@/components/sections/PageHero";
import { Reviews } from "@/components/sections/Reviews";
import { JsonLd } from "@/components/ui/JsonLd";
import { site } from "@/lib/site";

const path = "/business-phone-systems";
const title = "Business Phone Systems in Ventura County | Atlantis Utility";
const description =
  "Hosted VoIP, SIP trunking and system conversions for California businesses. Designed around your call flow, installed by local technicians, supported long term.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: path },
  openGraph: { url: path, title, description },
  twitter: { title, description },
};

export default function BusinessPhoneSystemsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          title={
            <>
              Business Phone Systems,{" "}
              <br className="max-sm:hidden" />
              <span className="font-bold">Designed Around the Way You Work</span>
            </>
          }
          primary={{ label: "Request a Consultation", href: "/contact-us" }}
        />
        <Outcomes />
        <Plans />
        <ComparePlans />
        <MediaSplit
          id="call-flow-title"
          className="pt-20 lg:pt-28"
          eyebrow="The Atlantis Difference"
          title={
            <>
              Designed with your team,{" "}
              <br className="max-sm:hidden" />
              <span className="font-bold">not from a template.</span>
            </>
          }
          intro="Before anything is installed, we map how calls should move through your business: who answers first, what happens when lines are busy, and where calls go after hours. Then we build it, test every path and train your staff."
          points={[
            "Greetings and menus written with you",
            "Ring order set for each department",
            "After-hours and holiday rules planned in advance",
            "Every route tested before go-live",
          ]}
          primary={{ label: "Book a Site Survey", href: "/contact-us" }}
          secondary={{ label: "See Our Process", href: "#process" }}
          image={media.callFlow}
          imageSide="left"
        />
        <MediaSplit
          id="reliability-title"
          className="pt-20 lg:pt-28"
          eyebrow="Easy &amp; Simple"
          title={
            <>
              Plug and play, with{" "}
              <br className="max-sm:hidden" />
              <span className="font-bold">self configuration.</span>
            </>
          }
          intro="Plug your phones in and they set themselves up. From there, you can manage greetings, menus and users yourself online, with our team available if you need help."
          points={[
            <>
              <strong>Phone auto setup:</strong> desk phones set themselves up
              when plugged in.
            </>,
            <>
              <strong>Admin portal:</strong> change greetings, menus and users
              online.
            </>,
            <>
              <strong>User portal:</strong> each user has their own login to
              manage their settings.
            </>,
            <>
              <strong>Remote phone restart:</strong> restart a desk phone from
              the portal.
            </>,
          ]}
          primary={{ label: "Talk to a Specialist", href: "/contact-us" }}
          secondary={{ label: "Explore Business Internet", href: "/it-services" }}
          image={media.reliability}
          imageSide="right"
        />
        <Hardware />
        <Implementation />
        <Reviews />
        <Faq flushTop />
        <ClosingCta />
      </main>
      <SiteFooter />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Business Phone Systems",
          serviceType: "Business phone system installation and support",
          description,
          url: `${site.url}${path}`,
          provider: { "@id": `${site.url}/#organization` },
          areaServed: { "@type": "AdministrativeArea", name: "Ventura County, California" },
        }}
      />
      {/* Last in the tree: their effects run once every section above has hydrated. */}
      <SmoothScroll />
      <MotionDirector />
      <Cursor />
    </>
  );
}
