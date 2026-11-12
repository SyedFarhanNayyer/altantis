import type { Faq } from "./faq";
import { pickFaqs } from "./faq-pick";

// Copy for the AI Support Agent page. What it does matches the "AI support
// agent" and "AI ticket creation" rows in src/content/plans.ts: it answers
// common questions using your business info and creates tickets from calls.

// What it can answer: the business information you give it.
export const knowledge: { title: string; body: string }[] = [
  { title: "Hours and locations", body: "When you’re open, where to find you and how to get there." },
  { title: "Orders and delivery", body: "How ordering works, delivery areas and what to expect." },
  { title: "Policies", body: "Returns, warranties, payments and cancellations, in your words." },
  { title: "Services and pricing", body: "What you offer and the prices you choose to share." },
];

// The ticket drawing on the page (a made-up example).
export const sampleTicket = {
  id: "#1042",
  caller: "Jordan Miller",
  phone: "(805) 555-0163",
  issue: "Order arrived damaged",
  detail: "Bought a standing desk last week. Box was crushed and one leg is bent. Would like a replacement.",
  team: "Customer care",
  priority: "Today",
};

export const supportFaqs: Faq[] = [
  {
    question: "What can the AI support agent answer?",
    answer:
      "Common questions about your business, using the information you give us, such as your hours, locations, policies, services and prices you choose to share.",
  },
  {
    question: "What happens when it can’t answer?",
    answer:
      "It creates a support ticket with the caller’s details and question, or passes the call to your team, depending on how you set it up.",
  },
  {
    question: "What goes into a support ticket?",
    answer:
      "The caller’s name and number, what they called about and the details they gave, so your team can follow up without asking again.",
  },
  {
    question: "Will it make up answers?",
    answer:
      "It’s set up to answer from your business information. We test it with you before it goes live, and anything outside that information goes to your team.",
  },
  {
    question: "Which plans include the AI support agent?",
    answer: "It’s included on Premium and Enterprise, and available as an add-on on Basic and Pro.",
    link: { href: "/pricing#compare", label: "Compare plans" },
  },
];

export const supportPageFaqs = pickFaqs(supportFaqs, [
  "What can the AI support agent answer?",
  "What happens when it can’t answer?",
  "What goes into a support ticket?",
  "Will it make up answers?",
  "Which plans include the AI support agent?",
]);
