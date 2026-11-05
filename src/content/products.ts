// Yealink product pages. Specifications are from Yealink's product pages: confirm
// them against the models Atlantis supplies. Pricing is deliberately left out:
// these are information pages that send visitors to the contact page.

type ProductImage = { src: string; alt: string; width: number; height: number };

export type Product = {
  path: string;
  /** Short model name, used in the heading and buttons, such as "T54W". */
  model: string;
  /** Second line of the hero heading. */
  category: string;
  /** Used in the page title: "Yealink T54W <kind>: Specs and Features". */
  kind: string;
  featureIcons: "desk" | "cordless";
  /** Small line under the hero photo. */
  note?: string;
  description: string;
  heroBody: string;
  heroImage: ProductImage;
  frontImage: ProductImage;
  callouts: { label: string; x: number; y: number; place: "top-right" | "bottom-left" }[];
  figures: { value: string; label: string }[];
  features: { title: string; body: string }[];
  specs: { label: string; value: string }[];
};

const features = (displayBody: string) => [
  { title: "Adjustable High-Resolution Display", body: displayBody },
  {
    title: "Acoustic Shield Technology",
    body: "Multiple microphones create a virtual shield, so the person on the other end hears your voice and fewer of the distractions around you.",
  },
  {
    title: "Corded Cordless Phone",
    body: "Add up to four cordless handsets with the Yealink DD10K DECT dongle, then switch a call between the desk phone and a handset when you step away from your desk.",
  },
  {
    title: "Advanced Wireless Connectivity",
    body: "Built-in 2.4G/5G Wi-Fi can reduce internet cabling and keep the workspace tidy. Bluetooth 4.2 connects a wireless headset without an adapter.",
  },
];

// The same in both models; only the display and account rows differ.
const specs = (display: string, accounts: string) => [
  { label: "Display", value: display },
  { label: "VoIP accounts", value: accounts },
  { label: "Ethernet", value: "Dual-port Gigabit Ethernet" },
  { label: "Power over Ethernet", value: "Supported" },
  { label: "Wi-Fi", value: "Built-in dual-band 2.4G/5G (802.11a/b/g/n)" },
  { label: "Bluetooth", value: "Built-in Bluetooth 4.2" },
  { label: "USB", value: "One USB 2.0 port for recording, USB headsets and the EXP50" },
  { label: "Expansion modules", value: "Up to 3 EXP50 self-adaptive sidecars with color screens" },
  { label: "Cordless handsets", value: "Up to 4, with the Yealink DD10K DECT dongle, with call switching" },
  { label: "Handset", value: "Hearing aid compatible (HAC)" },
  { label: "Mounting", value: "Desk or wall mountable" },
  { label: "Security", value: "TLS 1.3 and WPA3" },
];

const sharedFigures = [
  { value: "2", label: "Gigabit Ethernet ports" },
  { value: "5G", label: "Dual-band Wi-Fi, 2.4G and 5G" },
  { value: "4.2", label: "Built-in Bluetooth" },
];

export const t54w: Product = {
  path: "/products/yealink-t54w",
  model: "T54W",
  category: "Prime Business Phone",
  kind: "Business Phone",
  featureIcons: "desk",
  note: "Shown with an optional EXP50 expansion module.",
  description:
    "The Yealink T54W desk phone has a 4.3-inch adjustable color display, built-in Wi-Fi and Bluetooth, and dual Gigabit Ethernet. Ask Atlantis if it suits your team.",
  heroBody:
    "A mid-level phone, ideal for professionals and managers with a moderate call load, with a fully adjustable color display and Wi-Fi and Bluetooth built in.",
  heroImage: {
    src: "/images/hw-yealink-t54w-exp50.png",
    alt: "Yealink T54W desk phone with a color screen, beside an EXP50 expansion module",
    width: 678,
    height: 317,
  },
  frontImage: {
    src: "/images/hw-yealink-desk-phone.png",
    alt: "Yealink T54W desk phone with a color screen and corded handset",
    width: 503,
    height: 314,
  },
  callouts: [
    { label: "Adjustable 4.3″ color display", x: 70, y: 3, place: "top-right" },
    { label: "Hearing aid compatible handset", x: 28, y: 44, place: "bottom-left" },
  ],
  figures: [
    { value: "4.3″", label: "Adjustable color display" },
    { value: "16", label: "VoIP accounts" },
    ...sharedFigures,
  ],
  features: features(
    "The color display is fully adjustable, so you can set it for your viewing angle and the light at your desk.",
  ),
  specs: specs("4.3″ 480 x 272-pixel color display with backlight, adjustable", "Up to 16"),
};

export const t53w: Product = {
  path: "/products/yealink-t53w",
  model: "T53W",
  category: "Prime Business Phone",
  kind: "Business Phone",
  featureIcons: "desk",
  note: "Shown with an optional EXP50 expansion module.",
  description:
    "The Yealink T53W desk phone has a 3.7-inch adjustable display, built-in Wi-Fi and Bluetooth, and dual Gigabit Ethernet. Ask Atlantis if it suits your team.",
  heroBody:
    "An entry-level phone, ideal for common workspaces, with an adjustable graphical display and Wi-Fi and Bluetooth built in.",
  heroImage: {
    src: "/images/hw-yealink-t53w-exp50.png",
    alt: "Yealink T53W desk phone with a graphical display, beside an EXP50 expansion module",
    width: 677,
    height: 321,
  },
  frontImage: {
    src: "/images/hw-yealink-t53w-desk-phone.png",
    alt: "Yealink T53W desk phone with a graphical display and corded handset",
    width: 615,
    height: 389,
  },
  callouts: [
    { label: "Adjustable 3.7″ graphical display", x: 70, y: 3, place: "top-right" },
    { label: "Hearing aid compatible handset", x: 28, y: 44, place: "bottom-left" },
  ],
  figures: [
    { value: "3.7″", label: "Adjustable graphical display" },
    { value: "12", label: "VoIP accounts" },
    ...sharedFigures,
  ],
  features: features(
    "The graphical display tilts, so you can set it for your viewing angle and the light at your desk.",
  ),
  specs: specs("3.7″ 360 x 160-pixel graphical display with backlight, adjustable", "Up to 12"),
};

export const w73p: Product = {
  path: "/products/yealink-cordless",
  model: "W73P",
  category: "Cordless DECT Phone System",
  kind: "Cordless Phone System",
  featureIcons: "cordless",
  description:
    "The Yealink W73P cordless phone system supports up to 10 handsets and 20 simultaneous calls, with HD audio for mobile workers. Ask Atlantis if it suits your team.",
  heroBody:
    "A cordless phone system for mobile workers, with one base station that supports up to 10 handsets, 10 SIP accounts and 20 simultaneous calls.",
  heroImage: {
    src: "/images/hw-yealink-w73p-system.png",
    alt: "Yealink W73H cordless handset in its charger in front of the W70B base station",
    width: 523,
    height: 590,
  },
  frontImage: {
    src: "/images/hw-yealink-w73h-handset.png",
    alt: "Yealink W73H cordless handset standing in its charger",
    width: 394,
    height: 548,
  },
  callouts: [
    { label: "1.8\u2033 color handset display", x: 71, y: 3, place: "top-right" },
    { label: "W70B base station", x: 12, y: 62, place: "bottom-left" },
  ],
  figures: [
    { value: "10", label: "Handsets per base station" },
    { value: "10", label: "SIP accounts" },
    { value: "20", label: "Simultaneous calls" },
    { value: "35 h", label: "Talk time, in ideal conditions" },
    { value: "1.8\u2033", label: "Color handset display" },
  ],
  features: [
    {
      title: "High-Performance and Scalable",
      body: "Register up to 10 W73H handsets, with up to 10 SIP accounts and 20 simultaneous calls. Up to 6 optional repeaters extend your coverage.",
    },
    {
      title: "Clarity and Stability",
      body: "Upgraded hardware, audio processing and signal strength deliver HD audio and louder, noise-free calls in complex environments.",
    },
    {
      title: "Streamlined Provisioning and Management",
      body: "Yealink\u2019s Redirection and Provisioning Service handles remote deployment, maintenance and upgrades, and a web portal manages your devices.",
    },
    {
      title: "Full Range of DECT Devices",
      body: "Works with Yealink\u2019s DECT handsets, conference phones and DD phones, and with Microsoft SIP Gateway.",
    },
  ],
  specs: [
    { label: "Includes", value: "W73H handset, W70B base station and charger cradle" },
    { label: "Handset display", value: "1.8\u2033 128 x 160 TFT color screen" },
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
    { label: "Noise reduction", value: "Flexible Noise Reduction" },
    { label: "Mounting", value: "Desktop or wall mountable" },
    { label: "Security", value: "TLS and SRTP encryption" },
  ],
};
