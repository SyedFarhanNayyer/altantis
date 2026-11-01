import Image from "next/image";
import { formatReviewDate, type Review } from "@/content/reviews";

// One review: stars, quote, name and date. Used by the homepage carousel
// and the Reviews page grid.
export function ReviewCard({ review: r }: { review: Review }) {
  return (
    <figure className="flex h-full flex-col">
      <div className="flex" role="img" aria-label={`Rated ${r.rating} out of 5`}>
        {Array.from({ length: r.rating }, (_, s) => (
          <Image key={s} src="/icons/star.svg" alt="" width={20} height={20} />
        ))}
      </div>
      <blockquote className="mt-4 mb-8 text-body tracking-[-0.03em] text-night">
        <p>“{r.quote}”</p>
      </blockquote>
      <figcaption className="mt-auto border-t border-line-light pt-4 font-display text-night">
        <span className="block text-body-sm leading-7 font-bold tracking-[-0.03em]">{r.name}</span>
        <time dateTime={r.date} className="mt-0.5 block text-small tracking-[-0.03em]">
          {formatReviewDate(r.date)}
        </time>
      </figcaption>
    </figure>
  );
}
