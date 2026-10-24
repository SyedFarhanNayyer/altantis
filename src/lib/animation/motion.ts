// Shared motion tokens: every animation on the site draws from these so
// timing and easing stay consistent.
export const ease = {
  out: "expo.out", // long, weighted arrival
  soft: "power3.out",
  wipe: "power4.inOut", // edge reveals: slow start, decisive travel, soft landing
  pop: "back.out(2.2)", // small UI affordances only (check marks)
} as const;

export const duration = {
  reveal: 1.1,
  stagger: 0.9,
  wipe: 1.5,
  counter: 2.2,
} as const;

// Where scroll-triggered reveals start: element top at 85% of the viewport.
export const revealStart = "top 85%";

// Where a step (checklist item, comparison row) lights up.
export const stepLine = "top 68%";
