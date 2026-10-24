"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export type Review = {
  quote: string;
  name: string;
  company: string;
  date: string; // ISO yyyy-mm-dd
  location: string;
  rating: number;
};

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).replace(/ (\d{4})$/, ", $1");

type Props = { reviews: Review[]; heading: ReactNode; trust: ReactNode };

// Scroll-snap track: swipe on touch, arrow buttons on desktop. Every
// review stays in the DOM, so all of them are readable by crawlers.
export function ReviewCarousel({ reviews, heading, trust }: Props) {
  const track = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = track.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * (card.offsetWidth + 59), behavior: reduce ? "auto" : "smooth" });
  };

  const arrow =
    "size-10 cursor-pointer rounded-[0.3125rem] transition-opacity disabled:cursor-default disabled:opacity-40";

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-8">
        {heading}
        <div className="flex flex-col items-center gap-5">
          {trust}
          <div className="flex gap-10">
            <button type="button" className={arrow} onClick={() => scrollBy(-1)} disabled={!canPrev}>
              <span className="sr-only">Previous review</span>
              <Image src="/icons/chevron-left.svg" alt="" width={40} height={40} />
            </button>
            <button type="button" className={arrow} onClick={() => scrollBy(1)} disabled={!canNext}>
              <span className="sr-only">Next review</span>
              <Image src="/icons/chevron-left.svg" alt="" width={40} height={40} className="rotate-180" />
            </button>
          </div>
        </div>
      </div>

      <ul
        ref={track}
        data-reveal="stagger"
        aria-label="Customer reviews"
        className="mt-12 flex snap-x snap-mandatory gap-[3.6875rem] overflow-x-auto [scrollbar-width:none] lg:mt-[3rem] [&::-webkit-scrollbar]:hidden"
      >
        {reviews.map((r, i) => (
          <li
            key={i}
            className="flex w-[88%] shrink-0 snap-start flex-col rounded-[1.25rem] border border-line px-5 pt-[1.5625rem] sm:px-8 pb-8 md:w-[calc(50%-1.84375rem)]"
          >
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
                <div className="flex justify-between gap-4">
                  <span className="text-body-sm leading-7 font-bold tracking-[-0.03em]">{r.name}</span>
                  <span className="text-right text-body-sm leading-7 font-bold tracking-[-0.03em]">
                    {r.company}
                  </span>
                </div>
                <div className="mt-0.5 flex justify-between gap-4 text-small tracking-[-0.03em]">
                  <time dateTime={r.date}>{formatDate(r.date)}</time>
                  <span className="text-right">{r.location}</span>
                </div>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </>
  );
}
