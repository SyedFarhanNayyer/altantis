"use client";

import { Armchair, Desk, Pause, PersonSimpleWalk, Play, UsersThree } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { rooms } from "@/content/catalog";

const icons = { desk: Desk, office: Armchair, shared: UsersThree, roaming: PersonSimpleWalk };

// How long each room stays up. Also sets the progress bar's duration.
const ROTATE_MS = 4000;

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const subscribeToMotion = (onChange: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

// Room tabs across the top, with the phone on the left and its details on the
// right. The tabs advance by themselves: this waits while the pointer or keyboard
// focus is inside or the section is off screen, stops once a visitor picks a room,
// has a pause button, and never starts for reduced motion. Panels share one grid
// cell, so changing room doesn't move the page, and all of them stay in the HTML.
export function OfficeFloorPlan() {
  const [active, setActive] = useState(0);
  // What the visitor last chose; until then it follows their motion preference.
  // The server assumes reduced motion, so rotation only starts in the browser.
  const [choice, setChoice] = useState<boolean | null>(null);
  const reducedMotion = useSyncExternalStore(
    subscribeToMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => true,
  );
  const playing = choice ?? !reducedMotion;
  const [held, setHeld] = useState(false);
  const [inView, setInView] = useState(false);
  const baseId = useId();
  const root = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.3 });
    if (root.current) observer.observe(root.current);
    return () => observer.disconnect();
  }, []);

  const running = playing && !held && inView;

  useEffect(() => {
    if (!running) return;
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % rooms.length), ROTATE_MS);
    return () => window.clearTimeout(timer);
  }, [running, active]);

  const choose = (i: number) => {
    setChoice(false);
    setActive(i);
  };

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const last = rooms.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = i === last ? 0 : i + 1;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = i === 0 ? last : i - 1;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    choose(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div
      ref={root}
      onPointerEnter={(e) => e.pointerType === "mouse" && setHeld(true)}
      onPointerLeave={(e) => e.pointerType === "mouse" && setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setHeld(false);
      }}
    >
      <div
        role="tablist"
        aria-label="Places in your office"
        className="grid grid-cols-2 gap-px overflow-hidden rounded-[0.625rem] border border-line bg-line lg:grid-cols-4"
      >
        {rooms.map((room, i) => {
          const Icon = icons[room.icon];
          const selected = active === i;
          return (
            <button
              key={room.id}
              ref={(el) => {
                tabRefs.current[i] = el;
              }}
              id={`${baseId}-tab-${i}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${i}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => choose(i)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`relative flex cursor-pointer items-start gap-3 p-4 text-left transition-colors duration-300 motion-reduce:transition-none focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-brand sm:p-5 ${
                selected ? "bg-brand-strong text-on-dark focus-visible:outline-on-dark" : "bg-card text-ink hover:bg-sand"
              }`}
            >
              <Icon size={26} aria-hidden="true" className={`shrink-0 ${selected ? "" : "text-brand"}`} />
              <span>
                <span className="block font-display text-title-sm font-bold">{room.room}</span>
                <span className="mt-0.5 block text-small">{room.who}</span>
              </span>
              {selected && running && (
                <span
                  key={active}
                  aria-hidden="true"
                  style={{ animationDuration: `${ROTATE_MS}ms` }}
                  className="tab-progress absolute inset-x-0 bottom-0 h-1 origin-left bg-on-dark/70"
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-2 flex justify-end">
        <button
          type="button"
          onClick={() => setChoice(!playing)}
          className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full px-3 text-small font-medium hover:text-brand-strong focus-visible:text-brand-strong"
        >
          {playing ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
          {playing ? "Pause" : "Play"} rotation
        </button>
      </div>

      <div className="mt-4 grid lg:mt-6">
        {rooms.map((room, i) => {
          const selected = active === i;
          return (
            <div
              key={room.id}
              id={`${baseId}-panel-${i}`}
              role="tabpanel"
              aria-labelledby={`${baseId}-tab-${i}`}
              className={`col-start-1 row-start-1 grid items-center gap-8 transition-opacity duration-500 motion-reduce:transition-none lg:grid-cols-2 lg:gap-16 ${
                selected ? "visible opacity-100" : "invisible opacity-0"
              }`}
            >
              <Image
                src={room.image.src}
                alt={room.image.alt}
                width={room.image.width}
                height={room.image.height}
                unoptimized
                className="h-64 w-full object-contain lg:h-96"
              />
              <div>
                <h3 className="font-display text-route-title">{room.phone}</h3>
                <p className="mt-2 text-body">{room.why}</p>
                <ul className="mt-4 border-b border-line">
                  {room.points.map((point) => (
                    <li key={point} className="border-t border-line py-2.5 text-body-sm font-medium">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
                  <ButtonLink href={room.href} className="w-full sm:w-auto sm:px-9">
                    {room.linkLabel}
                  </ButtonLink>
                  <Link
                    href="/contact-us"
                    className="text-center font-display text-label font-bold text-brand-strong underline underline-offset-4 hover:no-underline"
                  >
                    Ask Which Phone Fits
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
