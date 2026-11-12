// Answers for pricing, switching, number transfer, timeline, outages and growth
// come from the Atlantis website review.

// Longer answers follow the lead `answer` as extra paragraphs and lists,
// with an optional link to the page that covers the topic in full.
export type FaqBlock = { type: "p"; text: string } | { type: "ul"; items: string[] };

export type Faq = {
  question: string;
  answer: string;
  more?: FaqBlock[];
  link?: { href: string; label: string };
};

// Plain-text answer for FAQPage JSON-LD, matching what's shown on the page.
export const faqText = (f: Faq) =>
  [f.answer, ...(f.more ?? []).map((b) => (b.type === "p" ? b.text : `${b.items.join(". ")}.`))].join(" ");

const whatIs: Faq = {
  question: "What is a business phone system?",
  answer:
    "A business phone system connects everyone who answers calls for your company under one set of numbers. Instead of each phone working on its own, calls are routed to the right person, team or location based on rules you set.",
  more: [
    {
      type: "p",
      text: "Most systems today run in the cloud over your internet connection, so they include features that once needed expensive equipment in the office:",
    },
    {
      type: "ul",
      items: [
        "An auto attendant that greets callers and sends them to the right department",
        "Ring groups and call queues so calls reach the next available person",
        "Desk, cordless and conference phones, plus apps for cell phones and laptops",
        "Voicemail to email, call forwarding and after-hours rules",
        "Extension dialing between every office on the same system",
      ],
    },
    {
      type: "p",
      text: "Atlantis configures your phones to your specifications, ships them ready to plug in and supports the system after setup.",
    },
  ],
  link: { href: "/business-phone-systems", label: "Explore business phone systems" },
};
const cost: Faq = {
  question: "How much does a business phone system cost?",
  answer:
    "Most plans include a monthly per-user fee plus a one-time cost for phones. Your price depends on the number of users, locations, the phones you choose, and the features you need. You’ll receive one itemized quote before you place your order.",
  more: [
    { type: "p", text: "The things that affect your price most are:" },
    {
      type: "ul",
      items: [
        "How many people need a phone, app, or extension",
        "The number of locations you need to connect",
        "The type of phones you choose: desk, cordless, or conference",
        "Features such as call recording, queues, or integrations",
      ],
    },
    {
      type: "p",
      text: "Your quote lists the monthly service, the one-time equipment cost, and everything included in your plan.",
    },
    {
      type: "p",
      text: "Once you place your order, we configure your phones to your specifications and ship them directly to you. When they arrive, simply plug them in and they’re ready to use.",
    },
  ],
  link: { href: "/pricing", label: "See how pricing works" },
};
const downtime: Faq = {
  question: "Will switching cause downtime?",
  answer:
    "We work to keep the transition as smooth as possible. We recommend keeping your current service active until your new phones are set up and your number transfer is complete.",
  more: [
    {
      type: "p",
      text: "A typical changeover follows these steps: you place your order, we configure your phones to your specifications, we ship them to you, and you plug them in. Your existing numbers are then transferred to our service, and we coordinate the transfer date with you so you can plan around your busiest times.",
    },
  ],
};
const keepNumbers: Faq = {
  question: "Can I keep my existing phone numbers?",
  answer:
    "In most cases, yes. We handle the number transfer process for you, so your customers can continue dialing the same numbers they already know.",
  more: [
    {
      type: "p",
      text: "This can include your main line, direct numbers, and fax numbers. We recommend keeping your current service active until the transfer is complete, and we’ll coordinate the transfer date with you.",
    },
  ],
  link: { href: "/number-porting", label: "Learn about number transfers" },
};
const timeline: Faq = {
  question: "How quickly can we be up and running?",
  answer:
    "It depends on the number of users, phones, and locations you have. We’ll provide an estimated timeline along with your quote.",
  more: [
    {
      type: "p",
      text: "Once you place your order, we configure your phones to your specifications and ship them to you. When they arrive, simply plug them in. Number transfer times vary by carrier, and we’ll keep you updated throughout the process. For multi-location setups, we can coordinate shipping and setup for each site based on your schedule.",
    },
  ],
};
const mobile: Faq = {
  question: "Can my team answer business calls on their cell phones?",
  answer:
    "Yes. Calls to your business number can ring desk phones, cell phones and laptops, so your team can answer wherever work happens.",
  more: [
    {
      type: "p",
      text: "Calls made from the mobile app show your business number, not a personal one. Staff can also transfer calls and check voicemail, just as they would at their desk.",
    },
  ],
};
const outage: Faq = {
  question: "What happens if our internet goes down?",
  answer:
    "You can set up call forwarding so calls go to a cell phone or another number when your phones are offline. This can be configured by you through the portal or by our team on request. Your team can also make and take business calls from the mobile app using your business number.",
};
const growth: Faq = {
  question: "Can the system grow with us?",
  answer:
    "Yes. You can add users, phones, and new locations as your business grows, and your team can reach coworkers by extension.",
  more: [
    {
      type: "p",
      text: "Adding a new employee means assigning them an extension and either a new desk phone, which we configure and ship to you, or access through the mobile or web app.",
    },
  ],
};
const support: Faq = {
  question: "Do you support us after setup?",
  answer:
    "Yes. Our team supports your system after your phones are up and running, so you always know who’s looking after it.",
  more: [
    {
      type: "p",
      text: "When you need a change, such as a new greeting, a new employee or different after-hours rules, you can make it yourself in the portal or ask our team to do it for you.",
    },
  ],
};

// Business Phone Systems page FAQ section.
// The five shown on the Business Phone Systems and Pricing pages. The FAQ
// page lists every question.
export const faqs: Faq[] = [cost, downtime, keepNumbers, mobile, outage];

// FAQ page, grouped by topic. `id` is the in-page anchor for each group.
export const faqGroups: { id: string; title: string; items: Faq[] }[] = [
  {
    id: "pricing",
    title: "Pricing & Quotes",
    items: [
      cost,
      {
        question: "Are there hidden fees?",
        answer:
          "No. Your quote lists the monthly service, the one-time equipment cost and everything included in your plan, before you place your order.",
      },
    ],
  },
  {
    id: "switching",
    title: "Switching to Atlantis",
    items: [
      downtime,
      keepNumbers,
      timeline,
      {
        question: "Will you train our staff?",
        answer:
          "Yes. Our team can show your staff how to answer, transfer and forward calls, check voicemail and use the features you’ll rely on day to day.",
      },
      {
        question: "We still have copper phone lines. What should we do?",
        answer:
          "Carriers are retiring copper lines, so it’s worth planning the move before service changes are forced on you. We can audit your current lines and recommend a replacement for each one, including alarm, fax and elevator lines.",
      },
    ],
  },
  {
    id: "features",
    title: "Features & Equipment",
    items: [
      whatIs,
      growth,
      mobile,
      {
        question: "Which phones do you offer?",
        answer:
          "We supply Grandstream and Yealink desk and cordless phones. Every phone is configured to your specifications and tested before it ships to you.",
      },
      {
        question: "How is 911 handled?",
        answer:
          "Every phone and location is registered with its address, so emergency services see where a 911 call is coming from.",
      },
    ],
  },
  {
    id: "support",
    title: "Reliability & Support",
    items: [
      outage,
      support,
      {
        question: "What areas do you serve?",
        answer:
          "We’re based in Ventura, California, and serve businesses nationwide. Your phones are configured and shipped to you, ready to plug in.",
      },
    ],
  },
];
