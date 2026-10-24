"use client";

import { usePathname } from "next/navigation";
import { duration, ease, revealStart, stepLine } from "@/lib/animation/motion";
import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap";

/*
 * One place that wires every page animation. Markup opts in with data
 * attributes, so sections stay server components:
 *
 *   data-intro               hero/header element in the load sequence
 *   data-header              the fixed header (turns solid after scrolling)
 *   data-reveal="lines"      heading unmasks line by line
 *   data-reveal="fade"       element rises and fades in
 *   data-reveal="stagger"    direct children rise in, one after another
 *   data-reveal="steps"      each [data-step] lights up as it reaches the
 *                            step line and dims again if you scroll back
 *   data-reveal="wipe"       image wipes in from its left edge; add
 *                            data-wipe-from="right" to reverse it, and
 *                            data-wipe-delay="0.1" to offset a row
 *   data-drift               photo drifts inside its frame while scrolling
 *   data-counter             number counts up from 0 (keeps its suffix)
 *   data-parallax="12"       element drifts ±12% while its section scrolls
 *   data-scroll-out          content lifts and fades as its section leaves
 *
 * Render this as the LAST element of a page so its effect runs after every
 * section above it has hydrated (SplitText rewrites headings; doing that
 * before hydration causes a mismatch).
 *
 * Only [data-intro] is hidden before JS (see globals.css, with a failsafe).
 * Everything else is in the server HTML at its final state and is hidden
 * here at setup, never if it's already on screen.
 */
export function MotionDirector() {
  const pathname = usePathname();

  useGSAP(
    () => {
      const mm = setup();
      return () => mm.revert();
    },
    { dependencies: [pathname], revertOnUpdate: true },
  );

  return null;
}

function setup() {
  const mm = gsap.matchMedia();

  mm.add(
    { motion: "(prefers-reduced-motion: no-preference)" },
    (context) => {
      const { motion } = context.conditions as { motion: boolean };

      // Needed for legibility whatever the motion preference.
      const removeHeader = stickyHeader();
      if (!motion) return () => removeHeader?.();

      intro();
      revealLines();
      revealFade();
      revealStagger();
      revealSteps();
      revealWipe();
      drift();
      countUp();
      parallax();
      scrollOut();

      // Fonts change line breaks; re-measure once they're ready.
      document.fonts?.ready.then(() => ScrollTrigger.refresh());

      return () => removeHeader?.();
    },
  );

  return mm;
}

const all = <T extends Element = HTMLElement>(selector: string, root: ParentNode = document) =>
  gsap.utils.toArray<T>(root.querySelectorAll(selector));

// Already visible when the page loads? Then leave it alone.
const onScreen = (el: Element, line = 0.9) =>
  el.getBoundingClientRect().top < window.innerHeight * line;

const trigger = (el: Element, extra: ScrollTrigger.Vars = {}) => ({
  trigger: el,
  start: revealStart,
  once: true,
  ...extra,
});

function stickyHeader() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  if (!header) return;
  const update = () => {
    header.dataset.scrolled = String(window.scrollY > 48);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  return () => window.removeEventListener("scroll", update);
}

// The load sequence: header drops in, headline rises line by line, then the
// copy, buttons and trust row follow. Only runs when the inline head script
// marked <html> with .motion (which is what hid these elements).
function intro() {
  if (!document.documentElement.classList.contains("motion")) return;
  const items = all("[data-intro]");
  if (!items.length) return;

  const tl = gsap.timeline({ defaults: { ease: ease.out } });
  const headerItems = items.filter((el) => el.closest("[data-header]"));
  const heroItems = items.filter((el) => !el.closest("[data-header]"));

  tl.fromTo(
    headerItems,
    { y: -18, autoAlpha: 0 },
    // Clearing transforms hands them back to CSS (hover lift on buttons/links).
    { y: 0, autoAlpha: 1, duration: 1.1, stagger: 0.08, clearProps: "transform,translate" },
    0.1,
  );

  heroItems.forEach((el, i) => {
    if (el.dataset.intro === "lines") {
      tl.set(el, { autoAlpha: 1 }, 0.15);
      const split = SplitText.create(el, { type: "lines", mask: "lines" });
      tl.from(
        split.lines,
        {
          yPercent: 110,
          duration: 1.4,
          stagger: 0.12,
          // Back to plain text so the headline rewraps on resize.
          onComplete: () => split.revert(),
        },
        0.15,
      );
    } else {
      tl.fromTo(
        el,
        { y: 28, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 1.2, clearProps: "transform,translate" },
        0.55 + i * 0.12,
      );
    }
  });
}

function revealLines() {
  for (const el of all('[data-reveal="lines"]')) {
    if (onScreen(el)) continue;
    SplitText.create(el, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, {
          yPercent: 110,
          duration: duration.reveal,
          ease: ease.out,
          stagger: 0.1,
          scrollTrigger: trigger(el),
        }),
    });
  }
}

function revealFade() {
  for (const el of all('[data-reveal="fade"]')) {
    if (onScreen(el)) continue;
    gsap.from(el, {
      y: 34,
      autoAlpha: 0,
      duration: duration.reveal,
      ease: ease.out,
      scrollTrigger: trigger(el),
    });
  }
}

function revealStagger() {
  for (const el of all('[data-reveal="stagger"]')) {
    if (onScreen(el)) continue;
    gsap.from(el.children, {
      y: 40,
      autoAlpha: 0,
      duration: duration.stagger,
      ease: ease.out,
      stagger: 0.12,
      scrollTrigger: trigger(el),
    });
  }
}

// Steps light up as they cross the step line — and dim again on the way
// back — so scrolling reads as walking through the list.
function revealSteps() {
  for (const group of all('[data-reveal="steps"]')) {
    for (const step of all("[data-step]", group)) {
      if (onScreen(step, 0.68)) continue;
      const check = step.querySelector("img");
      gsap.set(step, { opacity: 0.28 });
      if (check) gsap.set(check, { scale: 0 });

      const tl = gsap.timeline({ paused: true });
      tl.to(step, { opacity: 1, duration: 0.6, ease: ease.soft });
      if (check) tl.to(check, { scale: 1, duration: 0.55, ease: ease.pop }, 0.1);

      ScrollTrigger.create({
        trigger: step,
        start: stepLine,
        onEnter: () => tl.play(),
        onLeaveBack: () => tl.reverse(),
      });
    }
  }
}

// The frame opens from one edge to the other while the photo slides in
// the same direction and settles from a closer crop. The photo is the
// frame's first child: the <img>, or a [data-drift] wrapper when the image
// keeps its own CSS hover transform.
function revealWipe() {
  for (const el of all('[data-reveal="wipe"]')) {
    const photo = el.firstElementChild;
    if (photo) gsap.set(photo, { scale: 1.12 });
    if (onScreen(el)) continue;
    const fromRight = el.dataset.wipeFrom === "right";
    const radius = getComputedStyle(el).borderRadius || "0px";
    const hidden = fromRight ? "0% 0% 0% 100%" : "0% 100% 0% 0%";
    const tl = gsap.timeline({
      scrollTrigger: trigger(el),
      delay: Number(el.dataset.wipeDelay) || 0,
    });
    tl.fromTo(
      el,
      { clipPath: `inset(${hidden} round ${radius})` },
      {
        clipPath: `inset(0% 0% 0% 0% round ${radius})`,
        duration: duration.wipe,
        ease: ease.wipe,
        clearProps: "clipPath",
      },
    );
    if (photo) {
      tl.from(
        photo,
        { scale: 1.32, xPercent: fromRight ? 6 : -6, duration: duration.wipe + 0.3, ease: ease.out },
        0.15,
      );
    }
  }
}

// Photos move slightly slower than their frames, which reads as depth.
function drift() {
  const targets = [
    ...all<HTMLElement>('[data-reveal="wipe"] > img'),
    ...all<HTMLElement>("[data-drift]"),
  ];
  for (const el of targets) {
    if (el.hasAttribute("data-drift")) gsap.set(el, { scale: 1.12 });
    gsap.fromTo(
      el,
      { yPercent: -5 },
      {
        yPercent: 5,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  }
}

function countUp() {
  for (const el of all("[data-counter]")) {
    if (onScreen(el)) continue;
    const match = el.textContent?.trim().match(/^([\d,]+)(.*)$/);
    if (!match) continue;
    const target = Number(match[1].replace(/,/g, ""));
    const suffix = match[2];
    const state = { value: 0 };
    el.textContent = `0${suffix}`;
    gsap.to(state, {
      value: target,
      duration: duration.counter,
      ease: "power2.out",
      scrollTrigger: trigger(el),
      onUpdate: () => {
        el.textContent = `${Math.round(state.value)}${suffix}`;
      },
    });
  }
}

function parallax() {
  for (const el of all("[data-parallax]")) {
    const amount = Number(el.dataset.parallax) || 10;
    gsap.fromTo(
      el,
      { yPercent: -amount },
      {
        yPercent: amount,
        ease: "none",
        scrollTrigger: {
          trigger: el.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      },
    );
  }
}

function scrollOut() {
  for (const el of all("[data-scroll-out]")) {
    gsap.to(el, {
      y: -110,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: el.closest("section") ?? el,
        start: "top top",
        end: "85% top",
        scrub: true,
      },
    });
  }
}
