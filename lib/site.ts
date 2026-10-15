// Single source of truth for practice details used across the site.

export const SITE_URL = "https://www.healthprosurgery.com";
export const WHATSAPP_NUMBER = "254721446206";
export const PHONE_DISPLAY = "0721 446 206"; // WhatsApp & second opinion
export const WHATSAPP_DISPLAY = "0721 446 206";
export const OFFICE_PHONE = "254798595946"; // office line for calls and appointments
export const OFFICE_PHONE_DISPLAY = "0798 595 946";
export const EMAIL = "johnkinyua@gmail.com";

export const LOCATION_LINE = "Aga Khan Hospital Mombasa, Doctors' Plaza, First Floor";

export const MAPS_DIRECTIONS =
  "https://www.google.com/maps/search/?api=1&query=Aga%20Khan%20Hospital%20Mombasa%20Drs%20Plaza";
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Aga%20Khan%20Hospital%20Mombasa%20Doctors%20Plaza&output=embed";

export const CLINIC_HOURS = [
  { days: "Monday – Friday", time: "9:00 am – 5:00 pm" },
  { days: "Saturday", time: "9:00 am – 12:00 noon" },
  { days: "Sunday", time: "Closed" },
];

export type Insurer = {
  name: string;
  // Optional: path to an official logo file under /public/insurers/, e.g. "/insurers/aar.svg".
  // Leave unset to show the insurer's name as text.
  logo?: string;
};

// Medical insurers licensed by the Insurance Regulatory Authority (2026 gazette list).
export const KENYAN_INSURERS: Insurer[] = [
  { name: "AAR Insurance", logo: "/insurers/aar.png" },
  { name: "APA Insurance", logo: "/insurers/apa.png" },
  { name: "Britam", logo: "/insurers/britam.png" },
  { name: "CIC Insurance", logo: "/insurers/cic.png" },
  { name: "Equity Health Insurance", logo: "/insurers/equity.png" },
  { name: "First Assurance", logo: "/insurers/first-assurance.png" },
  { name: "GA Insurance", logo: "/insurers/ga.png" },
  { name: "Heritage Insurance", logo: "/insurers/heritage.png" },
  { name: "ICEA LION", logo: "/insurers/icea-lion.png" },
  { name: "Jubilee Health Insurance", logo: "/insurers/jubilee.png" },
  { name: "Kenindia Assurance", logo: "/insurers/kenindia.png" },
  { name: "Madison Insurance", logo: "/insurers/madison.png" },
  { name: "MUA Insurance", logo: "/insurers/mua.png" },
  { name: "Old Mutual", logo: "/insurers/old-mutual.png" },
  { name: "Pacis Insurance", logo: "/insurers/pacis.png" },
  { name: "Sanlam Allianz", logo: "/insurers/sanlam-allianz.png" },
];

export const INTERNATIONAL_INSURERS: Insurer[] = [
  { name: "Bupa Global", logo: "/insurers/bupa.png" },
  { name: "Aetna International", logo: "/insurers/aetna.png" },
];

export const SELF_PAY: Insurer = { name: "Self-pay by M-Pesa", logo: "/insurers/mpesa.png" };

export const INSURANCE = {
  local: "All Kenyan medical insurance providers",
  international: INTERNATIONAL_INSURERS.map((i) => i.name),
  note: "Please bring your insurance card and any pre-authorisation forms to your appointment. If your insurer is not listed, contact us — it is very likely accepted.",
};

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Dr Kinyua's professional profiles (shown on About/Publications and used as schema.org sameAs).
export const PROFILES = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kinyua-murithi-27ab1818" },
  { label: "ORCID", href: "https://orcid.org/0000-0002-9631-1414" },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=f6vrkE0AAAAJ" },
];
export const PROFILE_URLS = PROFILES.map((p) => p.href);

// Google review link (from the Google Business Profile). /review on the site redirects here.
export const GOOGLE_REVIEW_LINK = "https://g.page/r/CSSEc0Zle1CJEBM/review";
export const REVIEW_SHORT_LINK = `${SITE_URL}/review`;
