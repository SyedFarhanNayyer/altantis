import { Check } from "@phosphor-icons/react/ssr";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { compareGroups, plans, type Cell } from "@/content/plans";
import { CompareGroupToggle } from "./CompareGroupToggle";

const AddOn = () => (
  <span className="inline-block rounded-full border border-brand-strong px-2.5 py-0.5 text-xs font-bold whitespace-nowrap text-brand-strong">
    Add-on
  </span>
);

const Included = () => <Check size={20} weight="bold" aria-hidden="true" className="inline-block text-brand" />;

const NotAvailable = () => <span aria-hidden="true" className="text-line-strong">–</span>;

function CellValue({ value }: { value: Cell }) {
  if (value === "included") {
    return (
      <>
        <Included />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === "none") {
    return (
      <>
        <NotAvailable />
        <span className="sr-only">Not available</span>
      </>
    );
  }
  if (value === "addon") return <AddOn />;
  return <span className="text-small font-medium">{value}</span>;
}

// Only the first group starts open unless `allOpen` is set. Every row stays in the server HTML; closing
// a group only hides it with CSS.
// The header sticks under the site header on desktop. Below that the table
// scrolls sideways with the feature column pinned, because a sideways-scrolling
// container can't also have a header that sticks to the page.
export function ComparePlans({ allOpen = false }: { allOpen?: boolean }) {
  return (
    <section id="compare" aria-labelledby="compare-title" className="scroll-mt-24 bg-sand py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading id="compare-title">
          Compare <span className="font-bold">Plans</span>
        </SectionHeading>
        <p data-reveal="fade" className="mt-3 max-w-[44rem] text-body">
          See what’s included, what can be added, and what’s not available on each plan.
        </p>

        <ul className="mt-6 flex flex-wrap gap-x-7 gap-y-2 text-small">
          <li className="flex items-center gap-2">
            <Included />
            Included
          </li>
          <li className="flex items-center gap-2">
            <AddOn />
            Available to add
          </li>
          <li className="flex items-center gap-2">
            <NotAvailable />
            Not available
          </li>
        </ul>

        <div
          role="region"
          aria-labelledby="compare-title"
          tabIndex={0}
          className="relative mt-8 overflow-x-auto lg:mt-10 lg:overflow-visible"
        >
          <table className="w-full min-w-[39rem] table-fixed border-separate border-spacing-0">
            <caption className="sr-only">Features included in each business phone plan</caption>
            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky left-0 z-20 w-[11rem] border-b border-line-strong bg-sand py-4 pr-4 text-left font-display text-title-sm font-bold sm:w-[16rem] lg:top-[4.5rem] lg:w-[40%]"
                >
                  Feature
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.name}
                    scope="col"
                    className={`z-10 border-b px-2 py-4 text-center font-display text-title-sm font-bold lg:sticky lg:top-[4.5rem] ${
                      plan.popular
                        ? "rounded-t-[0.625rem] border-night bg-night text-on-dark"
                        : "border-line-strong bg-sand"
                    }`}
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            {compareGroups.map((group, g) => (
              <tbody key={group.title} data-closed={allOpen || g === 0 ? undefined : ""} className="group/rows">
                <tr>
                  <th scope="rowgroup" colSpan={5} className="border-b border-line p-0 text-left">
                    <CompareGroupToggle title={group.title} initialOpen={allOpen || g === 0} />
                  </th>
                </tr>
                {group.rows.map((row) => (
                  <tr key={row.name} className="group-data-[closed]/rows:hidden">
                    <th
                      scope="row"
                      className="sticky left-0 z-[1] border-b border-line bg-sand py-4 pr-4 text-left align-top font-normal lg:static lg:pr-8"
                    >
                      <span className="block text-body-sm font-bold">{row.name}</span>
                      <span className="mt-0.5 block text-small">{row.description}</span>
                    </th>
                    {row.values.map((value, i) => (
                      <td
                        key={plans[i].name}
                        className={`border-b border-line px-2 py-4 text-center align-middle ${plans[i].popular ? "bg-card" : ""}`}
                      >
                        <CellValue value={value} />
                        {/* The header can't stick while the table scrolls sideways, so name the plan here. */}
                        <span aria-hidden="true" className="mt-1 block text-xs lg:hidden">
                          {plans[i].name}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>

        <div className="mt-10 flex flex-col gap-6 rounded-[0.625rem] bg-night p-6 text-on-dark sm:flex-row sm:items-center sm:justify-between lg:mt-12 lg:px-10 lg:py-8">
          <div>
            <h3 className="font-display text-title-lg font-bold">Need a feature not listed?</h3>
            <p className="mt-1 text-body-snug text-on-dark/85">
              Our system supports more than what’s shown here. Ask us and we’ll look into it.
            </p>
          </div>
          <ButtonLink href="/contact-us" className="w-full shrink-0 sm:w-auto sm:px-9">
            Ask About a Feature
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
