import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";

const groups = [
  {
    title: "Call Handling",
    items: [
      { title: "Auto Attendant", body: "A professional greeting and menu that routes callers in seconds." },
      { title: "Ring Groups", body: "Ring several phones at once or in a set order." },
      { title: "Call Queues", body: "Hold callers in line with music or messages until someone is free." },
      { title: "Business-Hours Routing", body: "Separate rules for business hours, after hours and holidays." },
    ],
  },
  {
    title: "Mobility",
    items: [
      { title: "Mobile App", body: "Your business number on your cell, with your personal number kept private." },
      { title: "Desktop Calling", body: "Make and take calls from your computer." },
      { title: "Desk Phone at Home", body: "Plug your office phone in at home and it works the same." },
      { title: "Simultaneous Ring", body: "Ring your desk and mobile at the same time." },
    ],
  },
  {
    title: "Team & Building",
    items: [
      { title: "Extension Dialing", body: "Reach anyone at any location with a short extension." },
      { title: "Call Transfer & Park", body: "Pass calls anywhere, or park them and pick up from any phone." },
      { title: "Paging & PA", body: "Overhead and zone announcements through VoIP PA systems." },
      { title: "Door Intercom", body: "Answer and unlock the door from your desk phone." },
    ],
  },
  {
    title: "Messages & Records",
    items: [
      { title: "Voicemail to Email", body: "Voicemail delivered to your inbox as an audio file." },
      { title: "Shared Mailboxes", body: "Team mailboxes for the front desk, sales or service." },
      { title: "Call Recording", body: "Record calls for training and quality." },
      { title: "Call Logs & Reports", body: "See call volume, peak hours and missed calls." },
    ],
  },
];

// Homepage Upgrade section: sand band with dashed benefit cards, here in
// four labelled rows.
export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="scroll-mt-24 bg-sand py-20 lg:pt-[5.9375rem] lg:pb-[5.875rem]">
      <div className="container-page">
        <div className="mx-auto max-w-[58.4375rem] text-center">
          <SectionHeading id="capabilities-title" eyebrow="Capabilities" align="center">
            Everything your team needs,{" "}
            <br className="max-sm:hidden" />
            <span className="font-bold">configured before we leave.</span>
          </SectionHeading>
          <p data-reveal="fade" className="mx-auto mt-5 max-w-[46rem] text-body">
            You won’t get a login and a manual. Every feature is set up, tested
            and explained to your staff.
          </p>
        </div>

        <div className="mt-14 space-y-12 lg:mt-16">
          {groups.map((g) => (
            <div key={g.title}>
              <h3 data-reveal="fade" className="font-display text-title-lg font-bold">
                {g.title}
              </h3>
              <ul data-reveal="stagger" className="mt-5 grid gap-[1.875rem] sm:grid-cols-2 lg:grid-cols-4">
                {g.items.map((item) => (
                  <li
                    key={item.title}
                    className="flex gap-4 rounded-[0.3125rem] border border-dashed border-line-dashed py-5 pr-4 pl-3"
                  >
                    <Image
                      src="/icons/check-circle.svg"
                      alt=""
                      width={42}
                      height={42}
                      className="mt-0.5 size-[2.625rem] shrink-0"
                    />
                    <div>
                      <h4 className="font-display text-title-sm font-bold">{item.title}</h4>
                      <p className="mt-2 text-body-snug">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div data-reveal="fade" className="mt-14 flex justify-center">
          <ButtonLink href="/contact-us" className="w-full sm:w-auto sm:px-9">
            Discuss Your Requirements
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
