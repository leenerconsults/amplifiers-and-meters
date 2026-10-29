export const BRAND = "Amplifiers & Meters";
export const BRAND_SHORT = "A&M";
export const TAGLINE = "Professional audio. Ready for the show.";
export const POSITIONING = "Professional Audio Rental & Technical Solutions";
export const SUPPORT =
  "Professional Equipment. Reliable Service. Technical Expertise.";

/** Placeholder until client shares live contacts */
export const WHATSAPP = "2348000000000";
export const EMAIL = "info@amplifiersandmeters.com";
export const PHONE_DISPLAY = "+234";

export const whatsappHref = (msg?: string) =>
  `https://wa.me/${WHATSAPP}${msg ? `?text=${encodeURIComponent(msg)}` : ""}`;

export const EQUIPMENT_CATEGORIES = [
  { slug: "consoles", name: "Consoles", blurb: "Digital FOH & monitor desks." },
  { slug: "stageboxes", name: "Stageboxes", blurb: "Digital snakes and I/O." },
  { slug: "microphones", name: "Microphones", blurb: "Wired mics for every source." },
  { slug: "wireless", name: "Wireless", blurb: "RF systems that stay clean." },
  { slug: "iem", name: "IEM", blurb: "In-ear monitoring for artists." },
  { slug: "speakers", name: "Speakers", blurb: "PA and fill systems." },
  { slug: "amplifiers", name: "Amplifiers", blurb: "Power for the system." },
  { slug: "monitoring", name: "Monitoring", blurb: "Wedges and stage monitor." },
  { slug: "signal", name: "Signal & Connectivity", blurb: "Networking and distribution." },
  { slug: "comms", name: "Communications", blurb: "Clear show communications." },
  { slug: "accessories", name: "Accessories", blurb: "Stands, cases, cabling." },
] as const;

export const SOLUTIONS = [
  {
    slug: "concerts",
    name: "Concerts",
    blurb: "Arena and outdoor show systems built for pressure.",
  },
  {
    slug: "churches",
    name: "Churches",
    blurb: "Worship and conference audio that serves the room.",
  },
  {
    slug: "corporate",
    name: "Corporate",
    blurb: "Clean, reliable systems for brand moments.",
  },
  {
    slug: "touring",
    name: "Touring",
    blurb: "Inventory support when the road needs more gear.",
  },
  {
    slug: "broadcast",
    name: "Broadcast",
    blurb: "Controlled audio for capture and transmission.",
  },
  {
    slug: "events",
    name: "Events",
    blurb: "Festivals, launches, and one-night productions.",
  },
  {
    slug: "production-companies",
    name: "Production Companies",
    blurb: "Overflow inventory and package support for pros.",
  },
] as const;

export const SERVICES = [
  {
    title: "Professional Audio Equipment Rental",
    body: "Short-term, long-term, dry-hire and production requirements.",
  },
  {
    title: "Live Audio Solutions",
    body: "Packages for concerts, festivals, conferences, churches and corporates.",
  },
  {
    title: "Wireless & RF Solutions",
    body: "Wireless mics, IEM and RF accessories for clean show RF.",
  },
  {
    title: "Console & Stagebox Rental",
    body: "Digital consoles, stageboxes and networking for FOH and monitors.",
  },
  {
    title: "Monitoring Solutions",
    body: "IEM, wedges and related monitoring for artists and teams.",
  },
  {
    title: "Production Audio Packages",
    body: "Coordinated systems, not a random pile of boxes.",
  },
  {
    title: "Technical Support",
    body: "Deployment, setup, operation and troubleshooting support.",
  },
  {
    title: "Audio Consultation & System Design",
    body: "Planning and upgrades for venues, churches and production houses.",
  },
] as const;

export const WHY = [
  {
    title: "Professional Inventory",
    body: "Professional-grade audio for productions of different scales.",
    icon: "package",
  },
  {
    title: "Tested & Prepared",
    body: "Inspected, tested and prepared before dispatch.",
    icon: "badge-check",
  },
  {
    title: "Technical Knowledge",
    body: "We understand the gear and the rooms it has to work in.",
    icon: "cpu",
  },
  {
    title: "Flexible Rental Options",
    body: "Dry hire, wet hire and complete production packages.",
    icon: "layers",
  },
  {
    title: "Reliable Service",
    body: "Straightforward process from enquiry through return.",
    icon: "route",
  },
  {
    title: "Production Focused",
    body: "Equipment is a means. A successful show is the product.",
    icon: "clapperboard",
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Browse the site",
    body: "Explore categories, solutions and packages on amplifiersandmeters.com to shortlist what your show needs.",
  },
  {
    n: "02",
    title: "Request a quote online",
    body: "Use Rent or Contact to submit dates, venue and kit list (or send your full list) straight from the website.",
  },
  {
    n: "03",
    title: "We confirm availability",
    body: "Our team checks stock, suggests the right system if needed, and sends back a clear quotation.",
  },
  {
    n: "04",
    title: "Confirm and pay",
    body: "Approve the quote and complete the booking / payment steps so we can lock the gear for your dates.",
  },
  {
    n: "05",
    title: "We prepare and deploy",
    body: "Equipment is inspected, tested and packed, then delivered or handed over ready for the production.",
  },
  {
    n: "06",
    title: "Show day and return",
    body: "Run the show. Afterward, kit is returned, checked in and prepped for the next booking.",
  },
] as const;
