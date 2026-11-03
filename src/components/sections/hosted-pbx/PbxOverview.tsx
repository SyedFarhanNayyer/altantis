import Image from "next/image";
import { pbxFacts } from "@/content/hosted-pbx";

// The definition as one large statement, for anyone who searched the term, then
// a wide photo with the four facts a buyer asks next set into its lower edge.
export function PbxOverview() {
  return (
    <section aria-labelledby="pbx-overview-title" className="py-20 lg:py-28">
      <div className="container-page">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)] lg:gap-12">
          <h2 id="pbx-overview-title" data-reveal="lines" className="font-display text-title-lg font-bold">
            What is a hosted VoIP PBX?
          </h2>
          <div>
            <p className="font-display text-route-title">
              A hosted VoIP PBX is a complete business phone system that runs in
              the cloud instead of on equipment in your office.
            </p>
            <p className="mt-5 max-w-[46rem] text-body">
              It handles everything a traditional PBX does, including extensions,
              menus, transfers and call routing, and connects your team over the
              internet. You get the features of a larger phone system without a
              phone closet to look after, and you manage your settings online.
            </p>
          </div>
        </div>

        <div
          data-reveal="wipe"
          className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[0.625rem] sm:aspect-[21/9] lg:mt-14 lg:aspect-[21/8]"
        >
          <Image
            src="/images/hosted-pbx-team-headset-calls.jpg"
            alt="Three team members on headset calls working at desks in an office"
            fill
            unoptimized
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover object-[50%_18%]"
          />
        </div>

        <dl className="relative mx-3 -mt-10 grid gap-x-8 rounded-[0.625rem] border border-line bg-card px-6 py-2 sm:grid-cols-2 lg:mx-8 lg:-mt-14 lg:grid-cols-4 lg:py-3">
          {pbxFacts.map((fact) => (
            <div key={fact.label} className="py-4">
              <dt className="text-small">{fact.label}</dt>
              <dd className="mt-1 font-display text-title-sm font-bold">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
