import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { ReviewCarousel, type Review } from "./ReviewCarousel";

// Placeholder reviews from the Figma file — replace with real customer reviews.
const reviews: Review[] = [
  {
    quote:
      "Our service experienced an unexpected outage, and Atlantis responded immediately. Their team arrived at our office the same day and worked directly with technical support to quickly diagnose and resolve the issue. The level of customer service was exceptional.",
    name: "Sandra Smith",
    company: "Sandra’s Cafe",
    date: "2026-10-02",
    location: "Boston, USA",
    rating: 5,
  },
  {
    quote:
      "Our service experienced an unexpected outage, and Atlantis responded immediately. Their team arrived at our office the same day and worked directly with technical support to quickly diagnose and resolve the issue. The level of customer service was exceptional.",
    name: "Sandra Smith",
    company: "Sandra’s Cafe",
    date: "2026-10-02",
    location: "Boston, USA",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="py-20 lg:pt-[5.5625rem] lg:pb-[8.125rem]">
      <div className="container-page">
        <ReviewCarousel
          reviews={reviews}
          heading={
            <div>
              <p data-reveal="fade" className="font-display text-eyebrow-lg text-brand-strong">Customer Reviews</p>
              <h2 id="reviews-title" data-reveal="lines" className="mt-2.5 text-h2">
                Businesses that grew
                {" "}
                <br />
                <span className="font-bold">with Atlantis</span>
              </h2>
            </div>
          }
          trust={
            <div className="flex flex-col items-center gap-3">
              <AvatarGroup />
              <p className="text-center font-display text-xs text-night">
                Trusted by Top Companies
                {" "}
                <br />
                100K+ Satisfied customers
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
}
