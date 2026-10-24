"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { lift } from "@/components/ui/ButtonLink";
import { headerCta, mainNav } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
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
        className="fixed inset-0 z-20 bg-night px-[var(--gutter)] pt-28"
      >
        <ul className="flex flex-col gap-1 font-display text-h2 text-on-dark">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block py-2" onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            </li>
          ))}
          <li className="mt-6">
            <Link
              href={headerCta.href}
              className={`${lift} inline-flex h-12 items-center rounded-full border-2 border-on-dark px-8 font-body text-label font-bold tracking-normal hover:bg-on-dark/10 focus-visible:bg-on-dark/10`}
              onClick={() => setOpen(false)}
            >
              {headerCta.label}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
