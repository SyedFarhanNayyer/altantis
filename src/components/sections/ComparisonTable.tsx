import type { ReactNode } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  /** The old way, then the Atlantis way (shown on the gradient header). */
  columns: [string, string];
  rows: { topic: string; before: string; after: string }[];
};

// A plain two-way comparison on sand, the old way against the Atlantis way.
// Used by the UCaaS and SIP trunking pages.
export function ComparisonTable({ id, eyebrow, title, intro, columns, rows }: Props) {
  return (
    <section aria-labelledby={id} className="mt-20 bg-sand py-20 lg:mt-28 lg:py-28">
      <div className="container-page">
        <SectionHeading id={id} eyebrow={eyebrow}>
          {title}
        </SectionHeading>
        <p data-reveal="fade" className="mt-3 max-w-[44rem] text-body">
          {intro}
        </p>

        <div role="region" aria-labelledby={id} tabIndex={0} className="relative mt-10 overflow-x-auto lg:mt-12">
          <table className="w-full min-w-[40rem] table-fixed border-separate border-spacing-0">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="w-[30%] border-b border-line-strong py-4 pr-5 text-left font-display text-title-sm font-bold"
                >
                  Comparison
                </th>
                <th
                  scope="col"
                  className="border-b border-line-strong px-5 py-4 text-left font-display text-title-sm font-bold"
                >
                  {columns[0]}
                </th>
                <th
                  scope="col"
                  className="rounded-t-[0.625rem] border-b border-transparent bg-brand-gradient px-5 py-4 text-left font-display text-title-sm font-bold text-on-dark"
                >
                  {columns[1]}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.topic}>
                  <th scope="row" className="border-b border-line py-4 pr-5 text-left align-top text-body-sm font-bold">
                    {row.topic}
                  </th>
                  <td className="border-b border-line px-5 py-4 align-top text-body-sm">{row.before}</td>
                  <td className="border-b border-line bg-card px-5 py-4 align-top text-body-sm font-medium">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
