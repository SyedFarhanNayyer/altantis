import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { media } from "./media";

const options = ["Hosted VoIP PBX", "SIP Trunking"] as const;

// `true` renders a check. One value per option, in the order above.
type Cell = string | true;
const rows: { item: string; values: [Cell, Cell] }[] = [
  {
    item: "Best for",
    values: [
      "New offices and businesses ready for a complete upgrade",
      "Businesses with a phone system that still performs well",
    ],
  },
  {
    item: "What changes",
    values: [
      "Your phone system moves to the cloud",
      "Your phone lines move to the internet",
    ],
  },
  {
    item: "On-site equipment",
    values: ["IP phones only", "Your existing system"],
  },
  { item: "Keep your phone numbers", values: [true, true] },
  { item: "Number transfer managed for you", values: [true, true] },
  { item: "911 location setup", values: [true, true] },
  { item: "Auto attendant & call routing", values: ["Included", "Uses your current system"] },
  { item: "Remote & mobile calling", values: ["Included", "Depends on your system"] },
  { item: "Extension dialing between locations", values: ["Included", "Depends on your system"] },
  { item: "Installation & staff training", values: [true, true] },
  { item: "Local support", values: [true, true] },
  { item: "Pricing", values: ["Per user, per month", "Per line, per month"] },
];

const paths = [
  {
    title: "Hosted VoIP PBX",
    body: "A complete cloud phone system with nothing to maintain on site.",
    href: "/hosted-voip-pbx",
    cta: "Learn more about Hosted VoIP PBX",
  },
  {
    title: "SIP Trunking",
    body: "Keep the system you own and replace costly copper lines.",
    href: "/sip-trunking",
    cta: "Learn more about SIP Trunking",
  },
];

function Value({ value }: { value: Cell }) {
  if (value !== true) return <>{value}</>;
  return (
    <>
      <Image src="/icons/check.svg" alt="" width={19} height={19} className="size-[1.1875rem]" />
      <span className="sr-only">Yes</span>
    </>
  );
}

// Homepage Pricing Comparison table, comparing the two options. Below md
// each row restacks into a labelled block; roles keep the table semantics.
export function Solutions() {
  return (
    <section id="solutions" aria-labelledby="solutions-title" className="scroll-mt-24 pb-20 lg:pb-[6.3125rem]">
      <div className="container-page">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <div>
            <SectionHeading id="solutions-title" eyebrow="Solutions">
              Two paths to a modern phone system.{" "}
              <span className="font-bold">We’ll help you choose the right one.</span>
            </SectionHeading>
            <p data-reveal="fade" className="mt-5 max-w-[33.4375rem] text-body">
              The best option depends on what you have today. Sometimes that
              means keeping equipment that still works.
            </p>
            <div data-reveal="fade" className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/contact-us" className="w-full sm:w-auto sm:px-9">
                Help Me Choose
              </ButtonLink>
              <ButtonLink href="/contact-us" variant="outline-brand" className="w-full sm:w-auto sm:px-8">
                Compare My Current Quote
              </ButtonLink>
            </div>
          </div>
          <div data-reveal="wipe" data-wipe-from="right" className="relative aspect-[596/466] overflow-hidden rounded-[0.625rem] md:aspect-video lg:aspect-[596/466]">
            <Image src={media.solutions.src} alt={media.solutions.alt} fill unoptimized className="object-cover" />
          </div>
        </div>

        <div data-reveal="steps" className="mt-14 lg:mt-[5.4375rem]">
          <table role="table" className="block w-full border-collapse text-left font-display text-body md:table">
            <caption className="sr-only">
              Hosted VoIP PBX and SIP trunking compared
            </caption>
            <thead role="rowgroup" className="max-md:sr-only">
              <tr role="row" className="border-b border-line">
                <td className="w-1/3 pb-4" />
                {options.map((o) => (
                  <th key={o} role="columnheader" scope="col" className="w-1/3 pr-6 pb-4 text-title-sm font-bold last:pr-0">
                    {o}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody role="rowgroup" className="block md:table-row-group">
              {rows.map((r) => (
                <tr
                  key={r.item}
                  role="row"
                  data-step
                  className="grid gap-y-3 border-b border-line py-5 last:border-b-0 md:table-row md:py-0"
                >
                  <th role="rowheader" scope="row" className="font-bold md:py-4 md:pr-6 md:align-top md:font-normal">
                    {r.item}
                  </th>
                  {r.values.map((v, i) => (
                    <td
                      key={options[i]}
                      role="cell"
                      data-label={options[i]}
                      className="max-md:before:block max-md:before:text-small max-md:before:text-ink/70 max-md:before:content-[attr(data-label)] md:py-4 md:pr-6 md:align-top md:last:pr-0"
                    >
                      <Value value={v} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul data-reveal="stagger" className="mt-12 grid gap-[1.875rem] md:grid-cols-2 lg:mt-16">
          {paths.map((p) => (
            <li key={p.title} className="flex flex-col border-t border-line pt-6">
              <h3 className="font-display text-title font-bold">{p.title}</h3>
              <p className="mt-2 mb-4 text-body-snug">{p.body}</p>
              <Link
                href={p.href}
                className="mt-auto self-start text-body font-bold text-brand-strong underline underline-offset-2 hover:no-underline"
              >
                {p.cta}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
