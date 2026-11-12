import type { Faq } from "./faq";

export const catalogFaqs: Faq[] = [
  {
    question: "Do we need new phones?",
    answer: "Not always. We’ll check whether your current phones work with our system.",
  },
  {
    question: "Which phone suits a busy reception desk?",
    answer:
      "We’d usually start with a phone with plenty of speed-dial keys, such as the Grandstream GXP-2160 or the Yealink SIP-T54W with an EXP50 expansion module. Tell us how your front desk works and we’ll help you choose.",
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
