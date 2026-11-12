"use client";

import { useEffect, useId, useRef } from "react";
import { gsap } from "@/lib/gsap";

// Custom cursor: a simple brand-orange arrow, outlined in white so it reads on
// light and dark sections, that tracks the pointer exactly (its tip is the
// hotspot). Over text fields it hides so the native text caret shows.
// Mouse/trackpad only, and off under reduced motion: the native cursor stays
// in every other case.
export function Cursor() {
  const arrow = useRef<HTMLDivElement>(null);
  const gradientId = useId();

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || !arrow.current) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");

    const el = arrow.current;
    const x = gsap.quickSetter(el, "x", "px");
    const y = gsap.quickSetter(el, "y", "px");
    let hidden = false;

    const move = (e: PointerEvent) => {
      x(e.clientX);
      y(e.clientY);
      if (!hidden) gsap.to(el, { autoAlpha: 1, duration: 0.2, overwrite: "auto" });
    };
    const over = (e: PointerEvent) => {
      // Text fields keep the native caret.
      hidden = !!(e.target as Element).closest(
        "input:not([type='checkbox']):not([type='radio']), textarea, select, [contenteditable='true']",
      );
      if (hidden) gsap.to(el, { autoAlpha: 0, duration: 0.15, overwrite: "auto" });
    };
    const leave = () => gsap.to(el, { autoAlpha: 0, duration: 0.2 });

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    document.documentElement.addEventListener("pointerleave", leave);

    return () => {
      root.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100]">
      {/* The arrow's tip sits exactly on the pointer. */}
      <div ref={arrow} className="invisible absolute top-0 left-0 opacity-0">
        <svg width="28" height="30" viewBox="0 0 26 28" className="-mt-px -ml-px">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--color-brand-to)" />
              <stop offset="1" stopColor="var(--color-brand-from)" />
            </linearGradient>
          </defs>
          <path
            d="M2 2 L22 11.5 L13.2 13.6 L9.4 22.6 Z"
            fill={`url(#${gradientId})`}
            stroke="var(--color-on-dark)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
