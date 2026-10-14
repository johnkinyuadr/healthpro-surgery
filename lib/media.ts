// Media appearances. Add new items at the top of the list.

export type MediaItem = {
  platform: "youtube" | "instagram";
  id: string; // YouTube video ID, or Instagram reel shortcode
  title: string;
  outlet: string;
  programme?: string;
  summary: string;
  topics: string[];
  guideHref?: string;
  guideLabel?: string;
};

export const MEDIA: MediaItem[] = [
  {
    platform: "youtube",
    id: "psI5n2CEAkc",
    title: "The Diabetic Foot: How to Prevent Amputation",
    outlet: "Al Haajar TV Kenya",
    programme: "Afya na Jamii (live) · with the Kenya Association of Muslim Physicians (KAMP)",
    summary:
      "Part of the KAMP “Save the Foot” public-education series. Dr John Kinyua Murithi explains why diabetes threatens the foot through nerve damage and poor blood flow, how a small unnoticed wound can progress to gangrene, the daily habits that protect the feet, the red flags that need urgent assessment, and how vascular surgeons work with wound-care and diabetes teams to save limbs.",
    topics: ["Diabetic foot", "Limb salvage", "Vascular surgery"],
    guideHref: "/patient-guides/diabetic-foot",
    guideLabel: "Read the diabetic foot guide",
  },
  {
    platform: "instagram",
    id: "Dbcq-78o2TW",
    title: "Varicose Veins and Venous Insufficiency",
    outlet: "Instagram",
    summary:
      "A short video on varicose veins and chronic venous insufficiency — why leg veins become enlarged, the symptoms to watch for, such as aching, heaviness, swelling and skin changes, and when assessment and treatment are worthwhile.",
    topics: ["Varicose veins", "Venous disease"],
    guideHref: "/services/varicose-veins",
    guideLabel: "Varicose veins FAQs",
  },
];

export function mediaUrl(m: MediaItem) {
  return m.platform === "youtube"
    ? `https://www.youtube.com/watch?v=${m.id}`
    : `https://www.instagram.com/reel/${m.id}/`;
}
