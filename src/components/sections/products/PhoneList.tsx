import { Check } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { phoneList } from "@/content/catalog";

// Every phone Atlantis offers, one real table per brand. Models with their own
// page link to it.
export function PhoneList() {
  return (
    <section id="all-phones" aria-labelledby="all-phones-title" className="scroll-mt-24 py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading id="all-phones-title" eyebrow="All Phones">
          Every phone, <span className="font-bold">in one list.</span>
        </SectionHeading>
        <div className="mt-10 grid items-start gap-12 lg:mt-14 lg:grid-cols-2 lg:gap-16">
          {phoneList.map(({ brand, phones }) => (
            <table key={brand} className="w-full table-fixed border-separate border-spacing-0">
              <caption className="pb-4 text-left font-display text-title-lg font-bold">{brand}</caption>
              <thead>
                <tr>
                  <th scope="col" className="border-b border-line-strong pr-4 pb-3 text-left font-display text-label font-bold">
                    Phone
                  </th>
                  <th scope="col" className="w-[48%] border-b border-line-strong pb-3 text-left font-display text-label font-bold">
                    Mobile and web access
                  </th>
                </tr>
              </thead>
              <tbody>
                {phones.map((phone) => (
                  <tr key={phone.name}>
                    <th scope="row" className="border-b border-line py-3.5 pr-4 text-left text-body-sm font-bold">
                      {phone.href ? (
                        <Link
                          href={phone.href}
                          aria-label={`${brand} ${phone.name}`}
                          className="text-brand-strong underline underline-offset-4 hover:no-underline focus-visible:no-underline"
                        >
                          {phone.name}
                        </Link>
                      ) : (
                        phone.name
                      )}
                    </th>
                    <td className="border-b border-line py-3.5 text-body-sm">
                      <span className="inline-flex items-center gap-2">
                        {phone.access === "Yes" && (
                          <Check size={18} weight="bold" aria-hidden="true" className="shrink-0 text-brand" />
                        )}
                        {phone.access}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </section>
  );
}
