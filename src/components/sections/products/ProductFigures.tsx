// The numbers a buyer compares first, in one row directly under the hero. Thin
// dividers between them on desktop; on small screens they sit in two columns.
export function ProductFigures({ title, figures }: { title: string; figures: { value: string; label: string }[] }) {
  return (
    <section aria-label={title} className="bg-sand py-10 lg:py-12">
      <dl className="container-page grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-5 lg:gap-x-0">
        {figures.map((figure) => (
          <div
            key={figure.label}
            className="flex flex-col-reverse justify-end last:col-span-2 lg:border-l lg:border-line-strong/30 lg:px-6 lg:first:border-l-0 lg:first:pl-0 lg:last:col-span-1 lg:last:pr-0"
          >
            <dt className="mt-1 text-small font-medium">{figure.label}</dt>
            <dd className="font-display text-stat tabular-nums">{figure.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
