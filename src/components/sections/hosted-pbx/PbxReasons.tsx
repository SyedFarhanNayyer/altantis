import { ArrowBendUpRight, Buildings, DeviceMobile, SlidersHorizontal, Toolbox, UserPlus } from "@phosphor-icons/react/ssr";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pbxReasons } from "@/content/hosted-pbx";

const icons = [Toolbox, DeviceMobile, SlidersHorizontal, UserPlus, Buildings, ArrowBendUpRight];

// Why businesses switch: the heading holds its place on the left while the
// reasons read down the right as plain statements.
export function PbxReasons() {
  return (
    <section aria-labelledby="pbx-reasons-title" className="py-20 lg:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading id="pbx-reasons-title" eyebrow="Why Businesses Switch">
            Everything a PBX does, <span className="font-bold">without the box.</span>
          </SectionHeading>
          <p data-reveal="fade" className="mt-4 max-w-[30rem] text-body">
            Moving the phone system to the cloud changes who looks after it, where your team can answer, and how
            easily it grows.
          </p>
          <ButtonLink href="/contact-us" data-reveal="fade" className="mt-8 w-full max-sm:h-auto max-sm:min-h-15 max-sm:py-3 sm:w-auto sm:px-9">
            Talk Through My Setup
          </ButtonLink>
        </div>

        <ul className="grid gap-x-10 sm:grid-cols-2">
          {pbxReasons.map((reason, i) => {
            const Icon = icons[i];
            return (
              <li key={reason.title} className="border-t border-line py-7">
                <span className="flex size-12 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-route-title">{reason.title}</h3>
                <p className="mt-2 text-body-snug text-ink/80">{reason.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
