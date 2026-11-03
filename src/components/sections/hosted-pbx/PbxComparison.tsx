import { SectionHeading } from "@/components/ui/SectionHeading";
import { pbxComparison } from "@/content/hosted-pbx";

// Includes the outage row, where an on-site system can hold up better.
export function PbxComparison() {
  return (
    <section aria-labelledby="pbx-compare-title" className="bg-sand py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading id="pbx-compare-title" eyebrow="Hosted vs. On-Site">
          The same phone system features,{" "}
          <br className="max-sm:hidden" />
          <span className="font-bold">without the equipment closet.</span>
        </SectionHeading>

        <div
          role="region"
          aria-labelledby="pbx-compare-title"
          tabIndex={0}
          className="relative mt-10 overflow-x-auto lg:mt-12"
        >
          <table className="w-full min-w-[40rem] table-fixed border-separate border-spacing-0">
            <thead>
              <tr>
                <td className="w-[30%] border-b border-line-strong" />
                <th scope="col" className="border-b border-line-strong px-5 py-4 text-left font-display text-title-sm font-bold">
                  On-site PBX
                </th>
                <th scope="col" className="border-b border-brand px-5 py-4 text-left font-display text-title-sm font-bold text-brand-strong">
                  Hosted VoIP PBX
                </th>
              </tr>
            </thead>
            <tbody>
              {pbxComparison.map((row) => (
                <tr key={row.topic}>
                  <th scope="row" className="border-b border-line py-4 pr-5 text-left align-top text-body-sm font-bold">
                    {row.topic}
                  </th>
                  <td className="border-b border-line px-5 py-4 align-top text-body-sm">{row.onSite}</td>
                  <td className="border-b border-line px-5 py-4 align-top text-body-sm font-medium">{row.hosted}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
