import { ArrowBendUpRight, Pause, Phone, PhoneIncoming, Record } from "@phosphor-icons/react/ssr";
import { ButtonLink } from "@/components/ui/ButtonLink";

const actions = [
  { label: "Answer", icon: Phone, primary: true },
  { label: "Hold", icon: Pause },
  { label: "Transfer", icon: ArrowBendUpRight },
  { label: "Record", icon: Record },
];

// What an integration feels like in use: a screen pop drawn as a window, on a
// dark band. The caller and notes are made up; the drawing is decorative and
// the copy beside it says the same thing in words.
export function ScreenPopDemo() {
  return (
    <section aria-labelledby="screen-pop-title" className="bg-soft-glow py-20 text-ink lg:py-28">
      <div className="container-page grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20">
        <div>
          <p data-reveal="fade" className="font-display text-eyebrow text-subhead">
            Screen Pops
          </p>
          <h2 id="screen-pop-title" data-reveal="lines" className="text-h2">
            Know who’s calling <span className="font-bold">before you say hello.</span>
          </h2>
          <p data-reveal="fade" className="mt-4 max-w-[32rem] text-body text-ink/80">
            When your phone system is connected to your CRM, the caller’s details appear on screen as the phone
            rings. Greet them by name, see their last conversation, and handle the call from the same window.
          </p>
          <ButtonLink href="/contact-us" data-reveal="fade" className="mt-8 w-full max-sm:h-auto max-sm:min-h-15 max-sm:py-3 sm:w-auto sm:px-9">
            Ask About My CRM
          </ButtonLink>
        </div>

        <div aria-hidden="true" className="rounded-[1.5rem] border border-line bg-card/60 p-3 sm:p-4">
          {/* Window chrome */}
          <div className="flex gap-1.5 px-2 pb-3">
            <span className="size-2.5 rounded-full bg-line-strong/30" />
            <span className="size-2.5 rounded-full bg-line-strong/30" />
            <span className="size-2.5 rounded-full bg-line-strong/30" />
          </div>
          <div className="rounded-[1.125rem] bg-canvas p-5 text-ink sm:p-7">
            <div className="flex items-center gap-3 text-small font-bold text-brand-strong">
              <PhoneIncoming size={20} weight="fill" />
              Incoming call
            </div>
            <div className="mt-4 flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-strong font-display text-title font-bold text-on-dark">
                SL
              </span>
              <div className="min-w-0">
                <p className="font-display text-route-title font-bold">Sarah Lopez</p>
                <p className="text-small text-ink/75">Lopez Dental Group · (805) 555-0187</p>
              </div>
            </div>

            <dl className="mt-6 grid gap-px overflow-hidden rounded-[0.875rem] border border-line bg-line sm:grid-cols-2">
              <div className="bg-card p-4">
                <dt className="text-xs font-bold text-ink/70">Last contact</dt>
                <dd className="mt-1 text-small">Asked about adding two phones</dd>
              </div>
              <div className="bg-card p-4">
                <dt className="text-xs font-bold text-ink/70">Account owner</dt>
                <dd className="mt-1 text-small">Dan R.</dd>
              </div>
            </dl>

            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {actions.map(({ label, icon: ActionIcon, primary }) => (
                <span
                  key={label}
                  className={`flex h-11 items-center justify-center gap-2 rounded-full text-small font-bold ${
                    primary ? "bg-brand-strong text-on-dark" : "border border-line text-ink"
                  }`}
                >
                  <ActionIcon size={16} weight={primary ? "fill" : "regular"} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
