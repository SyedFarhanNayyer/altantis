import { SectionHeading } from "@/components/ui/SectionHeading";

// A made-up pipeline board: each column is a stage the AI sales agent moves a
// caller through, with a few example leads in each.
const columns = [
  {
    stage: "Answered",
    note: "The agent picks up",
    leads: [
      { name: "Sam K.", need: "Office move quote" },
      { name: "Lena P.", need: "Monthly service plan" },
    ],
  },
  {
    stage: "Qualified",
    note: "Your questions asked",
    leads: [
      { name: "Dana R.", need: "Commercial roof inspection", tag: "This month" },
      { name: "Omar T.", need: "Two-location install", tag: "Next quarter" },
    ],
  },
  {
    stage: "Passed to sales",
    note: "Transferred live",
    leads: [{ name: "Dana R.", need: "Commercial roof inspection", tag: "With estimator", hot: true }],
  },
  {
    stage: "Follow up",
    note: "Callback captured",
    leads: [
      { name: "Lena P.", need: "Monthly service plan", tag: "After hours" },
      { name: "Omar T.", need: "Two-location install", tag: "Wants pricing" },
    ],
  },
];

// The pipeline: four stage columns that scroll sideways on small screens.
export function LeadPipeline() {
  return (
    <section aria-labelledby="sal-pipeline-title" className="bg-soft-glow py-20 lg:py-28">
      <div className="container-page">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <SectionHeading id="sal-pipeline-title" eyebrow="From Call to Customer">
            Every caller moves <span className="font-bold">one step closer.</span>
          </SectionHeading>
          <p data-reveal="fade" className="max-w-[26rem] text-body">
            The agent answers, asks your questions and passes ready buyers on. The rest are captured for follow-up.
          </p>
        </div>

        <div
          role="region"
          aria-label="Example lead pipeline"
          tabIndex={0}
          className="-mx-[var(--gutter)] mt-10 overflow-x-auto px-[var(--gutter)] pb-2 lg:mx-0 lg:mt-14 lg:px-0"
        >
          <ol className="grid min-w-[56rem] grid-cols-4 gap-4">
            {columns.map((col, i) => (
              <li key={col.stage} className="rounded-[1.5rem] bg-card/70 p-4">
                <div className="flex items-baseline justify-between gap-2 px-2 pt-1">
                  <h3 className="font-display text-title-sm font-bold">{col.stage}</h3>
                  <span className="text-xs font-bold text-ink/60 tabular-nums">0{i + 1}</span>
                </div>
                <p className="px-2 text-small text-ink/70">{col.note}</p>
                <ul className="mt-4 grid gap-3">
                  {col.leads.map((lead) => {
                    const hot = "hot" in lead && lead.hot;
                    return (
                      <li
                        key={lead.name + col.stage}
                        className={`rounded-[1rem] p-4 ${hot ? "bg-night text-on-dark" : "border border-line-light bg-card"}`}
                      >
                        <p className="font-display text-body-sm font-bold">{lead.name}</p>
                        <p className={`mt-0.5 text-small ${hot ? "text-on-dark/80" : "text-ink/75"}`}>{lead.need}</p>
                        {"tag" in lead && lead.tag && (
                          <span
                            className={`mt-3 inline-flex rounded-full px-2.5 py-1 text-xs font-bold ${
                              hot ? "bg-amber text-ink" : "bg-sand text-ink"
                            }`}
                          >
                            {lead.tag}
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ol>
        </div>
        <p className="mt-4 text-small text-ink/70">Example board with made-up callers.</p>
      </div>
    </section>
  );
}
