import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

// The full specification sheet, with the next step beside it. A real table so
// the details stay readable to search engines and screen readers.
export function ProductSpecs({
  product,
  contact,
  specs,
}: {
  product: string;
  contact: string;
  specs: { label: string; value: string }[];
}) {
  return (
    <section id="specs" aria-labelledby="specs-title" className="scroll-mt-24 bg-sand py-20 lg:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading id="specs-title">
            {product} <span className="font-bold">specifications.</span>
          </SectionHeading>
          <p data-reveal="fade" className="mt-3 text-body">
            Not sure this is the right phone for your team? Tell us how your staff
            use their phones and we’ll help you choose.
          </p>
          <ButtonLink href="/contact-us" data-reveal="fade" className="mt-6 w-full sm:w-auto sm:px-9">
            {contact}
          </ButtonLink>
        </div>

        <table className="w-full rounded-[0.625rem] bg-card">
          <caption className="sr-only">{product} technical specifications</caption>
          <tbody>
            {specs.map((spec, i) => (
              <tr key={spec.label}>
                <th
                  scope="row"
                  className={`w-[38%] py-4 pr-4 pl-5 text-left align-top text-body-sm font-bold sm:pl-7 ${i ? "border-t border-line" : ""}`}
                >
                  {spec.label}
                </th>
                <td className={`py-4 pr-5 align-top text-body-sm sm:pr-7 ${i ? "border-t border-line" : ""}`}>
                  {spec.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
