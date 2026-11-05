import type { Faq } from "./faq";
import { t53w, t54w, w73p } from "./products";

// Yealink phones arranged by where people work. The room suggestions are ours,
// based on how Yealink positions each model. Specs match src/content/products.ts.

export const rooms = [
  {
    id: "front-desk",
    room: "Front desk",
    who: "The person who answers first",
    phone: "Yealink T54W with EXP50",
    why: "Reception needs more people one key away. The T54W’s color display pairs with up to three EXP50 expansion modules, each a sidecar with its own color screen, for more line keys.",
    points: ["4.3″ adjustable color display", "Up to 3 EXP50 expansion modules", "Up to 16 VoIP accounts"],
    image: t54w.heroImage,
    href: t54w.path,
    linkLabel: "Explore the T54W",
    icon: "desk",
  },
  {
    id: "private-office",
    room: "Private office",
    who: "Managers and professionals",
    phone: "Yealink T54W",
    why: "A mid-level phone for a moderate call load. Acoustic Shield technology helps keep your voice clear of the room around you, and Wi-Fi and Bluetooth keep cables off the desk.",
    points: ["Acoustic Shield technology", "Built-in 2.4G/5G Wi-Fi", "Built-in Bluetooth 4.2"],
    image: t54w.frontImage,
    href: t54w.path,
    linkLabel: "Explore the T54W",
    icon: "office",
  },
  {
    id: "shared-workspace",
    room: "Shared workspace",
    who: "Teams in common areas",
    phone: "Yealink T53W",
    why: "An entry-level phone for common workspaces, with the same wireless connections and Acoustic Shield technology as the T54W, and a 3.7-inch graphical display.",
    points: ["3.7″ adjustable graphical display", "Up to 12 VoIP accounts", "Dual-port Gigabit Ethernet"],
    image: t53w.frontImage,
    href: t53w.path,
    linkLabel: "Explore the T53W",
    icon: "shared",
  },
  {
    id: "around-the-building",
    room: "Around the building",
    who: "Staff who don’t stay at a desk",
    phone: "Yealink W73P",
    why: "A cordless system for mobile workers. One base station supports up to 10 handsets, and optional repeaters extend coverage across the building.",
    points: ["Up to 10 handsets per base station", "Up to 20 simultaneous calls", "Up to 6 optional RT30 repeaters"],
    image: w73p.heroImage,
    href: w73p.path,
    linkLabel: "Explore the W73P",
    icon: "roaming",
  },
] as const;

export const catalogPhones = [
  { name: "T54W", href: t54w.path },
  { name: "T53W", href: t53w.path },
  { name: "W73P", href: w73p.path },
];

export const catalogRows: { label: string; values: [string, string, string] }[] = [
  { label: "Made for", values: ["Professionals and managers", "Common workspaces", "Mobile workers"] },
  { label: "Display", values: ["4.3″ color", "3.7″ graphical", "1.8″ color, on the handset"] },
  { label: "VoIP accounts", values: ["Up to 16", "Up to 12", "Up to 10"] },
  { label: "Network", values: ["Dual Gigabit Ethernet and 2.4G/5G Wi-Fi", "Dual Gigabit Ethernet and 2.4G/5G Wi-Fi", "One 10/100M Ethernet port"] },
  { label: "Headsets", values: ["Bluetooth 4.2 or USB", "Bluetooth 4.2 or USB", "3.5 mm jack"] },
  { label: "Add more", values: ["Up to 3 EXP50 modules", "Up to 3 EXP50 modules", "Up to 10 handsets, 6 repeaters"] },
  { label: "Cordless handsets", values: ["Up to 4, with the DD10K dongle", "Up to 4, with the DD10K dongle", "Included: cordless by design"] },
];

export const catalogFaqs: Faq[] = [
  {
    question: "Do we need new phones?",
    answer: "Not always. We’ll check whether your current phones work with our system.",
  },
  {
    question: "Which phone suits a busy reception desk?",
    answer:
      "We’d usually start with the T54W and an EXP50 expansion module, which adds line keys. Tell us how your front desk works and we’ll help you choose.",
  },
  {
    question: "Can staff use a cell phone instead of a desk phone?",
    answer: "Yes. Every plan includes the mobile app, so a desk phone isn’t required for everyone.",
    link: { href: "/pricing", label: "See plans and pricing" },
  },
  {
    question: "How much do the phones cost?",
    answer: "Contact us and tell us how many phones you need, and we’ll give you pricing for your team.",
    link: { href: "/contact-us", label: "Contact Atlantis" },
  },
];
