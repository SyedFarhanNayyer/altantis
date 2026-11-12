import type { Faq } from "./faq";
import { pickFaqs } from "./faq-pick";

// Copy for the AI Scheduling Agent page. What it does matches the "AI booking
// and scheduling" row in src/content/plans.ts: it helps callers book, change
// or cancel appointments.

export const bookingActions: { title: string; body: string; example: string }[] = [
  {
    title: "Book",
    body: "Offers open times and books the one the caller picks.",
    example: "“Can I come in this week?”",
  },
  {
    title: "Move",
    body: "Finds a new time and moves the existing appointment.",
    example: "“I need to reschedule Thursday.”",
  },
  {
    title: "Cancel",
    body: "Cancels the appointment and confirms it with the caller.",
    example: "“I can’t make it tomorrow.”",
  },
];

export const schedulingFaqs: Faq[] = [
  {
    question: "What can the AI scheduling agent do?",
    answer:
      "It helps callers book new appointments, move existing ones and cancel the ones they can’t make, then confirms the details before the call ends.",
  },
  {
    question: "How does it know when we’re available?",
    answer:
      "We set it up with the schedule and appointment types you use, and test it with you before it takes real bookings. Ask us about the calendar you use today.",
  },
  {
    question: "Can callers still book with a person?",
    answer: "Yes. If a caller asks for a person, or the request is unusual, the agent passes the call to your team.",
  },
  {
    question: "What kinds of businesses use it?",
    answer:
      "Any business that books by phone, such as clinics, salons, repair and home services, and professional offices.",
  },
  {
    question: "Which plans include the AI scheduling agent?",
    answer: "AI booking and scheduling is included on Premium and Enterprise, and available as an add-on on Basic and Pro.",
    link: { href: "/pricing#compare", label: "Compare plans" },
  },
];

export const schedulingPageFaqs = pickFaqs(schedulingFaqs, [
  "What can the AI scheduling agent do?",
  "How does it know when we’re available?",
  "Can callers still book with a person?",
  "What kinds of businesses use it?",
  "Which plans include the AI scheduling agent?",
]);
