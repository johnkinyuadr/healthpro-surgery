import type { Metadata } from "next";
import Link from "next/link";
import ServiceCover from "@/components/ServiceCover";
import KiswahiliSummary from "@/components/KiswahiliSummary";
import DownloadLinks from "@/components/DownloadLinks";
import { OFFICE_PHONE, OFFICE_PHONE_DISPLAY, waLink } from "@/lib/site";

const IMAGE = "/images/services/varicose-veins.jpg";

export const metadata: Metadata = {
  title: "Laser Treatment of Varicose Veins in Both Legs (Bilateral EVLA): Patient FAQ",
  description:
    "Your questions answered about bilateral endovenous laser ablation (EVLA) for varicose veins: what happens, anaesthesia, recovery, compression stockings, returning to work and driving, what is normal afterwards and results.",
  openGraph: {
    type: "website",
    siteName: "HealthPro Surgery",
    title: "Bilateral Laser Treatment of Varicose Veins (EVLA): Patient FAQ | HealthPro Surgery",
    description:
      "What happens, recovery, stockings, work and driving, what is normal afterwards and results after laser treatment of varicose veins in both legs.",
    images: [{ url: `https://www.healthprosurgery.com${IMAGE}`, width: 1200, height: 800 }],
  },
  alternates: { canonical: "/patient-guides/bilateral-evla" },
};

type QA = { question: string; answer: string };

const GROUPS: { id: string; title: string; faqs: QA[] }[] = [
  {
    id: "about",
    title: "About the treatment",
    faqs: [
      {
        question: "What is endovenous laser ablation (EVLA)?",
        answer:
          "EVLA is a minimally invasive treatment for varicose veins. Instead of removing the faulty vein through cuts, a thin laser fibre is passed inside it through a needle puncture, guided by ultrasound. The laser gently heats and seals the vein from the inside. Over the following months the sealed vein is absorbed by the body.",
      },
      {
        question: "If the vein is sealed, where does the blood go?",
        answer:
          "The treated vein is a superficial vein that is no longer working properly: its valves leak, so blood falls back down the leg instead of returning to the heart. Sealing it allows blood to flow through the healthy deep veins, which carry most of the blood from the leg anyway. Circulation usually improves after treatment.",
      },
      {
        question: "Why treat both legs at the same time?",
        answer:
          "When both legs need treatment, doing them in one session means one visit to theatre, one anaesthetic, one recovery period and less total time away from work. Bilateral treatment is common and well tolerated. If you prefer, or if there is a medical reason, the legs can be treated a few weeks apart instead.",
      },
      {
        question: "How do I know I need treatment?",
        answer:
          "Treatment is recommended when varicose veins cause symptoms such as aching, heaviness, swelling, itching or night cramps, or when there are skin changes, bleeding from a vein, phlebitis or an ulcer. A duplex ultrasound scan shows exactly which veins are leaking and confirms that EVLA is suitable.",
      },
      {
        question: "Will the smaller visible veins also be treated?",
        answer:
          "The laser treats the main faulty trunk veins. Visible branch varicose veins can be removed through tiny nicks (phlebectomy) or injected with foam (sclerotherapy), either at the same time or at a later visit. Many branches shrink on their own once the main vein is sealed. Your plan will be explained before the procedure.",
      },
    ],
  },
  {
    id: "before",
    title: "Before the procedure",
    faqs: [
      {
        question: "How should I prepare?",
        answer:
          "You will have a duplex scan to map your veins, and your medicines and medical history will be reviewed. Most regular medicines are continued. Please tell us if you take blood thinners, have had a blood clot (DVT) before, take the contraceptive pill or HRT, or could be pregnant, as these may change your plan.",
      },
      {
        question: "Can I eat on the day?",
        answer:
          "Most patients have spinal or general anaesthesia, so you will be asked not to eat for about six hours beforehand. Small sips of water are usually allowed until two hours before. Exact fasting times are given when you book.",
      },
      {
        question: "What should I bring?",
        answer:
          "Loose, comfortable trousers or a long skirt to wear home over the bandages and stockings, flat shoes, your medicines list, your insurance card, and an adult to take you home after the anaesthetic.",
      },
      {
        question: "Will my insurance cover it?",
        answer:
          "Treatment of symptomatic varicose veins is usually covered by medical insurance. We send your insurer the diagnosis, scan findings and planned procedure for pre-authorisation, and confirm your date once approval is received. Self-paying patients receive a cost estimate in advance.",
      },
    ],
  },
  {
    id: "day",
    title: "On the day",
    faqs: [
      {
        question: "What kind of anaesthesia is used?",
        answer:
          "For treatment of both legs, our preferred option is spinal anaesthesia. An injection in the lower back numbs you from the waist down for a few hours, so you feel nothing in your legs during the procedure. You stay awake and breathe for yourself, and light sedation can be added to help you relax. General anaesthesia, where you are fully asleep, is also available if you prefer it or if spinal anaesthesia is not suitable for you. Local anaesthesia alone is possible, but it is not our preferred approach when both legs are treated, because it needs many injections along both legs. Whichever option is used, a dilute fluid is also injected around the vein to protect the surrounding tissue. The anaesthetist will discuss the choice with you before the procedure.",
      },
      {
        question: "Will it hurt?",
        answer:
          "No. With spinal or general anaesthesia you will not feel the procedure. Afterwards, most people describe mild aching or tenderness rather than pain, and this is usually well controlled with simple painkillers.",
      },
      {
        question: "How long does it take?",
        answer:
          "Treating both legs usually takes about one to two hours in theatre, depending on the number of veins and whether branch veins are treated at the same time. Allow most of the day at the hospital, including time to recover from the anaesthetic.",
      },
      {
        question: "Will I stay in hospital?",
        answer:
          "EVLA is usually a day-case procedure. After a spinal anaesthetic, you rest until the feeling and strength in your legs have returned and you have passed urine, and you then go home the same day. Occasionally an overnight stay is advised.",
      },
    ],
  },
  {
    id: "after",
    title: "After the procedure",
    faqs: [
      {
        question: "Do I need to wear compression stockings?",
        answer:
          "Yes. Bandages or compression stockings are applied at the end of the procedure. Typically they are worn day and night for the first one to two days, then during the day for about one to two weeks. You will be given exact instructions; stockings reduce bruising and discomfort.",
      },
      {
        question: "Should I rest in bed after the procedure?",
        answer:
          "Resting at home for about a week after treatment is advisable, but it is not mandatory. Many patients find that a week of rest, with the legs raised, reduces bruising and discomfort and makes recovery easier. Rest does not mean staying in bed all day: get up and walk around the house for a few minutes every hour while you are awake, to keep the circulation moving. If you feel well and prefer to return to normal activities sooner, that is safe too.",
      },
      {
        question: "How much should I walk?",
        answer:
          "Once the anaesthetic has worn off, get up and walk for a few minutes every hour while you are awake. Avoid sitting with your legs down or standing still for long periods; when resting, raise your legs. Regular short walks keep blood flowing in the deep veins and reduce the risk of clots.",
      },
      {
        question: "When can I return to work?",
        answer:
          "We recommend a week off work to rest, which most patients find makes recovery more comfortable. If you feel well, office or desk work can be resumed sooner. Physically demanding work, or work involving long hours standing, should wait until after the first week.",
      },
      {
        question: "When can I drive?",
        answer:
          "Do not drive for at least 24 hours after a spinal or general anaesthetic. Most people drive again after a few days, once they can move comfortably and make an emergency stop without discomfort.",
      },
      {
        question: "When can I exercise, swim or travel?",
        answer:
          "Short walks are encouraged from the day of treatment. Return to the gym, running or sport after about two weeks. Wait until the puncture sites have healed, usually about a week, before swimming or soaking in a bath. Avoid long-haul flights and very long road journeys for about four weeks; if travel is unavoidable, discuss it with us beforehand.",
      },
      {
        question: "Can I shower?",
        answer:
          "You can usually shower once the first bandages or stockings are removed, typically after 24 to 48 hours. Pat the legs dry, then put the stockings back on.",
      },
      {
        question: "What pain relief can I take?",
        answer:
          "Most people need only simple painkillers such as paracetamol, with an anti-inflammatory such as ibuprofen if suitable for you, for a few days. Follow the advice given at discharge.",
      },
    ],
  },
  {
    id: "normal",
    title: "What is normal afterwards",
    faqs: [
      {
        question: "Is bruising normal?",
        answer:
          "Yes. Bruising along the inner thigh or calf, where the vein was treated, is very common. It is usually painless and fades over two to three weeks.",
      },
      {
        question: "I have a tight, pulling feeling in my thigh about a week later. Is that expected?",
        answer:
          "Yes. Many patients notice tightness or tenderness along the treated vein around five to ten days after treatment, a little like a pulled muscle. This is the body's normal reaction as the sealed vein is absorbed. Keep walking, wear your stockings and take simple pain relief; it settles within a few days.",
      },
      {
        question: "I can feel a firm cord or small lumps under the skin.",
        answer:
          "This is the sealed vein and is normal. It softens and gradually disappears over several weeks to a few months.",
      },
      {
        question: "Part of my leg feels numb or tingly.",
        answer:
          "A small patch of numbness or tingling occasionally occurs because tiny skin nerves lie close to the vein. It almost always improves over weeks to months.",
      },
      {
        question: "Some skin is a little darker over the treated vein.",
        answer:
          "Mild brown discolouration can occur, especially where branch veins were treated. It usually fades over months.",
      },
    ],
  },
  {
    id: "results",
    title: "Results and follow-up",
    faqs: [
      {
        question: "How soon will I notice a difference?",
        answer:
          "Aching and heaviness often improve within the first few weeks. The appearance of the legs continues to improve over two to three months as bruising settles and the treated veins are absorbed.",
      },
      {
        question: "Will I have a follow-up appointment?",
        answer:
          "Yes. A review with an ultrasound check is usually arranged a few weeks after treatment to confirm the veins are sealed and to plan any further treatment of branch veins if needed.",
      },
      {
        question: "How successful is EVLA?",
        answer:
          "EVLA is a well-established treatment recommended by international vascular guidelines as a first-line option for suitable patients. The treated vein is successfully sealed in the great majority of cases, and most patients are very satisfied with the improvement in symptoms and appearance.",
      },
      {
        question: "Can varicose veins come back?",
        answer:
          "The treated veins do not usually return, but the tendency to develop varicose veins persists, so some people develop new veins over the years. Staying active, managing your weight and avoiding prolonged standing all help. New veins can usually be treated simply.",
      },
      {
        question: "Are there any risks?",
        answer:
          "Serious complications are uncommon. Most side effects are the minor ones described above, such as bruising and temporary tenderness. Less commonly, a treated vein becomes inflamed (phlebitis), which settles with anti-inflammatory medicine and stockings. Blood clots in the deep veins are rare, and walking regularly after treatment is the best protection. Your surgeon will discuss your individual risks before you consent.",
      },
    ],
  },
];

const RECOVERY = [
  { title: "Day of treatment", text: "Spinal anaesthetic (preferred) or general anaesthetic. Home the same day once the feeling in your legs has returned." },
  { title: "First week", text: "Rest at home with legs raised (advisable, not mandatory), walking a few minutes every hour. Stockings as instructed." },
  { title: "Week 2", text: "Bruising fades. A tight feeling in the thigh is common around days 5–10. Back to work, driving and then exercise." },
  { title: "Weeks 2–12", text: "Lumps and discolouration settle. Follow-up scan. Legs continue to look and feel better." },
];

const URGENT = [
  "Increasing pain, swelling or tightness in the calf",
  "Chest pain or sudden breathlessness",
  "Fever, or spreading redness or discharge from a puncture site",
  "Bleeding that does not stop after 10 minutes of firm pressure with the leg raised",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GROUPS.flatMap((g) =>
    g.faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } }))
  ),
};

export default function BilateralEvlaPage() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Patient guide
        </div>
        <h1 className="h1">Laser treatment of varicose veins in both legs: your questions answered</h1>
        <p className="p" style={{ maxWidth: 800 }}>
          Endovenous laser ablation (EVLA) is a modern, minimally invasive day-case treatment for
          varicose veins. Most people go home the same day and are back to normal activities within
          one to two weeks. This guide explains what to expect when both legs are treated together.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello HealthPro Surgery, I have a question about laser treatment (EVLA) of my varicose veins.")}
            target="_blank"
            rel="noreferrer"
          >
            Ask a question
          </a>
          <Link className="btn" href="/services/varicose-veins">
            Varicose veins
          </Link>
        </div>
        <DownloadLinks keys={["evla"]} />
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <ServiceCover images={[{ src: IMAGE, alt: "Varicose veins and venous insufficiency of the legs" }]} />

      <KiswahiliSummary>
        <p>
          EVLA ni matibabu ya kisasa ya mishipa ya miguu iliyovimba (varicose veins) kwa kutumia
          leza. Waya mwembamba wa leza huingizwa ndani ya mshipa kupitia sindano, kwa msaada wa
          ultrasound, na kuufunga mshipa huo. Miguu yote miwili inaweza kutibiwa siku moja. Tunapendekeza
          nusukaputi ya uti wa mgongo (spinal anaesthesia); nusukaputi kamili (general anaesthesia) pia
          inapatikana. Wagonjwa wengi hurudi nyumbani siku hiyo hiyo.
        </p>
        <p>
          Baada ya matibabu, kupumzika nyumbani kwa wiki moja kunashauriwa, ingawa si lazima. Unapopumzika,
          inua miguu na amka kutembea kwa dakika chache kila saa. Vaa soksi maalum (compression stockings)
          kama ulivyoelekezwa. Michubuko na hisia ya kuvuta pajani ni kawaida na hupona yenyewe.
          Tafuta msaada haraka ukipata maumivu au uvimbe wa ndama unaozidi, maumivu ya kifua au
          kushindwa kupumua.
        </p>
      </KiswahiliSummary>

      <h2 className="sectionTitle">Your recovery at a glance</h2>
      <ol className="pathway pathwayCalm">
        {RECOVERY.map((r) => (
          <li key={r.title}>
            {r.title}
            <span>{r.text}</span>
          </li>
        ))}
      </ol>

      <nav className="faqJump" aria-label="Jump to section">
        {GROUPS.map((g) => (
          <a key={g.id} href={`#${g.id}`}>
            {g.title}
          </a>
        ))}
      </nav>

      {GROUPS.map((g) => (
        <section key={g.id} id={g.id} className="anchorTarget">
          <h2 className="sectionTitle">{g.title}</h2>
          <div className="faqList">
            {g.faqs.map((f, i) => (
              <details className="faqItem" key={f.question} open={g.id === "about" && i === 0}>
                <summary>
                  <span>{f.question}</span>
                  <span className="faqIcon" aria-hidden="true" />
                </summary>
                <div className="faqAnswer">
                  <p>{f.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}

      <section id="warning-signs" className="alertCard">
        <h2>When to contact us promptly</h2>
        <p>These problems are uncommon, but please call us or go to A&amp;E if you notice:</p>
        <ul>
          {URGENT.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
      </section>

      <section className="card" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 22, margin: 0 }}>Still have questions?</h2>
        <p>
          Call the office on{" "}
          <a href={`tel:+${OFFICE_PHONE}`} style={{ color: "var(--navy)", fontWeight: 600 }}>
            {OFFICE_PHONE_DISPLAY}
          </a>{" "}
          or send us a WhatsApp message. Consultations at Aga Khan Hospital Mombasa, Doctors&apos; Plaza.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello HealthPro Surgery, I’d like to book a varicose vein assessment.")}
            target="_blank"
            rel="noreferrer"
          >
            Book an assessment
          </a>
          <Link className="btn" href="/patient-guides">
            All patient guides
          </Link>
        </div>
        <p className="small" style={{ margin: 0 }}>
          General information only. Your surgeon will give you advice specific to your treatment.
        </p>
      </section>
    </>
  );
}
