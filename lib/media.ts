// Media appearances. Add new items at the top of the list.

export type MediaItem = {
  youtubeId: string;
  title: string;
  outlet: string;
  programme?: string;
  summary: string;
  topic: string;
  guideHref?: string;
};

export const MEDIA: MediaItem[] = [
  {
    youtubeId: "psI5n2CEAkc",
    title: "The Diabetic Foot",
    outlet: "Al Haajar TV Kenya",
    programme: "Afya na Jamii (live)",
    summary:
      "Dr John Kinyua Murithi discusses why people living with diabetes are at risk of foot ulcers and amputation, the warning signs to look out for, and how early care saves limbs.",
    topic: "Diabetic foot",
    guideHref: "/patient-guides/diabetic-foot",
  },
];
