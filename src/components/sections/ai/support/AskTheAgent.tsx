"use client";

import { BookOpen, Sparkle, Ticket } from "@phosphor-icons/react";
import { useState } from "react";

// Common questions to a made-up furniture store, the answer the agent gives,
// and which part of the business information it came from. The last one can't
// be answered on the phone, so it becomes a ticket.
const questions = [
  {
    q: "What time do you close on Saturday?",
    a: "We’re open until 2 PM on Saturdays and closed on Sundays.",
    source: "Business hours",
  },
  {
    q: "Do you deliver to Oxnard?",
    a: "Yes, Oxnard is in our delivery area. Delivery is usually scheduled within the week.",
    source: "Delivery areas",
  },
  {
    q: "How do returns work?",
    a: "You can return unused items within 30 days with your receipt. We’ll arrange a pickup for large pieces.",
    source: "Returns policy",
  },
  {
    q: "My order arrived damaged.",
    a: "I’m sorry about that. I’ve created a support ticket with your details, and our team will call you back today.",
    source: "Ticket created",
    ticket: true,
  },
];

// Vertical tabs: a question list on the left, the agent's answer on the right
// with a tag showing where the answer came from.
export function AskTheAgent() {
  const [active, setActive] = useState(0);
  const item = questions[active];

  return (
    <div className="grid grid-cols-[minmax(0,1fr)] overflow-hidden rounded-[1.5rem] border border-line-light bg-card lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <ul className="border-b border-line-light p-3 lg:border-r lg:border-b-0 lg:p-4">
        {questions.map((item, i) => (
          <li key={item.q}>
            <button
              type="button"
              aria-pressed={i === active}
              onClick={() => setActive(i)}
              className={`flex w-full cursor-pointer items-center gap-3 rounded-[1rem] px-4 py-4 text-left text-body-snug transition-colors duration-300 ${
                i === active ? "bg-sand font-bold text-ink" : "text-ink/80 hover:bg-sand/60"
              }`}
            >
              <span
                aria-hidden="true"
                className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums ${
                  i === active ? "bg-brand-strong text-on-dark" : "bg-line-light text-ink"
                }`}
              >
                {i + 1}
              </span>
              {item.q}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex flex-col justify-center bg-soft-glow p-6 sm:p-10">
        <p className="ml-auto max-w-[85%] rounded-[1.25rem] rounded-br-md bg-brand-strong px-5 py-3 text-body-sm text-on-dark">
          <span className="mb-0.5 block text-xs font-bold text-on-dark/75">Caller</span>
          {item.q}
        </p>
        <div
          key={active}
          aria-live="polite"
          className="mt-4 max-w-[85%] rounded-[1.25rem] rounded-bl-md bg-card px-5 py-4 text-body-sm motion-safe:animate-[sms-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
        >
          <span className="mb-1 flex items-center gap-1.5 text-xs font-bold text-brand-strong">
            <Sparkle size={14} weight="fill" aria-hidden="true" />
            AI support agent
          </span>
          {item.a}
        </div>
        <p
          key={`src-${active}`}
          className={`mt-4 inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-small font-bold motion-safe:animate-[sms-in_0.6s_cubic-bezier(0.22,1,0.36,1)_0.2s_both] ${
            item.ticket ? "bg-ink text-on-dark" : "bg-card text-ink"
          }`}
        >
          {item.ticket ? (
            <Ticket size={16} weight="fill" aria-hidden="true" className="text-amber" />
          ) : (
            <BookOpen size={16} aria-hidden="true" className="text-brand" />
          )}
          {item.ticket ? item.source : `From: ${item.source}`}
        </p>
      </div>
    </div>
  );
}
