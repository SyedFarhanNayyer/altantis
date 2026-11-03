import type { Faq } from "./faq";
import { plans } from "./plans";

// Copy for the Hosted VoIP PBX page. Plan facts match src/content/plans.ts.

export const startingPrice = plans[0].price;

export const pbxFacts: { label: string; value: string }[] = [
  { label: "Equipment on site", value: "IP phones only" },
  { label: "How it’s priced", value: "Per user, per month" },
  { label: "Your phone numbers", value: "Move with you in most cases" },
  { label: "Where you can answer", value: "Desk phone, cell phone or computer" },
];

export type FlowIcon =
  | "incoming"
  | "attendant"
  | "group"
  | "answered"
  | "hours"
  | "greeting"
  | "inbox"
  | "queue"
  | "ring"
  | "mobile";

type FlowStep = { title: string; body: string; icon: FlowIcon };

// One call in four situations. Availability matches the plan comparison table.
export const callScenarios: { id: string; label: string; plan: string; steps: FlowStep[] }[] = [
  {
    id: "open",
    label: "During business hours",
    plan: "Auto attendant and ring groups are on every plan.",
    steps: [
      { title: "A customer calls", body: "Your main, direct and toll-free numbers connect to one system.", icon: "incoming" },
      { title: "The auto attendant answers", body: "A greeting and menu you control offer clear options.", icon: "attendant" },
      { title: "A ring group rings", body: "Several phones ring at once or in the order you set.", icon: "group" },
      { title: "Your team picks up", body: "The caller reaches the right person the first time.", icon: "answered" },
    ],
  },
  {
    id: "closed",
    label: "After hours",
    plan: "Business hours routing and voicemail to email are on every plan.",
    steps: [
      { title: "A customer calls", body: "It’s after closing, and the system already knows.", icon: "incoming" },
      { title: "Your hours decide the route", body: "Business hours routing handles days, nights and set times differently.", icon: "hours" },
      { title: "The caller leaves a message", body: "Your greeting plays and the caller records a voicemail.", icon: "greeting" },
      { title: "It reaches your inbox", body: "The voicemail arrives by email with the audio attached.", icon: "inbox" },
    ],
  },
  {
    id: "busy",
    label: "When everyone’s busy",
    plan: "Call queues are on the Premium and Enterprise plans.",
    steps: [
      { title: "A customer calls", body: "Everyone on the team is already on the phone.", icon: "incoming" },
      { title: "The auto attendant answers", body: "The caller chooses the team they need.", icon: "attendant" },
      { title: "A call queue holds them", body: "Music or messages play while the caller waits in line.", icon: "queue" },
      { title: "The next free person answers", body: "The call goes to whoever becomes available.", icon: "answered" },
    ],
  },
  {
    id: "away",
    label: "When you’re out of the office",
    plan: "Simultaneous ring is on the Pro, Premium and Enterprise plans.",
    steps: [
      { title: "A customer calls", body: "They dial your business number, as they always do.", icon: "incoming" },
      { title: "Simultaneous ring starts", body: "The system rings more than one of your devices.", icon: "ring" },
      { title: "Your phones ring together", body: "Your desk phone and cell phone ring at the same time.", icon: "mobile" },
      { title: "You answer on your cell", body: "The caller reaches you, wherever you’re working.", icon: "answered" },
    ],
  },
];

export const pbxComparison: { topic: string; onSite: string; hosted: string }[] = [
  {
    topic: "Where the system runs",
    onSite: "On equipment in your building",
    hosted: "In the cloud, with IP phones in your office",
  },
  {
    topic: "How you pay",
    onSite: "Mostly a large upfront purchase",
    hosted: "A monthly price per user",
  },
  {
    topic: "Upkeep",
    onSite: "Yours to arrange and budget for",
    hosted: "No PBX equipment to maintain on site",
  },
  {
    topic: "Changing menus and users",
    onSite: "Often needs a technician",
    hosted: "Done online in the admin portal",
  },
  {
    topic: "Working away from the office",
    onSite: "Often limited or an added cost",
    hosted: "Mobile app and web phone on every plan",
  },
  {
    topic: "If your internet goes down",
    onSite: "Internal calls may keep working",
    hosted: "Calls can forward to another number",
  },
];

export const pbxFaqs: Faq[] = [
  {
    question: "What does PBX stand for?",
    answer:
      "PBX stands for private branch exchange. It’s the system that connects a company’s phones and handles extensions, menus, transfers and call routing.",
  },
  {
    question: "What’s the difference between hosted PBX and on-site PBX?",
    answer:
      "An on-site PBX runs on equipment you buy and keep in your building. A hosted PBX runs in the cloud, so your office only needs internet and phones, and you pay per user each month.",
  },
  {
    question: "What equipment do I need for a hosted PBX?",
    answer:
      "IP phones and a stable internet connection. Your current phones may also work, and we’ll check that for you. Your team can also use the mobile app or web phone without a desk phone.",
  },
  {
    question: "How much does a hosted VoIP PBX cost?",
    answer: `Atlantis plans start at ${startingPrice} per user per month, and Enterprise pricing is custom. Taxes and fees are not included.`,
    link: { href: "/pricing#compare", label: "Compare plans" },
  },
  {
    question: "Can my team use it away from the office?",
    answer:
      "Yes. Every plan includes mobile apps for iPhone and Android and a web phone for Google Chrome. Calls made from the mobile app show your business number.",
  },
  {
    question: "Can a hosted PBX connect more than one location?",
    answer:
      "Yes. Staff can dial extensions and transfer calls between offices on the same system. Enterprise adds multi-site management for businesses with several locations.",
  },
  {
    question: "Can I keep my current phone numbers?",
    answer: "In most cases, yes. We’ll look into it for you before you switch.",
    link: { href: "/number-porting", label: "Learn about number porting" },
  },
  {
    question: "What if we already own a phone system that works well?",
    answer:
      "You may not need to replace it. SIP trunking connects an existing phone system to our service and is available on the Enterprise plan.",
    link: { href: "/sip-trunking", label: "Learn about SIP trunking" },
  },
];
