// Every public page on the site, from the approved sitemap. `parent` records
// where a page sits in the sitemap; `label` is the shorter name used in menus.

export type Page = {
  path: string;
  title: string;
  label?: string;
  parent?: string;
};

export const pages = [
  { path: "/", title: "Home" },

  // Phone systems
  { path: "/business-phone-systems", title: "Business Phone Systems" },
  { path: "/business-voip", title: "Business VoIP", parent: "/business-phone-systems" },
  { path: "/hosted-voip-pbx", title: "Hosted VoIP PBX", label: "Hosted PBX", parent: "/business-phone-systems" },
  { path: "/ucaas", title: "UCaaS (Unified Communications)", label: "UCaaS", parent: "/business-phone-systems" },
  { path: "/sip-trunking", title: "SIP Trunking", parent: "/business-phone-systems" },
  { path: "/pots-line-replacement", title: "POTS Line Replacement", label: "POTS Replacement", parent: "/business-phone-systems" },
  { path: "/number-porting", title: "Number Porting", parent: "/business-phone-systems" },

  // Features and AI
  { path: "/features", title: "All Features" },
  { path: "/business-sms", title: "Business SMS", parent: "/features" },
  { path: "/integrations", title: "Integrations", parent: "/features" },
  { path: "/ai-voice-agents", title: "AI Voice Agents", parent: "/features" },
  { path: "/ai-voice-agents/ai-receptionist", title: "AI Receptionist", parent: "/ai-voice-agents" },
  { path: "/ai-voice-agents/support-agent", title: "AI Support Agent", parent: "/ai-voice-agents" },
  { path: "/ai-voice-agents/sales-agent", title: "AI Sales Agent", parent: "/ai-voice-agents" },
  { path: "/ai-voice-agents/scheduling-agent", title: "AI Scheduling Agent", parent: "/ai-voice-agents" },

  // Products and pricing
  { path: "/products", title: "Yealink Phone Catalog", label: "Yealink Phones" },
  { path: "/products/yealink-t54w", title: "Yealink T54W", parent: "/products" },
  { path: "/products/yealink-t53w", title: "Yealink T53W", parent: "/products" },
  { path: "/products/yealink-cordless", title: "Yealink Cordless Phone", parent: "/products" },
  { path: "/pricing", title: "Pricing" },

  // Industries
  { path: "/industries", title: "Industries Overview", label: "All Industries" },
  { path: "/industries/healthcare", title: "Healthcare", parent: "/industries" },
  { path: "/industries/professional-services", title: "Professional Services", parent: "/industries" },
  { path: "/industries/real-estate", title: "Real Estate", parent: "/industries" },
  { path: "/industries/construction", title: "Construction", parent: "/industries" },
  { path: "/industries/manufacturing-warehousing", title: "Manufacturing & Warehousing", parent: "/industries" },
  { path: "/industries/hospitality", title: "Hospitality", parent: "/industries" },
  { path: "/industries/retail", title: "Retail", parent: "/industries" },
  { path: "/industries/government", title: "Government", parent: "/industries" },
  { path: "/industries/education", title: "Education", parent: "/industries" },
  { path: "/industries/call-centers", title: "Call Centers", parent: "/industries" },
  { path: "/industries/restaurants", title: "Restaurants", parent: "/industries" },
  { path: "/industries/non-profit", title: "Non Profit", parent: "/industries" },
  { path: "/industries/ad-agencies", title: "Ad Agencies", parent: "/industries" },
  { path: "/industries/franchises", title: "Franchises", parent: "/industries" },
  { path: "/industries/auto-shops", title: "Auto Shops", parent: "/industries" },
  { path: "/industries/tech-companies", title: "Tech Companies", parent: "/industries" },
  { path: "/industries/startups", title: "Startups", parent: "/industries" },
  { path: "/industries/financial-services", title: "Financial Services", parent: "/industries" },
  { path: "/industries/churches", title: "Churches", parent: "/industries" },

  // IT services
  { path: "/it-services", title: "IT Services Overview" },
  { path: "/it-services/managed-it-services", title: "Managed IT Services", parent: "/it-services" },
  { path: "/it-services/network-security", title: "Network Security", parent: "/it-services" },
  { path: "/network-cabling", title: "Network Cabling", parent: "/it-services" },
  { path: "/security-systems", title: "Security Camera Systems", parent: "/it-services" },
  { path: "/it-services/custom-software-development", title: "Custom Software & AI Development", parent: "/it-services" },

  // Company
  { path: "/about-us", title: "About Us" },
  { path: "/reviews", title: "Reviews" },
  { path: "/faq", title: "FAQ" },
  { path: "/blog", title: "Blog & Guides" },
  { path: "/contact-us", title: "Contact / Request Quote", label: "Contact Us" },

  // Footer only
  { path: "/privacy-policy", title: "Privacy Policy" },
  { path: "/terms-and-conditions", title: "Terms and Conditions" },
] as const satisfies readonly Page[];

export type PagePath = (typeof pages)[number]["path"];

const byPath = new Map<string, Page>(pages.map((p) => [p.path, p]));

export const getPage = (path: string) => byPath.get(path);

// A menu entry: a page path plus an optional label that overrides the page's own.
// `image` replaces the mega menu photo while the link is hovered or focused.
export type NavLink = { path: PagePath; label?: string; image?: string };
// The first link is the group's overview page. `description` and `image`
// introduce the group in the desktop mega menu.
export type NavGroup = {
  label: string;
  description: string;
  image: { src: string; alt: string };
  /** Link columns beside the photo in the mega menu (default 2). */
  columns?: 2 | 3;
  links: NavLink[];
};

export const navLabel = (link: NavLink) => {
  const page = getPage(link.path)!;
  return link.label ?? page.label ?? page.title;
};
