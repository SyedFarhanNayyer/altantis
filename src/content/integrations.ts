import type { Faq } from "./faq";
import { pickFaqs } from "./faq-pick";
import { compareGroups, plans } from "./plans";

// Copy for the Integrations page. Which plans include each integration is read
// from src/content/plans.ts, so this page and the pricing table always agree.

const rows = compareGroups.flatMap((g) => g.rows);

// "Every plan", "Pro and up", "Premium and Enterprise", "Enterprise" or "Add-on".
function availability(rowName: string): string {
  const row = rows.find((r) => r.name === rowName);
  if (!row) return "Ask us";
  if (row.values.every((v) => v === "addon")) return "Add-on on any plan";
  const on = plans.filter((_, i) => row.values[i] !== "none").map((p) => p.name);
  if (on.length === plans.length) return "Every plan";
  if (on.length === 1) return on[0];
  if (on.length === 2) return `${on[0]} and ${on[1]}`;
  return `${on[0]} and up`;
}

const enterpriseOnly = (feature: string) =>
  plans.find((p) => p.name === "Enterprise")?.features.includes(feature) ? "Enterprise" : "Ask us";

export type IntegrationCategory = "Customer data" | "Microsoft Teams" | "Email and inbox" | "Apps and browser" | "Systems";

export type Integration = {
  title: string;
  body: string;
  category: IntegrationCategory;
  plan: string;
  icon: "crm" | "screen" | "teams" | "routing" | "webhook" | "voicemail" | "transcript" | "fax" | "browser" | "click" | "sip" | "sms";
  link?: { href: string; label: string };
};

export const integrations: Integration[] = [
  {
    title: "CRM integration",
    body: "Connect your phone system to the CRM your team already works in. Tell us which one you use and we’ll check it.",
    category: "Customer data",
    plan: availability("CRM integrations"),
    icon: "crm",
  },
  {
    title: "Screen pops",
    body: "Caller details appear on screen as the phone rings. Answer, hold, transfer or record from the same window.",
    category: "Customer data",
    plan: availability("Screen pops"),
    icon: "screen",
  },
  {
    title: "Web hooks",
    body: "Send call data to your other business apps as calls happen, so records stay up to date.",
    category: "Systems",
    plan: availability("Web hooks"),
    icon: "webhook",
  },
  {
    title: "Microsoft Teams",
    body: "Bring Atlantis calling into Microsoft Teams, so your team calls and chats from one place.",
    category: "Microsoft Teams",
    plan: enterpriseOnly("Teams integrations"),
    icon: "teams",
  },
  {
    title: "Teams Direct Routing",
    body: "Use Atlantis as the phone service behind Teams calling, with your business numbers.",
    category: "Microsoft Teams",
    plan: enterpriseOnly("Teams Direct Routing"),
    icon: "routing",
  },
  {
    title: "Voicemail to email",
    body: "Every voicemail lands in your inbox with the audio file attached.",
    category: "Email and inbox",
    plan: availability("Voicemail to email"),
    icon: "voicemail",
  },
  {
    title: "Voicemail transcription",
    body: "Read voicemails as text and see what a caller needs before you call back.",
    category: "Email and inbox",
    plan: availability("Voicemail transcription"),
    icon: "transcript",
  },
  {
    title: "Fax to email",
    body: "Send and receive faxes by email, or keep using your fax machine.",
    category: "Email and inbox",
    plan: availability("Fax to email"),
    icon: "fax",
  },
  {
    title: "Web phone",
    body: "Make and take calls from your web browser, with no extra software to install.",
    category: "Apps and browser",
    plan: availability("Web phone"),
    icon: "browser",
  },
  {
    title: "Click to call",
    body: "Click a phone number to start a call instead of dialing it by hand.",
    category: "Apps and browser",
    plan: availability("Click to call"),
    icon: "click",
  },
  {
    title: "Business texting",
    body: "Send and receive texts, photos and files from your business number in the Atlantis apps.",
    category: "Apps and browser",
    plan: availability("Business texting (SMS/MMS)"),
    icon: "sms",
    link: { href: "/business-sms", label: "About business SMS" },
  },
  {
    title: "SIP trunking",
    body: "Already own a phone system? Connect it to our service and keep the equipment you have.",
    category: "Systems",
    plan: availability("SIP trunking"),
    icon: "sip",
    link: { href: "/sip-trunking", label: "About SIP trunking" },
  },
];

export const categories: IntegrationCategory[] = [
  "Customer data",
  "Microsoft Teams",
  "Email and inbox",
  "Apps and browser",
  "Systems",
];

// Asking about an app that isn't listed.
export const askSteps: { title: string; body: string }[] = [
  { title: "Tell us the app", body: "Let us know which CRM or business app your team uses every day." },
  { title: "We check the fit", body: "We confirm how it connects and which plan it needs." },
  { title: "Set up before you switch", body: "The connection is configured and tested along with your phones." },
];

export const integrationFaqs: Faq[] = [
  {
    question: "Which CRMs does Atlantis connect to?",
    answer:
      "CRM integrations are included on Premium and Enterprise. Tell us which CRM you use and we’ll confirm how it connects before you sign up.",
  },
  {
    question: "What is a screen pop?",
    answer:
      "A screen pop shows a caller’s details on your screen as the phone rings, so you know who’s calling before you answer. From the same window you can answer, hold, transfer or record the call.",
  },
  {
    question: "Does Atlantis work with Microsoft Teams?",
    answer:
      "Yes. Teams integrations and Teams Direct Routing are available on the Enterprise plan, so your team can make and take business calls in Teams.",
    link: { href: "/pricing#compare", label: "Compare plans" },
  },
  {
    question: "Can voicemails and faxes come to our email?",
    answer:
      "Yes. Voicemail to email is included on every plan, voicemail transcription is included from Pro, and fax to email is an add-on on any plan.",
  },
  {
    question: "What are web hooks used for?",
    answer:
      "Web hooks send call data, such as who called and when, to your other business apps as calls happen. They’re available on Enterprise.",
  },
  {
    question: "Can we keep our current phone system and still connect it?",
    answer: "Often, yes. SIP trunking connects an existing phone system to our service and is available on Enterprise.",
    link: { href: "/sip-trunking", label: "Learn about SIP trunking" },
  },
  {
    question: "What if the app we use isn’t listed?",
    answer: "Ask us. We’ll check how your app can connect and let you know what’s possible before you switch.",
  },
];

// The five shown on the page; the FAQ page lists them all.
export const integrationPageFaqs = pickFaqs(integrationFaqs, [
  "Which CRMs does Atlantis connect to?",
  "What is a screen pop?",
  "Does Atlantis work with Microsoft Teams?",
  "Can voicemails and faxes come to our email?",
  "What if the app we use isn’t listed?",
]);
