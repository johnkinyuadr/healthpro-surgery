import type { Metadata } from "next";
import Link from "next/link";
import ServiceCover from "@/components/ServiceCover";
import FAQSection from "@/app/components/FAQSection";
import KiswahiliSummary from "@/components/KiswahiliSummary";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recovery After Hernia Repair: A Patient Guide",
  description:
    "What to expect after inguinal, umbilical or incisional hernia repair: pain relief, wound care, returning to work, driving and lifting, and warning signs after surgery.",
  openGraph: {
    type: "website",
    siteName: "HealthPro Surgery",
    title: "Recovery After Hernia Repair: A Patient Guide | HealthPro Surgery",
    description: "What to expect after inguinal, umbilical or incisional hernia repair: pain relief, wound care, returning to work, driving and lifting, and warning signs after surgery.",
    images: [{ url: "https://www.healthprosurgery.com/images/services/hernia-surgery.jpg", width: 1200, height: 800 }],
  },
  alternates: { canonical: "/patient-guides/hernia-repair-recovery" },
};

const TIMELINE = [
  {
    title: "Day of surgery",
    text: "Most patients go home the same day or the next day. Walk gently as soon as you feel able — it reduces the risk of clots and helps recovery.",
  },
  {
    title: "First week",
    text: "Expect soreness, some swelling and bruising. Take regular pain relief as prescribed. Short walks several times a day are encouraged.",
  },
  {
    title: "One to two weeks",
    text: "Most people return to desk or light work and resume driving once they can move freely and perform an emergency stop without pain.",
  },
  {
    title: "Four to six weeks",
    text: "Gradually return to heavier lifting, manual work and sport, as advised by your surgeon for your type of repair.",
  },
];

const CARE = [
  {
    title: "Pain relief",
    text: "Take painkillers regularly for the first few days rather than waiting for pain to build. A cushion pressed over the wound helps when coughing or getting up.",
  },
  {
    title: "Wound care",
    text: "Keep the dressing clean and dry and follow your discharge instructions for showering. Avoid soaking the wound in a bath or swimming until it has healed.",
  },
  {
    title: "Avoid constipation",
    text: "Drink plenty of water and eat fruit, vegetables and fibre. Straining can be painful; ask for a mild laxative if needed, especially while taking strong painkillers.",
  },
  {
    title: "Stay active, lift carefully",
    text: "Walking is good from day one. Avoid heavy lifting and straining in the early weeks, and bend at the knees when you do lift.",
  },
  {
    title: "Reduce the risk of recurrence",
    text: "Stopping smoking, maintaining a healthy weight and getting treatment for a chronic cough all protect your repair in the long term.",
  },
];

const URGENT = [
  "Fever, or redness, heat or pus from the wound",
  "Pain that is severe or getting worse rather than better",
  "Being unable to pass urine",
  "Persistent vomiting or a swollen, hard abdomen",
  "A rapidly increasing swelling at the operation site",
  "Calf pain or swelling, chest pain or breathlessness",
];

const faqs = [
  {
    question: "Is swelling or bruising normal after hernia repair?",
    answer:
      "Yes. Some swelling and bruising around the wound — and in the scrotum after groin hernia repair — is common and settles over a few weeks. A rapidly increasing or very painful swelling should be checked.",
  },
  {
    question: "Will the mesh cause problems?",
    answer:
      "Mesh is the standard way to reinforce most hernia repairs and reduces the chance of the hernia returning. Long-term problems are uncommon; persistent pain should be discussed with your surgeon.",
  },
  {
    question: "When can I return to work?",
    answer:
      "Most people return to office work within one to two weeks. Manual work involving heavy lifting usually requires four to six weeks, depending on the repair.",
  },
  {
    question: "Can the hernia come back?",
    answer:
      "Recurrence is uncommon after modern repair but can happen. Risk is higher with smoking, obesity, chronic cough and heavy straining.",
  },
];

export default function HerniaRecoveryPage() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Patient guide
        </div>
        <h1 className="h1">Recovery after hernia repair</h1>
        <p className="p" style={{ maxWidth: 780 }}>
          Most people recover well from hernia surgery and return to normal life within a few
          weeks. This guide explains what to expect, how to look after yourself, and when to seek
          help.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello HealthPro Surgery, I have a question about my recovery after hernia surgery.")}
            target="_blank"
            rel="noreferrer"
          >
            Ask a question
          </a>
          <a className="btn" href="#warning-signs">
            Warning signs
          </a>
        </div>
      </section>

      <ServiceCover images={[{ src: "/images/services/hernia-surgery.jpg", alt: "Recovery after laparoscopic hernia repair" }]} />

      <KiswahiliSummary>
        <p>
          Baada ya upasuaji wa ngiri, wagonjwa wengi hurudi nyumbani siku hiyo hiyo au siku
          inayofuata. Tembea taratibu tangu siku ya kwanza, tumia dawa za maumivu kama ulivyoelekezwa,
          na epuka kubeba vitu vizito kwa wiki kadhaa. Kula vyakula vyenye nyuzinyuzi na kunywa maji
          mengi ili kuepuka kufunga choo.
        </p>
        <p>
          Tafuta msaada haraka ukipata homa, kidonda kutoa usaha, maumivu makali yanayoongezeka,
          kutapika, au kushindwa kukojoa.
        </p>
      </KiswahiliSummary>

      <h2 className="sectionTitle">Your recovery, step by step</h2>
      <ol className="pathway pathwayCalm">
        {TIMELINE.map((t) => (
          <li key={t.title}>
            {t.title}
            <span>{t.text}</span>
          </li>
        ))}
      </ol>

      <h2 className="sectionTitle">Looking after yourself</h2>
      <section className="careGrid">
        {CARE.map((c, i) => (
          <div key={c.title} className="careItem">
            <span className="stepNum">{i + 1}</span>
            <div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section id="warning-signs" className="alertCard">
        <h2>When to seek help urgently</h2>
        <p>Contact us or go to A&amp;E if you have:</p>
        <ul>
          {URGENT.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
      </section>

      <FAQSection title="Frequently asked questions" faqs={faqs} />

      <section className="card" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 22, margin: 0 }}>Questions about your recovery?</h2>
        <p>Follow-up and wound review at Aga Khan Hospital Mombasa, Doctors&apos; Plaza.</p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello HealthPro Surgery, I’d like to book a follow-up after hernia surgery.")}
            target="_blank"
            rel="noreferrer"
          >
            Book a follow-up
          </a>
          <Link className="btn" href="/services/hernia-surgery">
            Hernia surgery
          </Link>
        </div>
        <p className="small" style={{ margin: 0 }}>
          General information only; always follow the specific instructions you are given at
          discharge.
        </p>
      </section>
    </>
  );
}
