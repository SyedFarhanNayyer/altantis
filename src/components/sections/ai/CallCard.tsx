import type { SampleCall } from "@/content/ai-agents";

// A live call drawn as a dark card, in the same family as the Number Porting
// card: who's calling, the conversation line by line, and what happened at the
// end. The lines rise in one after another when the card mounts. It's an
// illustration with a made-up business, so it is hidden from screen readers
// and summed up by the caption.
export function CallCard({ call, caption }: { call: SampleCall; caption: string }) {
  return (
    <figure className="rounded-[1.25rem] bg-night p-5 text-on-dark sm:p-8">
      <div aria-hidden="true">
        <div className="flex items-center justify-between gap-4 border-b border-on-dark/20 pb-4">
          <div className="min-w-0">
            <p className="text-small text-on-dark/70">Incoming call</p>
            <p className="font-display text-title font-bold">{call.business}</p>
          </div>
          <span className="flex shrink-0 items-center gap-2 rounded-full bg-on-dark/10 px-3 py-1.5 text-xs font-bold">
            <span className="relative flex size-2.5">
              <span className="absolute inset-0 rounded-full bg-amber motion-safe:animate-ping" />
              <span className="relative size-2.5 rounded-full bg-amber" />
            </span>
            AI agent on the line
          </span>
        </div>

        <ol className="mt-5 grid min-h-[17rem] content-start gap-3">
          {call.lines.map((line, i) => {
            const agent = line.from === "agent";
            return (
              <li
                key={i}
                className={`flex ${agent ? "justify-start" : "justify-end"} motion-safe:animate-[sms-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both]`}
                style={{ animationDelay: `${0.2 + i * 0.45}s` }}
              >
                <p
                  className={`max-w-[85%] rounded-[1.125rem] px-4 py-2.5 text-body-sm ${
                    agent ? "rounded-bl-md bg-on-dark/10" : "rounded-br-md bg-brand-strong"
                  }`}
                >
                  <span className="mb-0.5 block text-xs font-bold text-on-dark/70">{agent ? "AI agent" : "Caller"}</span>
                  {line.text}
                </p>
              </li>
            );
          })}
        </ol>

        <div
          className="mt-5 flex items-center justify-between gap-4 border-t border-on-dark/20 pt-4 motion-safe:animate-[sms-in_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
          style={{ animationDelay: `${0.2 + call.lines.length * 0.45}s` }}
        >
          <span className="text-small text-on-dark/70">Result</span>
          <span className="flex items-center gap-2.5 font-display text-title-sm font-bold">
            <span className="size-2.5 rounded-full bg-brand-gradient" />
            {call.outcome}
          </span>
        </div>
      </div>
      <figcaption className="mt-4 text-small text-on-dark/85">{caption}</figcaption>
    </figure>
  );
}
