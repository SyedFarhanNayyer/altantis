import type { Faq } from "./faq";
import { pickFaqs } from "./faq-pick";
import { plans } from "./plans";

// Copy for the UCaaS page, supplied by Atlantis. Prices come from
// src/content/plans.ts.

const price = (name: string) => plans.find((p) => p.name === name)!.price;
export const basicPrice = price("Basic");

export const comparison: { topic: string; before: string; after: string }[] = [
  {
    topic: "Business calling",
    before: "Phone system on its own",
    after: "Included, with unlimited calling to the US, Canada, Mexico and Puerto Rico",
  },
  { topic: "Video meetings", before: "Separate app and login", after: "Included on Pro and above" },
  {
    topic: "Team chat",
    before: "Separate app and login",
    after: "Team chat and group messaging included on Pro and above",
  },
  {
    topic: "Seeing who’s available",
    before: "Checked in each tool",
    after: "Presence shows who’s available, busy or on a call",
  },
  {
    topic: "Business texting",
    before: "Often not available",
    after: "Send and receive texts from your business number",
  },
  { topic: "Managing users", before: "Added in each tool", after: "Added once in the admin portal" },
];

export const benefits: { title: string; body: string }[] = [
  {
    title: "One place to talk",
    body: "Calls, video meetings and team chat live on the same system, so conversations don’t get scattered.",
  },
  {
    title: "See who’s free",
    body: "Presence and busy lamp field show who’s available before you transfer a call.",
  },
  {
    title: "Work from any desk",
    body: "Hot desking lets anyone log in to a desk phone and use it as their own.",
  },
  {
    title: "Answer from anywhere",
    body: "Take business calls on your mobile phone, computer or any web browser, with your business number.",
  },
  {
    title: "Text customers from your business number",
    body: "Reply to customers by text without giving out personal cell numbers.",
  },
  {
    title: "Connect your tools",
    body: "Premium adds CRM integrations and screen pops, so caller details show up when the phone rings.",
  },
];

export const useCases: { title: string; body: string }[] = [
  {
    title: "Front desk",
    body: "A web attendant console to answer, hold, transfer and park calls from the screen.",
  },
  {
    title: "Remote and hybrid teams",
    body: "The mobile app, web phone and simultaneous ring keep everyone reachable.",
  },
  {
    title: "Customer-facing teams",
    body: "Call queues, skill-based routing and call center reporting on Premium.",
  },
  {
    title: "Busy teams",
    body: "AI agents on Premium can answer calls, help callers book appointments and create support tickets.",
  },
];

// What each plan means for UCaaS, shown in place of the general plan line.
export const planNotes: Record<string, string> = {
  Pro: "Video meetings, team chat, presence, call recording and hot desking.",
  Premium: "Everything in Pro, plus call queues, CRM integrations, screen pops and AI agents.",
  Enterprise: "Everything in Premium, plus multi-site management, custom dial plans and SIP trunking.",
};

export const ucaasFaqs: Faq[] = [
  {
    question: "What does UCaaS stand for?",
    answer:
      "UCaaS stands for Unified Communications as a Service. It’s a cloud service that combines calling, video, messaging and other communication tools in one platform.",
  },
  {
    question: "What’s the difference between UCaaS and VoIP?",
    answer:
      "VoIP is the technology that carries calls over the internet. UCaaS is built on it and adds video meetings, team chat, presence and other collaboration tools to your phone system.",
    link: { href: "/business-voip", label: "Learn about business VoIP" },
  },
  {
    question: "What’s the difference between UCaaS and a hosted PBX?",
    answer:
      "A hosted PBX is a cloud phone system with extensions, menus and call routing. UCaaS includes that and adds video, chat and collaboration features.",
    link: { href: "/hosted-voip-pbx", label: "Learn about hosted PBX" },
  },
  {
    question: "Is UCaaS a good fit for a small business?",
    answer:
      "Usually, yes. Small teams get video, chat and business calling from one provider without buying on-site equipment, and each person is priced individually.",
  },
  {
    question: "Which plan includes video meetings and team chat?",
    answer: "Video meetings, team chat, group messaging and presence start on the Pro plan.",
    link: { href: "/pricing#compare", label: "Compare plans" },
  },
  {
    question: "Can I keep my current business phone number?",
    answer: "In most cases, yes. We’ll look into it for you before you switch.",
    link: { href: "/number-porting", label: "Learn about number porting" },
  },
  {
    question: "Can UCaaS connect to our CRM?",
    answer:
      "CRM integrations are included on Premium and Enterprise. Ask us about the CRM you use and we’ll check.",
  },
  {
    question: "What happens if my internet goes down?",
    answer:
      "Your phones and apps can’t connect until the connection returns. You can set calls to forward to another number, such as a cell phone, so customers can still reach someone.",
  },
  {
    question: "Does 911 work with UCaaS?",
    answer:
      "Yes, but it needs a registered address and a working connection. Calls over the internet may not work during an outage, so keep a cell phone or another backup available for emergencies.",
  },
];

// The five shown on the page; the FAQ page lists them all.
export const ucaasPageFaqs = pickFaqs(ucaasFaqs, [
  "What’s the difference between UCaaS and VoIP?",
  "Is UCaaS a good fit for a small business?",
  "Which plan includes video meetings and team chat?",
  "Can I keep my current business phone number?",
  "Can UCaaS connect to our CRM?",
]);
