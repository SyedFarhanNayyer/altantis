import { AvatarGroup } from "@/components/ui/AvatarGroup";
import { reviews } from "@/content/reviews";
import { ReviewCarousel } from "./ReviewCarousel";

export function Reviews() {
  return (
    <section aria-labelledby="reviews-title" className="py-20 lg:pt-[5.5625rem] lg:pb-[8.125rem]">
      <div className="container-page">
        <ReviewCarousel
          reviews={reviews}
          heading={
            <div>
              <p data-reveal="fade" className="font-display text-eyebrow text-brand-strong">Customer Reviews</p>
              <h2 id="reviews-title" data-reveal="lines" className="text-h2">
                Trusted Partnerships.
                {" "}
                <br />
                <span className="font-bold">Lasting Connections.</span>
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
                1000+ Satisfied customers
              </p>
            </div>
          }
        />
      </div>
    </section>
  );
}
