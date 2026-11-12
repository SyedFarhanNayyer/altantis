"use client";

import { useState } from "react";
import { checklist } from "@/content/number-porting";

// A checklist the visitor can tick off against their own bill. Every item is
// in the server HTML; ticking only updates the count.
export function ReadyChecklist() {
  const [done, setDone] = useState<boolean[]>(() => checklist.map(() => false));
  const count = done.filter(Boolean).length;
  const ready = count === checklist.length;

  return (
    <div className="rounded-[1.25rem] border border-line bg-card p-5 sm:p-8">
      <ul className="grid gap-1">
        {checklist.map((item, i) => (
          <li key={item.title}>
            <label className="flex cursor-pointer gap-4 rounded-[0.625rem] p-3 transition-colors duration-300 hover:bg-sand has-[:focus-visible]:bg-sand">
              <input
                type="checkbox"
                checked={done[i]}
                onChange={() => setDone((d) => d.map((v, j) => (j === i ? !v : v)))}
                className="mt-0.5 size-6 shrink-0 cursor-pointer accent-brand"
              />
              <span>
                <span className="block font-display text-card-title font-bold">{item.title}</span>
                <span className="mt-0.5 block text-body-sm text-ink/80">{item.body}</span>
              </span>
            </label>
          </li>
        ))}
      </ul>
      <p
        aria-live="polite"
        className={`mt-4 border-t border-line pt-4 text-body-sm font-bold ${ready ? "text-brand-strong" : "text-ink/80"}`}
      >
        {ready
          ? "You have everything. Send it over and we’ll take it from here."
          : `${count} of ${checklist.length} ready`}
      </p>
    </div>
  );
}
