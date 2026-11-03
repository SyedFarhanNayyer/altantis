"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { lift } from "@/components/ui/ButtonLink";
import { navLabel, type NavLink } from "@/lib/pages";
import { mainNav, menuQuickHeading, menuQuickLinks } from "@/lib/site";

// Mega menu: a photo card linking to the group's overview page, the group's
// pages, then a column of the pages people look for from anywhere (pricing,
// features, contact). Links with their own image swap the photo while hovered or focused. Each panel is a disclosure: a click toggles
// a group, hovering with a mouse opens it, and Escape, an outside click or
// moving focus away closes it.
// Each panel spans the header (the nearest positioned ancestor), so the list
// items stay unpositioned. Closed panels stay in the DOM (hidden with
// `invisible`), so every link is in the HTML.
export function DesktopNav() {
  const [open, setOpen] = useState<number | null>(null);
  const [seen, setSeen] = useState<ReadonlySet<number>>(new Set());
  const [preview, setPreview] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number>(undefined);
  const baseId = useId();
  const pathname = usePathname();

  // Close after navigating.
  useEffect(() => setOpen(null), [pathname]);

  useEffect(() => {
    setPreview(null);
    if (open !== null) setSeen((prev) => (prev.has(open) ? prev : new Set(prev).add(open)));
  }, [open]);

  // The header shows its glass bar while a panel is open, even over the hero.
  useEffect(() => {
    const header = navRef.current?.closest<HTMLElement>("[data-header]");
    if (header) header.dataset.menuOpen = String(open !== null);
  }, [open]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(null);
      navRef.current?.querySelector<HTMLButtonElement>(`[data-menu="${open}"]`)?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const hoverOpen = (i: number) => (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    setOpen(i);
  };
  // Long enough for the pointer to cross from the button down to the panel.
  const hoverClose = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    closeTimer.current = window.setTimeout(() => setOpen(null), 200);
  };

  const linkClass =
    "block rounded-md px-3 py-1.5 text-body-sm font-medium transition-colors hover:bg-sand hover:text-brand-strong focus-visible:bg-sand focus-visible:text-brand-strong aria-[current=page]:text-brand-strong";

  const headingClass = "mb-2 px-3 font-display text-label font-bold tracking-normal text-brand-strong";

  const renderLink = (link: NavLink) => (
    <li key={link.path}>
      <Link
        href={link.path}
        aria-current={pathname === link.path ? "page" : undefined}
        onPointerEnter={link.image ? () => setPreview(link.image!) : undefined}
        onFocus={link.image ? () => setPreview(link.image!) : undefined}
        className={linkClass}
      >
        {navLabel(link)}
      </Link>
    </li>
  );

  return (
    <nav ref={navRef} aria-label="Main" className="ml-auto hidden xl:block">
      <ul className="flex items-center gap-1 font-body text-label font-medium tracking-normal text-on-dark">
        {mainNav.map((group, i) => {
          const isOpen = open === i;
          const panelId = `${baseId}-${i}`;
          const [overview, ...rest] = group.links;
          const links = rest.filter((l) => !menuQuickLinks.some((q) => q.path === l.path));
          const count = group.columns ?? 1;
          const perColumn = Math.ceil(links.length / count);
          const linkColumns = Array.from({ length: count }, (_, c) =>
            links.slice(c * perColumn, (c + 1) * perColumn),
          );
          // Every photo the card can show, stacked so a hover crossfades.
          const photos = [...new Set([group.image.src, ...links.flatMap((l) => l.image ?? [])])];
          const shown = (isOpen && preview) || group.image.src;
          return (
            <li
              key={group.label}
              data-intro
              onPointerEnter={hoverOpen(i)}
              onPointerLeave={hoverClose}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null);
              }}
            >
              <button
                type="button"
                data-menu={i}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-2 whitespace-nowrap hover:text-amber focus-visible:text-amber aria-expanded:text-amber ${lift}`}
              >
                {group.label}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                  className={`transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-180" : ""}`}
                >
                  <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div
                id={panelId}
                data-lenis-prevent
                className={`absolute inset-x-0 top-full max-h-[calc(100svh-6rem)] overflow-y-auto border-y border-line bg-canvas text-ink transition-[opacity,translate,visibility] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  isOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <div className={`container-page grid gap-10 py-10 ${count === 2 ? "grid-cols-4" : "grid-cols-3"}`}>
                  <Link
                    href={overview.path}
                    aria-current={pathname === overview.path ? "page" : undefined}
                    className="group/card relative isolate flex min-h-72 flex-col justify-end overflow-hidden rounded-lg p-6 text-on-dark"
                  >
                    {/* Loaded on first open, so closed menus cost no downloads. */}
                    {seen.has(i) &&
                      photos.map((src) => (
                        <Image
                          key={src}
                          src={src}
                          alt=""
                          fill
                          unoptimized
                          sizes="33vw"
                          className={`-z-10 object-cover transition-[opacity,scale] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/card:scale-105 motion-reduce:transition-none ${
                            src === shown ? "opacity-100" : "opacity-0"
                          }`}
                        />
                      ))}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 bg-gradient-to-t from-night via-night/60 to-night/10"
                    />
                    <span className="font-display text-title-lg font-bold">{group.label}</span>
                    <span className="mt-2 text-body-sm text-on-dark/85">{group.description}</span>
                    <span className="mt-4 inline-flex items-center gap-2 font-display text-label font-bold text-amber">
                      {overview.path === "/about-us" ? "About Atlantis" : `View ${navLabel(overview)}`}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover/card:translate-x-1 motion-reduce:transition-none"
                      >
                        <path d="M2 7h10M8 3l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </Link>

                  <div className={`border-l border-line pl-6 ${count === 2 ? "col-span-2" : ""}`}>
                    <p id={`${panelId}-main`} className={headingClass}>
                      {group.heading ?? group.label}
                    </p>
                    <div className={count === 2 ? "grid grid-cols-2 gap-x-6" : ""}>
                      {linkColumns.map((col, c) => (
                        <ul key={c} aria-labelledby={`${panelId}-main`}>
                          {col.map(renderLink)}
                        </ul>
                      ))}
                    </div>
                  </div>

                  <div className="border-l border-line pl-6">
                    <p id={`${panelId}-quick`} className={headingClass}>
                      {menuQuickHeading}
                    </p>
                    <ul aria-labelledby={`${panelId}-quick`}>{menuQuickLinks.map(renderLink)}</ul>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
