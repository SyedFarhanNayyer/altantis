import type { Faq } from "./faq";
import { pickFaqs } from "./faq-pick";

// Copy for the POTS Line Replacement page. Written for Atlantis: phones and
// adapters are configured and shipped ready to plug in, with no install visit.

// What's often still running on a copper line.
export const devices: { title: string; body: string }[] = [
  { title: "Fire alarm panels", body: "Panels that dial the monitoring center when an alarm goes off." },
  { title: "Elevator phones", body: "The emergency phone inside each elevator cab." },
  { title: "Gate and door entry", body: "Call boxes that ring a phone to let visitors in." },
  { title: "Security alarms", body: "Burglar and intrusion alarms that report to a monitoring company." },
  { title: "Fax machines", body: "Dedicated fax lines for orders, forms and records." },
  { title: "Card terminals", body: "Older payment terminals that still dial out to approve a sale." },
  { title: "Emergency phones", body: "Pool, parking lot and courtesy phones that call for help." },
  { title: "Equipment alarms", body: "Boiler, freezer and water alarms that call when something fails." },
  { title: "Building systems", body: "Dial-up modems on meters, controllers and older equipment." },
  { title: "Main and backup lines", body: "The business numbers customers still call, and spare lines kept just in case." },
];

// Line by line: what each type of copper line moves to.
export const replacements = [
  {
    topic: "Office phone lines",
    before: "One copper line for each number",
    after: "Our hosted phone system, on desk phones and the mobile app",
  },
  {
    topic: "Fax machines",
    before: "A dedicated fax line",
    after: "Fax to email, or your fax machine on an adapter",
  },
  {
    topic: "Fire and security alarms",
    before: "The panel dials out over copper",
    after: "An analog adapter, confirmed with your monitoring company first",
  },
  {
    topic: "Elevator phones",
    before: "A copper line run to each cab",
    after: "An analog adapter, checked against your local requirements",
  },
  {
    topic: "Gate and door entry",
    before: "A call box on its own line",
    after: "An analog adapter, so the call box keeps ringing through",
  },
  {
    topic: "Card terminals",
    before: "Dial-up over the phone line",
    after: "Your internet connection, or an adapter for older terminals",
  },
];

// A real sequence, so the page numbers these.
export const steps: { title: string; body: string }[] = [
  {
    title: "Find every line",
    body: "Send us a recent phone bill. We match each number to what it’s connected to, including the lines nobody remembers.",
  },
  {
    title: "Choose a replacement for each",
    body: "Phones move to the hosted system. Alarms, elevators, entry systems and fax get the adapter or service that fits, once any code or monitoring requirements are checked.",
  },
  {
    title: "Configured and shipped",
    body: "Phones and adapters are set up to your specifications and tested before they ship to you, ready to plug in.",
  },
  {
    title: "Test, then cancel copper",
    body: "Plug in each device and test it with your alarm company or elevator contractor. Your numbers move over, and copper is cancelled only once everything works.",
  },
];

export const benefits: { title: string; body: string }[] = [
  {
    title: "Keep your devices",
    body: "Most alarms, entry systems and fax machines keep working as they are, connected through an adapter.",
  },
  {
    title: "Keep your numbers",
    body: "In most cases, the numbers on your main, fax and alarm lines move with you.",
  },
  {
    title: "One provider, one bill",
    body: "Phone service, adapters and line replacements on one monthly bill, instead of a charge for every copper line.",
  },
  {
    title: "Every location in one plan",
    body: "Replace lines site by site or all at once, with every location on the same account.",
  },
  {
    title: "Managed remotely",
    body: "Adapters are set up before they ship and managed through a cloud platform, so many changes don’t need a visit.",
  },
  {
    title: "A plan for outages",
    body: "Decide where calls go if your power or internet goes out, and agree a backup for alarms and emergency phones.",
  },
];

export const potsFaqs: Faq[] = [
  {
    question: "What is a POTS line?",
    answer:
      "POTS stands for plain old telephone service: a traditional landline that runs over copper wiring from the phone company. Many businesses still use them for phones, fax machines, alarms and elevators.",
  },
  {
    question: "Why are copper phone lines being retired?",
    answer:
      "Carriers are moving their networks to fiber, wireless and internet-based service. Copper is costly to maintain, so many carriers are raising prices, slowing repairs or retiring lines in stages.",
  },
  {
    question: "When will my copper lines be shut off?",
    answer:
      "It depends on your carrier and location. Carriers give notice before retiring a line, but it’s safer not to wait for it. We can review your lines and plan around any dates you’ve been given.",
  },
  {
    question: "Will our fire alarm keep working?",
    answer:
      "In many cases, yes, through an analog adapter. Fire and security alarms have their own rules, so we confirm the replacement with your monitoring company and local requirements before the copper line is cancelled.",
  },
  {
    question: "What about our elevator phones?",
    answer:
      "Elevator phones can usually move to an analog adapter. Because they’re a safety device, we plan the change with your elevator contractor and test each phone before the old line is cancelled.",
  },
  {
    question: "Can we keep the same phone numbers?",
    answer: "In most cases, yes. We’ll look into each number for you before you switch.",
    link: { href: "/number-porting", label: "Learn about number porting" },
  },
  {
    question: "Do we need new equipment?",
    answer:
      "Analog devices usually connect through a small adapter that we set up and ship to you. Office phones move to IP desk phones or the mobile app.",
    link: { href: "/products", label: "See our phones" },
  },
  {
    question: "What happens during a power or internet outage?",
    answer:
      "Internet-based lines need power and an internet connection to work. Choose where calls go during an outage, and agree a backup with your alarm company for alarms and emergency phones.",
  },
  {
    question: "How long does the switch take?",
    answer:
      "It depends on how many lines and locations you have. Most of the time goes into the audit and into confirming alarm and elevator lines. Once the plan is set, equipment is configured and shipped ready to plug in.",
  },
];

// The five shown on the page; the FAQ page lists them all.
export const potsPageFaqs = pickFaqs(potsFaqs, [
  "Why are copper phone lines being retired?",
  "Will our fire alarm keep working?",
  "Can we keep the same phone numbers?",
  "Do we need new equipment?",
  "What happens during a power or internet outage?",
]);
