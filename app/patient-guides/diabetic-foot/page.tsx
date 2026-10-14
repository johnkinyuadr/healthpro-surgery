import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/app/components/FAQSection";
import VideoEmbed from "@/components/VideoEmbed";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Diabetic Foot Care: A Patient Guide",
  description:
    "How to protect your feet if you have diabetes: daily foot checks, footwear, warning signs of a diabetic foot ulcer or infection, and when to seek urgent care. By Dr John Kinyua Murithi, vascular surgeon, Mombasa.",
  alternates: { canonical: "/patient-guides/diabetic-foot" },
};

const DAILY_CARE = [
  {
    title: "Check your feet every day",
    text: "Look at the tops, soles, heels and between the toes for cuts, blisters, cracks, redness, swelling or colour change. Use a mirror, or ask a family member to look if you cannot see well.",
  },
  {
    title: "Never walk barefoot",
    text: "Not indoors, not at the beach, not at the mosque or church. Wear shoes or protective sandals at all times; numb feet cannot feel stones, thorns or hot sand.",
  },
  {
    title: "Wash and dry carefully",
    text: "Wash your feet daily in lukewarm water. Test the temperature with your elbow, not your foot. Dry gently, especially between the toes.",
  },
  {
    title: "Moisturise — but not between the toes",
    text: "Use a moisturising cream on dry skin to prevent cracks. Keep the skin between the toes dry to avoid fungal infection.",
  },
  {
    title: "Cut nails straight across",
    text: "Trim toenails straight across and file sharp edges. Do not cut corns or calluses yourself or use corn plasters or blades — see a health worker.",
  },
  {
    title: "Choose the right shoes and socks",
    text: "Wear well-fitting, closed shoes with room for the toes. Check inside each shoe for stones or rough seams before putting it on. Wear clean, seam-free socks and change them daily. Buy new shoes in the afternoon, when feet are largest.",
  },
  {
    title: "Avoid direct heat",
    text: "Do not use hot water bottles, heaters or warm the feet near a fire or jiko. Burns are a common cause of diabetic foot wounds.",
  },
  {
    title: "Control the risk factors",
    text: "Keep your blood sugar, blood pressure and cholesterol within target, take your medication as prescribed, and stop smoking — smoking greatly reduces blood flow to the feet.",
  },
];

const URGENT = [
  "A wound, blister or ulcer that is not healing",
  "Redness, warmth or swelling of the foot or leg",
  "Pus, a bad smell or discharge from a wound",
  "Black, blue or very pale skin on the toes or foot",
  "New pain in the foot or calf, especially at night or at rest",
  "Fever or feeling unwell with a foot wound",
  "A foot that has suddenly changed shape or become hot and swollen",
  "A sudden cold, pale or very painful foot",
  "Confusion, marked weakness or feeling acutely unwell",
];

const PATHWAY = ["Injury or pressure", "Unnoticed wound", "Infection", "Deep infection", "Gangrene"];

const MYTHS = [
  {
    myth: "“It doesn't hurt, so it isn't serious.”",
    fact: "Nerve damage can remove pain. A painless wound can still be dangerous.",
  },
  {
    myth: "“Amputation is inevitable.”",
    fact: "Many threatened limbs can be saved with early care and, when needed, treatment to restore blood flow.",
  },
  {
    myth: "“Home remedies can wait for later assessment.”",
    fact: "Delay allows infection and tissue loss to progress. Do not self-treat a worsening ulcer.",
  },
];

const faqs = [
  {
    question: "Why are people with diabetes at risk of foot problems?",
    answer:
      "Diabetes can damage the nerves (neuropathy), so injuries are not felt, and the blood vessels (peripheral arterial disease), so wounds heal slowly. High blood sugar also weakens the body's ability to fight infection. Together, a small cut can become a serious ulcer or infection.",
  },
  {
    question: "What is a diabetic foot ulcer?",
    answer:
      "It is an open wound, usually on the sole, toes or heel, that fails to heal. Ulcers often start from pressure, poorly fitting shoes, a burn or an unnoticed injury, and they need prompt professional treatment.",
  },
  {
    question: "Can diabetic foot problems lead to amputation?",
    answer:
      "Yes — diabetic foot disease is a leading cause of amputation. However, most amputations can be prevented by daily foot care, regular foot checks and getting help early when a problem appears.",
  },
  {
    question: "How often should my feet be checked by a health professional?",
    answer:
      "At least once a year if your feet are healthy, and more often — every one to three months — if you have reduced feeling, poor circulation, a previous ulcer or a previous amputation.",
  },
  {
    question: "What does a vascular surgeon do for the diabetic foot?",
    answer:
      "A vascular surgeon checks the blood supply to the leg and foot. Where arteries are narrowed or blocked, restoring blood flow by angioplasty or bypass surgery can allow wounds to heal and save the limb. Treatment works best as part of a team with your diabetes doctor, wound-care nurse and foot specialist.",
  },
  {
    question: "Is numbness in my feet normal with diabetes?",
    answer:
      "Numbness, tingling or burning are common signs of diabetic nerve damage. They are not normal and should be reported, because numb feet need extra protection and closer monitoring.",
  },
];

export default function DiabeticFootGuidePage() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Patient guide
        </div>
        <h1 className="h1">Diabetic foot care</h1>
        <p className="p" style={{ maxWidth: 780 }}>
          If you live with diabetes, your feet need daily attention. Nerve damage and reduced blood
          flow mean that small injuries can go unnoticed and become ulcers or infections. The good
          news is that most serious foot problems can be prevented — this guide explains how.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello HealthPro Surgery, I’d like a diabetic foot assessment.")}
            target="_blank"
            rel="noreferrer"
          >
            Book a foot assessment
          </a>
          <a className="btn" href="#warning-signs">
            Warning signs
          </a>
        </div>
      </section>

      <section className="guideVideo">
        <div className="guideVideoText">
          <div className="eyebrow">Watch</div>
          <h2 className="h2" style={{ fontSize: 28 }}>Dr Kinyua on the diabetic foot</h2>
          <p className="lead" style={{ fontSize: 16 }}>
            From the live health programme <em>Afya na Jamii</em> on Al Haajar TV Kenya, part of the
            Kenya Association of Muslim Physicians (KAMP) &ldquo;Save the Foot&rdquo; series.
          </p>
          <Link className="textLink" href="/media">
            More interviews →
          </Link>
        </div>
        <div className="guideVideoPlayer">
          <VideoEmbed youtubeId="psI5n2CEAkc" title="The Diabetic Foot — Al Haajar TV Kenya" />
        </div>
      </section>

      <section id="warning-signs" className="alertCard">
        <h2>When to seek help urgently</h2>
        <p>Contact your doctor the same day, or go to A&amp;E, if you notice any of the following:</p>
        <ul>
          {URGENT.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
        <p className="alertNote">
          Do not wait for pain — many people with diabetes cannot feel a serious wound. A foot that
          is red, hot and swollen, or a toe turning black, is an emergency.
        </p>
      </section>

      <h2 className="sectionTitle">How a small wound leads to amputation</h2>
      <p className="p" style={{ maxWidth: 780, margin: 0 }}>
        Most diabetic amputations follow the same path. Early detection at any step can stop it.
      </p>
      <ol className="pathway">
        {PATHWAY.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ol>
      <p className="pathwayNote">Early care saves limbs.</p>

      <h2 className="sectionTitle">Daily foot care: eight habits that protect your feet</h2>
      <section className="careGrid">
        {DAILY_CARE.map((c, i) => (
          <div key={c.title} className="careItem">
            <span className="stepNum">{i + 1}</span>
            <div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="grid" style={{ marginTop: 32 }}>
        <div className="card">
          <h2 style={{ fontSize: 20 }}>Who is at highest risk?</h2>
          <ul className="list" style={{ marginTop: 10 }}>
            <li>Long-standing or poorly controlled diabetes</li>
            <li>Numbness, tingling or loss of feeling in the feet</li>
            <li>Poor circulation — cold feet, weak pulses, calf pain on walking</li>
            <li>A previous foot ulcer or amputation</li>
            <li>Smoking</li>
            <li>Kidney disease or dialysis</li>
            <li>Foot deformities, corns or thick calluses</li>
            <li>Poor eyesight that makes foot checks difficult</li>
          </ul>
        </div>
        <div className="card">
          <h2 style={{ fontSize: 20 }}>What to expect at a foot assessment</h2>
          <ul className="list" style={{ marginTop: 10 }}>
            <li>Examination of the skin, nails, foot shape and footwear</li>
            <li>Testing sensation with a monofilament and tuning fork</li>
            <li>Checking foot pulses and the ankle–brachial pressure index (ABPI)</li>
            <li>Duplex ultrasound of the leg arteries if circulation is reduced</li>
            <li>Wound review, X-ray or blood tests if an ulcer or infection is present</li>
            <li>A personal plan: footwear, wound care, follow-up and, if needed, treatment to improve blood flow</li>
          </ul>
        </div>
      </section>

      <h2 className="sectionTitle">Myth or fact?</h2>
      <section className="mythGrid">
        {MYTHS.map((m) => (
          <div key={m.myth} className="mythRow">
            <div className="myth">
              <b>Myth</b> {m.myth}
            </div>
            <div className="fact">
              <b style={{ color: "var(--teal)" }}>Fact</b> {m.fact}
            </div>
          </div>
        ))}
      </section>

      <FAQSection title="Frequently asked questions" faqs={faqs} />

      <section className="card" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 22, margin: 0 }}>Concerned about your feet?</h2>
        <p>
          Early assessment saves limbs. Consultations at Aga Khan Hospital Mombasa, Doctors&apos;
          Plaza — Monday to Friday 9am–5pm, Saturday 9am–12 noon.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello HealthPro Surgery, I’d like a diabetic foot assessment.")}
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
          <Link className="btn" href="/services/vascular-surgery">
            Vascular surgery
          </Link>
        </div>
        <p className="small" style={{ margin: 0 }}>
          This guide is general information and does not replace individual medical advice. Based
          on international diabetic foot guidance (IWGDF).
        </p>
      </section>
    </>
  );
}
