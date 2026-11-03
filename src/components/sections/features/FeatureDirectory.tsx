import {
  Buildings,
  ChartBar,
  ChatText,
  DeviceMobile,
  GearSix,
  Headset,
  Phone,
  PhoneCall,
  PlugsConnected,
  Robot,
  UsersThree,
  Voicemail,
} from "@phosphor-icons/react/ssr";
import type { Icon } from "@phosphor-icons/react";
import { compareGroups } from "@/content/plans";
import { FeatureIndex } from "./FeatureIndex";

const icons: Record<string, Icon> = {
  "Key Calling": Phone,
  Administration: GearSix,
  "Call Management": PhoneCall,
  Voicemail,
  Mobility: DeviceMobile,
  "Text Messaging": ChatText,
  "Team Collaboration": UsersThree,
  "Call Center": Headset,
  "AI Agents": Robot,
  "Recording and Reporting": ChartBar,
  Integrations: PlugsConnected,
  Enterprise: Buildings,
};

const groups = compareGroups.map((group) => ({
  ...group,
  id: group.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
}));

// A reference directory of the features in the plan comparison table: a
// category list stays in view on desktop while the features run in ruled rows.
export function FeatureDirectory() {
  return (
    <section aria-label="All features by category" className="py-20 lg:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-16">
        <FeatureIndex items={groups.map(({ id, title }) => ({ id, title }))} />

        <div className="space-y-16 lg:space-y-20">
          {groups.map((group) => {
            const GroupIcon = icons[group.title];
            return (
              <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="scroll-mt-28">
                <h2 id={`${group.id}-title`} className="flex items-center gap-3 font-display text-route-title">
                  {GroupIcon && <GroupIcon size={26} aria-hidden="true" className="shrink-0 text-brand" />}
                  {group.title}
                </h2>
                <ul className="mt-6 grid gap-x-12 md:grid-cols-2">
                  {group.rows.map((row) => (
                    <li key={row.name} className="border-t border-line py-5">
                      <h3 className="font-display text-title-sm font-bold">{row.name}</h3>
                      <p className="mt-1 text-body-sm">{row.description}</p>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}
