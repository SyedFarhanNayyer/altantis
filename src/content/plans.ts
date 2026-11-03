// Business phone plans and the feature comparison. The plan cards and the
// comparison table on the Business Phone Systems page both read from here.

export type Plan = {
  name: string;
  description: string;
  price: string;
  unit: string;
  cta: string;
  popular?: boolean;
  includes?: string;
  features: string[];
  addOns: string[];
};

export const plans: Plan[] = [
  {
    name: "Basic",
    description: "For businesses that need everyday calling.",
    price: "$19.99",
    unit: "per user / month",
    cta: "Get Started With Basic",
    features: [
      "Unlimited calling in the US, Canada, Mexico, and Puerto Rico",
      "One free toll-free number",
      "Auto attendant (virtual receptionist)",
      "Direct number per user",
      "Business texting (100 / month)",
      "Mobile app and web phone",
      "Voicemail to email",
      "Ring groups",
      "Business hours routing",
      "Call forwarding and transfer",
    ],
    addOns: [
      "AI Agents",
      "Extra Toll-Free Numbers",
      "Fax to Email",
      "Overhead Paging",
      "Extra Text Messages",
    ],
  },
  {
    name: "Pro",
    description: "For teams that need more control over calls.",
    price: "$27.99",
    unit: "per user / month",
    cta: "Get Started With Pro",
    popular: true,
    includes: "Everything in Basic, plus:",
    features: [
      "Business texting (250 / month)",
      "Videoconferencing",
      "Call recording",
      "Enhanced call blocking",
      "Voicemail transcription",
      "Find me / follow me",
      "Simultaneous ring",
      "Call parking and pickup",
      "Intercom and phone paging",
      "Team chat and presence",
      "Web attendant console",
      "Hot desking",
    ],
    addOns: [
      "AI Agents",
      "Extra Toll-Free Numbers",
      "Fax to Email",
      "Overhead Paging",
      "Extra Text Messages",
    ],
  },
  {
    name: "Premium",
    description: "For teams that handle a lot of calls.",
    price: "$34.99",
    unit: "per user / month",
    cta: "Get Started With Premium",
    includes: "Everything in Pro, plus:",
    features: [
      "Business texting (1,000 / month)",
      "Call queues",
      "Skill-based routing",
      "AI agents (receptionist, support, scheduling, tickets)",
      "Call center reporting",
      "CRM integrations (ask about yours)",
      "Screen pops",
      "Call notes and account codes",
    ],
    addOns: [
      "Extra Toll-Free Numbers",
      "Fax to Email",
      "Overhead Paging",
      "Extra Text Messages",
    ],
  },
  {
    name: "Enterprise",
    description: "For multiple locations and custom setups.",
    price: "Custom",
    unit: "pricing",
    cta: "Ask About Enterprise",
    includes: "Everything in Premium, plus:",
    features: [
      "Custom texting limits",
      "Multi-site management",
      "SIP trunking",
      "Custom dial plans",
      "Custom portals",
      "Hoteling",
      "Key system emulation",
      "Bulk user import",
    ],
    addOns: [
      "Extra Toll-Free Numbers",
      "Fax to Email",
      "Overhead Paging",
      "Extra Text Messages",
    ],
  },
];

// One value per plan, in plan order. Any other string is shown as written.
export type Cell = "included" | "addon" | "none" | (string & {});

export type CompareGroup = {
  title: string;
  rows: { name: string; description: string; values: [Cell, Cell, Cell, Cell] }[];
};

export const compareGroups: CompareGroup[] = [
  {
    title: "Key Calling",
    rows: [
      { name: "Main business number", description: "Your main number, new or moved from your current provider.", values: ["included", "included", "included", "included"] },
      { name: "Direct number per user", description: "Each user can have their own number that can be dialed directly.", values: ["included", "included", "included", "included"] },
      { name: "Number transfer", description: "Bring your current business number with you, in most cases.", values: ["included", "included", "included", "included"] },
      { name: "Unlimited calling in the US, Canada, Mexico, and Puerto Rico", description: "Call mobile phones and landlines in these countries at no extra cost.", values: ["included", "included", "included", "included"] },
      { name: "One free toll-free number", description: "A number callers can reach at no cost to them.", values: ["included", "included", "included", "included"] },
      { name: "Extra toll-free numbers", description: "Add more toll-free numbers if you need them.", values: ["addon", "addon", "addon", "addon"] },
      { name: "Extra phone numbers", description: "More numbers for teams, locations, or campaigns.", values: ["addon", "addon", "addon", "addon"] },
    ],
  },
  {
    title: "Administration",
    rows: [
      { name: "User portal", description: "Each user has their own login to manage their settings.", values: ["included", "included", "included", "included"] },
      { name: "Admin portal", description: "Change greetings, menus, and users online.", values: ["included", "included", "included", "included"] },
      { name: "User access levels", description: "Office manager, standard user, and call center roles.", values: ["included", "included", "included", "included"] },
      { name: "Phone auto setup", description: "Desk phones set themselves up when plugged in.", values: ["included", "included", "included", "included"] },
      { name: "Remote phone restart", description: "Restart a desk phone from the portal.", values: ["included", "included", "included", "included"] },
      { name: "Fraud detection", description: "Helps flag unusual calling activity.", values: ["included", "included", "included", "included"] },
      { name: "Department management", description: "Organize users into departments.", values: ["none", "none", "included", "included"] },
      { name: "Bulk user import", description: "Add many users at once.", values: ["none", "none", "none", "included"] },
      { name: "Multi-site management", description: "Manage several locations on one system.", values: ["none", "none", "none", "included"] },
      { name: "Device inventory", description: "Track all phones and devices in one place.", values: ["none", "none", "none", "included"] },
    ],
  },
  {
    title: "Call Management",
    rows: [
      { name: "Auto attendant", description: "A virtual receptionist that greets callers and sends them to the right person or team.", values: ["included", "included", "included", "included"] },
      { name: "Custom greetings and menus", description: "Different greetings, menus, and options, built with a visual designer.", values: ["included", "included", "included", "included"] },
      { name: "Change greetings by phone", description: "Record or switch greetings from a desk phone.", values: ["included", "included", "included", "included"] },
      { name: "Business hours routing", description: "Different call handling for day, night, and set times.", values: ["included", "included", "included", "included"] },
      { name: "Extension dialing", description: "3 or 4 digit extensions, or the numbering you choose.", values: ["included", "included", "included", "included"] },
      { name: "Company directory", description: "Callers and staff can find people by name.", values: ["included", "included", "included", "included"] },
      { name: "Call transfer", description: "Blind, announced, intercom, or straight to voicemail.", values: ["included", "included", "included", "included"] },
      { name: "Call forwarding", description: "Always, when busy, no answer, or when your phone is offline.", values: ["included", "included", "included", "included"] },
      { name: "Ring groups and hunt groups", description: "Ring a group of phones at once or in order.", values: ["included", "included", "included", "included"] },
      { name: "Music on hold", description: "Play music or messages while callers wait.", values: ["included", "included", "included", "included"] },
      { name: "Custom music on hold", description: "Your own music or messages, including per queue.", values: ["none", "included", "included", "included"] },
      { name: "Caller ID with name", description: "See who’s calling before you pick up.", values: ["included", "included", "included", "included"] },
      { name: "Dynamic caller ID", description: "Change the name and number you show on outbound calls.", values: ["none", "included", "included", "included"] },
      { name: "Call blocking", description: "Block numbers or anonymous callers.", values: ["included", "included", "included", "included"] },
      { name: "Enhanced call blocking", description: "Helps screen out spam and robocalls before they ring.", values: ["none", "included", "included", "included"] },
      { name: "Distinctive ring", description: "Different ringtones by user, department, or number dialed.", values: ["included", "included", "included", "included"] },
      { name: "Do not disturb", description: "Send calls to voicemail when you’re busy.", values: ["included", "included", "included", "included"] },
      { name: "Three-way calling", description: "Bring a third person into a call.", values: ["included", "included", "included", "included"] },
      { name: "Call waiting and call return", description: "Take a second call, or call back the last caller.", values: ["included", "included", "included", "included"] },
      { name: "Call logs", description: "See a history of incoming and outgoing calls.", values: ["included", "included", "included", "included"] },
      { name: "Find me / follow me", description: "Ring several numbers in order until someone answers.", values: ["none", "included", "included", "included"] },
      { name: "Simultaneous ring", description: "Ring your desk phone and cell phone at the same time.", values: ["none", "included", "included", "included"] },
      { name: "Call screening", description: "Callers say their name before the call rings through.", values: ["none", "included", "included", "included"] },
      { name: "Call parking", description: "Put a call on hold so anyone on the team can pick it up.", values: ["none", "included", "included", "included"] },
      { name: "Call pickup", description: "Answer a call ringing on a coworker’s phone.", values: ["none", "included", "included", "included"] },
      { name: "Intercom", description: "Call another desk phone directly on speaker.", values: ["none", "included", "included", "included"] },
      { name: "Phone paging", description: "One-way announcements to a group of desk phones.", values: ["none", "included", "included", "included"] },
      { name: "Overhead paging", description: "Connect your phone system to overhead speakers.", values: ["addon", "addon", "addon", "addon"] },
      { name: "Shared lines", description: "Share one line across several phones.", values: ["none", "included", "included", "included"] },
      { name: "Key system emulation", description: "Line buttons that work like a traditional key system.", values: ["none", "none", "none", "included"] },
      { name: "Call intercept", description: "Play a message on numbers that are no longer in use.", values: ["none", "none", "none", "included"] },
      { name: "Fax to email", description: "Send and receive faxes by email. Can also be set up for your fax machine.", values: ["addon", "addon", "addon", "addon"] },
    ],
  },
  {
    title: "Voicemail",
    rows: [
      { name: "Voicemail", description: "Every user gets a private voicemail box.", values: ["included", "included", "included", "included"] },
      { name: "Voicemail to email", description: "Voicemails sent to your inbox with the audio file attached.", values: ["included", "included", "included", "included"] },
      { name: "Message waiting light", description: "Your desk phone lights up when you have a message.", values: ["included", "included", "included", "included"] },
      { name: "Press 0 for operator", description: "Callers can leave voicemail and reach a person instead.", values: ["included", "included", "included", "included"] },
      { name: "Voicemail transcription", description: "Read your voicemails as text.", values: ["none", "included", "included", "included"] },
      { name: "Copy voicemail to coworkers", description: "Send a voicemail to other extensions.", values: ["none", "included", "included", "included"] },
    ],
  },
  {
    title: "Mobility",
    rows: [
      { name: "Mobile app for iOS", description: "Make and take business calls on your iPhone.", values: ["included", "included", "included", "included"] },
      { name: "Mobile app for Android", description: "Make and take business calls on your Android phone.", values: ["included", "included", "included", "included"] },
      { name: "Web phone", description: "Make and take calls from Google Chrome.", values: ["included", "included", "included", "included"] },
      { name: "Move a call to another device", description: "Pick up an active call on another one of your devices.", values: ["included", "included", "included", "included"] },
      { name: "Forward calls during outages", description: "Calls go to another number if a phone is offline.", values: ["included", "included", "included", "included"] },
      { name: "Click to call", description: "Click a number to start a call.", values: ["included", "included", "included", "included"] },
    ],
  },
  {
    title: "Text Messaging",
    rows: [
      { name: "Business texting (SMS)", description: "Send and receive texts from your business number.", values: ["100 / month", "250 / month", "1,000 / month", "Custom"] },
      { name: "Extra text messages", description: "Add more texts each month if you need them.", values: ["addon", "addon", "addon", "addon"] },
    ],
  },
  {
    title: "Team Collaboration",
    rows: [
      { name: "Videoconferencing", description: "Meet with your team or customers over video.", values: ["none", "included", "included", "included"] },
      { name: "Team chat", description: "Message coworkers one on one.", values: ["none", "included", "included", "included"] },
      { name: "Group messaging", description: "Message a group of coworkers at once.", values: ["none", "included", "included", "included"] },
      { name: "Presence", description: "See who’s available, busy, or on a call.", values: ["none", "included", "included", "included"] },
      { name: "Busy lamp field", description: "Desk phone lights show when a coworker is on a call.", values: ["none", "included", "included", "included"] },
      { name: "Web attendant console", description: "Answer, hold, transfer, and park calls from your screen.", values: ["none", "included", "included", "included"] },
      { name: "Hot desking", description: "Log in to any desk phone and use it as your own.", values: ["none", "included", "included", "included"] },
      { name: "Hoteling", description: "Reserve a shared desk phone for a set time.", values: ["none", "none", "none", "included"] },
    ],
  },
  {
    title: "Call Center",
    rows: [
      { name: "Call queues", description: "Hold callers in line and send them to the next free person.", values: ["none", "none", "included", "included"] },
      { name: "Advanced call distribution", description: "Spread calls across available agents.", values: ["none", "none", "included", "included"] },
      { name: "Skill-based routing", description: "Send calls to agents based on their skills or team.", values: ["none", "none", "included", "included"] },
      { name: "Queue messages", description: "Play messages to callers and agents during queue calls.", values: ["none", "none", "included", "included"] },
      { name: "Queue recording", description: "Record calls that come through a queue.", values: ["none", "none", "included", "included"] },
      { name: "Call notes and dispositions", description: "Tag calls with a reason or outcome.", values: ["none", "none", "included", "included"] },
      { name: "Account code tracking", description: "Track calls by client or project.", values: ["none", "none", "included", "included"] },
    ],
  },
  {
    title: "AI Agents",
    rows: [
      { name: "AI receptionist", description: "Answers calls, greets callers, and sends them to the right person or team.", values: ["addon", "addon", "included", "included"] },
      { name: "AI support agent", description: "Answers common customer questions using your business info.", values: ["addon", "addon", "included", "included"] },
      { name: "AI booking and scheduling", description: "Helps callers book, change, or cancel appointments.", values: ["addon", "addon", "included", "included"] },
      { name: "AI ticket creation", description: "Creates support tickets from calls.", values: ["addon", "addon", "included", "included"] },
      { name: "Custom AI agents", description: "Set up for other tasks based on the info you give it.", values: ["addon", "addon", "included", "included"] },
    ],
  },
  {
    title: "Recording and Reporting",
    rows: [
      { name: "Call recording", description: "Record calls automatically or on demand.", values: ["none", "included", "included", "included"] },
      { name: "Call detail records", description: "Detailed records of every call.", values: ["included", "included", "included", "included"] },
      { name: "Call center reporting", description: "See call and queue activity for your team.", values: ["none", "none", "included", "included"] },
    ],
  },
  {
    title: "Integrations",
    rows: [
      { name: "CRM integrations", description: "Connect your phone system to your CRM. Ask about yours.", values: ["none", "none", "included", "included"] },
      { name: "Screen pops", description: "See caller info on screen and answer, hold, transfer, or record from it.", values: ["none", "none", "included", "included"] },
      { name: "Web hooks", description: "Send call data to your other apps.", values: ["none", "none", "none", "included"] },
    ],
  },
  {
    title: "Enterprise",
    rows: [
      { name: "SIP trunking", description: "Connect an existing phone system to our service.", values: ["none", "none", "none", "included"] },
      { name: "Custom dial plans", description: "Set up extensions and dialing your way.", values: ["none", "none", "none", "included"] },
      { name: "Custom portals", description: "Portals set up for your organization.", values: ["none", "none", "none", "included"] },
    ],
  },
];
