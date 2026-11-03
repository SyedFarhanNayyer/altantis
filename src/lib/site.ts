import type { NavGroup, NavLink } from "./pages";

export const site = {
  name: "Atlantis",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "Business Phone Systems in California",
  description:
    "Atlantis installs and supports business phone systems across California. Answer every call at the desk, on a cell or after hours. Atlantis team since 1984.",
  foundingYear: 1984,
  region: "California",
};

// Header mega menus, from the approved sitemap. Labels come from
// src/lib/pages.ts. Images are existing site photos standing in until
// menu-specific ones are supplied.
export const mainNav: NavGroup[] = [
  {
    label: "Phone Systems",
    heading: "Business Phone Systems",
    description: "Cloud and on-site phone systems, planned around how your business takes calls.",
    image: { src: "/images/bps-employee-answering-business-call.jpg", alt: "Office employee answering a business call at her desk" },
    links: [
      { path: "/business-phone-systems" },
      { path: "/business-voip" },
      { path: "/hosted-voip-pbx" },
      { path: "/ucaas" },
      { path: "/sip-trunking" },
      { path: "/pots-line-replacement" },
      { path: "/number-porting" },
    ],
  },
  {
    label: "Features & AI",
    description: "Texting, integrations and AI agents that answer, book and follow up for you.",
    image: { src: "/images/guide-missed-business-calls.png", alt: "Business phone call answered by an AI receptionist" },
    links: [
      { path: "/features" },
      { path: "/business-sms" },
      { path: "/integrations" },
      { path: "/ai-voice-agents" },
      { path: "/ai-voice-agents/ai-receptionist" },
      { path: "/ai-voice-agents/support-agent" },
      { path: "/ai-voice-agents/sales-agent" },
      { path: "/ai-voice-agents/scheduling-agent" },
    ],
  },
  {
    label: "Products & Pricing",
    description: "Yealink desk and cordless phones, and plans priced per user.",
    image: { src: "/images/guide-phone-system-signs.jpg", alt: "Business desk phone" },
    links: [
      { path: "/products" },
      { path: "/products/yealink-t54w" },
      { path: "/products/yealink-t53w" },
      { path: "/products/yealink-cordless" },
      { path: "/pricing" },
    ],
  },
  {
    label: "Industries",
    columns: 2,
    description: "Phone systems set up for the way your industry works.",
    image: { src: "/images/hero-team-reviewing-tablet.jpg", alt: "Office team reviewing calls together" },
    links: [
      { path: "/industries" },
      { path: "/industries/healthcare", image: "/images/business-owner-phone-call.jpg" },
      { path: "/industries/professional-services", image: "/images/business-team-coworking.png" },
      { path: "/industries/real-estate", image: "/images/copper-line-team-meeting.jpg" },
      { path: "/industries/construction", image: "/images/atlantis-team-reviewing-screen.png" },
      { path: "/industries/manufacturing-warehousing", image: "/images/hero-business-owner-tablet.jpg" },
      { path: "/industries/hospitality", image: "/images/hero-owner-with-coffee.jpg" },
      { path: "/industries/retail", image: "/images/guide-phone-system-signs.jpg" },
      { path: "/industries/government", image: "/images/guide-missed-business-calls.png" },
      { path: "/industries/education", image: "/images/hero-team-reviewing-tablet.jpg" },
      { path: "/industries/call-centers", image: "/images/business-owner-phone-call.jpg" },
      { path: "/industries/restaurants", image: "/images/business-team-coworking.png" },
      { path: "/industries/non-profit", image: "/images/copper-line-team-meeting.jpg" },
      { path: "/industries/ad-agencies", image: "/images/atlantis-team-reviewing-screen.png" },
      { path: "/industries/franchises", image: "/images/hero-business-owner-tablet.jpg" },
      { path: "/industries/auto-shops", image: "/images/hero-owner-with-coffee.jpg" },
      { path: "/industries/tech-companies", image: "/images/guide-phone-system-signs.jpg" },
      { path: "/industries/startups", image: "/images/guide-missed-business-calls.png" },
      { path: "/industries/financial-services", image: "/images/hero-team-reviewing-tablet.jpg" },
      { path: "/industries/churches", image: "/images/business-owner-phone-call.jpg" },
    ],
  },
  {
    label: "IT Services",
    description: "Managed IT, networks, cabling and security from the same local team.",
    image: { src: "/images/business-team-coworking.png", alt: "Team working in a connected office" },
    links: [
      { path: "/it-services" },
      { path: "/it-services/managed-it-services" },
      { path: "/it-services/network-security" },
      { path: "/network-cabling" },
      { path: "/security-systems" },
      { path: "/it-services/custom-software-development" },
    ],
  },
  {
    label: "Company",
    description: "A Ventura County business telecom team since 1984.",
    image: { src: "/images/atlantis-team-reviewing-screen.png", alt: "Atlantis team reviewing a project on screen" },
    links: [
      { path: "/about-us" },
      { path: "/reviews" },
      { path: "/faq" },
      { path: "/blog" },
      { path: "/contact-us" },
    ],
  },
];

// Shown in their own column in every mega menu. A group that also lists one
// of these leaves it out of its main column.
export const menuQuickHeading = "Get Started";
export const menuQuickLinks: NavLink[] = [{ path: "/pricing" }, { path: "/features", label: "Features" }, { path: "/contact-us" }];

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
