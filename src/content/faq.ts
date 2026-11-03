// Only the first answer comes from the Figma file. The rest are drafts built
// from claims made elsewhere on the site — confirm them with Atlantis.

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
      text: "Most systems today run in the cloud over your internet connection, so they include features that once needed expensive on-site equipment:",
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
      text: "Atlantis plans the setup with your team, preconfigures the phones and supports the system after it’s installed.",
    },
  ],
  link: { href: "/business-phone-systems", label: "Explore business phone systems" },
};
const cost: Faq = {
  question: "How much does a business phone system cost?",
  answer:
    "Most systems include a monthly per-user fee plus one-time costs for phones and installation. Your price depends on users, locations, cabling and features. You’ll get one itemized quote after a free site survey.",
  more: [
    { type: "p", text: "The things that affect your price most are:" },
    {
      type: "ul",
      items: [
        "How many people need a phone, app or extension",
        "The number of locations and whether new cabling is needed",
        "The type of phones you choose: desk, cordless or conference",
        "Features such as call recording, queues or integrations",
      ],
    },
    {
      type: "p",
      text: "Your proposal lists the monthly service, the one-time setup and everything included, so there are no surprises after installation.",
    },
  ],
  link: { href: "/pricing", label: "See how pricing works" },
};
const downtime: Faq = {
  question: "Will switching cause downtime?",
  answer:
    "No. Your old service stays live while we install and test the new system. We only cancel the old lines after every line passes testing.",
  more: [
    {
      type: "p",
      text: "A typical changeover runs in this order: site survey, design and proposal, installation, number transfer, then testing and staff training. Your phones keep working at every step, and we schedule the go-live date around your busiest days.",
    },
  ],
};
const keepNumbers: Faq = {
  question: "Can I keep my existing phone numbers?",
  answer:
    "Yes. We manage the number transfer for you, so customers keep dialing the same numbers and reach you without interruption.",
  more: [
    {
      type: "p",
      text: "This includes your main line, direct numbers and fax numbers. Your old service stays active until the transfer is complete, so no calls are lost in between.",
    },
  ],
  link: { href: "/number-porting", label: "Learn about number transfers" },
};
const timeline: Faq = {
  question: "How quickly can we be up and running?",
  answer:
    "It depends on how many users, phones and locations you have. After the free site survey, you’ll get a clear timeline along with your quote.",
  more: [
    {
      type: "p",
      text: "For most single-site offices, installation takes about a day once the equipment arrives. Larger or multi-location setups are planned in stages so each site goes live smoothly.",
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
    "Calls can forward automatically to cell phones or another office, so customers still reach someone. We’ll plan the right backup for your business during the site survey.",
};
const growth: Faq = {
  question: "Can the system grow with us?",
  answer:
    "Yes. You can add users, phones and new locations to the same system, and every office can dial coworkers by extension.",
  more: [
    {
      type: "p",
      text: "Adding a new employee usually means assigning an extension and a phone or app. There’s no new equipment to install at the office.",
    },
  ],
};
const support: Faq = {
  question: "Do you support us after installation?",
  answer:
    "Yes. Our own local technicians support your system after installation, so you always know who’s looking after it.",
  more: [
    {
      type: "p",
      text: "When you need a change, such as a new greeting, a new employee or different after-hours rules, you call the same team that installed your system.",
    },
  ],
};

// Business Phone Systems page FAQ section.
export const faqs: Faq[] = [whatIs, cost, downtime, keepNumbers, timeline, mobile, outage, growth, support];

// FAQ page, grouped by topic. `id` is the in-page anchor for each group.
export const faqGroups: { id: string; title: string; items: Faq[] }[] = [
  {
    id: "pricing",
    title: "Pricing & Quotes",
    items: [
      cost,
      {
        question: "Is there a charge for the site survey?",
        answer:
          "No. The site survey is free. We review your building, cabling, network, current bill and how calls move through your business, then send an itemized proposal.",
      },
      {
        question: "Are there hidden fees?",
        answer:
          "No. Your proposal lists the monthly service, the one-time setup and everything included, before any work begins.",
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
          "Yes. Before your old service is cancelled, we show your team how to answer, transfer and forward calls, check voicemail and use the features you’ll rely on day to day.",
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
        question: "Which phones do you install?",
        answer:
          "We supply and install Yealink desk, cordless and conference phones, plus paging speakers and door intercoms. Every device is mounted, programmed and tested by our technicians.",
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
          "We’re based in Ventura and work with businesses across Ventura County and the surrounding areas of California.",
      },
    ],
  },
];
