"use client";

import {
  AddressBook,
  AppWindow,
  ArrowsLeftRight,
  Article,
  ChatText,
  CursorClick,
  Globe,
  HardDrives,
  type Icon,
  Printer,
  UsersThree,
  Voicemail,
  WebhooksLogo,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";
import { categories, type Integration, integrations } from "@/content/integrations";

const icons: Record<Integration["icon"], Icon> = {
  crm: AddressBook,
  screen: AppWindow,
  teams: UsersThree,
  routing: ArrowsLeftRight,
  webhook: WebhooksLogo,
  voicemail: Voicemail,
  transcript: Article,
  fax: Printer,
  browser: Globe,
  click: CursorClick,
  sip: HardDrives,
  sms: ChatText,
};

const filters = ["All", ...categories] as const;

// The directory: filter chips above a grid of integration cards. Every card is
// in the server HTML; a filter only hides the others, it never removes them.
export function IntegrationDirectory() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = integrations.filter((i) => active === "All" || i.category === active).length;

  return (
    <div>
      <div role="group" aria-label="Filter integrations" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            aria-pressed={f === active}
            onClick={() => setActive(f)}
            className={`min-h-11 cursor-pointer rounded-full px-5 text-small font-bold transition-colors duration-300 ${
              f === active ? "bg-ink text-on-dark" : "border border-line bg-card text-ink hover:border-ink"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="mt-4 text-small text-ink/75">
        Showing {shown} of {integrations.length} integrations
      </p>

      <ul className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((item) => {
          const ItemIcon = icons[item.icon];
          const visible = active === "All" || item.category === active;
          return (
            <li
              key={item.title}
              hidden={!visible}
              className="flex flex-col rounded-[1.25rem] border border-line-light border-t-4 border-t-brand bg-card p-6 lg:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="flex size-12 items-center justify-center rounded-[0.875rem] bg-brand/10 text-brand">
                  <ItemIcon size={26} aria-hidden="true" />
                </span>
                <span className="rounded-full bg-sand px-3 py-1 text-xs font-bold text-ink">{item.plan}</span>
              </div>
              <p className="mt-5 text-xs font-bold text-brand-strong">{item.category}</p>
              <h3 className="mt-1 font-display text-title font-bold">{item.title}</h3>
              <p className="mt-2 text-body-snug text-ink/80">{item.body}</p>
              {item.link && (
                <Link
                  href={item.link.href}
                  className="mt-auto pt-5 text-small font-bold text-brand-strong underline underline-offset-4 hover:no-underline focus-visible:no-underline"
                >
                  {item.link.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
