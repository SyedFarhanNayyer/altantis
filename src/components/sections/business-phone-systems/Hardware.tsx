import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "./media";

const devices = [
  {
    title: "Yealink & NEC Desk Phones",
    body: "Color-screen IP phones with clear HD audio for every desk.",
    image: media.deskPhones,
  },
  {
    title: "Yealink Cordless Phones",
    body: "Freedom to take and transfer calls anywhere around the office.",
    image: media.cordless,
  },
  {
    title: "VoIP Business Phone",
    body: "Answer your business line from a laptop, tablet or headset, wherever your team works.",
    image: media.voip,
  },
];

// Homepage Guides cards, without links: each card describes equipment.
export function Hardware() {
  return (
    <section id="hardware" aria-labelledby="hardware-title" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionHeading id="hardware-title" eyebrow="Hardware">
              Professional equipment,{" "}
              <br className="max-sm:hidden" />
              <span className="font-bold">installed and ready to use.</span>
            </SectionHeading>
            <p data-reveal="fade" className="mt-3 max-w-[33.4375rem] text-body">
              Every device is supplied, mounted, programmed and tested by our
              technicians.
            </p>
          </div>
          <ButtonLink href="/products" data-reveal="fade" className="w-full sm:w-auto sm:px-9">
            View All Hardware
          </ButtonLink>
        </div>

        <ul data-reveal="stagger" className="mt-12 grid gap-[1.875rem] md:grid-cols-2 lg:mt-[4.1875rem] lg:grid-cols-3">
          {devices.map((d) => (
            <li key={d.title} className="group/item last:md:col-span-2 last:lg:col-span-1">
              <article className="flex h-full flex-col overflow-hidden rounded-[1.25rem] border border-line-light bg-card group-last/item:md:flex-row group-last/item:lg:flex-col">
                <div className="relative aspect-[380/226] overflow-hidden group-last/item:md:aspect-auto group-last/item:md:min-h-56 group-last/item:md:w-1/2 group-last/item:lg:aspect-[380/226] group-last/item:lg:min-h-0 group-last/item:lg:w-auto">
                  <Image
                    src={d.image.src}
                    alt={d.image.alt}
                    fill
                    unoptimized
                    className={"contain" in d.image ? "object-contain p-4" : "object-cover"}
                  />
                </div>
                <div className="flex flex-1 flex-col px-[1.0625rem] pt-5 pb-6 group-last/item:md:px-6 group-last/item:md:pt-6 group-last/item:lg:px-[1.0625rem] group-last/item:lg:pt-5">
                  <h3 className="font-display text-card-title font-bold text-night">{d.title}</h3>
                  <p className="mt-3 text-body-sm tracking-[-0.02em] text-night">{d.body}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
