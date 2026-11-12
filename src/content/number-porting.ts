import type { Faq } from "./faq";
import { pickFaqs } from "./faq-pick";

// Copy for the Number Porting page. Written for Atlantis: phones are
// configured and shipped ready to plug in before the numbers move.

// Which numbers can come with you, shown as the lines on a phone bill.
export const billLines: { title: string; body: string; status: string }[] = [
  {
    title: "Main business line",
    body: "The number on your website, signs, cards and listings.",
    status: "Moves with you",
  },
  {
    title: "Direct dial numbers",
    body: "Each employee’s number rings on their new desk phone and the mobile app.",
    status: "Moves with you",
  },
  {
    title: "Toll-free numbers",
    body: "800, 888, 877 and other toll-free numbers can usually move too.",
    status: "Moves with you",
  },
  {
    title: "Fax numbers",
    body: "The fax number on your forms, whether faxes arrive by email or on a fax machine.",
    status: "Moves with you",
  },
  {
    title: "Numbers at other locations",
    body: "Every office, store or site together, or one location at a time.",
    status: "Moves with you",
  },
  {
    title: "Lines you’re not ready to move",
    body: "Leave them with your current provider until you’re ready.",
    status: "Your choice",
  },
];

// What we need before submitting, as a checklist the visitor can tick off.
export const checklist: { title: string; body: string }[] = [
  { title: "Your account number", body: "Shown on your bill or in your online account." },
  { title: "Name and service address", body: "Exactly as your current provider has them." },
  { title: "A transfer PIN", body: "Only if your provider uses one. We’ll tell you how to get it." },
  { title: "The authorized contact", body: "The person named on the account." },
  { title: "Your list of numbers", body: "Including fax and any spare lines." },
];

// A real sequence, so the page numbers these.
export const portingSteps: { title: string; body: string }[] = [
  {
    title: "Send us a recent bill",
    body: "We list every number on your account with you and confirm which ones are moving.",
  },
  {
    title: "Sign the authorization",
    body: "You sign a letter of authorization that lets us request the transfer from your current provider. We fill it in from your bill.",
  },
  {
    title: "Phones arrive ready",
    body: "Your phones are configured, tested and shipped before the transfer date, so they’re plugged in and waiting.",
  },
  {
    title: "Your numbers move",
    body: "On the agreed date, your numbers start ringing on your new system. Then you can cancel your old service.",
  },
];

// What slows a transfer down, and how we head it off.
export const portingDelays = [
  {
    topic: "Account details don’t match",
    before: "The name or address on the request differs from your carrier account, and the transfer is rejected.",
    after: "We take your details straight from a recent bill and check them with you before we submit.",
  },
  {
    topic: "Missing account PIN",
    before: "Many carriers need a transfer PIN or passcode, and the request stalls without it.",
    after: "We tell you up front if your carrier needs one and how to get it.",
  },
  {
    topic: "Service cancelled too early",
    before: "Cancelling your old service before the transfer can put your numbers at risk.",
    after: "Your current service stays active until every number has moved.",
  },
  {
    topic: "Bundled phone and internet",
    before: "Numbers on a bundle with your internet service need extra care so the internet stays on.",
    after: "We flag bundled numbers early and plan the request around them.",
  },
  {
    topic: "Forgotten numbers",
    before: "A fax, alarm or spare line is missed and gets cancelled with the old account.",
    after: "We go through every number on your bill with you before anything is submitted.",
  },
];

export const portingFaqs: Faq[] = [
  {
    question: "What is number porting?",
    answer:
      "Number porting is moving a phone number from one provider to another. Your number stays the same; only the company that carries your calls changes.",
  },
  {
    question: "How long does number porting take?",
    answer:
      "It depends on your current provider and the type of number. Once your request is submitted, we’ll give you an expected date and keep you updated until every number has moved.",
  },
  {
    question: "Will our phones stop working during the transfer?",
    answer:
      "We work to keep the switch as smooth as possible. Your new phones are configured and plugged in before the transfer date, and your current service stays active until your numbers have moved.",
  },
  {
    question: "Should we cancel our current phone service first?",
    answer:
      "No. Keep your current service active until the transfer is complete. Cancelling early can put your numbers at risk. We’ll tell you when it’s safe to cancel.",
  },
  {
    question: "Can every phone number be ported?",
    answer:
      "In most cases, yes. A few numbers can’t move because of where they are or who provides them. We check each number before submitting your request, so there are no surprises.",
  },
  {
    question: "Is there a fee to transfer our numbers?",
    answer:
      "Number transfer is included on every Atlantis plan. Check your current contract for any early termination fees from your old provider.",
    link: { href: "/pricing", label: "See plans and pricing" },
  },
  {
    question: "What information do we need to provide?",
    answer: "Most of it is on a recent phone bill:",
    more: [
      {
        type: "ul",
        items: [
          "Your account number",
          "The account holder’s name and service address, exactly as your provider has them",
          "A transfer PIN or passcode, if your provider uses one",
          "The name of the person authorized on the account",
          "The list of numbers you want to move",
        ],
      },
    ],
  },
  {
    question: "Can we move only some of our numbers?",
    answer:
      "Yes. You can move some numbers and leave the rest with your current provider. We’ll confirm which numbers stay so nothing is cancelled by mistake.",
  },
  {
    question: "Can we port toll-free numbers?",
    answer: "Toll-free numbers can usually move too. We’ll confirm yours when we review your bill.",
  },
  {
    question: "Can we move numbers from several locations?",
    answer:
      "Yes. Move every location at once, or schedule each site separately. All your numbers end up on one account.",
  },
];

// The five shown on the page; the FAQ page lists them all.
export const portingPageFaqs = pickFaqs(portingFaqs, [
  "How long does number porting take?",
  "Will our phones stop working during the transfer?",
  "Should we cancel our current phone service first?",
  "Can every phone number be ported?",
  "Is there a fee to transfer our numbers?",
]);
