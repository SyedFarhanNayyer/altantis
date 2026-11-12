import type { Faq } from "./faq";

// The most useful questions for a page, by question text and in this order.
// Pages show at most five; the FAQ page lists every question.
export function pickFaqs(items: Faq[], questions: string[]): Faq[] {
  return questions.map((q) => {
    const faq = items.find((f) => f.question === q);
    if (!faq) throw new Error(`No FAQ with the question "${q}"`);
    return faq;
  });
}
