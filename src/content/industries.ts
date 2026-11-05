// The Industries overview. Features named here are in src/content/plans.ts, though
// some depend on the plan. Every row shares this placeholder photo for now: give a
// row its own `image` when its real photo is ready.
export const industryPlaceholderImage = {
  src: "/images/hero-team-reviewing-tablet.jpg",
  alt: "Office team reviewing calls together on a tablet",
};

export const industryAnchor = (href: string) => `industry-${href.split("/").pop()}`;

export const industries: { name: string; href: string; body: string }[] = [
  {
    name: "Healthcare",
    href: "/industries/healthcare",
    body: "Patients call about appointments, billing and refills while your front desk is checking people in. Send each call to the right person, and choose what callers hear when the office is closed.",
  },
  {
    name: "Professional Services",
    href: "/industries/professional-services",
    body: "Clients expect to reach the person handling their work. Give each person a direct number, and let them answer it from a desk phone, cell phone or computer.",
  },
  {
    name: "Real Estate",
    href: "/industries/real-estate",
    body: "Agents spend much of the day away from the office, and a missed call can be a missed client. Take calls and texts from the mobile app with your business number on them.",
  },
  {
    name: "Construction",
    href: "/industries/construction",
    body: "Your crews, suppliers and clients all need answers while your team is spread across job sites. The mobile app and ring groups help each call reach someone who can pick up.",
  },
  {
    name: "Manufacturing & Warehousing",
    href: "/industries/manufacturing-warehousing",
    body: "Staff on the floor can’t always get to a desk. Use cordless phones and paging to reach people across the building, and route calls to sales, shipping or the front office.",
  },
  {
    name: "Hospitality",
    href: "/industries/hospitality",
    body: "Guests call about bookings, directions and requests at every hour. Send those calls to the right desk, and use intercom and paging to keep your staff in touch.",
  },
  {
    name: "Retail",
    href: "/industries/retail",
    body: "Many callers only want your hours or location. An auto attendant can answer those questions, so your staff can stay with the customers in the store.",
  },
  {
    name: "Government",
    href: "/industries/government",
    body: "Residents often don’t know which office they need. Menu options and extensions help them reach the right department, and clear messages tell them your hours.",
  },
  {
    name: "Education",
    href: "/industries/education",
    body: "Families and staff need the front office, attendance or a specific teacher. Route calls with extensions and menus, and use paging to make announcements.",
  },
  {
    name: "Call Centers",
    href: "/industries/call-centers",
    body: "When call volume is your business, nobody should have to guess who’s next. Call queues hold callers in line and send them to the next free agent, and call recording is available too.",
  },
  {
    name: "Restaurants",
    href: "/industries/restaurants",
    body: "The phone often rings when your staff are busiest. An auto attendant can share your hours and location, and ring the host stand when a caller needs a person.",
  },
  {
    name: "Non Profit",
    href: "/industries/non-profit",
    body: "Your budget should go toward your mission, and your staff and volunteers aren’t always in one place. Start with the features you need and use the mobile app to stay reachable.",
  },
  {
    name: "Ad Agencies",
    href: "/industries/ad-agencies",
    body: "Clients want to reach their account team quickly, and your team isn’t always at a desk. Use direct numbers and ring groups for calls, and videoconferencing for reviews.",
  },
  {
    name: "Franchises",
    href: "/industries/franchises",
    body: "Each location needs its own phones, and customers should get the same experience at all of them. Connect your locations on one system, so staff can dial extensions and transfer calls between them.",
  },
  {
    name: "Auto Shops",
    href: "/industries/auto-shops",
    body: "Customers call about appointments, repair status and parts while your team is in the bay. A simple menu separates those calls, and business texting lets you send updates.",
  },
  {
    name: "Tech Companies",
    href: "/industries/tech-companies",
    body: "Your team may work from the office, from home or both. Run your phones from the cloud with mobile and web apps, and add users as you hire.",
  },
  {
    name: "Startups",
    href: "/industries/startups",
    body: "You need to look established without buying equipment you might outgrow. Start with a business number and the mobile app, and add features as your team grows.",
  },
  {
    name: "Financial Services",
    href: "/industries/financial-services",
    body: "Clients want a direct line to someone who knows their account. Give advisors their own numbers, route calls to the right team, and answer from inside or outside the office.",
  },
  {
    name: "Churches",
    href: "/industries/churches",
    body: "A small office staff handles questions about services, events and pastoral care. An auto attendant can share service times, and route calls to the right person during the week.",
  },
];
