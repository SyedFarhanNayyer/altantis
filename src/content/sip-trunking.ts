import type { Device } from "@/components/sections/DeviceCards";
import type { Faq } from "./faq";
import { pickFaqs } from "./faq-pick";
import { productImageSizes } from "./product-images";
import { getProduct, productPath } from "./products";

// Copy for the SIP trunking page, supplied by Atlantis.

export const comparison = [
  {
    topic: "How calls connect",
    before: "Physical lines from the phone company",
    after: "Your business internet connection",
  },
  { topic: "Your phone system", before: "Stays on site", after: "Stays on site" },
  { topic: "Adding call capacity", before: "Often a new line order", after: "Adjusted on the service side" },
  { topic: "Your phone numbers", before: "Tied to the line", after: "Can move over in most cases" },
  { topic: "Multiple locations", before: "Separate lines per site", after: "Planned together on one service" },
  {
    topic: "If your internet goes down",
    before: "Lines usually keep working",
    after: "Calls can forward to another number, such as a cell phone",
  },
];

export const ataSteps = [
  { title: "Plug in the phone", body: "Your analog phone connects to the adapter with a standard phone cable." },
  { title: "Connect to your network", body: "The adapter connects to your router with an Ethernet cable." },
  {
    title: "Calls run over SIP",
    body: "The adapter converts each call to SIP and sends it over your internet connection.",
  },
];

const ata = (model: string, label: string, points: string[]): Device => {
  const key = `grandstream-${model.toLowerCase()}-v2`;
  const [width, height] = productImageSizes[key];
  return {
    label,
    name: `Grandstream ${model} V2`,
    points,
    href: "/contact-us",
    linkLabel: `Ask About the ${model}`,
    image: { src: `/images/products/${key}.webp`, alt: `Grandstream ${model} V2 analog telephone adapter`, width, height },
  };
};

export const adapters: Device[] = [
  ata("HT801", "One analog phone", ["1 analog phone port", "1 Ethernet port (10/100 Mbps)"]),
  ata("HT802", "Two analog phones", ["2 analog phone ports", "1 Ethernet port (10/100 Mbps)"]),
  ata("HT814", "A small group of phones", ["4 analog phone ports", "2 Gigabit Ethernet ports"]),
  ata("HT818", "Larger analog setups", ["8 analog phone ports", "2 Gigabit Ethernet ports"]),
];

export const benefits = [
  {
    title: "Keep your investment",
    body: "If your PBX still works for your team, there’s no need to replace it just because your lines are going away.",
  },
  {
    title: "Move off retiring lines",
    body: "Plan your switch from copper lines before your carrier sets the deadline for you.",
  },
  {
    title: "Keep the numbers customers know",
    body: "In most cases, your main line and direct numbers can move with you.",
  },
  { title: "No retraining", body: "Your team keeps the same phones, extensions and call handling they use today." },
  { title: "Room to grow", body: "Add call capacity and locations without ordering new phone lines." },
  {
    title: "A clear path to the cloud",
    body: "When you’re ready to retire your PBX, you can move to a hosted phone system with the same team.",
  },
];

const phone = (slug: string, label: string, name: string, points: string[], image = 0): Device => {
  const product = getProduct(slug)!;
  return {
    label,
    name,
    points,
    href: productPath(product),
    linkLabel: `Explore the ${name.replace(/^Yealink | with EXP50$/g, "")}`,
    image: product.images[image],
  };
};

export const phones: Device[] = [
  phone(
    "yealink-t54w",
    "Front desk and reception",
    "Yealink T54W with EXP50",
    ["4.3″ adjustable color display", "Up to 3 EXP50 expansion modules", "Up to 16 VoIP accounts"],
    1,
  ),
  phone("yealink-t54w", "Managers and professionals", "Yealink T54W", [
    "Acoustic Shield technology",
    "Built-in 2.4G/5G Wi-Fi",
    "Built-in Bluetooth 4.2",
  ]),
  phone("yealink-t53w", "Shared workspaces", "Yealink T53W", [
    "3.7″ adjustable graphical display",
    "Up to 12 VoIP accounts",
    "Dual-port Gigabit Ethernet",
  ]),
  phone("yealink-w73p", "Staff who move around", "Yealink W73P", [
    "Up to 10 handsets per base station",
    "Up to 20 simultaneous calls",
    "Up to 6 optional RT30 repeaters",
  ]),
];

export const sipFaqs: Faq[] = [
  {
    question: "What does SIP stand for?",
    answer:
      "SIP stands for Session Initiation Protocol. It’s the standard used to set up and manage voice calls over the internet.",
  },
  {
    question: "What’s the difference between SIP trunking and hosted PBX?",
    answer:
      "With SIP trunking, your phone system stays on site and only the connection moves to the internet. With a hosted PBX, the phone system itself runs in the cloud, so there’s no PBX equipment to maintain.",
    link: { href: "/hosted-voip-pbx", label: "Learn about hosted PBX" },
  },
  {
    question: "Will my current PBX work with SIP trunking?",
    answer:
      "Many IP phone systems can connect over SIP. Send us your PBX make and model and we’ll check before you switch.",
  },
  {
    question: "Can SIP trunking replace our copper phone lines?",
    answer:
      "Yes. SIP trunking is a common way to replace copper lines, since it carries the same calls over your internet connection instead of a physical line.",
  },
  {
    question: "What is an analog telephone adapter (ATA)?",
    answer:
      "An ATA is a small device that connects a standard analog phone to an internet phone service. It converts the phone’s analog signal into SIP so calls can travel over your internet connection.",
  },
  {
    question: "Can I keep using my analog phones?",
    answer:
      "In many cases, yes. An analog telephone adapter lets a standard analog phone work over SIP. Tell us what you have and we’ll check which adapter fits.",
  },
  {
    question: "How many calls can I handle at once?",
    answer:
      "That depends on how your service is set up and your internet connection. We’ll size it around the number of calls your team takes at the same time.",
  },
  {
    question: "Can I keep my current business phone numbers?",
    answer: "In most cases, yes. We’ll look into it for you before you switch.",
    link: { href: "/number-porting", label: "Learn about number porting" },
  },
  {
    question: "What happens if my internet goes down?",
    answer:
      "Your PBX can’t make or take outside calls until the connection returns. You can set calls to forward to another number, such as a cell phone, so customers can still reach someone.",
  },
  {
    question: "Does 911 work with SIP trunking?",
    answer:
      "Yes, but it needs a registered address and a working connection. Calls over the internet may not work during a power or internet outage, so keep a cell phone or another backup available for emergencies.",
  },
];

// The five shown on the page; the FAQ page lists them all.
export const sipPageFaqs = pickFaqs(sipFaqs, [
  "What’s the difference between SIP trunking and hosted PBX?",
  "Will my current PBX work with SIP trunking?",
  "Can SIP trunking replace our copper phone lines?",
  "Can I keep using my analog phones?",
  "Can I keep my current business phone numbers?",
]);
