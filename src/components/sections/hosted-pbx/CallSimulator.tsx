"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { ease } from "@/lib/animation/motion";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

type Scenario = { id: string; label: string };

// Pick a situation and the call routes itself across the panel. This is motion
// answering a click, so it plays on change and not on load. Every panel is
// server-rendered in its finished state and stays in the DOM.
export function CallSimulator({ scenarios, panels }: { scenarios: Scenario[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const baseId = useId();
  const root = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const first = useRef(true);

  useGSAP(
    () => {
      if (first.current) {
        first.current = false;
        return;
      }
      ScrollTrigger.refresh();
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const panel = root.current?.querySelector<HTMLElement>('[role="tabpanel"]:not([hidden])');
      if (!panel) return;
      const across = window.matchMedia("(min-width: 1024px)").matches;
      const nodes = panel.querySelectorAll("[data-flow-node]");
      const tl = gsap.timeline({ defaults: { ease: ease.soft } });
      tl.fromTo(
        panel.querySelector("[data-flow-line]"),
        across ? { scaleX: 0 } : { scaleY: 0 },
        { ...(across ? { scaleX: 1 } : { scaleY: 1 }), duration: 1.1, ease: "none" },
      );
      tl.fromTo(nodes, { opacity: 0.25, y: 8 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.27, clearProps: "all" }, 0);
    },
    { dependencies: [active], scope: root },
  );

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const last = scenarios.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = i === 0 ? last : i - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div ref={root}>
      <div role="tablist" aria-label="Call situations" className="flex flex-wrap justify-center gap-2">
        {scenarios.map((scenario, i) => {
          const selected = active === i;
          return (
            <button
              key={scenario.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`${baseId}-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`min-h-11 cursor-pointer rounded-full border px-5 font-display text-label font-bold transition-colors ${
                selected
                  ? "border-night bg-night text-on-dark"
                  : "border-line-strong/40 text-ink hover:border-brand hover:text-brand-strong focus-visible:border-brand focus-visible:text-brand-strong"
              }`}
            >
              {scenario.label}
            </button>
          );
        })}
      </div>

      {panels.map((panel, i) => (
        <div
          key={scenarios[i].id}
          id={`${baseId}-panel-${i}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${i}`}
          tabIndex={0}
          hidden={active !== i}
          className="mt-10"
        >
          {panel}
        </div>
      ))}
    </div>
  );
}
