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

export const INSURANCE = {
  local: "All Kenyan medical insurance providers",
  international: ["Bupa", "Aetna"],
  note: "Major international insurers accepted. Please bring your insurance card and any pre-authorisation forms to your appointment.",
};

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
