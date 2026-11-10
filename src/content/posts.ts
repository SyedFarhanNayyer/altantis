// Blog & Guides articles. Drafts written from what the rest of the site
// says about Atlantis — review each one before publishing. Each post also
// needs a route file at src/app/blog/<slug>/page.tsx.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  image: string;
  alt: string;
  /** object-position for the card crop */
  position: string;
  body: Block[];
};

const posts: Post[] = [
  {
    slug: "real-cost-of-missed-business-calls",
    title: "The Real Cost of Missed Business Calls",
    summary: "What unanswered calls cost a small business, and simple ways to fix it.",
    category: "Customer Experience",
    date: "2026-10-14",
    image: "/images/guide-missed-business-calls.png",
    alt: "Small business owner missing an incoming phone call",
    position: "object-[0%_51%]",
    body: [
      {
        type: "p",
        text: "Every unanswered call is a customer deciding whether to try again or try someone else. For a small business, many of those callers never leave a voicemail. They simply move on to the next result in their search.",
      },
      { type: "h2", text: "Why calls go unanswered" },
      {
        type: "p",
        text: "Most missed calls aren’t caused by a lack of effort. They come from how the phone system is set up:",
      },
      {
        type: "ul",
        items: [
          "Every call rings one desk, so a busy receptionist means a busy signal.",
          "Staff away from their desks can’t answer the business line on their cell phones.",
          "After-hours calls go to a generic voicemail that nobody checks until morning.",
          "Callers can’t reach the right department without being transferred, and drop off along the way.",
        ],
      },
      { type: "h2", text: "What a missed call really costs" },
      {
        type: "p",
        text: "Start with the value of a typical new customer, then think about how many calls a week go unanswered. Even a handful of lost callers adds up quickly, and that’s before counting existing customers who get frustrated and quietly take their business elsewhere.",
      },
      { type: "h2", text: "Simple fixes that make a difference" },
      {
        type: "ul",
        items: [
          "Ring groups and call queues that send each call to the next available person.",
          "An auto attendant that greets callers and routes them by department.",
          "Mobile apps so your team can answer the business number from anywhere.",
          "After-hours rules that forward urgent calls or take a detailed message.",
          "Voicemail to email, so messages reach the right person straight away.",
        ],
      },
      {
        type: "p",
        text: "None of these need new staff. They need a phone system planned around how calls actually move through your business. If you’d like to see where your calls are being lost, our team can review your current setup with you.",
      },
    ],
  },
  {
    slug: "copper-line-retirement",
    title: "Copper Line Retirement: Protect Your Business Before the Deadline",
    summary: "Which lines are affected, what replaces them, and how to plan the switch.",
    category: "Copper Lines",
    date: "2026-09-23",
    image: "/images/guide-copper-line-retirement.jpg",
    alt: "Copper telephone cables being retired",
    position: "object-[100%_71%]",
    body: [
      {
        type: "p",
        text: "Carriers are retiring the copper phone network that businesses have relied on for decades. As copper lines are phased out, service on them can become more expensive, harder to repair or discontinued altogether, often on the carrier’s timeline rather than yours.",
      },
      { type: "h2", text: "Which lines are affected" },
      {
        type: "p",
        text: "It’s not just your main phone numbers. Many businesses have copper lines they’ve forgotten about:",
      },
      {
        type: "ul",
        items: [
          "Main business lines and direct numbers",
          "Fax lines",
          "Alarm and fire panel lines",
          "Elevator emergency phones",
          "Credit card terminals and gate or door entry systems",
        ],
      },
      { type: "h2", text: "What replaces copper" },
      {
        type: "p",
        text: "Most voice lines move to a cloud phone system or SIP trunks over your internet connection. Specialty lines like alarms and elevators need equipment designed to replace them reliably, so each one should be planned individually rather than switched in a rush.",
      },
      { type: "h2", text: "How to plan the switch" },
      {
        type: "ul",
        items: [
          "Audit every line on your bill and find out what each one is connected to.",
          "Check that your internet and network can carry voice traffic clearly.",
          "Decide which numbers to keep. They can be transferred to the new service.",
          "Schedule the changeover so old lines stay live until every new one is tested.",
        ],
      },
      {
        type: "p",
        text: "Planning early means you choose the timing, the equipment and the price. Atlantis offers a free copper line audit to show you exactly which lines you have and what each one should become.",
      },
    ],
  },
  {
    slug: "signs-your-phone-system-is-costing-you-customers",
    title: "5 Signs Your Phone System Is Costing You Customers",
    summary: "Warning signs your current setup is turning callers away.",
    category: "Phone Systems",
    date: "2026-09-02",
    image: "/images/guide-phone-system-signs.jpg",
    alt: "Office desk phone with an outdated phone system",
    position: "object-[0%_69%]",
    body: [
      {
        type: "p",
        text: "An aging phone system rarely fails all at once. It costs you customers a few calls at a time, in ways that are easy to miss. Here are five signs it’s time to take a closer look.",
      },
      { type: "h2", text: "1. Callers hear busy signals or endless ringing" },
      {
        type: "p",
        text: "If callers can’t get through at busy times, they won’t wait. Modern systems queue calls and ring the next available person instead.",
      },
      { type: "h2", text: "2. Your team can only answer at their desks" },
      {
        type: "p",
        text: "When staff are on site, on the road or working from home, calls to the office go unanswered. Your business line should ring wherever your team is working.",
      },
      { type: "h2", text: "3. Transfers between locations are a struggle" },
      {
        type: "p",
        text: "If moving a caller to another office means giving them a different number, you lose callers in the gap. Every location should share one system with simple extension dialing.",
      },
      { type: "h2", text: "4. Nobody knows how the system works" },
      {
        type: "p",
        text: "Greetings that are years out of date and settings no one can change are a sign the system is running your business, not the other way around.",
      },
      { type: "h2", text: "5. Repairs are slow and costs keep rising" },
      {
        type: "p",
        text: "Older equipment gets harder to support. Replacement parts become scarce, service calls take longer and maintenance contracts grow. Meanwhile your monthly bill pays for lines and features you may not use.",
      },
      { type: "h2", text: "What to do next" },
      {
        type: "p",
        text: "If two or more of these sound familiar, it’s worth reviewing your setup. A good starting point is a list of what callers experience today and what you’d like them to experience instead. Our team can help you map that out.",
      },
    ],
  },
  {
    slug: "what-to-expect-when-switching-phone-systems",
    title: "What to Expect When You Switch Business Phone Systems",
    summary: "A step-by-step look at a planned changeover, from proposal to go-live.",
    category: "Switching",
    date: "2026-08-12",
    image: "/images/atlantis-team-reviewing-screen.png",
    alt: "Atlantis team planning a business phone system changeover",
    position: "object-center",
    body: [
      {
        type: "p",
        text: "The biggest worry about changing phone systems is downtime. With the right plan, your phones keep working the whole way through. Here’s what a well-run changeover looks like.",
      },
      { type: "h2", text: "Proposal" },
      {
        type: "p",
        text: "It starts with one itemized quote in plain language: the monthly service, the one-time equipment cost and everything included in your plan.",
      },
      { type: "h2", text: "Configuration" },
      {
        type: "p",
        text: "Once you place your order, we configure your phones, greetings, menus and ring order to your specifications.",
      },
      { type: "h2", text: "Shipping and setup" },
      {
        type: "p",
        text: "Your phones are tested and shipped directly to you. When they arrive, simply plug them in and they’re ready to use.",
      },
      { type: "h2", text: "Number transfer" },
      {
        type: "p",
        text: "Your existing numbers are transferred to our service, and we coordinate the transfer date with you. We recommend keeping your current service active until the transfer is complete.",
      },
      { type: "h2", text: "Testing and training" },
      {
        type: "p",
        text: "Every phone and call route is tested before shipping, and our team can show your staff how to answer, transfer and forward calls.",
      },
      { type: "h2", text: "A checklist before you start" },
      {
        type: "ul",
        items: [
          "Gather a recent phone bill and a list of every number you use.",
          "Note any special lines, such as fax, alarm or elevator phones.",
          "Decide who should answer first, and what happens when they can’t.",
          "Pick a go-live date that avoids your busiest days.",
        ],
      },
    ],
  },
];

// Newest first.
export const allPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const postPath = (post: Post) => `/blog/${post.slug}`;

// "October 14, 2026"
export const formatPostDate = (iso: string) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

// Minutes at ~200 words a minute, rounded up.
export const readingTime = (post: Post) => {
  const words = post.body
    .flatMap((b) => (b.type === "ul" ? b.items : [b.text]))
    .join(" ")
    .split(/\s+/).length;
  return Math.ceil(words / 200);
};
