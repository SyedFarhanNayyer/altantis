"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";

// Sent by the Expand all / Collapse all buttons; `detail` is the new open state.
const SET_ALL = "compare-groups:set";

// Opens and closes one group of rows. The rows are server-rendered, so this
// only marks the surrounding <tbody> and CSS hides them.
export function CompareGroupToggle({ title, initialOpen }: { title: string; initialOpen: boolean }) {
  const [open, setOpen] = useState(initialOpen);
  const button = useRef<HTMLButtonElement>(null);

  const apply = (next: boolean) => {
    setOpen(next);
    button.current?.closest("tbody")?.toggleAttribute("data-closed", !next);
  };

  useEffect(() => {
    const onSetAll = (event: Event) => {
      const next = (event as CustomEvent<boolean>).detail;
      setOpen(next);
      button.current?.closest("tbody")?.toggleAttribute("data-closed", !next);
    };
    window.addEventListener(SET_ALL, onSetAll);
    return () => window.removeEventListener(SET_ALL, onSetAll);
  }, []);

  return (
    <button
      ref={button}
      type="button"
      aria-expanded={open}
      onClick={() => {
        apply(!open);
        // Content below moves; re-measure scroll triggers.
        ScrollTrigger.refresh();
      }}
      className="sticky left-0 flex min-h-12 w-full max-w-[calc(100vw-2*var(--gutter))] cursor-pointer items-center gap-2 pt-7 pb-3 text-left font-display text-title font-bold lg:max-w-none"
    >
      <CaretDown
        size={16}
        weight="bold"
        aria-hidden="true"
        className={`shrink-0 text-brand transition-transform duration-300 ease-out motion-reduce:transition-none ${open ? "" : "-rotate-90"}`}
      />
      {title}
    </button>
  );
}

// Opens or closes every feature group at once.
export function CompareExpandAll() {
  const setAll = (open: boolean) => {
    window.dispatchEvent(new CustomEvent(SET_ALL, { detail: open }));
    ScrollTrigger.refresh();
  };
  const buttonClass =
    "min-h-11 cursor-pointer rounded-full border border-brand-strong px-5 font-display text-small font-bold text-brand-strong transition-colors duration-300 hover:bg-brand-strong hover:text-on-dark focus-visible:bg-brand-strong focus-visible:text-on-dark motion-reduce:transition-none";

  return (
    <div className="flex shrink-0 gap-3">
      <button type="button" aria-controls="compare-table" onClick={() => setAll(true)} className={buttonClass}>
        Expand all
      </button>
      <button type="button" aria-controls="compare-table" onClick={() => setAll(false)} className={buttonClass}>
        Collapse all
      </button>
    </div>
  );
}
