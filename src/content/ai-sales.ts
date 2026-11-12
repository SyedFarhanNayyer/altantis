import type { Faq } from "./faq";
import { pickFaqs } from "./faq-pick";

// Copy for the AI Sales Agent page. There's no "sales agent" row in plans.ts:
// it's set up as a custom AI agent ("set up for other tasks based on the info
// you give it"), which has the same plan availability as the other agents.

// The questions it asks new callers. You choose them; these are examples.
export const salesQuestions: string[] = [
  "What are you looking for help with?",
  "Is this for a home or a business?",
  "When are you hoping to get started?",
  "What’s the best number to reach you?",
];

// The lead drawing on the page (a made-up example).
export const sampleLead = {
  name: "Dana Reyes",
  company: "Reyes Property Group",
  need: "Roof inspection for a commercial building",
  timeline: "Within the next month",
  phone: "(805) 555-0128",
  status: "Transferred to estimator",
};

export const salesFaqs: Faq[] = [
  {
    question: "What does the AI sales agent do?",
    answer:
      "It answers calls from new customers, answers first questions about your services, asks the questions you choose and passes ready buyers to your sales team.",
  },
  {
    question: "Which questions does it ask callers?",
    answer:
      "The ones you choose, such as what the caller needs, their timeline and the best way to reach them. We set them up with you and adjust them as you learn what matters.",
  },
  {
    question: "What happens to callers who aren’t ready to buy?",
    answer:
      "The agent answers their questions and captures their details, so your team can follow up when the time is right.",
  },
  {
    question: "Can it transfer a caller to my sales team?",
    answer:
      "Yes. When a caller is ready to talk, the agent can pass the call to the sales rep or team you choose, along with what it learned.",
  },
  {
    question: "Which plans include the AI sales agent?",
    answer:
      "The sales agent is set up as a custom AI agent. Custom AI agents are included on Premium and Enterprise, and available as an add-on on Basic and Pro.",
    link: { href: "/pricing#compare", label: "Compare plans" },
  },
];

export const salesPageFaqs = pickFaqs(salesFaqs, [
  "What does the AI sales agent do?",
  "Which questions does it ask callers?",
  "What happens to callers who aren’t ready to buy?",
  "Can it transfer a caller to my sales team?",
  "Which plans include the AI sales agent?",
]);
