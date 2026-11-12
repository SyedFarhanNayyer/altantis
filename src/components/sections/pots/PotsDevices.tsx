import {
  Bell,
  CreditCard,
  Door,
  Elevator,
  Fire,
  HardDrives,
  Lifebuoy,
  PhoneCall,
  Printer,
  ShieldCheck,
} from "@phosphor-icons/react/ssr";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { devices } from "@/content/pots";

const icons = [Fire, Elevator, Door, ShieldCheck, Printer, CreditCard, Lifebuoy, Bell, HardDrives, PhoneCall];

// What's still on copper: ten small tiles, five to a row on desktop, so the
// list reads as an inventory to check against your own building.
export function PotsDevices() {
  return (
    <section aria-labelledby="pots-devices-title" className="mt-20 bg-sand py-20 lg:mt-28 lg:py-28">
      <div className="container-page">
        <SectionHeading id="pots-devices-title" eyebrow="What’s Still on Copper">
          The lines you might not know{" "}
          <br className="max-sm:hidden" />
          <span className="font-bold">you still depend on.</span>
        </SectionHeading>
        <p data-reveal="fade" className="mt-3 max-w-[44rem] text-body">
          Copper lines often run more than desk phones. Before any line is cancelled, we find out exactly what’s
          connected to it.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-5 lg:gap-5">
          {devices.map((d, i) => {
            const Icon = icons[i];
            return (
              <li key={d.title} className="rounded-[1.25rem] border border-line bg-card p-5">
                <Icon size={30} aria-hidden="true" className="text-brand" />
                <h3 className="mt-4 font-display text-card-title font-bold">{d.title}</h3>
                <p className="mt-1.5 text-small text-ink/80">{d.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
