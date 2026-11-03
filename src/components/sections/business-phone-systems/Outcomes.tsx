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

// Drawn as a call-routing diagram: one line leaves the photo of the person
// answering and branches out to each outcome. The markup holds the finished
// diagram; scrolling draws it when motion is allowed (data-reveal="route").
export function Outcomes() {
  return (
    <section
      id="outcomes"
      aria-labelledby="outcomes-title"
      className="scroll-mt-24 py-20 lg:py-28"
    >
      <div className="container-page lg:grid lg:grid-cols-2">
        <div className="lg:col-start-2 lg:row-start-1 lg:pl-20">
          <SectionHeading id="outcomes-title" eyebrow="Why It Matters" className="text-balance">
            A phone system should help you{" "}
            <span className="font-bold">grow, not hold you back.</span>
          </SectionHeading>
          <p data-reveal="fade" className="mt-4 max-w-[33rem] text-body">
            The right system makes your business easier to reach, easier to run
            and ready for whatever comes next.
          </p>
        </div>

        <div
          data-reveal="wipe"
          className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[0.625rem] md:aspect-video lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:aspect-auto"
        >
          <Image
            src={media.outcomes.src}
            alt={media.outcomes.alt}
            fill
            unoptimized
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover object-[38%_50%]"
          />
        </div>

        <div className="pt-10 lg:col-start-2 lg:row-start-2 lg:pt-14">
          <ul data-reveal="route" className="ml-5 lg:ml-0">
            {outcomes.map(({ title, body, Icon }, i) => {
              const first = i === 0;
              const last = i === outcomes.length - 1;
              return (
                <li
                  key={title}
                  data-route-row
                  className={`relative flex gap-4 pl-5 lg:gap-6 lg:pl-20 ${last ? "" : "pb-10 lg:pb-12"}`}
                >
                  {/* Trunk: the first runs up to the photo on small screens, the last stops at its node */}
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 w-0.5 bg-line ${first ? "-top-10 lg:top-0" : "top-0"} ${last ? "h-6 lg:h-7" : "bottom-0"}`}
                  >
                    <span data-route-trunk className="block size-full origin-top bg-brand" />
                  </span>
                  {/* Branch from the trunk to this outcome */}
                  <span aria-hidden="true" className="absolute top-6 left-0 h-0.5 w-5 bg-line lg:top-7 lg:w-20">
                    <span data-route-branch className="block size-full origin-left bg-brand" />
                  </span>

                  <span
                    data-route-node
                    className="relative grid size-12 shrink-0 place-items-center rounded-full border-2 border-brand bg-brand text-on-dark lg:size-14"
                  >
                    <Icon size={26} aria-hidden="true" />
                  </span>

                  <div className="pt-1 lg:pt-2">
                    <h3 className="font-display text-route-title">{title}</h3>
                    <p className="mt-2 max-w-[30rem] text-body">{body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
