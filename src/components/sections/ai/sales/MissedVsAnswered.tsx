import { CheckCircle, PhoneSlash, PhoneIncoming, Sparkle, UserSwitch, Voicemail, XCircle } from "@phosphor-icons/react/ssr";
import { SectionHeading } from "@/components/ui/SectionHeading";

const without = [
  { icon: PhoneIncoming, text: "A new customer calls while your team is busy" },
  { icon: Voicemail, text: "The call goes to voicemail" },
  { icon: PhoneSlash, text: "They hang up and try the next business on the list" },
];
const withAgent = [
  { icon: PhoneIncoming, text: "A new customer calls while your team is busy" },
  { icon: Sparkle, text: "Your AI sales agent answers and asks your questions" },
  { icon: UserSwitch, text: "The lead reaches your sales team, details included" },
];

// The same call, two endings, side by side: grey and dead-ending on the left,
// warm and moving forward on the right.
export function MissedVsAnswered() {
  return (
    <section aria-labelledby="sal-compare-title" className="py-20 lg:py-28">
      <div className="container-page">
        <SectionHeading id="sal-compare-title" eyebrow="Same Call, Two Endings" align="center">
          A missed call is <span className="font-bold">a missed customer.</span>
        </SectionHeading>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14">
          <div className="rounded-[1.5rem] border border-line bg-sand p-7 lg:p-10">
            <p className="flex items-center gap-2 font-display text-title font-bold text-ink/70">
              <XCircle size={24} weight="fill" aria-hidden="true" />
              Without an AI sales agent
            </p>
            <ol className="mt-8 grid gap-6">
              {without.map(({ icon: StepIcon, text }) => (
                <li key={text} className="flex items-center gap-4 text-body-snug text-ink/70">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-canvas">
                    <StepIcon size={20} aria-hidden="true" />
                  </span>
                  {text}
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-[1.5rem] bg-night p-7 text-on-dark lg:p-10">
            <p className="flex items-center gap-2 font-display text-title font-bold">
              <CheckCircle size={24} weight="fill" aria-hidden="true" className="text-amber" />
              With an AI sales agent
            </p>
            <ol className="mt-8 grid gap-6">
              {withAgent.map(({ icon: StepIcon, text }, i) => (
                <li key={text} className="flex items-center gap-4 text-body-snug">
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-full ${
                      i === withAgent.length - 1 ? "bg-brand-gradient" : "bg-on-dark/10"
                    }`}
                  >
                    <StepIcon size={20} aria-hidden="true" />
                  </span>
                  {text}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
