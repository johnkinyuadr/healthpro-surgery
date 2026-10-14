// Single source of truth for practice details used across the site.

export const SITE_URL = "https://www.healthprosurgery.com";
export const WHATSAPP_NUMBER = "254721446206";
export const PHONE_DISPLAY = "0721 446 206";
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
  { name: "AAR Insurance" },
  { name: "APA Insurance" },
  { name: "Britam" },
  { name: "CIC Insurance" },
  { name: "Equity Health Insurance" },
  { name: "First Assurance" },
  { name: "GA Insurance" },
  { name: "Heritage Insurance" },
  { name: "ICEA LION" },
  { name: "Jubilee Health Insurance" },
  { name: "Kenindia Assurance" },
  { name: "Madison Insurance" },
  { name: "MUA Insurance" },
  { name: "Old Mutual" },
  { name: "Pacis Insurance" },
  { name: "Sanlam Allianz" },
];

export const INTERNATIONAL_INSURERS: Insurer[] = [{ name: "Bupa Global" }, { name: "Aetna International" }];

export const INSURANCE = {
  local: "All Kenyan medical insurance providers",
  international: INTERNATIONAL_INSURERS.map((i) => i.name),
  note: "Please bring your insurance card and any pre-authorisation forms to your appointment. If your insurer is not listed, contact us — it is very likely accepted.",
};

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
