import {
  Bank,
  Bed,
  Briefcase,
  Buildings,
  ChartLineUp,
  Church,
  Code,
  Factory,
  ForkKnife,
  GraduationCap,
  HandHeart,
  HardHat,
  Headset,
  HouseLine,
  Megaphone,
  RocketLaunch,
  Stethoscope,
  Storefront,
  Wrench,
} from "@phosphor-icons/react/ssr";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries, industryAnchor } from "@/content/industries";

// In the same order as the industries list.
const icons = [
  Stethoscope,
  Briefcase,
  HouseLine,
  HardHat,
  Factory,
  Bed,
  Storefront,
  Bank,
  GraduationCap,
  Headset,
  ForkKnife,
  HandHeart,
  Megaphone,
  Buildings,
  Wrench,
  Code,
  RocketLaunch,
  ChartLineUp,
  Church,
];

// Jumps to an industry further down this long page.
export function IndustryIndex() {
  return (
    <section aria-labelledby="industry-index-title" className="bg-sand py-14 lg:py-20">
      <div className="container-page">
        <SectionHeading id="industry-index-title">
          Find <span className="font-bold">your industry.</span>
        </SectionHeading>
        <ul className="mt-8 flex flex-wrap gap-3">
          {industries.map((industry, i) => {
            const Icon = icons[i];
            return (
              <li key={industry.href}>
                <a
                  href={`#${industryAnchor(industry.href)}`}
                  className="group inline-flex min-h-12 items-center gap-2.5 rounded-full border border-line bg-card px-5 font-display text-label font-bold transition-colors duration-300 hover:border-brand-strong hover:bg-brand-strong hover:text-on-dark focus-visible:border-brand-strong focus-visible:bg-brand-strong focus-visible:text-on-dark motion-reduce:transition-none"
                >
                  <Icon
                    size={20}
                    aria-hidden="true"
                    className="text-brand transition-colors duration-300 group-hover:text-on-dark group-focus-visible:text-on-dark motion-reduce:transition-none"
                  />
                  {industry.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
