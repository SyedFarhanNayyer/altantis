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
const title = "Business Phone Systems, Configured and Shipped | Atlantis Utility";
const description =
  "Business phone systems configured to your specifications and shipped ready to plug in. Mobile, desktop and video calling, with support from the Atlantis team.";

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
          eyebrow="The Real Difference"
          title={
            <>
              Designed to Help You{" "}
              <br className="max-sm:hidden" />
              <span className="font-bold">Grow Your Business</span>
            </>
          }
          intro="Atlantis business phone systems make it easy to stay focused on your customers. Take calls from anywhere using your business number, and give your team the flexibility to call, text, or meet by video wherever they work."
          points={[
            <>
              <strong>Mobile app:</strong> make and receive business calls and
              send texts from your smartphone.
            </>,
            <>
              <strong>Desktop app:</strong> make and answer business calls
              directly from your computer.
            </>,
            <>
              <strong>Video conferencing:</strong> meet face to face with
              customers, colleagues, and partners from wherever you work.
            </>,
          ]}
          primary={{ label: "See Our Process", href: "#process" }}
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
              <span className="font-bold">ability to manage.</span>
            </>
          }
          intro="Connect your preconfigured desk phones to your network to get started. From the online portal, administrators can manage company-wide settings, and employees can update their own preferences. The Atlantis team is available when you need help."
          points={[
            <>
              <strong>Automatic phone setup:</strong> supported desk phones
              apply their assigned settings when connected to your network.
            </>,
            <>
              <strong>Administrator portal:</strong> update company greetings,
              change phone menus, and manage users and extensions.
            </>,
            <>
              <strong>Employee portal:</strong> each employee has a personal
              login to manage call forwarding, voicemail, and other extension
              settings.
            </>,
            <>
              <strong>Remote phone restart:</strong> authorized administrators
              can restart supported desk phones remotely.
            </>,
          ]}
          primary={{ label: "Talk to a Specialist", href: "/contact-us" }}
          image={media.reliability}
          imageSide="right"
        />
        <Hardware />
        <Implementation />
        <Reviews />
        <Faq flushTop />
        <ClosingCta image="/images/business-owner-mobile-call.jpg" />
      </main>
      <SiteFooter />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Business Phone Systems",
          serviceType: "Business phone system configuration and support",
          description,
          url: `${site.url}${path}`,
          provider: { "@id": `${site.url}/#organization` },
          areaServed: { "@type": "Country", name: "United States" },
        }}
      />
      {/* Last in the tree: their effects run once every section above has hydrated. */}
      <SmoothScroll />
      <MotionDirector />
      <Cursor />
    </>
  );
}
