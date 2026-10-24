import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";

const rows = [
  { item: "Site survey", voip: "—", atlantis: "Site survey" },
  { item: "Phone installation", voip: "You set it up", atlantis: "We install every phone" },
  { item: "Call menus & routing", voip: "You program it", atlantis: "We design and program it" },
  { item: "Number transfer", voip: "Self-service forms", atlantis: "Managed for you" },
  { item: "Cabling & network setup", voip: "Not included", atlantis: "Available from our team" },
  { item: "Fax, alarm & elevator lines", voip: "Often not covered", atlantis: "A plan for every line" },
  { item: "Testing before switch-over", voip: "—", atlantis: "Every line tested" },
  { item: "Support", voip: "Call center or chat", atlantis: "Local technicians" },
];

export function PriceComparison() {
  return (
    <section aria-labelledby="compare-title" className="py-20 lg:pt-[6.25rem] lg:pb-[6.3125rem]">
      <div className="container-page">
        <div className="mx-auto max-w-[57.6875rem] text-center">
          <h2 id="compare-title" data-reveal="lines" className="text-h2">
            The low monthly price isn’t{" "}
            <span className="font-bold">the whole price.</span>
          </h2>
          <p data-reveal="fade" className="mx-auto mt-5 max-w-[52.8125rem] text-body">
            Online VoIP providers advertise a low monthly price and leave the
            rest to you. With Atlantis, everything from the site survey to
            ongoing support is handled by our team.
          </p>
        </div>

        {/* Below md each row restacks into a small block; roles keep the
            table semantics that display:block would otherwise drop. */}
        <div data-reveal="steps" className="mt-12 lg:mt-[5.4375rem]">
          <table
            role="table"
            className="block w-full border-collapse text-left font-display text-body md:table"
          >
            <caption className="sr-only">
              What online VoIP providers include compared with Atlantis
            </caption>
            <thead role="rowgroup" className="max-md:sr-only">
              <tr role="row" className="border-b border-line">
                <td className="w-[51.25%] pb-4" />
                <th role="columnheader" scope="col" className="w-[25.8%] pb-4 text-title-sm font-bold">
                  Online VoIP Providers
                </th>
                <th role="columnheader" scope="col" className="pb-4 text-title-sm font-bold">
                  Atlantis
                </th>
              </tr>
            </thead>
            <tbody role="rowgroup" className="block md:table-row-group">
              {rows.map((r) => (
                <tr
                  key={r.item}
                  role="row"
                  data-step
                  className="grid grid-cols-2 gap-x-4 gap-y-1 border-b border-line py-4 last:border-b-0 md:table-row md:py-0"
                >
                  <th role="rowheader" scope="row" className="col-span-2 font-bold md:h-15 md:pr-6 md:font-normal">
                    {r.item}
                  </th>
                  <td
                    role="cell"
                    data-label="Online VoIP"
                    className="max-md:before:block max-md:before:text-small max-md:before:text-ink/70 max-md:before:content-[attr(data-label)] md:pr-6"
                  >
                    {r.voip === "—" ? (
                      <>
                        <span aria-hidden="true">—</span>
                        <span className="sr-only">Not included</span>
                      </>
                    ) : (
                      r.voip
                    )}
                  </td>
                  <td
                    role="cell"
                    data-label="Atlantis"
                    className="max-md:before:block max-md:before:text-small max-md:before:text-ink/70 max-md:before:content-[attr(data-label)]"
                  >
                    <span className="flex items-start gap-2 md:items-center md:gap-4">
                      <Image
                        src="/icons/check.svg"
                        alt=""
                        width={19}
                        height={19}
                        className="mt-1 size-[1.1875rem] shrink-0 md:mt-0"
                      />
                      {r.atlantis}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div data-reveal="fade" className="mt-8 flex justify-end lg:mt-[2.625rem]">
          <ButtonLink href="/quote-comparison" className="w-full sm:w-[17.375rem]">
            Compare My Current Quote
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
