import type { Metadata, Viewport } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { business, officeHours, site, socialLinks } from "@/lib/site";
import { lineSeed, manrope } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.title} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: "/",
    title: `${site.title} | ${site.name}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.title} | ${site.name}`,
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#fffbf9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the head script and Lenis add classes to <html>.
    <html lang="en-US" className={`${lineSeed.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        {/* Runs before paint: opts into the hero intro (see globals.css). */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')}catch(e){}",
          }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-on-dark"
        >
          Skip to main content
        </a>
        {children}
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": `${site.url}/#organization`,
                name: business.legalName,
                url: site.url,
                logo: `${site.url}/images/atlantis-logo-color.png`,
                image: `${site.url}/opengraph-image.jpg`,
                description: site.description,
                foundingDate: String(site.foundingYear),
                telephone: business.phone.tel,
                email: business.email,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: business.address.street,
                  addressLocality: business.address.city,
                  addressRegion: business.address.region,
                  postalCode: business.address.postalCode,
                  addressCountry: business.address.country,
                },
                hasMap: business.address.mapUrl,
                areaServed: { "@type": "AdministrativeArea", name: "Ventura County, California" },
                openingHoursSpecification: officeHours
                  .filter((d) => d.opens)
                  .map((d) => ({
                    "@type": "OpeningHoursSpecification",
                    dayOfWeek: d.day,
                    opens: d.opens,
                    closes: d.closes,
                  })),
                sameAs: socialLinks.filter((s) => s.icon !== "google").map((s) => s.href),
              },
              {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                name: site.name,
                url: site.url,
                publisher: { "@id": `${site.url}/#organization` },
              },
            ],
          }}
        />
      </body>
    </html>
  );
}
