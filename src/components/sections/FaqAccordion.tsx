"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { ScrollTrigger } from "@/lib/gsap";

type Item = { question: string; answer: string };

// Answers stay in the DOM when collapsed (height animates via grid rows),
// so every answer is in the server HTML for search engines.
export function FaqAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <div className="mx-auto mt-10 max-w-[50rem] lg:mt-[2.8125rem]">
      {items.map((item, i) => {
        const isOpen = open === i;
        const buttonId = `${baseId}-q${i}`;
        const panelId = `${baseId}-a${i}`;
        return (
          <div key={item.question} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => {
                  setOpen(isOpen ? -1 : i);
                  // Content below moves; re-measure scroll triggers once the panel settles.
                  window.setTimeout(() => ScrollTrigger.refresh(), 350);
                }}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-3 text-left font-display text-title text-ink"
              >
                <span className="py-2.5">{item.question}</span>
                <Image
                  src={isOpen ? "/icons/chevron-down.svg" : "/icons/chevron-down-muted.svg"}
                  alt=""
                  width={24}
                  height={24}
                  className={`shrink-0 transition-transform duration-300 ease-out ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden" inert={!isOpen}>
                <p className="border-t border-line pt-1 pb-7 text-body-snug text-ink">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
