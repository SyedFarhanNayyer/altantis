import { Headset, HouseLine, Robot, UsersThree } from "@phosphor-icons/react/ssr";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { useCases } from "@/content/ucaas";

const useCaseIcons = [Headset, HouseLine, UsersThree, Robot];

// Four teams on a dark band, so this section reads apart from the benefits.
export function UcaasUseCases() {
  return (
    <section aria-labelledby="ucaas-teams-title" className="bg-soft-glow py-20 text-ink lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <div>
            <p data-reveal="fade" className="font-display text-eyebrow text-subhead">
              Built for how your team works
            </p>
            <h2 id="ucaas-teams-title" data-reveal="lines" className="text-h2">
              UCaaS for every part{" "}
              <br className="max-sm:hidden" />
              <span className="font-bold">of your business.</span>
            </h2>
          </div>
          <ButtonLink href="/pricing" data-reveal="fade" className="w-full shrink-0 sm:w-auto sm:px-9">
            Find the Right Plan for My Team
          </ButtonLink>
        </div>

        <ul className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {useCases.map((item, i) => {
            const Icon = useCaseIcons[i];
            return (
              <li key={item.title} className="border-t border-line-strong/30 py-7">
                <Icon size={30} aria-hidden="true" className="text-brand-strong" />
                <h3 className="mt-4 font-display text-title-sm font-bold">{item.title}</h3>
                <p className="mt-2 text-body-snug text-ink/80">{item.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
