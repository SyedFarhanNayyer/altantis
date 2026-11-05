import type { Faq } from "./faq";

// Copy for the Healthcare page. Plan availability matches src/content/plans.ts.
// The HIPAA wording makes no compliance claim: have Atlantis review it, and
// update it if they can confirm more.

export const callerRoutes: { caller: string; handled: string }[] = [
  { caller: "“I need to schedule an appointment.”", handled: "Send it to the front desk or scheduling team." },
  { caller: "“I’m a new patient.”", handled: "Give new patients their own menu option." },
  { caller: "“I have a billing question.”", handled: "Send it to billing with its own extension." },
  { caller: "“I’m calling after hours.”", handled: "Play an after-hours message or send to voicemail." },
  { caller: "“I need a specific department.”", handled: "Use extensions or menu options to reach them." },
];

export const phoneProblems: { problem: string; fix: string; plan: string }[] = [
  {
    problem: "Every question lands on the front desk",
    fix: "An auto attendant greets callers and sends scheduling, billing and refill questions straight to the right person or team.",
    plan: "Included on every plan",
  },
  {
    problem: "Patients wait while every line is busy",
    fix: "Ring groups ring several phones at once or in order. Call queues hold callers in line and send them to the next free person.",
    plan: "Ring groups on every plan, call queues on Premium and up",
  },
  {
    problem: "Providers are hard to reach between patients",
    fix: "Give each provider a direct number, ring their desk phone and cell phone together, or park a call so they can pick it up from any phone.",
    plan: "Direct numbers on every plan, ringing both phones and call parking on Pro and up",
  },
  {
    problem: "Calls go unanswered when the office is closed",
    fix: "Business hours routing plays your after-hours message, then sends the call to voicemail or forwards it to the number you choose.",
    plan: "Included on every plan",
  },
];

export const practiceTypes: { title: string; body: string; icon: "medical" | "dental" | "specialty" | "multi" }[] = [
  {
    title: "Medical offices",
    body: "Give new patients, refills and billing their own menu options, so the front desk isn’t the first stop for every question.",
    icon: "medical",
  },
  {
    title: "Dental offices",
    body: "When one small team handles scheduling and insurance, ring groups make sure a call doesn’t depend on one person being free.",
    icon: "dental",
  },
  {
    title: "Specialty practices",
    body: "Route calls by provider or department, and give each person a direct number so referring offices can reach them.",
    icon: "specialty",
  },
  {
    title: "Multi-location practices",
    body: "Dial extensions and transfer calls between offices on one system. Enterprise adds multi-site management.",
    icon: "multi",
  },
];

export const healthcareServices: { title: string; body: string; href: string }[] = [
  {
    title: "Hosted VoIP PBX",
    body: "A complete phone system in the cloud, with no PBX equipment to keep on site.",
    href: "/hosted-voip-pbx",
  },
  {
    title: "Business VoIP",
    body: "Answer the practice’s number from a desk phone, cell phone or computer.",
    href: "/business-voip",
  },
  {
    title: "POTS Line Replacement",
    body: "Plan ahead for the copper lines still running fax machines, alarms and elevators.",
    href: "/pots-line-replacement",
  },
  {
    title: "Yealink Phones",
    body: "Desk and cordless phones for the front desk, exam rooms and back office.",
    href: "/products",
  },
];

export const hipaaTopics = ["Call recording", "Voicemail and voicemail to email", "Business texting", "Fax to email"];

export const healthcareFaqs: Faq[] = [
  {
    question: "Is your phone system HIPAA compliant?",
    answer:
      "HIPAA compliance depends on how a practice sets up and uses its phone system, so no phone system can settle it alone. Ask us before you switch, and bring your compliance lead’s requirements so we can go through them with you.",
  },
  {
    question: "Does a medical office need a special phone system?",
    answer:
      "Not always. Most practices need calls to reach the right person quickly, which comes down to how the menu, ring groups and hours are set up. Your users, locations and call volume decide what fits.",
  },
  {
    question: "Which plan is right for a practice?",
    answer:
      "Most small offices start with Basic or Pro. Practices that need call queues usually choose Premium, and larger or multi-location practices can ask about Enterprise.",
    link: { href: "/pricing#compare", label: "Compare plans" },
  },
  {
    question: "What happens to calls after hours?",
    answer:
      "You decide. Calls can hear a message, go to voicemail or forward to another number, with different rules for nights, weekends and holidays.",
  },
  {
    question: "Can we keep our current phone numbers?",
    answer: "In most cases, yes. We’ll look into it for you before you switch.",
    link: { href: "/number-porting", label: "Learn about number porting" },
  },
  {
    question: "Can we still send and receive faxes?",
    answer:
      "Yes. Fax to email is available as an add-on, and it can also be set up for your fax machine.",
  },
  {
    question: "Can staff answer calls away from the office?",
    answer:
      "Yes. Every plan includes mobile apps for iPhone and Android and a web phone, and calls made from the mobile app show your business number.",
  },
  {
    question: "Do we need new phones?",
    answer: "Not always. We’ll check whether your current phones work with our system.",
    link: { href: "/products", label: "See Yealink phones" },
  },
];
