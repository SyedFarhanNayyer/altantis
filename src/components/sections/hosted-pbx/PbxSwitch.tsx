import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pbxSwitch } from "@/content/hosted-pbx";

// Switching to Atlantis: four one-word stages, each set large, read left to
// right like a progress strip. No site visit anywhere in it.
export function PbxSwitch() {
  return (
    <section aria-labelledby="pbx-switch-title" className="pt-20 lg:pt-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <SectionHeading id="pbx-switch-title" eyebrow="Switching to Atlantis">
            Configured, tested and shipped, <span className="font-bold">ready to plug in.</span>
          </SectionHeading>
          <ButtonLink
            href="/number-porting"
            variant="outline-brand"
            data-reveal="fade"
            className="w-full shrink-0 max-sm:h-auto max-sm:min-h-15 max-sm:py-3 sm:w-auto sm:px-9"
          >
            How Your Numbers Move
          </ButtonLink>
        </div>

        <ol className="mt-10 grid overflow-hidden rounded-[1.25rem] border border-line sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {pbxSwitch.map((stage, i) => (
            <li
              key={stage.title}
              className="border-line p-6 not-last:border-b sm:p-8 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:not-last:border-r"
            >
              <p className="font-display text-small font-bold text-brand-strong tabular-nums">Stage {i + 1}</p>
              <h3 className="mt-2 text-h2 font-bold">{stage.title}</h3>
              <p className="mt-3 text-body-snug text-ink/80">{stage.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
