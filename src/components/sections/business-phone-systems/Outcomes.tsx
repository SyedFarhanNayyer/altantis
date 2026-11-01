import { Buildings, DeviceMobile, PhoneIncoming, Receipt } from "@phosphor-icons/react/ssr";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "./media";

const outcomes = [
  {
    title: "Every Call Reaches Someone",
    body: "Menus, ring groups and queues get callers to the right person instead of voicemail.",
    Icon: PhoneIncoming,
  },
  {
    title: "Your Team, Anywhere",
    body: "Answer the business line from a desk phone, cell phone or laptop, wherever work happens.",
    Icon: DeviceMobile,
  },
  {
    title: "Every Location, One System",
    body: "Transfer calls and dial extensions between offices as if they were down the hall.",
    Icon: Buildings,
  },
  {
    title: "Costs You Can Plan For",
    body: "Predictable monthly pricing in place of aging lines and maintenance contracts.",
    Icon: Receipt,
  },
];

// Layout of the homepage Features section: heading beside intro, then the
// photo beside four cards.
export function Outcomes() {
  return (
    <section id="outcomes" aria-labelledby="outcomes-title" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-page">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,37.25fr)_minmax(0,27fr)] lg:items-end lg:gap-16 xl:gap-24">
          <SectionHeading id="outcomes-title" eyebrow="Why It Matters">
            A phone system should help you{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">grow, not hold you back.</span>
          </SectionHeading>
          <p data-reveal="fade" className="text-body lg:pb-1.5">
            The right system makes your business easier to reach, easier to run
            and ready for whatever comes next.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:mt-[4.625rem] lg:grid-cols-[minmax(0,36.75fr)_minmax(0,37.25fr)] lg:items-center">
          <div data-reveal="wipe" className="relative aspect-[588/550] overflow-hidden rounded-[0.625rem] md:aspect-video lg:aspect-[588/550]">
            <Image src={media.outcomes.src} alt={media.outcomes.alt} fill unoptimized className="object-cover" />
          </div>

          <ul data-reveal="stagger" className="grid gap-x-6 gap-y-[1.375rem] sm:grid-cols-2">
            {outcomes.map(({ title, body, Icon }) => (
              <li
                key={title}
                className="rounded-2xl border border-dashed border-line-strong bg-paper px-4 pt-4 pb-6"
              >
                <div className="flex h-14 items-center">
                  <Icon size={50} weight="light" aria-hidden="true" className="text-brand" />
                </div>
                <h3 className="mt-3 font-display text-title-sm font-bold">{title}</h3>
                <p className="mt-2 text-body-snug">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
