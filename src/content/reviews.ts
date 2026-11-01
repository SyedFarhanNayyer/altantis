export type Review = {
  quote: string;
  name: string;
  date: string; // ISO yyyy-mm-dd
  rating: number;
};

// "2 October, 2026"
export const formatReviewDate = (iso: string) =>
  new Date(`${iso}T00:00:00`)
    .toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
    .replace(/ (\d{4})$/, ", $1");

// Placeholder reviews from the Figma file — replace with real customer
// reviews. Until then the Reviews page stays out of search results and
// carries no Review markup.
export const reviews: Review[] = [
  {
    quote:
      "Our service experienced an unexpected outage, and Atlantis responded immediately. Their team arrived at our office the same day and worked directly with technical support to quickly diagnose and resolve the issue. The level of customer service was exceptional.",
    name: "Sandra Smith",
    date: "2026-10-02",
    rating: 5,
  },
  {
    quote:
      "Our service experienced an unexpected outage, and Atlantis responded immediately. Their team arrived at our office the same day and worked directly with technical support to quickly diagnose and resolve the issue. The level of customer service was exceptional.",
    name: "Sandra Smith",
    date: "2026-10-02",
    rating: 5,
  },
];
