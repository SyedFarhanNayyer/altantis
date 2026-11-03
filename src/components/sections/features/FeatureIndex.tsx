"use client";

import { useEffect, useState } from "react";

type Item = { id: string; title: string };

// The category list beside the feature directory. It marks whichever category
// is in the reading zone as the page scrolls; the links work without it.
export function FeatureIndex({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-25% 0px -70% 0px" },
    );
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Feature categories" className="lg:sticky lg:top-28 lg:self-start">
      <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-0 lg:border-l lg:border-line">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "true" : undefined}
              className="block rounded-full border border-line px-3 py-1.5 text-small font-medium transition-colors hover:text-brand-strong focus-visible:text-brand-strong aria-[current=true]:text-brand-strong lg:-ml-px lg:rounded-none lg:border-0 lg:border-l-2 lg:border-transparent lg:px-4 lg:aria-[current=true]:border-brand"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
