// The page's one visual idea: the number stays, the provider behind it changes.
// An illustration with an example number, so it is hidden from screen readers
// and summed up by the figcaption instead.
export function NumberCard() {
  return (
    <figure data-reveal="fade" className="rounded-[1.25rem] bg-night p-6 text-on-dark sm:p-9">
      <div aria-hidden="true">
        <p className="text-small text-on-dark/70">Your business number</p>
        <p className="mt-3 font-display text-number font-bold whitespace-nowrap tabular-nums">(805) 555-0142</p>

        <dl className="mt-8 border-t border-on-dark/20">
          <div className="flex items-center justify-between gap-4 border-b border-on-dark/20 py-4">
            <dt className="text-small text-on-dark/70">Before</dt>
            <dd className="text-body-sm text-on-dark/70 line-through decoration-on-dark/50">Your current provider</dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-on-dark/20 py-4">
            <dt className="text-small text-on-dark/70">After</dt>
            <dd className="flex items-center gap-2.5 font-display text-title-sm font-bold">
              <span className="size-2.5 rounded-full bg-brand-gradient" />
              Atlantis
            </dd>
          </div>
        </dl>
      </div>
      <figcaption className="mt-5 text-small text-on-dark/85">
        Same number on your signs, cards and listings. Only the provider changes.
      </figcaption>
    </figure>
  );
}
