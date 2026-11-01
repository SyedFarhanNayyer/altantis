"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { lift } from "@/components/ui/ButtonLink";
import { navLabel } from "@/lib/pages";
import { headerCta, mainNav } from "@/lib/site";

// Same groups as the desktop dropdowns, as an accordion: one group open at
// a time. Collapsed links stay in the DOM so they remain crawlable.
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<number | null>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="relative z-30 flex size-11 cursor-pointer items-center justify-center rounded-full border-2 border-on-dark text-on-dark"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
          {open ? (
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          )}
        </svg>
      </button>

      <nav
        id={panelId}
        aria-label="Main"
        hidden={!open}
        data-lenis-prevent
        className="fixed inset-0 z-20 overflow-y-auto overscroll-contain bg-night px-[var(--gutter)] pt-28 pb-10"
      >
        <ul className="text-on-dark">
          {mainNav.map((g, i) => {
            const expanded = group === i;
            const listId = `${panelId}-${i}`;
            return (
              <li key={g.label} className="border-b border-on-dark/15">
                <button
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={listId}
                  onClick={() => setGroup(expanded ? null : i)}
                  className="flex w-full cursor-pointer items-center justify-between py-4 text-left font-display text-title-lg aria-expanded:text-amber"
                >
                  {g.label}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`}
                  >
                    <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <ul id={listId} className={`pb-4 sm:grid sm:grid-cols-2 sm:gap-x-6 ${expanded ? "" : "hidden"}`}>
                  {g.links.map((link) => (
                    <li key={link.path}>
                      <Link href={link.path} className="block py-2.5 text-body text-on-dark/85 hover:text-amber" onClick={close}>
                        {navLabel(link)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
        <Link
          href={headerCta.href}
          className={`${lift} mt-8 inline-flex h-12 items-center rounded-full border-2 border-on-dark px-8 font-body text-label font-bold tracking-normal text-on-dark hover:bg-on-dark/10 focus-visible:bg-on-dark/10`}
          onClick={close}
        >
          {headerCta.label}
        </Link>
      </nav>
    </div>
  );
}
