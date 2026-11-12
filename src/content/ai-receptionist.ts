import type { Faq } from "./faq";
import { pickFaqs } from "./faq-pick";

// Copy for the AI Receptionist page. What it does matches the "AI receptionist"
// row in src/content/plans.ts: it answers calls, greets callers and sends them
// to the right person or team.

// The setup card: what we configure with you.
export const receptionistSetup = {
  greeting: "Thanks for calling Harbor Dental. I can help with appointments, billing or questions. What can I do for you?",
  hours: [
    { label: "Mon – Fri", value: "8 AM – 6 PM" },
    { label: "Saturday", value: "9 AM – 1 PM" },
  ],
  routes: [
    { asks: "Billing or payments", goesTo: "Front desk" },
    { asks: "New patient", goesTo: "Dr. Patel’s team" },
    { asks: "Emergency", goesTo: "On-call line" },
    { asks: "Anything else", goesTo: "Take a message" },
  ],
};

// During hours vs after hours.
export const dayNight = [
  {
    title: "During business hours",
    points: [
      "Picks up when your team is busy",
      "Asks what the caller needs",
      "Sends the call to the right person or team",
    ],
  },
  {
    title: "When you’re closed",
    points: [
      "Greets callers with your after-hours message",
      "Takes a message with the caller’s details",
      "Sends urgent calls where you tell it to",
    ],
  },
];

export const receptionistFaqs: Faq[] = [
  {
    question: "What does an AI receptionist do?",
    answer:
      "It answers your business calls, greets each caller and finds out what they need. Then it sends the call to the right person or team, or takes a message.",
  },
  {
    question: "How is it different from a phone menu?",
    answer:
      "A phone menu asks callers to press numbers. An AI receptionist lets callers say what they need in their own words and routes them from there.",
    link: { href: "/features", label: "See all features" },
  },
  {
    question: "Can it answer when we’re closed?",
    answer:
      "Yes. You choose what it does after hours, such as taking a message or sending urgent calls to an on-call number.",
  },
  {
    question: "Who decides where calls go?",
    answer:
      "You do. We set up the routing with you, such as billing calls to the front desk and new customers to sales, and update it when your team changes.",
  },
  {
    question: "Which plans include the AI receptionist?",
    answer: "It’s included on Premium and Enterprise, and available as an add-on on Basic and Pro.",
    link: { href: "/pricing#compare", label: "Compare plans" },
  },
  {
    question: "Will callers know they’re talking to AI?",
    answer:
      "We recommend the greeting makes it clear, and callers can always ask for a person. We’ll help you word a greeting that fits your business.",
  },
];

export const receptionistPageFaqs = pickFaqs(receptionistFaqs, [
  "What does an AI receptionist do?",
  "How is it different from a phone menu?",
  "Can it answer when we’re closed?",
  "Who decides where calls go?",
  "Which plans include the AI receptionist?",
]);
