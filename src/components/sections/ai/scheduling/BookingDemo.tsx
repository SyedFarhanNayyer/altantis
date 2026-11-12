"use client";

import { CalendarCheck, Sparkle } from "@phosphor-icons/react";
import { useState } from "react";

// A made-up vet clinic's open times for three days. Picking a time plays out
// the end of the call: the agent confirms the booking out loud.
const days = [
  { key: "tue", label: "Tuesday", short: "Tue", date: "14", times: ["10:00 AM", "1:30 PM"] },
  { key: "wed", label: "Wednesday", short: "Wed", date: "15", times: ["9:00 AM", "11:30 AM", "4:00 PM"] },
  { key: "thu", label: "Thursday", short: "Thu", date: "16", times: ["3:00 PM", "5:00 PM"] },
];

// Interactive: choose a day, then a time, and the agent's confirmation appears
// as a chat bubble. Everything is buttons with pressed state; the confirmation
// is announced politely.
export function BookingDemo() {
  const [day, setDay] = useState(2);
  const [time, setTime] = useState<string | null>(null);
  const d = days[day];

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] overflow-hidden rounded-[1.75rem] bg-night text-on-dark lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
      <div className="p-6 sm:p-9">
        <p className="flex items-center gap-2 text-small font-bold text-amber">
          <CalendarCheck size={18} weight="fill" aria-hidden="true" />
          Bright Paws Vet: open times
        </p>

        <div role="group" aria-label="Choose a day" className="mt-5 grid grid-cols-3 gap-2 sm:gap-3">
          {days.map((item, i) => (
            <button
              key={item.key}
              type="button"
              aria-pressed={i === day}
              aria-label={`${item.label} the ${item.date}th`}
              onClick={() => {
                setDay(i);
                setTime(null);
              }}
              className={`cursor-pointer rounded-[1rem] px-2 py-3 text-center transition-colors duration-300 ${
                i === day ? "bg-card text-ink" : "bg-on-dark/10 hover:bg-on-dark/20"
              }`}
            >
              <span className="block text-xs opacity-75">{item.short}</span>
              <span className="block font-display text-route-title font-bold tabular-nums">{item.date}</span>
            </button>
          ))}
        </div>

        <p className="mt-7 text-small text-on-dark/75">Pick a time to book</p>
        <div role="group" aria-label={`Open times on ${d.label}`} className="mt-3 flex flex-wrap gap-2.5">
          {d.times.map((t) => (
            <button
              key={t}
              type="button"
              aria-pressed={time === t}
              onClick={() => setTime(t)}
              className={`min-h-11 cursor-pointer rounded-full px-5 text-small font-bold tabular-nums transition-colors duration-300 ${
                time === t ? "bg-brand-gradient text-on-dark" : "border border-dashed border-amber/70 text-amber hover:bg-on-dark/10"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-end gap-3 bg-on-dark/5 p-6 sm:p-9">
        <p className="ml-auto max-w-[90%] rounded-[1.25rem] rounded-br-md bg-brand-strong px-4 py-3 text-body-sm">
          <span className="mb-0.5 block text-xs font-bold text-on-dark/75">Caller</span>
          I need to move Max’s checkup.
        </p>
        <p className="max-w-[90%] rounded-[1.25rem] rounded-bl-md bg-on-dark/10 px-4 py-3 text-body-sm">
          <span className="mb-0.5 flex items-center gap-1.5 text-xs font-bold text-on-dark/75">
            <Sparkle size={12} weight="fill" aria-hidden="true" />
            AI scheduling agent
          </span>
          Sure. On {d.label} I have {d.times.join(", ").replace(/, ([^,]*)$/, " or $1")}. Which works best?
        </p>
        <div aria-live="polite" className="min-h-[5.5rem]">
          {time && (
            <p
              key={`${d.key}-${time}`}
              className="max-w-[90%] rounded-[1.25rem] rounded-bl-md bg-card px-4 py-3 text-body-sm text-ink motion-safe:animate-[sms-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
            >
              <span className="mb-0.5 flex items-center gap-1.5 text-xs font-bold text-brand-strong">
                <CalendarCheck size={12} weight="fill" aria-hidden="true" />
                Booked
              </span>
              You’re all set: Max’s checkup is on {d.label} at {time}. See you then!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
