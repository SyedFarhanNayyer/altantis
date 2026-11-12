import type { NavGroup, NavLink, NavPlainLink, PagePath } from "./pages";

export const site = {
  name: "Atlantis",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  title: "Business Phone Systems for Your Business",
  description:
    "Atlantis configures, ships and supports business phone systems nationwide. Answer every call at the desk, on a cell or after hours. Atlantis team since 1984.",
  foundingYear: 1984,
  region: "United States",
};

// Header mega menus, from the approved sitemap, plus plain links with no menu.
// Labels come from src/lib/pages.ts. Every menu image is the placeholder for
// now: give a group's `image.src`, or a page's entry in `menuPreviews`, its real
// photo when it's ready.
export const mainNav: (NavGroup | NavPlainLink)[] = [
  {
    label: "Phone Systems",
    heading: "Business Phone Systems",
    description: "Cloud and on-site phone systems, planned around how your business takes calls.",
    image: { src: "/images/placeholder-photo.svg", alt: "" },
    links: [
      { path: "/business-phone-systems" },
      { path: "/business-voip" },
      { path: "/hosted-voip-pbx" },
      { path: "/ucaas" },
      { path: "/sip-trunking" },
      { path: "/pots-line-replacement" },
      { path: "/number-porting" },
      { path: "/pricing" },
    ],
  },
  {
    label: "Features & AI",
    description: "Texting, integrations and AI agents that answer, book and follow up for you.",
    image: { src: "/images/placeholder-photo.svg", alt: "" },
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
  { label: "Products", path: "/products" },
  {
    label: "Company",
    description: "A business telecom team since 1984.",
    image: { src: "/images/placeholder-photo.svg", alt: "" },
    links: [
      { path: "/about-us" },
      { path: "/reviews" },
      { path: "/faq" },
      { path: "/blog" },
      { path: "/contact-us" },
    ],
  },
];

// Hidden from the header for now. To show them again, move each group back
// into `mainNav` (Industries after Products, then IT Services).
export const hiddenNav: NavGroup[] = [
  {
    label: "Industries",
    columns: 2,
    description: "Phone systems set up for the way your industry works.",
    image: { src: "/images/placeholder-photo.svg", alt: "" },
    links: [
      { path: "/industries" },
      { path: "/industries/healthcare", image: "/images/placeholder-photo.svg" },
      { path: "/industries/professional-services", image: "/images/placeholder-photo.svg" },
      { path: "/industries/real-estate", image: "/images/placeholder-photo.svg" },
      { path: "/industries/construction", image: "/images/placeholder-photo.svg" },
      { path: "/industries/manufacturing-warehousing", image: "/images/placeholder-photo.svg" },
      { path: "/industries/hospitality", image: "/images/placeholder-photo.svg" },
      { path: "/industries/retail", image: "/images/placeholder-photo.svg" },
      { path: "/industries/government", image: "/images/placeholder-photo.svg" },
      { path: "/industries/education", image: "/images/placeholder-photo.svg" },
      { path: "/industries/call-centers", image: "/images/placeholder-photo.svg" },
      { path: "/industries/restaurants", image: "/images/placeholder-photo.svg" },
      { path: "/industries/non-profit", image: "/images/placeholder-photo.svg" },
      { path: "/industries/ad-agencies", image: "/images/placeholder-photo.svg" },
      { path: "/industries/franchises", image: "/images/placeholder-photo.svg" },
      { path: "/industries/auto-shops", image: "/images/placeholder-photo.svg" },
      { path: "/industries/tech-companies", image: "/images/placeholder-photo.svg" },
      { path: "/industries/startups", image: "/images/placeholder-photo.svg" },
      { path: "/industries/financial-services", image: "/images/placeholder-photo.svg" },
      { path: "/industries/churches", image: "/images/placeholder-photo.svg" },
    ],
  },
  {
    label: "IT Services",
    description: "Managed IT, networks, cabling and security from the same Atlantis team.",
    image: { src: "/images/placeholder-photo.svg", alt: "" },
    links: [
      { path: "/it-services" },
      { path: "/it-services/managed-it-services" },
      { path: "/it-services/network-security" },
      { path: "/network-cabling" },
      { path: "/security-systems" },
      { path: "/it-services/custom-software-development" },
    ],
  },
];

// What the mega menu card shows while a link is hovered or focused: a line
// about the page and its photo (placeholder until real photos are supplied).
export const menuPreviews: Partial<Record<PagePath, { description: string; image: string }>> = {
  "/business-phone-systems": { description: "Phone systems planned around how your business takes calls.", image: "/images/placeholder-photo.svg" },
  "/business-voip": { description: "Business calling over your internet, on desk phones, cell phones and laptops.", image: "/images/placeholder-photo.svg" },
  "/hosted-voip-pbx": { description: "A complete phone system in the cloud, with no PBX box in your office.", image: "/images/placeholder-photo.svg" },
  "/ucaas": { description: "Calls, video, chat and texting from one provider, under one business identity.", image: "/images/placeholder-photo.svg" },
  "/sip-trunking": { description: "Connect the phone system you already own to the internet and keep your setup.", image: "/images/placeholder-photo.svg" },
  "/pots-line-replacement": { description: "Move off retiring copper lines and keep alarms, fax and elevator phones working.", image: "/images/placeholder-photo.svg" },
  "/number-porting": { description: "Switch phone systems and keep every business number you already have.", image: "/images/placeholder-photo.svg" },
  "/pricing": { description: "Plans per user, per month, with everything each one includes.", image: "/images/placeholder-photo.svg" },
  "/features": { description: "Every calling, routing, texting and AI feature, with the plan it comes on.", image: "/images/placeholder-photo.svg" },
  "/contact-us": { description: "Talk to our team about your phones, numbers and the plan that fits.", image: "/images/placeholder-photo.svg" },
  "/business-sms": { description: "Text customers from your business number, with photos and files.", image: "/images/placeholder-photo.svg" },
  "/integrations": { description: "Connect your phone system to your CRM, Microsoft Teams and email.", image: "/images/placeholder-photo.svg" },
  "/ai-voice-agents": { description: "AI agents that answer calls, help callers and pass them to your team.", image: "/images/placeholder-photo.svg" },
  "/ai-voice-agents/ai-receptionist": { description: "Greets every caller and sends them to the right person or team.", image: "/images/placeholder-photo.svg" },
  "/ai-voice-agents/support-agent": { description: "Answers common questions and writes up support tickets from calls.", image: "/images/placeholder-photo.svg" },
  "/ai-voice-agents/sales-agent": { description: "Picks up new-customer calls and passes ready buyers to your sales team.", image: "/images/placeholder-photo.svg" },
  "/ai-voice-agents/scheduling-agent": { description: "Books, moves and cancels appointments by phone.", image: "/images/placeholder-photo.svg" },
  "/about-us": { description: "A business telecom team since 1984, based in Ventura, California.", image: "/images/placeholder-photo.svg" },
  "/reviews": { description: "What businesses say about working with Atlantis.", image: "/images/placeholder-photo.svg" },
  "/faq": { description: "Straight answers about pricing, switching, equipment and support.", image: "/images/placeholder-photo.svg" },
  "/blog": { description: "Guides on phone systems, copper retirement and missed calls.", image: "/images/placeholder-photo.svg" },
};

// Shown in their own column in every mega menu. A group that also lists one
// of these leaves it out of its main column.
export const menuQuickHeading = "Get Started";
export const menuQuickLinks: NavLink[] = [{ path: "/pricing" }, { path: "/features", label: "Features" }, { path: "/contact-us" }];

// Header call to action; it replaces "Contact" in the main nav.
export const headerCta = { label: "Contact Atlantis", href: "/contact-us" } as const;

export const freeOfferLinks = [
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
] as const;
