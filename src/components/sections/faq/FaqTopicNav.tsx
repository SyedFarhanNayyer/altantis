"use client";

import { useEffect, useMemo, useState } from "react";

export type TopicCategory = { title: string; topics: { id: string; title: string; count: number }[] };

// The FAQ page's topic index. On desktop: a sticky sidebar grouped into a few
// categories, with the topic you're reading highlighted. On phones and tablets:
// a "Jump to topic" dropdown. Every topic is a plain in-page link, so it works
// without JavaScript; the highlight is an enhancement.
export function FaqTopicNav({ categories }: { categories: TopicCategory[] }) {
  const ids = useMemo(() => categories.flatMap((c) => c.topics.map((t) => t.id)), [categories]);
  const [current, setCurrent] = useState(ids[0]);

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    // The topic whose heading most recently crossed the upper part of the screen.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setCurrent(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids]);

  return (
    <>
      {/* Phones and tablets: a dropdown that jumps to the chosen topic. */}
      <div className="lg:hidden">
        <label htmlFor="faq-jump" className="text-small font-bold text-ink">
          Jump to a topic
        </label>
        <select
          id="faq-jump"
          value={current}
          onChange={(e) => {
            setCurrent(e.target.value);
            document.getElementById(e.target.value)?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
          className="mt-2 h-13 w-full cursor-pointer rounded-full border border-line bg-card px-5 text-body-sm text-ink"
        >
          {categories.map((c) => (
            <optgroup key={c.title} label={c.title}>
              {c.topics.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.title}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      {/* Desktop: grouped sidebar. */}
      <nav aria-label="FAQ topics" className="hidden lg:block">
        {categories.map((c) => (
          <div key={c.title} className="not-first:mt-7">
            <p className="font-display text-small font-bold text-subhead">{c.title}</p>
            <ul className="mt-2 border-l border-line">
              {c.topics.map((t) => {
                const on = t.id === current;
                return (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      aria-current={on ? "location" : undefined}
                      className={`-ml-px flex items-center justify-between gap-3 border-l-2 py-1.5 pr-2 pl-4 text-body-sm transition-colors duration-300 ${
                        on
                          ? "border-brand font-bold text-ink"
                          : "border-transparent text-ink/70 hover:border-line-strong/40 hover:text-ink"
                      }`}
                    >
                      {t.title}
                      <span className="text-xs text-ink/50 tabular-nums">{t.count}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </>
  );
}
