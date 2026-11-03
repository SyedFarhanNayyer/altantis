import { SectionHeading } from "@/components/ui/SectionHeading";
import { comparison } from "@/content/business-voip";

// A plain two-way comparison, including the row where landlines hold up
// better: buyers trust a comparison more when it admits the trade-off.
export function VoipComparison() {
  return (
    <section aria-labelledby="voip-compare-title" className="mt-20 bg-sand py-20 lg:mt-28 lg:py-28">
      <div className="container-page">
        <SectionHeading id="voip-compare-title" eyebrow="Landline VS VoIP">
          How business VoIP compares{" "}
          <br className="max-sm:hidden" />
          <span className="font-bold">with traditional phone lines.</span>
        </SectionHeading>
        <p data-reveal="fade" className="mt-3 max-w-[44rem] text-body">
          Landlines are simple and familiar, but carriers are retiring copper
          service and each line stays tied to one place. Here’s what changes
          when calls move to the internet.
        </p>

        <div
          role="region"
          aria-labelledby="voip-compare-title"
          tabIndex={0}
          className="relative mt-10 overflow-x-auto lg:mt-12"
        >
          <table className="w-full min-w-[40rem] table-fixed border-separate border-spacing-0">
            <thead>
              <tr>
                <td className="w-[30%] border-b border-line-strong" />
                <th
                  scope="col"
                  className="border-b border-line-strong px-5 py-4 text-left font-display text-title-sm font-bold"
                >
                  Traditional phone lines
                </th>
                <th
                  scope="col"
                  className="rounded-t-[0.625rem] border-b border-transparent bg-brand-gradient px-5 py-4 text-left font-display text-title-sm font-bold text-on-dark"
                >
                  Business VoIP
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.topic}>
                  <th scope="row" className="border-b border-line py-4 pr-5 text-left align-top text-body-sm font-bold">
                    {row.topic}
                  </th>
                  <td className="border-b border-line px-5 py-4 align-top text-body-sm">{row.landline}</td>
                  <td className="border-b border-line bg-card px-5 py-4 align-top text-body-sm font-medium">{row.voip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
