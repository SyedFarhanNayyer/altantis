"use client";

import { type KeyboardEvent, useRef, useState } from "react";
import { sampleCalls } from "@/content/ai-agents";
import { CallCard } from "./CallCard";

// Pick an agent and watch it handle a call. Each tab panel stays in the HTML
// (inactive ones use `hidden`), and the call card replays its lines whenever
// a panel is shown because the panel remounts under a new key.
export function AgentCallTabs() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: KeyboardEvent) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (active + step + sampleCalls.length) % sampleCalls.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Example calls" onKeyDown={onKey} className="flex flex-wrap gap-2">
        {sampleCalls.map((c, i) => (
          <button
            key={c.key}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`call-tab-${c.key}`}
            role="tab"
            type="button"
            aria-selected={i === active}
            aria-controls={`call-panel-${c.key}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={`min-h-11 cursor-pointer rounded-full px-5 text-small font-bold transition-colors duration-300 ${
              i === active ? "bg-ink text-on-dark" : "border border-line bg-card text-ink hover:border-ink"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {sampleCalls.map((c, i) => (
          <div
            key={i === active ? `${c.key}-on` : c.key}
            id={`call-panel-${c.key}`}
            role="tabpanel"
            aria-labelledby={`call-tab-${c.key}`}
            hidden={i !== active}
          >
            <CallCard call={c} caption={`Example: the ${c.label.toLowerCase()} agent answers a call for ${c.business}. ${c.outcome}.`} />
          </div>
        ))}
      </div>
    </div>
  );
}
