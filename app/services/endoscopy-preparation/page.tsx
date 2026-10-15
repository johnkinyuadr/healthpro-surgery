import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/app/components/FAQSection";
import ServiceCover from "@/components/ServiceCover";
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY, waLink } from "@/lib/site";

const IMAGE = "/images/services/endoscopy-preparation.jpg";

export const metadata: Metadata = {
  title: "Preparing for Endoscopy & Colonoscopy | Bowel Preparation Instructions",
  description:
    "How to prepare for an upper GI endoscopy (OGD) or colonoscopy at HealthPro Surgery, Mombasa: diet, ColoPrep and Dulcolax bowel preparation timing, medicines, fasting and what to expect on the day.",
  openGraph: {
    type: "website",
    siteName: "HealthPro Surgery",
    title: "Preparing for Endoscopy & Colonoscopy | HealthPro Surgery",
    description:
      "Diet, bowel preparation timing, medicines, fasting and what to expect on the day of your endoscopy or colonoscopy.",
    images: [{ url: `https://www.healthprosurgery.com${IMAGE}`, width: 1200, height: 800 }],
  },
  alternates: { canonical: "/services/endoscopy-preparation" },
};

const COLONOSCOPY_TIMELINE = [
  {
    when: "7 days before",
    title: "Review your medicines",
    items: [
      "Stop iron tablets.",
      "Tell us if you take blood thinners (e.g. warfarin, clopidogrel, rivaroxaban, apixaban) or diabetes medicines — do not stop these without specific advice.",
      "Continue all other regular medicines unless told otherwise.",
    ],
  },
  {
    when: "3 days before",
    title: "Start a low-fibre diet",
    items: [
      "Eat: white rice, white bread, ugali made from sifted maize flour, potatoes without skin, eggs, chicken, fish, clear soups.",
      "Avoid: fruit and vegetables with skins or seeds, beans, peas, lentils, nuts, whole grains, githeri and brown bread.",
    ],
  },
  {
    when: "Day before — morning",
    title: "Light breakfast, then clear fluids only",
    items: [
      "Have a light low-fibre breakfast, finishing by 9:00 am.",
      "After breakfast, take clear fluids only: water, clear soup, clear fruit juice without bits, black tea or coffee, oral rehydration solution.",
      "Avoid red or purple drinks and milk.",
    ],
  },
  {
    when: "Day before — 3:00 pm",
    title: "First bottle of ColoPrep + 4 Dulcolax tablets",
    items: [
      "Take the first bottle of ColoPrep, prepared as directed on the pack.",
      "At the same time, swallow 4 tablets of Dulcolax (bisacodyl).",
      "Drink plenty of clear fluids over the following hours — at least 4–6 glasses.",
    ],
    highlight: true,
  },
  {
    when: "Day before — 6:00 pm",
    title: "Second bottle of ColoPrep",
    items: [
      "Take the second bottle of ColoPrep, prepared as directed on the pack.",
      "Continue drinking clear fluids generously through the evening.",
      "Stay close to a toilet — frequent, watery stools are expected and mean the preparation is working.",
    ],
    highlight: true,
  },
  {
    when: "Day of the procedure",
    title: "Nil by mouth",
    items: [
      "You may sip clear fluids until 2 hours before your appointment, then nothing more by mouth.",
      "Your stools should be clear or pale yellow liquid. If they are still brown or contain solid matter, call us before coming in.",
      "Bring your medicines list, insurance card and a companion to take you home.",
    ],
  },
];

const OGD_STEPS = [
  "Do not eat for 6 hours before the procedure.",
  "Small sips of water are allowed until 2 hours before, then nothing by mouth.",
  "Take essential morning medicines (e.g. blood pressure tablets) with a sip of water unless told otherwise.",
  "Tell us about blood thinners and diabetes medicines in advance.",
  "Arrange for someone to accompany you home if you will receive sedation.",
];

const faqs = [
  {
    question: "Why is bowel preparation so important?",
    answer:
      "The bowel must be completely clean for the lining to be seen clearly. Poor preparation can hide polyps or other abnormalities and may mean the colonoscopy has to be repeated.",
  },
  {
    question: "What if I vomit or cannot finish the preparation?",
    answer:
      "Slow down, take a short break of 30–60 minutes, then continue sipping. If you are unable to keep the preparation down, call us on the office line for advice before your appointment.",
  },
  {
    question: "Can I take my usual medicines?",
    answer:
      "Most medicines can be continued, taken at least an hour before or after the bowel preparation. Iron tablets should be stopped a week before. Blood thinners and diabetes medicines need individual advice — please tell us when you book.",
  },
  {
    question: "I have diabetes. Is there anything special to do?",
    answer:
      "Yes. Because you will be eating less, your diabetes tablets or insulin dose may need adjusting the day before and on the day of the procedure. Check your blood sugar more often and contact us in advance for a personalised plan.",
  },
  {
    question: "Will I be sedated, and can I drive home?",
    answer:
      "Most patients receive sedation. You must not drive, operate machinery or sign important documents for 24 hours afterwards, so please arrange for an adult to accompany you home.",
  },
  {
    question: "What happens after the procedure?",
    answer:
      "You will rest in recovery for about an hour. Mild bloating or wind is common and settles quickly. Findings are discussed with you on the day; biopsy results usually take several working days and are reviewed at follow-up.",
  },
  {
    question: "When should I seek urgent help afterwards?",
    answer:
      "Contact us or go to A&E if you have severe or worsening abdominal pain, a swollen hard abdomen, fever, vomiting, or more than a small amount of bleeding from the back passage.",
  },
];

export default function EndoscopyPreparationPage() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Preparation guide
        </div>
        <h1 className="h1">Preparing for endoscopy and colonoscopy</h1>
        <p className="p" style={{ maxWidth: 780 }}>
          Good preparation makes your procedure safer, quicker and more accurate. Please read these
          instructions carefully when you book, and follow any specific advice you are given by our
          team.
        </p>
        <div className="btnRow">
          <a className="btn btnPrimary" href="#colonoscopy">
            Colonoscopy preparation
          </a>
          <a className="btn" href="#ogd">
            Upper GI endoscopy (OGD)
          </a>
        </div>
      </section>

      <ServiceCover images={[{ src: IMAGE, alt: "Doctor and nurse explaining bowel preparation for colonoscopy to a patient" }]} />

      <h2 id="colonoscopy" className="sectionTitle anchorTarget">
        Colonoscopy: step-by-step bowel preparation
      </h2>
      <p className="p" style={{ maxWidth: 780, margin: "0 0 18px" }}>
        These instructions assume a morning appointment. If your procedure is in the afternoon, we
        will give you adjusted timings.
      </p>
      <ol className="prepTimeline">
        {COLONOSCOPY_TIMELINE.map((step) => (
          <li key={step.when} className={step.highlight ? "prepStep prepStepKey" : "prepStep"}>
            <div className="prepWhen">{step.when}</div>
            <div className="prepBody">
              <h3>{step.title}</h3>
              <ul>
                {step.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <section id="ogd" className="card anchorTarget" style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 22 }}>Upper GI endoscopy (OGD)</h2>
        <p style={{ marginBottom: 10 }}>
          No bowel preparation is needed for an OGD. The stomach simply needs to be empty:
        </p>
        <ul className="list">
          {OGD_STEPS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="small" style={{ marginTop: 12 }}>
          Having both an OGD and a colonoscopy on the same day? Follow the colonoscopy preparation.
        </p>
      </section>

      <FAQSection title="Frequently asked questions" faqs={faqs} />

      <section className="card" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 22, margin: 0 }}>Questions about your preparation?</h2>
        <p>
          Call the office on{" "}
          <a href={`tel:+${OFFICE_PHONE}`} style={{ color: "var(--navy)", fontWeight: 600 }}>
            {OFFICE_PHONE_DISPLAY}
          </a>{" "}
          or message us on WhatsApp. Procedures are performed at Aga Khan Hospital Mombasa.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello HealthPro Surgery, I have a question about preparing for my endoscopy/colonoscopy.")}
            target="_blank"
            rel="noreferrer"
          >
            Ask on WhatsApp
          </a>
          <Link className="btn" href="/services/gi-endoscopy">
            About endoscopy &amp; colonoscopy
          </Link>
        </div>
        <p className="small" style={{ margin: 0 }}>
          General guidance only — always follow the specific instructions given to you by our team.
        </p>
      </section>
    </>
  );
}
