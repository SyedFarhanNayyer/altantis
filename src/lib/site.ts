export const site = {
  name: "Atlantis",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "Business Phone Systems in California",
  description:
    "Atlantis installs and supports business phone systems across California. Answer every call at the desk, on a cell or after hours. Atlantis team since 1984.",
  foundingYear: 1984,
  region: "California",
};

export const mainNav = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Careers", href: "/careers" },
  { label: "Locations", href: "/locations" },
  { label: "About Atlantis", href: "/about" },
  { label: "News", href: "/news" },
] as const;

// Header call to action; it replaces "Contact" in the main nav.
export const headerCta = { label: "Contact Atlantis", href: "/contact" } as const;

export const freeOfferLinks = [
  { label: "Free Site Survey", href: "/free-site-survey" },
  { label: "Free Copper Line Audit", href: "/copper-line-audit" },
  { label: "Free Quote Comparison", href: "/quote-comparison" },
] as const;

// Name, address, phone (NAP) — keep identical everywhere: footer, schema,
// Google Business Profile. Source: atlantisutility.com footer.
export const business = {
  legalName: "Atlantis Utility, Inc.",
  address: {
    street: "1445 Donlon St, Ste 14",
    city: "Ventura",
    region: "CA",
    postalCode: "93003",
    country: "US",
    mapUrl: "https://maps.app.goo.gl/9pxh62tRQ962Qz6V7",
  },
  phone: { display: "(805) 658-2329", tel: "+18056582329" },
  email: "customers@atlantisutility.com",
  hoursSummary: "Mon to Fri, 8am to 5pm",
  timeZone: "America/Los_Angeles",
  reviewsUrl: "https://share.google/m7GhQaNt6yLIyA8cb",
} as const;

// Weekly hours; `opens`/`closes` are 24h for schema.org.
export const officeHours = [
  { day: "Monday", opens: "08:00", closes: "17:00" },
  { day: "Tuesday", opens: "08:00", closes: "17:00" },
  { day: "Wednesday", opens: "08:00", closes: "17:00" },
  { day: "Thursday", opens: "08:00", closes: "17:00" },
  { day: "Friday", opens: "08:00", closes: "17:00" },
  { day: "Saturday", opens: null, closes: null },
  { day: "Sunday", opens: null, closes: null },
] as const;

export const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/atlantisutility", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/atlantisutilityinc/", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/atlantis-utility/", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/@AtlantisUtility", icon: "youtube" },
  { label: "Google reviews", href: "https://share.google/m7GhQaNt6yLIyA8cb", icon: "google" },
] as const;

export const footerNav = [
  {
    title: "What We Do",
    links: [
      { label: "Business Phone Systems", href: "/business-phone-systems" },
      { label: "Business VoIP", href: "/business-voip" },
      { label: "Hosted PBX", href: "/hosted-pbx" },
      { label: "SIP Trunking", href: "/sip-trunking" },
      { label: "Copper Line Replacement", href: "/pots-line-replacement" },
    ],
  },
  {
    title: "Who We Help",
    links: [
      { label: "Industries We Serve", href: "/industries" },
      { label: "Solutions by Business Type", href: "/solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Atlantis", href: "/about-us" },
      { label: "Our History", href: "/about-us#our-history" },
      { label: "Customer Reviews", href: "https://share.google/m7GhQaNt6yLIyA8cb" },
      { label: "Blog & Resources", href: "/blog" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
] as const;

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Accessibility", href: "/accessibility-statement" },
  { label: "Do Not Sell or Share My Personal Information", href: "/privacy-policy#ccpa" },
] as const;
