"use client";

import { useSyncExternalStore } from "react";
import { business, officeHours } from "@/lib/site";

// The weekday only matters on the client; it never changes mid-visit.
const subscribe = () => () => {};
const getToday = () =>
  new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone: business.timeZone }).format(
    new Date(),
  );
const getServerToday = () => null;

const format = (time: string) => {
  const [h, m] = time.split(":").map(Number);
  const hour = h % 12 || 12;
  return `${hour}:${String(m).padStart(2, "0")}${h < 12 ? "am" : "pm"}`;
};

// Weekly hours with today's row highlighted. "Today" is the business's day
// (Pacific time). The server snapshot is null, so the static HTML has no
// highlight and hydration matches; the client then fills in today.
export function OfficeHours() {
  const today = useSyncExternalStore(subscribe, getToday, getServerToday);

  return (
    <dl className="text-body-sm">
      {officeHours.map(({ day, opens, closes }) => {
        const isToday = day === today;
        return (
          <div
            key={day}
            className={`flex items-center justify-between gap-4 border-b border-line py-2.5 last:border-b-0 ${
              isToday ? "font-bold text-brand-strong" : ""
            }`}
          >
            <dt className="flex items-center gap-2">
              {day}
              {isToday && (
                <span className="rounded-full bg-brand-strong px-2 py-0.5 font-display text-xs font-bold text-on-dark">
                  Today
                </span>
              )}
            </dt>
            <dd className={opens ? "" : "text-ink/70"}>
              {opens && closes ? `${format(opens)} to ${format(closes)}` : "Closed"}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
