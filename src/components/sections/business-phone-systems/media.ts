// Photos for the Business Phone Systems page. Each `src` is an existing
// site photo standing in until the planned shot (named in `planned`) is
// supplied; swap the src here and every section picks it up.

export const media = {
  outcomes: {
    planned: "bps-outcomes-team.jpg",
    src: "/images/business-owner-phone-call.jpg",
    alt: "Employee transferring a customer call on a business phone system",
  },
  solutions: {
    planned: "bps-solutions-consultation.jpg",
    src: "/images/copper-line-team-meeting.jpg",
    alt: "Atlantis consultant reviewing phone system options with a business owner",
  },
  callFlow: {
    planned: "bps-call-flow-design.jpg",
    src: "/images/atlantis-team-reviewing-screen.png",
    alt: "Atlantis consultant designing a business call flow with a client",
  },
  reliability: {
    planned: "bps-reliability-network.jpg",
    src: "/images/business-team-coworking.png",
    alt: "Atlantis technician configuring network equipment for a business phone system",
  },
  deskPhones: {
    planned: "hw-yealink-nec-desk.jpg",
    src: "/images/guide-phone-system-signs.jpg",
    alt: "Yealink and NEC business desk phones",
  },
  cordless: {
    planned: "hw-cordless-conference.jpg",
    src: "/images/guide-missed-business-calls.png",
    alt: "Cordless and conference phones for business",
  },
  paging: {
    planned: "hw-voip-pa-intercom.jpg",
    src: "/images/guide-copper-line-retirement.jpg",
    alt: "VoIP paging speaker and door intercom",
  },
} as const;
