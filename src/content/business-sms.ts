import type { Faq } from "./faq";
import { pickFaqs } from "./faq-pick";
import { compareGroups, plans } from "./plans";

// Copy for the Business SMS page. Allowances come from src/content/plans.ts,
// so the page and the pricing table always agree.

const smsRow = compareGroups
  .flatMap((g) => g.rows)
  .find((r) => r.name === "Business texting (SMS/MMS)");

// Texts included per plan, e.g. { plan: "Pro", value: "250 / month" }.
export const smsAllowance = plans.map((p, i) => ({ plan: p.name, value: smsRow?.values[i] ?? "none" }));

// Why customers reach for text first.
export const textReasons: { title: string; body: string }[] = [
  { title: "Quicker than a call", body: "A question and an answer in two messages, with no hold music." },
  { title: "Easy to answer between tasks", body: "Reply when you’re free, instead of playing phone tag." },
  { title: "A written record", body: "Times, prices and details stay in the thread for both of you." },
];

// What a text can carry.
export const sendTypes: { title: string; body: string }[] = [
  { title: "Texts", body: "Quick answers, reminders and updates." },
  { title: "Photos", body: "Show the finished job, the part or the product." },
  { title: "Videos", body: "A short walkthrough says more than a paragraph." },
  { title: "Files", body: "Send quotes, forms and receipts in the thread." },
];

// Texting the right way: guidance every business should follow.
export const goodPractice: { title: string; body: string }[] = [
  {
    title: "Register your number",
    body: "US carriers require business numbers to be registered before they send texts. We walk you through it.",
  },
  {
    title: "Text people who asked to hear from you",
    body: "Get a customer’s permission before you text them, and keep a note of when they gave it.",
  },
  {
    title: "Make opting out easy",
    body: "When someone replies STOP, stop texting them. It keeps you compliant and keeps customers happy.",
  },
  {
    title: "Keep sensitive details out",
    body: "Don’t send passwords, card numbers or private records by text. Call, or use a secure link instead.",
  },
];

export const smsFaqs: Faq[] = [
  {
    question: "What is business texting?",
    answer:
      "Business texting lets your team send and receive text messages from your business phone number instead of a personal cell phone. Customers see your business number, and replies come back to your team.",
  },
  {
    question: "Can customers text our main business number?",
    answer:
      "In most cases, yes. Once texting is turned on for your number, customers can text the same number they already call. We’ll check your numbers before you switch.",
  },
  {
    question: "Which plans include business texting?",
    answer:
      "Business texting is included on Pro, Premium and Enterprise. Pro includes 250 texts a month, Premium includes 1,000, and Enterprise is custom.",
    link: { href: "/pricing#compare", label: "Compare plans" },
  },
  {
    question: "What happens if we use all our texts?",
    answer: "You can add extra texts each month on any plan, so you don’t have to change plans to keep texting.",
  },
  {
    question: "Can we send photos and files?",
    answer: "Yes. Business texting covers SMS and MMS, so you can send photos, videos and files as well as text.",
  },
  {
    question: "Where does our team read and reply to texts?",
    answer:
      "In the Atlantis mobile app and desktop app, using your business number. Personal cell numbers stay private.",
  },
  {
    question: "Do we need to register our number to send texts?",
    answer:
      "Yes. US carriers require businesses to register the numbers they text from. We walk you through registration as part of setup.",
  },
  {
    question: "Can we send texts to a large list of customers?",
    answer:
      "Business texting is designed for conversations with customers. If you plan to text a large list, talk to us first so we can confirm what fits and keep you within carrier rules.",
  },
  {
    question: "How do customers stop receiving texts?",
    answer: "They reply STOP. Once someone opts out, don’t text them again unless they opt back in.",
  },
];

// The five shown on the page; the FAQ page lists them all.
export const smsPageFaqs = pickFaqs(smsFaqs, [
  "Can customers text our main business number?",
  "Which plans include business texting?",
  "What happens if we use all our texts?",
  "Do we need to register our number to send texts?",
  "Can we send texts to a large list of customers?",
]);
