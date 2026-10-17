// Patient guides, listed on /patient-guides and the homepage.

export type Guide = { title: string; text: string; href: string };

export const PATIENT_GUIDES: Guide[] = [
  {
    title: "Diabetic foot care",
    text: "Daily foot checks, footwear and the warning signs that need urgent care — with video.",
    href: "/patient-guides/diabetic-foot",
  },
  {
    title: "Caring for your AV fistula",
    text: "Protecting your dialysis access, daily checks and when to seek help urgently.",
    href: "/patient-guides/av-fistula-care",
  },
  {
    title: "Recovery after hernia repair",
    text: "What to expect, returning to work and activity, and warning signs after surgery.",
    href: "/patient-guides/hernia-repair-recovery",
  },
  {
    title: "Preparing for endoscopy & colonoscopy",
    text: "Bowel preparation timings, diet, medicines and fasting before your procedure.",
    href: "/services/endoscopy-preparation",
  },
  {
    title: "Maandalizi ya colonoscopy (Kiswahili)",
    text: "Muda wa kunywa ColoPrep na Dulcolax, chakula, dawa na siku ya kipimo.",
    href: "/services/endoscopy-preparation/kiswahili",
  },
  {
    title: "Planning your visit",
    text: "How to book, what to bring, insurance pre-authorisation and directions.",
    href: "/your-visit",
  },
  {
    title: "Laser treatment of varicose veins (EVLA)",
    text: "Treating both legs: what happens, recovery, stockings, work and driving, and what is normal afterwards.",
    href: "/patient-guides/bilateral-evla",
  },
  {
    title: "Varicose veins",
    text: "Symptoms, when treatment is needed, and what EVLA involves.",
    href: "/services/varicose-veins",
  },
  {
    title: "Dialysis access",
    text: "Fistula versus graft, planning timelines and complications to watch for.",
    href: "/services/dialysis-access",
  },
  {
    title: "Hernia surgery",
    text: "Hernia types, warning signs and when surgery is needed.",
    href: "/services/hernia-surgery",
  },
];
