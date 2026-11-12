import type { Faq } from "./faq";
import { pickFaqs } from "./faq-pick";
import { compareGroups, plans } from "./plans";

// Shared copy for the AI Voice Agents pages. What the agents do and which plans
// include them comes from src/content/plans.ts, so these pages and the pricing
// table always agree.

const aiRow = compareGroups.flatMap((g) => g.rows).find((r) => r.name === "AI receptionist");

// AI agents by plan, e.g. { plan: "Basic", value: "Add-on" }.
export const aiAvailability = plans.map((p, i) => {
  const v = aiRow?.values[i] ?? "none";
  return { plan: p.name, value: v === "included" ? "Included" : v === "addon" ? "Add-on" : "Not available" };
});

export type AgentKey = "receptionist" | "support" | "sales" | "scheduling";

export type Agent = {
  key: AgentKey;
  name: string;
  href: string;
  summary: string;
  can: string[];
};

export const agents: Agent[] = [
  {
    key: "receptionist",
    name: "AI Receptionist",
    href: "/ai-voice-agents/ai-receptionist",
    summary: "Answers your calls, greets every caller and sends them to the right person or team.",
    can: ["Greets callers with your business name", "Asks what they need and routes the call", "Takes a message when no one’s free"],
  },
  {
    key: "support",
    name: "AI Support Agent",
    href: "/ai-voice-agents/support-agent",
    summary: "Answers common customer questions from your business information and opens a ticket when needed.",
    can: ["Answers questions about hours, orders and policies", "Creates a support ticket from the call", "Hands harder calls to your team"],
  },
  {
    key: "sales",
    name: "AI Sales Agent",
    href: "/ai-voice-agents/sales-agent",
    summary: "Picks up new-customer calls, answers first questions and makes sure no lead goes unanswered.",
    can: ["Answers questions about your services", "Collects the caller’s details and needs", "Passes ready buyers to your sales team"],
  },
  {
    key: "scheduling",
    name: "AI Scheduling Agent",
    href: "/ai-voice-agents/scheduling-agent",
    summary: "Helps callers book, change or cancel appointments, so your front desk isn’t stuck on the phone.",
    can: ["Books new appointments", "Moves or cancels existing ones", "Confirms the details before the call ends"],
  },
];

// Example calls. Businesses and callers are made up; each shows a real reason
// a customer calls.
export type CallLine = { from: "caller" | "agent"; text: string };
export type SampleCall = { key: AgentKey; label: string; business: string; lines: CallLine[]; outcome: string };

export const sampleCalls: SampleCall[] = [
  {
    key: "receptionist",
    label: "Receptionist",
    business: "Harbor Dental",
    lines: [
      { from: "agent", text: "Thanks for calling Harbor Dental. How can I help you today?" },
      { from: "caller", text: "Hi, I have a question about my bill." },
      { from: "agent", text: "Sure, I’ll connect you with our billing team now." },
    ],
    outcome: "Sent to Billing",
  },
  {
    key: "support",
    label: "Support",
    business: "Coastline Supply",
    lines: [
      { from: "caller", text: "What time do you close on Saturday?" },
      { from: "agent", text: "We’re open until 2 PM on Saturdays. Is there anything else I can help with?" },
      { from: "caller", text: "My order arrived damaged." },
      { from: "agent", text: "I’m sorry about that. I’ve opened a ticket and our team will call you back today." },
    ],
    outcome: "Ticket created",
  },
  {
    key: "sales",
    label: "Sales",
    business: "Summit Roofing",
    lines: [
      { from: "caller", text: "Do you do roof inspections for commercial buildings?" },
      { from: "agent", text: "We do. Can I get your name, the property address and a good number to reach you?" },
      { from: "caller", text: "Sure, it’s Dana at 1200 Main Street." },
      { from: "agent", text: "Thanks, Dana. I’m connecting you with our estimator now." },
    ],
    outcome: "Lead passed to sales",
  },
  {
    key: "scheduling",
    label: "Scheduling",
    business: "Bright Paws Vet",
    lines: [
      { from: "caller", text: "I need to move Max’s checkup to next week." },
      { from: "agent", text: "No problem. I have Tuesday at 10 AM or Thursday at 3 PM. Which works?" },
      { from: "caller", text: "Thursday at 3, please." },
      { from: "agent", text: "You’re all set for Thursday at 3 PM. See you then!" },
    ],
    outcome: "Appointment moved",
  },
];

export const callFor = (key: AgentKey) => sampleCalls.find((c) => c.key === key)!;

// How an agent is set up: Atlantis builds it from your information.
export const setupSteps: { title: string; body: string }[] = [
  { title: "Share", body: "Tell us your hours, services, common questions and who should take which calls." },
  { title: "Build", body: "We set up your agent with that information and connect it to your call routing." },
  { title: "Test", body: "We make test calls together and adjust the greeting and answers until they’re right." },
  { title: "Go live", body: "Your agent starts answering. Tell us when something changes and we update it." },
];

export const aiFaqs: Faq[] = [
  {
    question: "What is an AI voice agent?",
    answer:
      "An AI voice agent answers your business calls and talks with callers in natural language. Depending on how it’s set up, it can route calls, answer common questions, book appointments and create support tickets.",
  },
  {
    question: "Which plans include AI agents?",
    answer: "AI agents are included on Premium and Enterprise, and available as an add-on on Basic and Pro.",
    link: { href: "/pricing#compare", label: "Compare plans" },
  },
  {
    question: "Can callers still reach a person?",
    answer:
      "Yes. You decide when calls go to your team, such as when a caller asks for a person or a question needs one. The agent passes the call to the right person or team.",
  },
  {
    question: "How does the agent know about my business?",
    answer:
      "It uses the information you give us, such as your hours, services, policies and common questions. We set it up with you and test it before it answers real calls.",
  },
  {
    question: "Can I change what the agent says?",
    answer: "Yes. Tell us what’s changed, such as new hours, a new service or a different greeting, and we update your agent.",
  },
  {
    question: "Do I need new phones or a new number?",
    answer:
      "No. The agent answers calls to your Atlantis business number, so it works with the phones and numbers you already use on our system.",
    link: { href: "/number-porting", label: "Keeping your current number" },
  },
  {
    question: "Can I use more than one agent?",
    answer:
      "Yes. For example, the receptionist can greet callers and send scheduling calls to the scheduling agent. We’ll help you decide which agents fit how your calls come in.",
  },
];

// The five shown on the overview page; the FAQ page lists them all.
export const aiPageFaqs = pickFaqs(aiFaqs, [
  "What is an AI voice agent?",
  "Which plans include AI agents?",
  "Can callers still reach a person?",
  "How does the agent know about my business?",
  "Do I need new phones or a new number?",
]);
