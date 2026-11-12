import { productImageSizes } from "./product-images";

// Every phone Atlantis offers, from the client's product list. Features and
// specifications come from each manufacturer's product page (`source`), so
// confirm them against the exact models Atlantis supplies. There are no prices
// or a cart: each page sends visitors to the contact page.

type ProductImage = { src: string; alt: string; width: number; height: number };

export type Product = {
  slug: string;
  brand: "Grandstream" | "Yealink";
  model: string;
  /** Product family, shown on cards and used to pick similar phones. */
  series: string;
  /** Used in the page title, such as "IP Desk Phone". */
  kind: string;
  /** One line for the product card. */
  tagline: string;
  /** Meta description: about 150 characters. */
  description: string;
  overview: string;
  features: string[];
  specs: { label: string; value: string }[];
  /** "Mobile and web access" from the client's list. */
  mobileWebAccess: boolean;
  /** Product photos; the first is the main one. A phone without photos shows a placeholder. */
  images: ProductImage[];
  source: string;
};

export const productPath = (p: Product) => `/products/${p.slug}`;
export const productName = (p: Product) => `${p.brand} ${p.model}`;

const gs = "https://www.grandstream.com/products/ip-voice-telephony-gxp-series-ip-phones";
const yl = "https://www.yealink.com/en/product-detail";

// Shared by the GXP1610 and GXP1615, which differ only in power over Ethernet.
const gxp1610 = (poe: boolean) => ({
  series: "GXP Basic",
  kind: "IP Desk Phone",
  tagline: "A simple 2-line phone for small business users.",
  overview:
    "A simple IP phone for small business users, with 2 lines, 3-way conferencing and a 2.95-inch LCD screen that’s easy to read. Three programmable soft keys and HD audio keep everyday calling straightforward.",
  features: [
    "2 SIP accounts and up to 2 call appearances",
    "3-way audio conferencing",
    "132 x 48 (2.95″) LCD screen",
    "3 XML programmable soft keys",
    "Full-duplex speakerphone with HD audio",
    "TLS and SRTP encryption to protect calls and accounts",
    "EHS support for Plantronics headsets",
    ...(poe ? ["Built-in PoE (802.3af) powers the phone over its network cable"] : []),
  ],
  specs: [
    { label: "SIP accounts", value: "2" },
    { label: "Lines", value: "2" },
    { label: "Display", value: "132 x 48 (2.95″) LCD" },
    { label: "Conferencing", value: "3-way" },
    { label: "Ethernet", value: "10/100 Mbps" },
    { label: "Power over Ethernet", value: poe ? "Built in (802.3af)" : "Not included" },
    { label: "Headset", value: "EHS support for Plantronics headsets" },
    { label: "Security", value: "TLS and SRTP encryption" },
  ],
  mobileWebAccess: true,
  source: `${gs}/gxp-series-basic-ip-phones/product/gxp1610/gxp1615`,
});

const gxp1620 = (poe: boolean) => ({
  series: "GXP Basic",
  kind: "IP Desk Phone",
  tagline: "A dependable 2-line phone for light to medium call volume.",
  overview:
    "A standard desk phone that keeps people in touch and productive. It focuses on the essential call features, so it’s easy to use for anyone who handles a light to medium number of calls.",
  features: [
    "2 SIP accounts and 2 line keys",
    "3-way conferencing",
    "3 XML programmable soft keys",
    "HD audio on the speakerphone and handset",
    `Dual-switched 10/100 Mbps ports${poe ? ", with integrated PoE" : ""}`,
    "EHS support for Plantronics headsets",
    "Up to 1,000 contacts and 200 call history records",
  ],
  specs: [
    { label: "SIP accounts", value: "2" },
    { label: "Line keys", value: "2" },
    { label: "Conferencing", value: "3-way" },
    { label: "Ethernet", value: "Dual-switched 10/100 Mbps" },
    { label: "Power over Ethernet", value: poe ? "Integrated" : "Not included" },
    { label: "Phonebook", value: "Up to 1,000 contacts" },
    { label: "Call history", value: "Up to 200 records" },
    { label: "Headset", value: "EHS support for Plantronics headsets" },
  ],
  mobileWebAccess: true,
  source: `${gs}/gxp-series-basic-ip-phones/product/gxp1620/gxp1625`,
});

const gxp1780 = (gigabit: boolean) => ({
  series: "GXP Mid-Range",
  kind: "IP Desk Phone",
  tagline: "An 8-line phone with 32 speed-dial keys for growing teams.",
  overview:
    "A mid-range desk phone for growing businesses, with 8 lines, 4 SIP accounts and 32 programmable speed-dial keys on a backlit screen. A Kensington security slot helps protect it against theft.",
  features: [
    "8 lines and 8 dual-color line keys, with 4 SIP accounts",
    "32 programmable BLF and speed-dial keys",
    "200 x 80 backlit LCD and 4 XML programmable soft keys",
    "HD wideband audio and a full-duplex speakerphone with echo cancellation",
    "5-way audio conferencing",
    `Dual-switched ${gigabit ? "Gigabit" : "10/100 Mbps"} ports with integrated PoE`,
    "RJ9 headset jack and EHS support for Plantronics headsets",
    "Up to 2,000 contacts and 500 call history records",
    "TLS and SRTP encryption, and a Kensington security slot",
  ],
  specs: [
    { label: "SIP accounts", value: "4" },
    { label: "Lines", value: "8" },
    { label: "BLF and speed-dial keys", value: "32" },
    { label: "Display", value: "200 x 80 backlit LCD" },
    { label: "Conferencing", value: "5-way" },
    { label: "Ethernet", value: gigabit ? "Dual-switched Gigabit" : "Dual-switched 10/100 Mbps" },
    { label: "Power over Ethernet", value: "Integrated" },
    { label: "USB", value: "Built in, for importing and exporting data" },
    { label: "Phonebook", value: "Up to 2,000 contacts" },
    { label: "Security", value: "TLS and SRTP encryption, Kensington security slot" },
  ],
  mobileWebAccess: true,
  source: `${gs}/gxp-series-mid-range-ip-phones/product/gxp1780`,
});

// Yealink T5 series features shared by the Wi-Fi models.
const t5Features = (display: string, accounts: string) => [
  display,
  `Up to ${accounts} VoIP accounts`,
  "Acoustic Shield technology uses multiple microphones to keep background noise out of your calls",
  "Add up to 4 cordless handsets with the Yealink DD10K DECT dongle, and switch calls between them",
  "Built-in dual-band 2.4G/5G Wi-Fi and Bluetooth 4.2",
  "Dual-port Gigabit Ethernet with PoE",
  "Up to 3 EXP50 expansion modules for more line keys",
  "TLS 1.3 encryption",
];

const t5Specs = (display: string, accounts: string, wifi: boolean) => [
  { label: "Display", value: display },
  { label: "VoIP accounts", value: `Up to ${accounts}` },
  { label: "Ethernet", value: "Dual-port Gigabit Ethernet" },
  { label: "Power over Ethernet", value: "Supported" },
  {
    label: "Wi-Fi",
    value: wifi ? "Built-in dual-band 2.4G/5G" : "With the optional Yealink WF50 USB dongle",
  },
  { label: "Bluetooth", value: wifi ? "Built-in Bluetooth 4.2" : "With the optional Yealink BT50 USB dongle" },
  { label: "Expansion modules", value: "Up to 3 EXP50 modules with color screens" },
  { label: "Cordless handsets", value: "Up to 4, with the Yealink DD10K DECT dongle" },
  { label: "Mounting", value: "Desk or wall mountable" },
  { label: "Security", value: "TLS 1.3" },
];

const dectNote = "Cordless DECT handsets work with your phone system on site, so mobile and web access doesn’t apply.";

const list: Omit<Product, "images">[] = [
  {
    slug: "grandstream-grp2612",
    brand: "Grandstream",
    model: "GRP2612",
    series: "GRP Professional",
    kind: "IP Desk Phone",
    tagline: "A 4-line professional phone that’s simple to set up and manage.",
    description:
      "The Grandstream GRP2612 is a 4-line professional desk phone with HD audio, 16 BLF keys and a swappable faceplate. Configured by Atlantis and shipped ready to use.",
    overview:
      "A 4-line professional IP phone designed for easy deployment and management. It supports 4 SIP accounts and HD audio, and its swappable faceplate makes it simple to add your logo.",
    features: [
      "4 SIP accounts and 4 multi-purpose line keys",
      "Up to 16 digital BLF keys",
      "HD audio with all major codecs, including wideband G.722 and Opus",
      "Swappable faceplate for easy logo customization",
      "Secure boot, dual firmware images and encrypted data storage",
      "Dual switched 10/100 Mbps Ethernet ports, with PoE on the GRP2612P, GRP2612W and GRP2612G",
      "Gigabit Ethernet on the GRP2612G and built-in dual-band Wi-Fi on the GRP2612W",
      "Managed through Grandstream’s Device Management System (GDMS)",
    ],
    specs: [
      { label: "SIP accounts", value: "4" },
      { label: "Line keys", value: "4 multi-purpose" },
      { label: "BLF keys", value: "Up to 16 digital" },
      { label: "Audio", value: "HD, including G.722 and Opus" },
      { label: "Ethernet", value: "Dual switched 10/100 Mbps (Gigabit on the GRP2612G)" },
      { label: "Power over Ethernet", value: "On the GRP2612P, GRP2612W and GRP2612G" },
      { label: "Wi-Fi", value: "Built-in dual-band on the GRP2612W" },
      { label: "Security", value: "Secure boot, dual firmware images, encrypted storage" },
    ],
    mobileWebAccess: true,
    source:
      "https://www.grandstream.com/products/ip-voice-telephony/carrier-grade-ip-phones/grp-series-professional-ip-phones/product/grp2612-p-w-g",
  },
  {
    slug: "grandstream-grp2614",
    brand: "Grandstream",
    model: "GRP2614",
    series: "GRP Professional",
    kind: "IP Desk Phone",
    tagline: "A professional phone with a color screen, Wi-Fi and Bluetooth.",
    description:
      "The Grandstream GRP2614 has up to 12 SIP accounts, dual screens, Wi-Fi, Bluetooth and Gigabit PoE ports. Configured by Atlantis and shipped ready to use.",
    overview:
      "A professional IP phone with 40 multi-purpose keys, a color LCD, built-in Wi-Fi and Bluetooth, and dual Gigabit ports. Swappable faceplates make it easy to add your logo.",
    features: [
      "4 line keys with up to 12 SIP accounts",
      "40 multi-purpose keys, including 8 extension keys with dual-color LEDs",
      "Dual LCD screens with digital BLF keys",
      "HD audio on the handset and speakerphone, with wideband support",
      "Built-in dual-band 802.11 a/b/g/n/ac Wi-Fi",
      "Built-in Bluetooth",
      "Dual switched Gigabit Ethernet ports with integrated PoE",
      "Secure boot, dual firmware images and encrypted data storage",
    ],
    specs: [
      { label: "SIP accounts", value: "Up to 12" },
      { label: "Line keys", value: "4" },
      { label: "Multi-purpose keys", value: "40" },
      { label: "Display", value: "Dual LCD screens, color" },
      { label: "Ethernet", value: "Dual switched Gigabit" },
      { label: "Power over Ethernet", value: "Integrated" },
      { label: "Wi-Fi", value: "Built-in dual-band 802.11 a/b/g/n/ac" },
      { label: "Bluetooth", value: "Built in" },
    ],
    mobileWebAccess: true,
    source:
      "https://www.grandstream.com/products/ip-voice-telephony/carrier-grade-ip-phones/grp-series-professional-ip-phones/product/grp2614",
  },
  {
    slug: "grandstream-gxp1610",
    brand: "Grandstream",
    model: "GXP-1610",
    description:
      "The Grandstream GXP-1610 is a simple 2-line IP phone with HD audio and 3-way conferencing for small businesses. Configured by Atlantis and shipped ready to use.",
    ...gxp1610(false),
  },
  {
    slug: "grandstream-gxp1615",
    brand: "Grandstream",
    model: "GXP-1615",
    description:
      "The Grandstream GXP-1615 is a simple 2-line IP phone with built-in PoE, HD audio and 3-way conferencing. Configured by Atlantis and shipped ready to use.",
    ...gxp1610(true),
  },
  {
    slug: "grandstream-gxp1620",
    brand: "Grandstream",
    model: "GXP-1620",
    description:
      "The Grandstream GXP-1620 is a 2-line IP phone with HD audio and a 1,000-contact phonebook, for light to medium call volume. Shipped ready to use by Atlantis.",
    ...gxp1620(false),
  },
  {
    slug: "grandstream-gxp1625",
    brand: "Grandstream",
    model: "GXP-1625",
    description:
      "The Grandstream GXP-1625 is a 2-line IP phone with integrated PoE, HD audio and a 1,000-contact phonebook. Configured by Atlantis and shipped ready to use.",
    ...gxp1620(true),
  },
  {
    slug: "grandstream-gxp1628",
    brand: "Grandstream",
    model: "GXP-1628",
    series: "GXP Basic",
    kind: "IP Desk Phone",
    tagline: "A Gigabit phone with 8 speed-dial keys for quick network access.",
    description:
      "The Grandstream GXP-1628 is a 2-line Gigabit IP phone with 8 BLF keys, PoE and HD audio. Configured by Atlantis and shipped ready to plug in and use.",
    overview:
      "A Gigabit desk phone for people who need essential call features with fast network access. Its backlit screen and 8 speed-dial keys make call control clear and easy.",
    features: [
      "2 SIP accounts and 2 line keys",
      "8 dual-colored BLF and speed-dial keys",
      "132 x 48 backlit LCD and 3 XML programmable soft keys",
      "HD audio on the speakerphone and handset",
      "Dual-switched Gigabit ports with integrated PoE",
      "3-way conferencing",
      "EHS support for Plantronics headsets",
      "Up to 1,000 contacts and 200 call history records",
    ],
    specs: [
      { label: "SIP accounts", value: "2" },
      { label: "Line keys", value: "2" },
      { label: "BLF and speed-dial keys", value: "8, dual-colored" },
      { label: "Display", value: "132 x 48 backlit LCD" },
      { label: "Conferencing", value: "3-way" },
      { label: "Ethernet", value: "Dual-switched Gigabit" },
      { label: "Power over Ethernet", value: "Integrated" },
      { label: "Phonebook", value: "Up to 1,000 contacts" },
    ],
    mobileWebAccess: true,
    source: `${gs}/gxp-series-basic-ip-phones/product/gxp1628`,
  },
  {
    slug: "grandstream-gxp1630",
    brand: "Grandstream",
    model: "GXP-1630",
    series: "GXP Basic",
    kind: "IP Desk Phone",
    tagline: "A 3-line Gigabit phone with 4-way conferencing.",
    description:
      "The Grandstream GXP-1630 is a 3-line Gigabit IP phone with 8 BLF keys, 4-way conferencing and PoE. Configured by Atlantis and shipped ready to use.",
    overview:
      "Grandstream’s most powerful entry-level phone, for people who handle low to medium call volume. It has 3 lines, 8 speed-dial keys, dual Gigabit ports and HD audio on both the speakerphone and handset.",
    features: [
      "3 SIP accounts and 3 line keys",
      "4-way conferencing",
      "8 dual-colored BLF and speed-dial keys",
      "3 XML programmable soft keys",
      "HD audio on the speakerphone and handset",
      "Dual-switched Gigabit ports with integrated PoE",
      "EHS support for Plantronics headsets",
      "Up to 1,000 contacts and 200 call history records",
    ],
    specs: [
      { label: "SIP accounts", value: "3" },
      { label: "Line keys", value: "3" },
      { label: "BLF and speed-dial keys", value: "8, dual-colored" },
      { label: "Conferencing", value: "4-way" },
      { label: "Ethernet", value: "Dual-switched Gigabit" },
      { label: "Power over Ethernet", value: "Integrated" },
      { label: "Phonebook", value: "Up to 1,000 contacts" },
      { label: "Headset", value: "EHS support for Plantronics headsets" },
    ],
    mobileWebAccess: true,
    source: `${gs}/gxp-series-basic-ip-phones/product/gxp1630`,
  },
  {
    slug: "grandstream-gxp1760w",
    brand: "Grandstream",
    model: "GXP-1760W",
    series: "GXP Mid-Range",
    kind: "Wi-Fi IP Desk Phone",
    tagline: "A 6-line Wi-Fi phone for moderate call volume.",
    description:
      "The Grandstream GXP-1760W is a 6-line IP phone with dual-band Wi-Fi, 24 BLF keys and 5-way conferencing. Configured by Atlantis and shipped ready to use.",
    overview:
      "A Wi-Fi desk phone for growing businesses that handle moderate call volume. Built-in dual-band Wi-Fi means it can connect without a network cable, and 24 programmable keys put colleagues one press away.",
    features: [
      "Built-in dual-band Wi-Fi",
      "6 lines and 6 dual-color line keys, with 3 SIP accounts",
      "24 programmable BLF and speed-dial keys",
      "200 x 80 (3.3″) backlit LCD and 4 XML programmable soft keys",
      "5-way audio conferencing",
      "HD wideband audio and a full-duplex speakerphone with echo cancellation",
      "Built-in PoE and a USB port for importing and exporting data",
      "Up to 2,000 contacts and 500 call history records",
      "TLS and SRTP encryption, and a Kensington security slot",
    ],
    specs: [
      { label: "SIP accounts", value: "3" },
      { label: "Lines", value: "6" },
      { label: "BLF and speed-dial keys", value: "24" },
      { label: "Display", value: "200 x 80 (3.3″) backlit LCD" },
      { label: "Conferencing", value: "5-way" },
      { label: "Wi-Fi", value: "Built-in dual-band" },
      { label: "Ethernet", value: "Dual 10/100 Mbps" },
      { label: "Power over Ethernet", value: "Built in" },
      { label: "Phonebook", value: "Up to 2,000 contacts" },
      { label: "Security", value: "TLS and SRTP encryption, Kensington security slot" },
    ],
    mobileWebAccess: true,
    source: `${gs}/gxp-series-mid-range-ip-phones/product/gxp1760w`,
  },
  {
    slug: "grandstream-gxp1780",
    brand: "Grandstream",
    model: "GXP-1780",
    description:
      "The Grandstream GXP-1780 is an 8-line IP phone with 32 BLF keys, 5-way conferencing and PoE. Configured by Atlantis and shipped ready to plug in and use.",
    ...gxp1780(false),
  },
  {
    slug: "grandstream-gxp1782",
    brand: "Grandstream",
    model: "GXP-1782",
    description:
      "The Grandstream GXP-1782 is an 8-line IP phone with dual Gigabit ports, 32 BLF keys and PoE. Configured by Atlantis and shipped ready to plug in and use.",
    ...gxp1780(true),
  },
  {
    slug: "grandstream-gxp2130",
    brand: "Grandstream",
    model: "GXP-2130",
    series: "GXP High-End",
    kind: "IP Desk Phone",
    tagline: "A 3-line phone with a color screen and Bluetooth.",
    description:
      "The Grandstream GXP-2130 is a 3-line IP phone with a 2.8-inch color screen, Bluetooth and Gigabit PoE ports. Configured by Atlantis and shipped ready to use.",
    overview:
      "A flexible, powerful desk phone for medium to high call volume. A 2.8-inch color screen, dual-color speed-dial keys and integrated Bluetooth make busy call days easier to manage.",
    features: [
      "3 lines, 3 SIP accounts and 4-way voice conferencing",
      "2.8″ (320 x 240) color LCD",
      "8 dual-colored BLF and speed-dial keys",
      "4 programmable context-sensitive soft keys",
      "HD audio on the speakerphone and handset",
      "Integrated Bluetooth",
      "Dual Gigabit ports with integrated PoE",
    ],
    specs: [
      { label: "SIP accounts", value: "3" },
      { label: "Lines", value: "3" },
      { label: "Display", value: "2.8″ (320 x 240) color LCD" },
      { label: "BLF and speed-dial keys", value: "8, dual-colored" },
      { label: "Conferencing", value: "4-way" },
      { label: "Ethernet", value: "Dual Gigabit" },
      { label: "Power over Ethernet", value: "Integrated" },
      { label: "Bluetooth", value: "Integrated" },
    ],
    mobileWebAccess: true,
    source: `${gs}/gxp-series-high-end-ip-phones/product/gxp2130-v2`,
  },
  {
    slug: "grandstream-gxp2135",
    brand: "Grandstream",
    model: "GXP-2135",
    series: "GXP High-End",
    kind: "IP Desk Phone",
    tagline: "An 8-line phone with 32 speed-dial keys for busy users.",
    description:
      "The Grandstream GXP-2135 is an 8-line IP phone with a 2.8-inch color screen, 32 BLF keys, Bluetooth and Gigabit PoE. Shipped ready to use by Atlantis.",
    overview:
      "A sleek desk phone built for busy users who manage medium to heavy call volume. Eight lines, a 2.8-inch color screen and 32 speed-dial keys make it quick to use.",
    features: [
      "8 lines and 4 SIP accounts",
      "32 programmable BLF and speed-dial keys",
      "2.8″ color LCD and 4 XML programmable soft keys",
      "Built-in Bluetooth for headsets and syncing contacts, calendars and calls with a mobile phone",
      "HD audio on the handset and a full-duplex speakerphone",
      "4-way audio conferencing",
      "Dual switched, auto-sensing Gigabit ports with built-in PoE",
      "EHS support for Plantronics headsets",
    ],
    specs: [
      { label: "SIP accounts", value: "4" },
      { label: "Lines", value: "8" },
      { label: "BLF and speed-dial keys", value: "32" },
      { label: "Display", value: "2.8″ color LCD" },
      { label: "Conferencing", value: "4-way" },
      { label: "Ethernet", value: "Dual switched Gigabit" },
      { label: "Power over Ethernet", value: "Built in" },
      { label: "Bluetooth", value: "Built in" },
    ],
    mobileWebAccess: true,
    source: `${gs}/gxp-series-high-end-ip-phones/product/gxp2135`,
  },
  {
    slug: "grandstream-gxp2140",
    brand: "Grandstream",
    model: "GXP-2140",
    series: "GXP High-End",
    kind: "IP Desk Phone",
    tagline: "A 4-line phone with a 4.3-inch color screen.",
    description:
      "The Grandstream GXP-2140 is a 4-line IP phone with a 4.3-inch color screen, Bluetooth, USB and Gigabit PoE. Configured by Atlantis and shipped ready to use.",
    overview:
      "A desk phone that balances call control, a large color display and a sleek design, for medium to high call volume. Add the GXP2200EXT module when you need more speed-dial keys.",
    features: [
      "4 lines, 4 SIP accounts and 5-way voice conferencing",
      "4.3″ (480 x 272) color LCD",
      "5 programmable context-sensitive soft keys",
      "HD audio on the speakerphone and handset",
      "Integrated Bluetooth for headsets and mobile phones",
      "USB port and EHS support for Plantronics headsets",
      "Dual Gigabit ports with integrated PoE",
      "Works with the GXP2200EXT extension module",
    ],
    specs: [
      { label: "SIP accounts", value: "4" },
      { label: "Lines", value: "4" },
      { label: "Display", value: "4.3″ (480 x 272) color LCD" },
      { label: "Conferencing", value: "5-way" },
      { label: "Ethernet", value: "Dual Gigabit" },
      { label: "Power over Ethernet", value: "Integrated" },
      { label: "Bluetooth", value: "Integrated" },
      { label: "Expansion module", value: "GXP2200EXT" },
    ],
    mobileWebAccess: true,
    source: `${gs}/gxp-series-high-end-ip-phones/product/gxp2140`,
  },
  {
    slug: "grandstream-gxp2160",
    brand: "Grandstream",
    model: "GXP-2160",
    series: "GXP High-End",
    kind: "IP Desk Phone",
    tagline: "A 6-line phone with 24 BLF keys for reception desks.",
    description:
      "The Grandstream GXP-2160 is a 6-line IP phone with a 4.3-inch color screen and 24 BLF keys, ideal for receptionists. Configured and shipped by Atlantis.",
    overview:
      "Built for receptionists, office administrators and anyone who moves a lot of calls. Its 24 speed-dial keys show who’s available at a glance, so you can transfer each call to the right person quickly.",
    features: [
      "6 lines, 6 SIP accounts and 5-way voice conferencing",
      "24 dual-colored BLF and speed-dial keys",
      "4.3″ (480 x 272) color LCD",
      "5 programmable context-sensitive soft keys",
      "HD audio on the speakerphone and handset",
      "Integrated Bluetooth",
      "Dual Gigabit ports with integrated PoE",
    ],
    specs: [
      { label: "SIP accounts", value: "6" },
      { label: "Lines", value: "6" },
      { label: "BLF and speed-dial keys", value: "24, dual-colored" },
      { label: "Display", value: "4.3″ (480 x 272) color LCD" },
      { label: "Conferencing", value: "5-way" },
      { label: "Ethernet", value: "Dual Gigabit" },
      { label: "Power over Ethernet", value: "Integrated" },
      { label: "Bluetooth", value: "Integrated" },
    ],
    mobileWebAccess: true,
    source: `${gs}/gxp-series-high-end-ip-phones/product/gxp2160`,
  },
  {
    slug: "grandstream-gxp2170",
    brand: "Grandstream",
    model: "GXP-2170",
    series: "GXP High-End",
    kind: "IP Desk Phone",
    tagline: "A 12-line phone for high call volume.",
    description:
      "The Grandstream GXP-2170 is a 12-line IP phone with 48 on-screen BLF keys, a 4.3-inch color screen and Gigabit PoE. Configured and shipped by Atlantis.",
    overview:
      "Grandstream’s most powerful high-end phone, for receptionists, administrators, sales staff and other call-intensive roles. Twelve line keys and 48 on-screen speed-dial keys keep heavy call loads under control.",
    features: [
      "12 lines, 6 SIP accounts and 5-way voice conferencing",
      "48 on-screen BLF and speed-dial keys",
      "4.3″ (480 x 272) color LCD and 5 soft keys",
      "Up to 4 GXP2200EXT modules, for speed-dial access to up to 160 contacts",
      "Integrated Bluetooth and a USB port",
      "HD audio",
      "Dual Gigabit ports with integrated PoE",
    ],
    specs: [
      { label: "SIP accounts", value: "6" },
      { label: "Lines", value: "12" },
      { label: "BLF and speed-dial keys", value: "48 on screen" },
      { label: "Display", value: "4.3″ (480 x 272) color LCD" },
      { label: "Conferencing", value: "5-way" },
      { label: "Ethernet", value: "Dual Gigabit" },
      { label: "Power over Ethernet", value: "Integrated" },
      { label: "Expansion modules", value: "Up to 4 GXP2200EXT" },
    ],
    mobileWebAccess: true,
    source: `${gs}/gxp-series-high-end-ip-phones/product/gxp2170`,
  },
  {
    slug: "yealink-t53",
    brand: "Yealink",
    model: "SIP-T53",
    series: "T5 Business Phones",
    kind: "IP Desk Phone",
    tagline: "An entry-level phone for common workspaces.",
    description:
      "The Yealink SIP-T53 desk phone has a 3.7-inch adjustable display, Acoustic Shield technology and Gigabit Ethernet. Configured by Atlantis and shipped ready to use.",
    overview:
      "An easy-to-use business phone, well suited to common workspaces. Its 3.7-inch display tilts to suit the viewing angle and lighting at your desk, and Acoustic Shield technology keeps your voice clear.",
    features: [
      "3.7″ adjustable graphical display",
      "Up to 12 VoIP accounts",
      "Acoustic Shield technology uses multiple microphones to keep background noise out of your calls",
      "Add up to 4 cordless handsets with the Yealink DD10K DECT dongle, and switch calls between them",
      "Wi-Fi and Bluetooth with optional Yealink USB dongles",
      "Dual-port Gigabit Ethernet with PoE",
      "Up to 3 EXP50 expansion modules for more line keys",
      "TLS 1.3 encryption",
    ],
    specs: t5Specs("3.7″ 360 x 160-pixel graphical display, adjustable", "12", false),
    mobileWebAccess: true,
    source: `${yl}/ip-phone-t53`,
  },
  {
    slug: "yealink-t53w",
    brand: "Yealink",
    model: "SIP-T53W",
    series: "T5 Business Phones",
    kind: "IP Desk Phone",
    tagline: "An entry-level phone with Wi-Fi and Bluetooth built in.",
    description:
      "The Yealink SIP-T53W desk phone has a 3.7-inch adjustable display, built-in Wi-Fi and Bluetooth, and dual Gigabit Ethernet. Shipped ready to use by Atlantis.",
    overview:
      "An entry-level phone, ideal for common workspaces, with an adjustable graphical display and Wi-Fi and Bluetooth built in, so it can sit anywhere without extra cables.",
    features: t5Features("3.7″ adjustable graphical display", "12"),
    specs: t5Specs("3.7″ 360 x 160-pixel graphical display, adjustable", "12", true),
    mobileWebAccess: true,
    source: `${yl}/ip-phone-t53w`,
  },
  {
    slug: "yealink-t54w",
    brand: "Yealink",
    model: "SIP-T54W",
    series: "T5 Business Phones",
    kind: "IP Desk Phone",
    tagline: "A mid-level phone with a 4.3-inch color screen.",
    description:
      "The Yealink SIP-T54W desk phone has a 4.3-inch adjustable color display, built-in Wi-Fi and Bluetooth, and dual Gigabit Ethernet. Shipped ready by Atlantis.",
    overview:
      "A mid-level phone, ideal for professionals and managers with a moderate call load, with a fully adjustable color display and Wi-Fi and Bluetooth built in.",
    features: t5Features("4.3″ adjustable color display", "16"),
    specs: t5Specs("4.3″ 480 x 272-pixel color display, adjustable", "16", true),
    mobileWebAccess: true,
    source: `${yl}/ip-phone-t54w`,
  },
  {
    slug: "yealink-t57w",
    brand: "Yealink",
    model: "SIP-T57W",
    series: "T5 Business Phones",
    kind: "IP Desk Phone",
    tagline: "A premium phone with a 7-inch touch screen.",
    description:
      "The Yealink SIP-T57W desk phone has a 7-inch adjustable touch screen, built-in Wi-Fi and Bluetooth, and dual Gigabit Ethernet. Shipped ready by Atlantis.",
    overview:
      "A premium phone for executives and busy managers with a heavy call load. Its 7-inch multi-point touch screen tilts to a comfortable angle and makes every feature one touch away.",
    features: t5Features("7″ adjustable multi-point touch screen", "16"),
    specs: t5Specs("7″ 800 x 480-pixel multi-point touch screen, adjustable", "16", true),
    mobileWebAccess: true,
    source: `${yl}/ip-phone-t57w`,
  },
  {
    slug: "yealink-w70b",
    brand: "Yealink",
    model: "W70B",
    series: "DECT Cordless",
    kind: "DECT Base Station",
    tagline: "A cordless base station for up to 10 handsets.",
    description:
      "The Yealink W70B DECT base station supports up to 10 cordless handsets or headsets, 10 SIP accounts and 20 simultaneous calls. Configured by Atlantis.",
    overview:
      "A DECT base station for small and medium-sized businesses. Pair up to 10 Yealink cordless handsets or DECT headsets, so staff can take calls anywhere in the building without extra wiring. " +
      dectNote,
    features: [
      "Up to 20 simultaneous calls",
      "Up to 10 DECT cordless handsets or DECT headsets",
      "Up to 10 SIP accounts",
      "Noise reduction for clear calls in busy spaces",
      "Push-to-talk support",
      "Updates install in the background without interrupting calls",
      "Works with the W73H, W78H, W53H, W56H, W57R and W59R handsets, and CP930W and CP935W conference phones",
      "TLS and SRTP encryption",
    ],
    specs: [
      { label: "Simultaneous calls", value: "Up to 20" },
      { label: "Handsets or headsets", value: "Up to 10" },
      { label: "SIP accounts", value: "Up to 10" },
      { label: "Compatible handsets", value: "W73H, W78H, W53H, W56H, W57R, W59R" },
      { label: "Conference phones", value: "CP930W, CP935W" },
      { label: "Security", value: "TLS and SRTP encryption" },
    ],
    mobileWebAccess: false,
    source: `${yl}/dect-phone-w70b`,
  },
  {
    slug: "yealink-w73p",
    brand: "Yealink",
    model: "W73P",
    series: "DECT Cordless",
    kind: "Cordless Phone System",
    tagline: "A cordless phone system for staff who move around.",
    description:
      "The Yealink W73P cordless phone system supports up to 10 handsets and 20 simultaneous calls, with HD audio for mobile workers. Configured by Atlantis.",
    overview:
      "A cordless phone system for mobile workers: a W73H handset with the W70B base station, which supports up to 10 handsets, 10 SIP accounts and 20 simultaneous calls. " +
      dectNote,
    features: [
      "Up to 10 W73H handsets per base station",
      "Up to 10 SIP accounts and 20 simultaneous calls",
      "1.8″ color handset display",
      "Up to 35 hours of talk time, in ideal conditions",
      "HD audio and noise reduction for clear calls in complex environments",
      "Up to 6 optional RT30 repeaters extend coverage",
      "Works with Yealink DECT handsets, conference phones and Microsoft SIP Gateway",
    ],
    specs: [
      { label: "Includes", value: "W73H handset, W70B base station and charger cradle" },
      { label: "Handset display", value: "1.8″ 128 x 160 TFT color screen" },
      { label: "Handsets", value: "Up to 10 per base station" },
      { label: "SIP accounts", value: "Up to 10" },
      { label: "Simultaneous calls", value: "Up to 20, with up to 2 per handset" },
      { label: "Talk time", value: "Up to 35 hours, in ideal conditions" },
      { label: "Standby time", value: "Up to 400 hours, in ideal conditions" },
      { label: "Range", value: "50 m indoors and 300 m outdoors, in ideal conditions" },
      { label: "Repeaters", value: "Up to 6 optional RT30 repeaters per base station" },
      { label: "Ethernet", value: "One 10/100M port" },
      { label: "Power over Ethernet", value: "IEEE 802.3af, Class 1" },
      { label: "Headset", value: "3.5 mm jack" },
      { label: "Security", value: "TLS and SRTP encryption" },
    ],
    mobileWebAccess: false,
    source: `${yl}/dect-phone-w73p`,
  },
  {
    slug: "yealink-w80dm",
    brand: "Yealink",
    model: "W80DM",
    series: "DECT Multi-Cell",
    kind: "DECT Multi-Cell Manager",
    tagline: "Cordless coverage for large spaces, with up to 100 handsets.",
    description:
      "The Yealink W80DM manages a multi-cell cordless system with up to 30 base stations, 100 handsets and 100 parallel calls, with seamless roaming.",
    overview:
      "The DECT Manager for Yealink’s W80 multi-cell system, for large spaces that need cordless coverage everywhere. Staff move freely between up to 30 base stations without dropping calls. " +
      dectNote,
    features: [
      "Up to 30 W80B base stations",
      "Up to 100 handsets and devices, with 100 parallel calls",
      "Seamless roaming and handover between base stations",
      "Deployment toolkit to find the right place for each base station",
      "Local, remote, LDAP and XML phonebooks, and PBX contacts",
      "Works with the W53H and W56H handsets, CP930W conference phone and DD Phone",
      "Compatible with Microsoft SIP Gateway for Teams calling",
      "TLS 1.3 encryption",
    ],
    specs: [
      { label: "System", value: "W80DM DECT Manager with W80B base stations" },
      { label: "Base stations", value: "Up to 30" },
      { label: "Handsets and devices", value: "Up to 100" },
      { label: "Parallel calls", value: "Up to 100" },
      { label: "Phonebooks", value: "Local, remote, LDAP and XML" },
      { label: "Compatible devices", value: "W53H, W56H, CP930W, DD Phone (T41S + DD10K)" },
      { label: "Microsoft Teams", value: "Through Microsoft SIP Gateway" },
    ],
    mobileWebAccess: false,
    source: `${yl}/dect-phone-w80`,
  },
  {
    slug: "yealink-w90dm",
    brand: "Yealink",
    model: "W90DM",
    series: "DECT Multi-Cell",
    kind: "DECT Multi-Cell Manager",
    tagline: "Wide cordless coverage across large sites and multiple locations.",
    description:
      "The Yealink W90DM runs a multi-cell cordless system for large sites and multiple locations, scaling to 2,500 handsets with seamless roaming.",
    overview:
      "The DECT Manager for Yealink’s W90 multi-cell system, built for large spaces and multiple locations such as warehouses, hospitals, hotels, retail chains and offices. External antennas extend the range, so you need fewer base stations. " +
      dectNote,
    features: [
      "Up to 10 DECT Managers, 600 base stations, 2,500 handsets and 2,500 parallel calls, with a Virtual Integrator Manager (VIM) license",
      "Seamless, stable roaming, with LAN sync where signals are weak",
      "External antennas for wider coverage and flexible steering",
      "Quick setup tools, and bulk handset registration from a CSV file",
      "Works with the W53H, W56H, W59R, W73H, W78H and W57R handsets, CP930W and CP935W conference phones, and DD Phone",
      "Local, remote, LDAP and XML phonebooks, and PBX contacts",
      "Compatible with Microsoft SIP Gateway for Teams calling",
    ],
    specs: [
      { label: "System", value: "W90DM DECT Manager with W90B base stations" },
      { label: "Maximum size", value: "10 managers, 600 base stations, 2,500 handsets, with a VIM license" },
      { label: "Parallel calls", value: "Up to 2,500, with a VIM license" },
      { label: "Phonebooks", value: "Local, remote, LDAP and XML" },
      { label: "Compatible handsets", value: "W53H, W56H, W59R, W73H, W78H, W57R" },
      { label: "Microsoft Teams", value: "Through Microsoft SIP Gateway" },
    ],
    mobileWebAccess: false,
    source: `${yl}/dect-phone-w90`,
  },
];

const viewAlt = {
  front: "front view",
  left: "angled from the left",
  right: "angled from the right",
  side: "side view",
  back: "rear view",
  "with-exp50": "with an EXP50 expansion module",
} as const;

// Photos from the manufacturer's product page, in public/images/products.
// Paired models (such as the GXP-1610 and GXP-1615) share one set.
const shots = (file: string, name: string, views: (keyof typeof viewAlt)[]): ProductImage[] =>
  views.map((view) => {
    const key = `${file}-${view}`;
    const [width, height] = productImageSizes[key];
    return { src: `/images/products/${key}.webp`, alt: `${name} desk phone, ${viewAlt[view]}`, width, height };
  });

const photo = (key: string, alt: string): ProductImage => {
  const [width, height] = productImageSizes[key];
  return { src: `/images/products/${key}.webp`, alt, width, height };
};

const four = ["front", "left", "right", "side"] as const;
const yealinkDesk = ["front", "with-exp50"] as const;

const gallery: Record<string, ProductImage[]> = {
  "grandstream-grp2612": shots("grandstream-grp2612", "Grandstream GRP2612", ["front", "left"]),
  "grandstream-grp2614": shots("grandstream-grp2614", "Grandstream GRP2614", ["front", "left", "right"]),
  "grandstream-gxp1610": shots("grandstream-gxp1610-1615", "Grandstream GXP-1610", [...four]),
  "grandstream-gxp1615": shots("grandstream-gxp1610-1615", "Grandstream GXP-1615", [...four]),
  "grandstream-gxp1620": shots("grandstream-gxp1620-1625", "Grandstream GXP-1620", [...four]),
  "grandstream-gxp1625": shots("grandstream-gxp1620-1625", "Grandstream GXP-1625", [...four]),
  "grandstream-gxp1628": shots("grandstream-gxp1628", "Grandstream GXP-1628", [...four]),
  "grandstream-gxp1630": shots("grandstream-gxp1630", "Grandstream GXP-1630", [...four]),
  "grandstream-gxp1760w": shots("grandstream-gxp1760w", "Grandstream GXP-1760W", ["front", "left", "right", "back"]),
  "grandstream-gxp1780": shots("grandstream-gxp1780-1782", "Grandstream GXP-1780", ["front", "left", "right", "back"]),
  "grandstream-gxp1782": shots("grandstream-gxp1780-1782", "Grandstream GXP-1782", ["front", "left", "right", "back"]),
  "grandstream-gxp2130": shots("grandstream-gxp2130", "Grandstream GXP-2130", [...four]),
  "grandstream-gxp2135": shots("grandstream-gxp2135", "Grandstream GXP-2135", [...four]),
  "grandstream-gxp2140": shots("grandstream-gxp2140", "Grandstream GXP-2140", [...four]),
  "grandstream-gxp2160": shots("grandstream-gxp2160", "Grandstream GXP-2160", [...four]),
  "grandstream-gxp2170": [
    ...shots("grandstream-gxp2170", "Grandstream GXP-2170", ["front", "left"]),
    photo("grandstream-gxp2170-right", "Grandstream GXP-2170 desk phone with a GXP2200EXT expansion module"),
    ...shots("grandstream-gxp2170", "Grandstream GXP-2170", ["side"]),
  ],
  "yealink-t53": shots("yealink-t53", "Yealink SIP-T53", [...yealinkDesk]),
  "yealink-t53w": shots("yealink-t53w", "Yealink SIP-T53W", [...yealinkDesk]),
  "yealink-t54w": shots("yealink-t54w", "Yealink SIP-T54W", [...yealinkDesk]),
  "yealink-t57w": shots("yealink-t57w", "Yealink SIP-T57W", [...yealinkDesk]),
  // No product photo on Yealink's W70B page: the site's own photo shows the
  // W70B base station with a W73H handset.
  "yealink-w70b": [
    {
      src: "/images/hw-yealink-cordless-phone-base.png",
      alt: "Yealink W70B base station with a W73H cordless handset in its charger",
      width: 500,
      height: 500,
    },
  ],
  "yealink-w73p": [
    photo("yealink-w73p-handset-and-base", "Yealink W73H cordless handset in its charger beside the W70B base station"),
    {
      src: "/images/hw-yealink-w73h-handset.png",
      alt: "Yealink W73H cordless handset standing in its charger",
      width: 394,
      height: 548,
    },
  ],
  "yealink-w80dm": [
    photo("yealink-w80-dect-manager", "Yealink W80 DECT multi-cell unit"),
    photo("yealink-w80-base", "Yealink W80B DECT base station"),
    photo("yealink-w80-compatible-devices", "Yealink cordless handsets, conference phone and desk phone that work with the W80"),
  ],
  "yealink-w90dm": [photo("yealink-w90-base", "Yealink W90 DECT unit with external antennas")],
};

export const products: Product[] = list.map((p) => ({ ...p, images: gallery[p.slug] ?? [] }));

const bySlug = new Map(products.map((p) => [p.slug, p]));
export const getProduct = (slug: string) => bySlug.get(slug);

// Same family first, then the same brand, then everything else; ties go to
// the phone nearest in the list, so the picks stay close in price and size.
export function similarProducts(product: Product, count = 3) {
  const at = products.indexOf(product);
  const rank = (p: Product) => (p.series === product.series ? 0 : p.brand === product.brand ? 1 : 2);
  return products
    .filter((p) => p !== product)
    .sort((a, b) => rank(a) - rank(b) || Math.abs(products.indexOf(a) - at) - Math.abs(products.indexOf(b) - at))
    .slice(0, count);
}
