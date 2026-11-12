"use client";

import { ArrowRight, CreditCard, Sparkle, Tooth, UserPlus, Voicemail } from "@phosphor-icons/react";
import { useState } from "react";

// What a caller might say, and where the receptionist sends them. A made-up
// dental office, matching the setup card on the same page.
const requests = [
  {
    says: "I have a question about my bill.",
    heard: "Billing question",
    goesTo: "Front desk",
    note: "Transferred with the reason, so no one asks twice.",
    icon: CreditCard,
  },
  {
    says: "I’d like to become a new patient.",
    heard: "New patient",
    goesTo: "Dr. Patel’s team",
    note: "Sent to the team that welcomes new patients.",
    icon: UserPlus,
  },
  {
    says: "My tooth really hurts. Can someone see me today?",
    heard: "Urgent request",
    goesTo: "On-call line",
    note: "Urgent calls go wherever you tell it to send them.",
    icon: Tooth,
  },
  {
    says: "Can Dr. Patel call me back about my X-rays?",
    heard: "Callback request",
    goesTo: "Message taken",
    note: "Name, number and reason, saved for your team.",
    icon: Voicemail,
  },
];

// Interactive switchboard: pick what the caller says, and the line lights up
// to where the call goes. Every request and destination is real text in the
// page, and the result is announced politely to screen readers.
export function CallRouter() {
  const [active, setActive] = useState(0);
  const r = requests[active];
  const DestIcon = r.icon;

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-10">
      <div>
        <p className="text-small font-bold text-ink/75">Pick what the caller says</p>
        <ul className="mt-3 grid gap-3">
          {requests.map((req, i) => (
            <li key={req.says}>
              <button
                type="button"
                aria-pressed={i === active}
                onClick={() => setActive(i)}
                className={`w-full cursor-pointer rounded-[1.25rem] rounded-bl-md border px-5 py-4 text-left text-body-snug transition-[background-color,border-color,color] duration-300 ${
                  i === active
                    ? "border-brand-strong bg-brand-strong text-on-dark"
                    : "border-line-light bg-card text-ink hover:border-ink"
                }`}
              >
                “{req.says}”
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative flex flex-col justify-center rounded-[1.5rem] bg-night p-6 text-on-dark sm:p-9">
        <div className="flex items-center gap-4">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-gradient">
            <Sparkle size={26} weight="fill" aria-hidden="true" />
          </span>
          <div>
            <p className="text-small text-on-dark/70">AI receptionist heard</p>
            <p className="font-display text-title font-bold">{r.heard}</p>
          </div>
        </div>

        {/* The line: redraws each time a new request is picked. */}
        <div aria-hidden="true" className="my-6 ml-7 h-12 border-l-2 border-dashed border-amber/70">
          <span key={active} className="block h-full w-0.5 -translate-x-[2px] origin-top bg-amber motion-safe:animate-[sms-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both]" />
        </div>

        <div
          key={`dest-${active}`}
          aria-live="polite"
          className="flex items-center gap-4 rounded-[1.25rem] bg-card p-5 text-ink motion-safe:animate-[sms-in_0.6s_cubic-bezier(0.22,1,0.36,1)_0.15s_both]"
        >
          <span className="flex size-12 shrink-0 items-center justify-center rounded-[0.875rem] bg-brand/10 text-brand">
            <DestIcon size={24} aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <p className="flex items-center gap-2 font-display text-title font-bold">
              <ArrowRight size={18} weight="bold" aria-hidden="true" className="text-brand" />
              {r.goesTo}
            </p>
            <p className="mt-1 text-small text-ink/80">{r.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
