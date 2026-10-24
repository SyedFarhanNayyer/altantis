"use client";

import { useEffect, useRef } from "react";
import { ease } from "@/lib/animation/motion";
import { gsap } from "@/lib/gsap";

// Custom cursor: a dot that tracks the pointer exactly and a ring that
// follows with weight. Over links and buttons the ring opens up and the
// dot hides. Blend mode "difference" keeps it visible on light and dark
// sections. Mouse/trackpad only, and off under reduced motion — the native
// cursor stays in every other case.
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || !dot.current || !ring.current) return;

    const root = document.documentElement;
    root.classList.add("has-cursor");

    const dotX = gsap.quickTo(dot.current, "x", { duration: 0.12, ease: "power2.out" });
    const dotY = gsap.quickTo(dot.current, "y", { duration: 0.12, ease: "power2.out" });
    const ringX = gsap.quickTo(ring.current, "x", { duration: 0.55, ease: ease.soft });
    const ringY = gsap.quickTo(ring.current, "y", { duration: 0.55, ease: ease.soft });
    const both = [dot.current, ring.current];

    const move = (e: PointerEvent) => {
      gsap.to(both, { autoAlpha: 1, duration: 0.3, overwrite: "auto" });
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };
    const over = (e: PointerEvent) => {
      const active = (e.target as Element).closest("a, button, [role='button'], summary");
      gsap.to(ring.current, { scale: active ? 1.9 : 1, duration: 0.45, ease: ease.soft });
      gsap.to(dot.current, { scale: active ? 0 : 1, duration: 0.3, ease: ease.soft });
    };
    const leave = () => gsap.to(both, { autoAlpha: 0, duration: 0.3 });

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
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[100] mix-blend-difference">
      <div
        ref={ring}
        className="invisible absolute top-0 left-0 -mt-[1.0625rem] -ml-[1.0625rem] size-[2.125rem] rounded-full border border-on-dark opacity-0"
      />
      <div
        ref={dot}
        className="invisible absolute top-0 left-0 -mt-[0.1875rem] -ml-[0.1875rem] size-1.5 rounded-full bg-on-dark opacity-0"
      />
    </div>
  );
}
