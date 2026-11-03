// Photos for the Business Phone Systems page. Swap a src here and every
// section that uses it picks it up.

export const media = {
  outcomes: {
    src: "/images/bps-employee-answering-business-call.jpg",
    alt: "Office employee answering a business call at her desk",
  },
  callFlow: {
    src: "/images/bps-team-planning-call-flow.jpg",
    alt: "Team meeting around a laptop to plan how calls move through the business",
  },
  reliability: {
    src: "/images/bps-team-checking-mobile-calls.jpg",
    alt: "Coworkers checking a call on a smartphone together",
  },
  deskPhones: {
    src: "/images/hw-business-desk-phone-office.jpg",
    alt: "IP desk phone with a color screen on an office desk",
  },
  cordless: {
    src: "/images/hw-yealink-cordless-phone-base.png",
    alt: "Yealink cordless handset in its charger beside the wireless base station",
    // Product cut-out on a transparent background: show it whole, not cropped.
    contain: true,
  },
  voip: {
    src: "/images/hw-employee-headset-call.jpg",
    alt: "Employee on a headset call working from a laptop and tablet",
  },
} as const satisfies Record<string, { src: string; alt: string; contain?: boolean }>;
