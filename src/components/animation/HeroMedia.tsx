"use client";

import Image from "next/image";
import { useRef } from "react";
import { ease } from "@/lib/animation/motion";
import { gsap, useGSAP } from "@/lib/gsap";

// People sit on the right of every photo, clear of the headline. On narrow
// screens each slide is cropped to keep its subject in frame.
const slides = [
  { src: "/images/hero-business-owner-tablet.jpg", mobile: "object-[72%_50%]" },
  { src: "/images/hero-owner-with-coffee.jpg", mobile: "object-[74%_50%]" },
  { src: "/images/hero-team-reviewing-tablet.jpg", mobile: "object-[82%_50%]" },
];

const INTERVAL = 3; // seconds between one photo starting to fade in and the next
const FADE = 1.2;

// The hero photo is the page's orchestrated moment, built from layers so
// each motion owns one transform:
//   scroll layer — drifts down as the hero scrolls away (depth)
//   image layer  — settles into frame on load
//   slides       — crossfade every INTERVAL seconds, each easing out of a
//                  slight zoom as it arrives
// The first slide is the LCP image and is never hidden. Under reduced
// motion nothing moves and only the first photo shows.
export function HeroMedia() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = ref.current?.closest("section");
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-hero-image]", { scale: 1.12, duration: 2.6, ease: ease.out });

        gsap.to("[data-hero-scroll]", {
          yPercent: 18,
          ease: "none",
          scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
        });

        const els = gsap.utils.toArray<HTMLElement>("[data-hero-slide]");
        let current = 0;
        // The incoming slide fades in on top of the current one, which only
        // drops away once covered, so the dark base never shows through.
        const advance = () => {
          const prev = els[current];
          current = (current + 1) % els.length;
          const next = els[current];
          gsap.set(prev, { zIndex: 1 });
          gsap.set(next, { zIndex: 2 });
          gsap.fromTo(
            next,
            { autoAlpha: 0, scale: 1.08 },
            {
              autoAlpha: 1,
              scale: 1,
              duration: FADE,
              ease: ease.soft,
              onComplete: () => gsap.set(prev, { autoAlpha: 0 }),
            },
          );
          // Timed from the start of the fade so a new photo arrives every INTERVAL.
          gsap.delayedCall(INTERVAL, advance);
        };
        gsap.delayedCall(INTERVAL, advance);
      });

      return () => mm.revert();
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden" aria-hidden="true">
      <div data-hero-scroll className="absolute inset-0 will-change-transform">
        <div data-hero-image className="absolute inset-0">
          {slides.map((s, i) => (
            <div
              key={s.src}
              data-hero-slide
              className={`absolute inset-0 ${i === 0 ? "z-[2]" : "invisible opacity-0"}`}
            >
              <Image
                src={s.src}
                alt=""
                fill
                priority={i === 0}
                loading={i === 0 ? undefined : "eager"}
                unoptimized
                className={`object-cover ${s.mobile} lg:object-[50%_30%]`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
