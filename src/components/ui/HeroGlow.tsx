// A soft light-orange circle, heavily blurred, sitting behind the top-right
// corner of an inner-page hero. Purely decorative.
export function HeroGlow() {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -top-56 -right-48 -z-10 size-[28rem] rounded-full bg-orange/30 blur-[200px] sm:size-[36rem] lg:-top-72 lg:-right-40 lg:size-[44rem] lg:blur-[280px]"
    />
  );
}
