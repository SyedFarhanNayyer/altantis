import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { callerRoutes } from "@/content/healthcare";

// A photo beside what patients call about and where each call can go, as a real
// table. The photo stretches to the height of the table on desktop.
export function CallerRoutes() {
  return (
    <section aria-labelledby="caller-routes-title" className="bg-sand py-20 lg:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[3/2] overflow-hidden rounded-[0.625rem] lg:aspect-auto">
          <Image
            src="/images/doctor-greeting-patients-clinic.jpg"
            alt="Doctor shaking hands with an older couple at a clinic desk"
            fill
            unoptimized
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <SectionHeading id="caller-routes-title" eyebrow="Common Patient Calls">
            Send each caller <span className="font-bold">to the right place.</span>
          </SectionHeading>
          <table className="mt-8 w-full table-fixed">
            <caption className="sr-only">Common patient calls and how each can be handled</caption>
            <thead>
              <tr>
                <th scope="col" className="w-[47%] pr-5 pb-4 text-left font-display text-label font-bold text-brand-strong">
                  Caller says
                </th>
                <th scope="col" className="pb-4 text-left font-display text-label font-bold text-brand-strong">
                  How it can be handled
                </th>
              </tr>
            </thead>
            <tbody>
              {callerRoutes.map((route) => (
                <tr key={route.caller}>
                  <th scope="row" className="border-t border-line py-4 pr-5 text-left align-top font-display text-body-sm font-bold">
                    {route.caller}
                  </th>
                  <td className="border-t border-line py-4 align-top text-body-sm">{route.handled}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
