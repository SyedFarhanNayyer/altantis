import { Buildings, DeviceMobile, GearSix, Hash, PhoneCall, Receipt } from "@phosphor-icons/react/ssr";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { benefits } from "@/content/business-voip";

const icons = [DeviceMobile, Buildings, PhoneCall, Hash, GearSix, Receipt];

// Six outcomes in ruled columns, in the same register as the All Features page.
export function VoipBenefits() {
  return (
    <section aria-labelledby="voip-benefits-title" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <SectionHeading id="voip-benefits-title" eyebrow="Why Businesses Switch">
            What your team gets{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">with business VoIP.</span>
          </SectionHeading>
          <ButtonLink
            href="/features"
            variant="outline-brand"
            data-reveal="fade"
            className="w-full shrink-0 sm:w-auto sm:px-9"
          >
            See All Features
          </ButtonLink>
        </div>

        <ul className="mt-10 grid gap-x-12 md:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = icons[i];
            return (
              <li key={benefit.title} className="border-t border-line py-7">
                <Icon size={30} aria-hidden="true" className="text-brand" />
                <h3 className="mt-4 font-display text-title-sm font-bold">{benefit.title}</h3>
                <p className="mt-2 text-body-snug">{benefit.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
