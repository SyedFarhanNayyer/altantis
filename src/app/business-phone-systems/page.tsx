import type { Metadata } from "next";
import { Cursor } from "@/components/animation/Cursor";
import { MotionDirector } from "@/components/animation/MotionDirector";
import { SmoothScroll } from "@/components/animation/SmoothScroll";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { Capabilities } from "@/components/sections/business-phone-systems/Capabilities";
import { Hardware } from "@/components/sections/business-phone-systems/Hardware";
import { Implementation } from "@/components/sections/business-phone-systems/Implementation";
import { Investment } from "@/components/sections/business-phone-systems/Investment";
import { MediaSplit } from "@/components/sections/business-phone-systems/MediaSplit";
import { media } from "@/components/sections/business-phone-systems/media";
import { Outcomes } from "@/components/sections/business-phone-systems/Outcomes";
import { Solutions } from "@/components/sections/business-phone-systems/Solutions";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbTrail } from "@/lib/pages";
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
  const trail = breadcrumbTrail(path);

  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          trail={trail}
          title={
            <>
              Business Phone Systems,{" "}
              <br className="max-sm:hidden" />
              <span className="font-bold">Designed Around the Way You Work</span>
            </>
          }
          primary={{ label: "Request a Consultation", href: "/contact-us" }}
          secondary={{ label: "Explore Solutions", href: "#solutions" }}
        />
        <Outcomes />
        <Solutions />
        <Capabilities />
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
          eyebrow="Reliability"
          title={
            <>
              Built to keep you reachable,{" "}
              <br className="max-sm:hidden" />
              <span className="font-bold">even when something fails.</span>
            </>
          }
          intro="A phone system is only as dependable as the network behind it. We plan for outages before they happen, so customers can still reach you."
          points={[
            <>
              <strong>Network readiness check:</strong> we review your internet
              and network equipment, then prioritize voice traffic for clear calls.
            </>,
            <>
              <strong>Automatic failover:</strong> calls forward to mobile phones
              or another location if your connection drops.
            </>,
            <>
              <strong>LTE backup internet:</strong> an optional second
              connection that keeps phones online during an outage.
            </>,
            <>
              <strong>911 location setup:</strong> a registered location for
              every phone and site.
            </>,
          ]}
          primary={{ label: "Talk to a Specialist", href: "/contact-us" }}
          secondary={{ label: "Explore Business Internet", href: "/it-services" }}
          image={media.reliability}
          imageSide="right"
        />
        <Hardware />
        <Implementation />
        <Investment />
      </main>
      <SiteFooter />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Business Phone Systems",
              serviceType: "Business phone system installation and support",
              description,
              url: `${site.url}${path}`,
              provider: { "@id": `${site.url}/#organization` },
              areaServed: { "@type": "AdministrativeArea", name: "Ventura County, California" },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: trail.map((crumb, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: crumb.title,
                item: `${site.url}${crumb.path === "/" ? "" : crumb.path}`,
              })),
            },
          ],
        }}
      />
      {/* Last in the tree: their effects run once every section above has hydrated. */}
      <SmoothScroll />
      <MotionDirector />
      <Cursor />
    </>
  );
}
