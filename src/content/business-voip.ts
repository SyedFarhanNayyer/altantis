import type { Faq } from "./faq";
import { plans } from "./plans";

// Copy for the Business VoIP page. Plan facts match src/content/plans.ts.
// The bandwidth figure is general industry guidance; confirm it with Atlantis.

export const startingPrice = plans[0].price;

export const comparison: { topic: string; landline: string; voip: string }[] = [
  {
    topic: "How calls connect",
    landline: "Copper lines from the phone company",
    voip: "Your business internet connection",
  },
  {
    topic: "Where you answer",
    landline: "The phone wired to that line",
    voip: "Desk phone, mobile app or web phone",
  },
  {
    topic: "Adding a person",
    landline: "Usually a carrier order, sometimes new wiring",
    voip: "Add the user online, then plug in a phone",
  },
  {
    topic: "Menus and call routing",
    landline: "Usually needs extra equipment on site",
    voip: "Auto attendant and ring groups on every plan",
  },
  {
    topic: "Voicemail",
    landline: "Usually checked from the phone",
    voip: "Sent to your inbox with the audio attached",
  },
  {
    topic: "Texting from your business number",
    landline: "Not usually available",
    voip: "Included, starting at 100 texts per user per month",
  },
  {
    topic: "Calls across North America",
    landline: "Long distance is often billed by the minute",
    voip: "Unlimited to the US, Canada, Mexico and Puerto Rico",
  },
  {
    topic: "If your internet goes down",
    landline: "Lines usually keep working",
    voip: "Calls can forward to another number, such as a cell phone",
  },
];

export const benefits: { title: string; body: string }[] = [
  {
    title: "Answer from anywhere",
    body: "Take business calls on an iPhone, an Android phone, a desk phone or in Google Chrome. Your business number goes with you.",
  },
  {
    title: "Greet every caller properly",
    body: "An auto attendant answers and custom menus send callers to the right person. Every plan also includes one free toll-free number.",
  },
  {
    title: "Get calls to the right person",
    body: "Ring groups, business hours routing and call forwarding move each call to someone who can take it.",
  },
  {
    title: "Keep the number customers know",
    body: "In most cases, you can bring your current business number with you when you switch.",
  },
  {
    title: "Make changes yourself",
    body: "Update greetings, menus and users in the online admin portal. Desk phones set themselves up when plugged in.",
  },
  {
    title: "Plan your phone costs",
    body: "Plans are priced per user per month with calling included, and you only add extras if you need them.",
  },
];

export const voipFaqs: Faq[] = [
  {
    question: "What does VoIP stand for?",
    answer:
      "VoIP stands for Voice over Internet Protocol. It means your calls travel as data over an internet connection instead of over traditional copper phone lines.",
  },
  {
    question: "Is VoIP a good fit for a small business?",
    answer:
      "Usually, yes. Small teams get features such as an auto attendant, voicemail to email and a mobile app without buying on-site phone equipment, and each person is priced individually.",
    link: { href: "/pricing", label: "See plans and pricing" },
  },
  {
    question: "How much does business VoIP cost?",
    answer: `Atlantis plans start at ${startingPrice} per user per month, and Enterprise pricing is custom. Taxes and fees are not included.`,
    link: { href: "/pricing#compare", label: "Compare plans" },
  },
  {
    question: "How much internet speed do I need for VoIP?",
    answer:
      "As a general guide, plan for about 100 Kbps in each direction for every call happening at the same time. Video meetings need more. Connection quality matters as well as speed, so a stable connection is the priority.",
  },
  {
    question: "What happens if my internet goes down?",
    answer:
      "Your VoIP phones can’t make or take calls until the connection returns. You can set calls to forward to another number, such as a cell phone, so customers can still reach someone.",
  },
  {
    question: "Can I keep my current business phone number?",
    answer: "In most cases, yes. We’ll look into it for you before you switch.",
    link: { href: "/number-porting", label: "Learn about number porting" },
  },
  {
    question: "Do I need new phones?",
    answer:
      "Not always. We’ll check whether your current phones work with our system. You can also take calls on the mobile app or web phone without a desk phone.",
  },
  {
    question: "Does 911 work on a VoIP phone?",
    answer:
      "Yes, but it needs a registered address and a working connection. VoIP phones rely on power and internet, so 911 calls from them may not work during an outage. Keep a cell phone or another backup available for emergencies.",
  },
  {
    question: "What’s the difference between VoIP and a hosted PBX?",
    answer:
      "VoIP is the technology that carries your calls over the internet. A hosted PBX is the phone system built on top of it, with features such as extensions, menus and call routing run from the cloud.",
    link: { href: "/hosted-voip-pbx", label: "Learn about hosted PBX" },
  },
];
