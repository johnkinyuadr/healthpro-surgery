import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/app/components/FAQSection";
import KiswahiliSummary from "@/components/KiswahiliSummary";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Caring for Your AV Fistula: A Patient Guide",
  description:
    "How to look after an arteriovenous (AV) fistula for haemodialysis: daily checks for the thrill, protecting the access arm, exercises after surgery, and warning signs that need urgent care.",
  alternates: { canonical: "/patient-guides/av-fistula-care" },
};

const URGENT = [
  "You can no longer feel the buzz (thrill) or hear the whoosh over the fistula",
  "Bleeding that does not stop after 10–15 minutes of firm pressure — this is an emergency",
  "Redness, heat, swelling, pus or fever around the fistula or wound",
  "Your hand becomes cold, pale, numb or painful, especially during dialysis",
  "The whole arm, hand or face becomes swollen",
  "The skin over the fistula becomes thin, shiny, scabbed or ulcerated, or the fistula grows rapidly",
];

const AFTER_SURGERY = [
  {
    title: "Rest and elevate",
    text: "For the first few days, keep the arm raised on a pillow to reduce swelling. Gentle finger and wrist movement is encouraged.",
  },
  {
    title: "Wound care",
    text: "Keep the dressing clean and dry until it is reviewed, and follow the instructions you are given for showering and stitches.",
  },
  {
    title: "Exercises",
    text: "When advised — usually once the wound has settled — squeeze a soft ball several times a day. This helps the vein enlarge and strengthen.",
  },
  {
    title: "Time to mature",
    text: "A fistula usually needs about 6 weeks or longer to develop before it can be used for dialysis. Your surgeon will check it before first use.",
  },
];

const DAILY = [
  {
    title: "Feel the thrill every day",
    text: "Place your fingers lightly over the fistula each morning and evening. You should feel a continuous buzz or vibration.",
  },
  {
    title: "Keep it clean",
    text: "Wash the arm with soap and water every day and before every dialysis session.",
  },
  {
    title: "Protect the arm",
    text: "No blood pressure measurements, blood tests, injections or drips in the fistula arm. Tell every health worker which arm has your fistula.",
  },
  {
    title: "Nothing tight",
    text: "Avoid watches, bracelets, tight sleeves or bags that press on the fistula, and do not sleep on that arm.",
  },
  {
    title: "Avoid injury and heavy lifting",
    text: "Protect the arm from knocks and cuts, and avoid carrying heavy loads with it.",
  },
  {
    title: "After dialysis",
    text: "Apply firm but gentle pressure to the needle sites until bleeding stops, without blocking the flow of the fistula.",
  },
];

const faqs = [
  {
    question: "What is an AV fistula?",
    answer:
      "It is a connection made by a surgeon between an artery and a vein, usually in the arm. The increased blood flow makes the vein larger and stronger, so it can be used repeatedly for haemodialysis.",
  },
  {
    question: "Why is a fistula preferred over a dialysis catheter?",
    answer:
      "A fistula uses your own blood vessels, so it has a lower risk of infection and blockage and usually lasts longer than a catheter or graft.",
  },
  {
    question: "What should I do if I cannot feel the thrill?",
    answer:
      "Contact your surgeon or dialysis unit the same day. A blocked fistula can often be rescued if it is treated quickly, ideally within hours.",
  },
  {
    question: "Can I exercise with a fistula?",
    answer:
      "Yes. Normal activity and walking are encouraged. Avoid heavy lifting with the fistula arm and contact sports that could injure it.",
  },
  {
    question: "Is it normal for the fistula to look prominent?",
    answer:
      "A working fistula is usually visible and may be slightly raised. Rapid enlargement, thinning skin or a scab over the fistula is not normal and needs prompt review.",
  },
];

export default function AvFistulaCarePage() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Patient guide
        </div>
        <h1 className="h1">Caring for your AV fistula</h1>
        <p className="p" style={{ maxWidth: 780 }}>
          Your fistula is your lifeline for dialysis. A few simple daily habits help it work well
          and last for many years — and knowing the warning signs means problems can be treated
          before the fistula is lost.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello HealthPro Surgery, I have a question about my AV fistula.")}
            target="_blank"
            rel="noreferrer"
          >
            Ask about your fistula
          </a>
          <a className="btn" href="#warning-signs">
            Warning signs
          </a>
        </div>
      </section>

      <KiswahiliSummary>
        <p>
          Fistula (AV fistula) ni muunganiko wa ateri na vena mkononi unaotumika kwa usafishaji damu
          (dialysis). Kila siku, gusa fistula yako ili kuhisi mtetemo. Usiruhusu kupimwa shinikizo la
          damu, kutolewa damu, wala kuwekewa dripu kwenye mkono wenye fistula, na usivae saa au nguo
          zinazobana mkono huo.
        </p>
        <p>
          Ukikosa kuhisi mtetemo, au damu ikiendelea kutoka baada ya kuibana kwa dakika 10 hadi 15,
          tafuta msaada mara moja.
        </p>
      </KiswahiliSummary>

      <section id="warning-signs" className="alertCard">
        <h2>When to seek help urgently</h2>
        <p>Contact your surgeon or dialysis unit the same day, or go to A&amp;E, if:</p>
        <ul>
          {URGENT.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
        <p className="alertNote">
          A blocked fistula can often be saved if treated quickly — do not wait for your next
          dialysis session.
        </p>
      </section>

      <h2 className="sectionTitle">After your operation</h2>
      <section className="careGrid">
        {AFTER_SURGERY.map((c, i) => (
          <div key={c.title} className="careItem">
            <span className="stepNum">{i + 1}</span>
            <div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </section>

      <h2 className="sectionTitle">Everyday care</h2>
      <section className="careGrid">
        {DAILY.map((c, i) => (
          <div key={c.title} className="careItem">
            <span className="stepNum">{i + 1}</span>
            <div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </section>

      <FAQSection title="Frequently asked questions" faqs={faqs} />

      <section className="card" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 22, margin: 0 }}>Concerned about your fistula?</h2>
        <p>
          Fistula review and access salvage at Aga Khan Hospital Mombasa, Doctors&apos; Plaza.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello HealthPro Surgery, I’d like my AV fistula reviewed.")}
            target="_blank"
            rel="noreferrer"
          >
            Book a fistula review
          </a>
          <Link className="btn" href="/services/dialysis-access">
            Dialysis access
          </Link>
        </div>
        <p className="small" style={{ margin: 0 }}>
          General information only; follow the specific instructions of your surgeon and dialysis
          team.
        </p>
      </section>
    </>
  );
}
