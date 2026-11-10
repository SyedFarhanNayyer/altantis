import Image from "next/image";
import type { Review } from "@/content/reviews";

// One review: stars and quote. Used by the homepage carousel and the Reviews
// page list.
export function ReviewCard({ review: r }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col">
      <div className="flex" role="img" aria-label={`Rated ${r.rating} out of 5`}>
        {Array.from({ length: r.rating }, (_, s) => (
          <Image key={s} src="/icons/star.svg" alt="" width={20} height={20} />
        ))}
      </div>
      <blockquote className="mt-4 text-body tracking-[-0.03em] text-night">
        <p>“{r.quote}”</p>
      </blockquote>
    </figure>
  );
}
