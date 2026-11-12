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
  const categoryOf = (id: string) => categories.find((c) => c.topics.some((t) => t.id === id))?.title ?? "";
  // Open categories. Reaching a topic in another category opens that one and
  // collapses the rest; the reader can still open or close any by hand.
  const [openCats, setOpenCats] = useState<ReadonlySet<string>>(() => new Set([categoryOf(ids[0])]));
  const [lastCategory, setLastCategory] = useState(categoryOf(ids[0]));
  const currentCategory = categoryOf(current);
  if (currentCategory !== lastCategory) {
    setLastCategory(currentCategory);
    setOpenCats(new Set([currentCategory]));
  }
  const toggle = (title: string) =>
    setOpenCats((prev) => {
      const next = new Set(prev);
      if (next.has(title)) next.delete(title);
      else next.add(title);
      return next;
    });

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

      {/* Desktop: grouped sidebar. Only the category you're reading is open;
          the others are collapsed and open with a click. */}
      <nav aria-label="FAQ topics" className="hidden lg:block">
        {categories.map((c) => {
          const expanded = openCats.has(c.title);
          const listId = `faq-cat-${c.title.toLowerCase().replace(/[^a-z]+/g, "-")}`;
          return (
            <div key={c.title} className="border-b border-line py-3 first:pt-0">
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={listId}
                onClick={() => toggle(c.title)}
                className="flex w-full cursor-pointer items-center justify-between gap-3 py-1 text-left font-display text-body-sm font-bold text-ink hover:text-brand-strong focus-visible:text-brand-strong"
              >
                <span>
                  {c.title}
                  <span className="ml-2 text-xs font-medium text-ink/50 tabular-nums">{c.topics.length}</span>
                </span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                  className={`shrink-0 transition-transform duration-300 motion-reduce:transition-none ${expanded ? "rotate-180" : ""}`}
                >
                  <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                id={listId}
                className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <ul className="overflow-hidden border-l border-line" inert={!expanded}>
                  {c.topics.map((t) => {
                    const on = t.id === current;
                    return (
                      <li key={t.id} className="first:mt-2">
                        <a
                          href={`#${t.id}`}
                          aria-current={on ? "location" : undefined}
                          className={`-ml-px flex items-center justify-between gap-3 border-l-2 py-1 pr-2 pl-4 text-body-sm transition-colors duration-300 ${
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
            </div>
          );
        })}
      </nav>
    </>
  );
}
