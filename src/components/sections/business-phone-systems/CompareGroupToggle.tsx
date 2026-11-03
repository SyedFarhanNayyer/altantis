"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";

// Opens and closes one group of rows. The rows are server-rendered, so this
// only marks the surrounding <tbody> and CSS hides them.
export function CompareGroupToggle({ title, initialOpen }: { title: string; initialOpen: boolean }) {
  const [open, setOpen] = useState(initialOpen);

  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={(event) => {
        const next = !open;
        setOpen(next);
        event.currentTarget.closest("tbody")?.toggleAttribute("data-closed", !next);
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
