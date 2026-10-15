import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/app/components/FAQSection";
import KiswahiliSummary from "@/components/KiswahiliSummary";
import {
  CLINIC_HOURS,
  INTERNATIONAL_INSURERS,
  LOCATION_LINE,
  MAPS_DIRECTIONS,
  OFFICE_PHONE,
  OFFICE_PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  waLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Your Visit | What to Bring, Insurance & Directions",
  description:
    "Planning your appointment at HealthPro Surgery, Aga Khan Hospital Mombasa, Doctors' Plaza: how to book, what to bring, insurance and pre-authorisation, payment and directions.",
  openGraph: {
    type: "website",
    siteName: "HealthPro Surgery",
    title: "Your Visit | HealthPro Surgery, Mombasa",
    description:
      "How to book, what to bring, insurance and pre-authorisation, payment and directions to the clinic at Aga Khan Hospital Mombasa.",
    images: [{ url: "https://www.healthprosurgery.com/images/consultation.jpg", width: 1200, height: 800 }],
  },
  alternates: { canonical: "/your-visit" },
};

const BRING = [
  { title: "National ID or passport", note: "Needed for hospital registration." },
  { title: "Insurance or scheme card", note: "Plus any referral or pre-authorisation forms from your insurer or employer." },
  { title: "Previous scan reports and images", note: "Ultrasound, Doppler, CT or MRI — the written reports and, if possible, the images on CD or USB." },
  { title: "Recent blood and laboratory results", note: "Including kidney function, blood sugar/HbA1c and blood count where available." },
  { title: "Your current medicines", note: "A written list or the packets themselves, especially blood thinners and diabetes medicines." },
  { title: "Referral letter", note: "Not required, but helpful if another doctor has seen you." },
];

const BY_CONCERN = [
  {
    title: "Leg veins or leg swelling",
    text: "Wear shorts or loose trousers so both legs can be examined and scanned easily.",
  },
  {
    title: "Diabetic foot or leg wound",
    text: "Wear loose, open footwear. Do not apply creams before the visit. Bring your glucose readings.",
  },
  {
    title: "Dialysis access",
    text: "Bring your latest dialysis and kidney results and tell us your dialysis days. Do not allow blood to be taken from or a drip placed in the arm you would prefer for your fistula.",
  },
  {
    title: "Endoscopy or colonoscopy",
    text: "A consultation is usually done first. If your procedure is booked, follow the preparation guide carefully.",
    link: { label: "Preparation guide", href: "/services/endoscopy-preparation" },
  },
];

const AFTER = [
  "Your diagnosis and options explained, with time for your questions.",
  "Any further tests, such as a Doppler scan or blood tests, arranged.",
  "If surgery or a procedure is recommended: a written plan, the hospital, and the estimated costs for insurance or self-pay.",
  "A follow-up appointment, and direct contact with the clinic if you have concerns.",
];

const faqs = [
  {
    question: "Do I need a referral to book?",
    answer:
      "No. You can book directly by phone or WhatsApp. If another doctor has seen you, a referral letter and any results they have are helpful.",
  },
  {
    question: "Is my insurance accepted?",
    answer: `All Kenyan medical insurers are accepted, together with ${INTERNATIONAL_INSURERS.map((i) => i.name).join(" and ")}. Outpatient cover varies between plans, so please check with your insurer or HR whether your scheme covers specialist consultations.`,
  },
  {
    question: "How does pre-authorisation for a procedure work?",
    answer:
      "After your consultation, our team prepares the request with the diagnosis, the planned procedure and the estimated costs and sends it to your insurer. Approval times vary by insurer, from a few hours to a few days. We confirm a date once approval is received.",
  },
  {
    question: "Can I pay myself if I am not insured?",
    answer:
      "Yes. Self-paying patients are welcome and can pay by M-Pesa. For procedures, an estimate of the costs is given in advance.",
  },
  {
    question: "Can a relative come with me?",
    answer:
      "Yes, you are welcome to bring a relative or friend. If you are having a procedure under sedation, an adult must accompany you home.",
  },
  {
    question: "I live outside Mombasa or abroad. How can I avoid unnecessary trips?",
    answer:
      "Send your scan reports first through our online second opinion. Where surgery is needed, we plan your tests, consultation and procedure together so the number of trips is kept to a minimum.",
  },
  {
    question: "What if I need to cancel or change my appointment?",
    answer: `Please call the office on ${OFFICE_PHONE_DISPLAY} or send a WhatsApp message to ${WHATSAPP_DISPLAY} as early as possible so the slot can be offered to another patient.`,
  },
];

export default function YourVisitPage() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Your visit
        </div>
        <h1 className="h1">Planning your appointment</h1>
        <p className="p" style={{ maxWidth: 780 }}>
          Everything you need for your consultation at {LOCATION_LINE}: how to book, what to bring,
          how insurance works and how to find us.
        </p>
        <div className="btnRow">
          <a className="btn btnPrimary" href={`tel:+${OFFICE_PHONE}`}>
            Call the office: {OFFICE_PHONE_DISPLAY}
          </a>
          <a
            className="btn"
            href={waLink("Hello HealthPro Surgery, I’d like to book a consultation.")}
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>

      <KiswahiliSummary>
        <p>
          Kliniki yetu iko Aga Khan Hospital Mombasa, Doctors&apos; Plaza, ghorofa ya kwanza. Kwa
          miadi, piga simu ofisini {OFFICE_PHONE_DISPLAY} au tuma ujumbe wa WhatsApp{" "}
          {WHATSAPP_DISPLAY}.
        </p>
        <p>
          Tafadhali leta kitambulisho, kadi ya bima, ripoti na picha za vipimo (ultrasound, Doppler,
          CT au MRI), majibu ya vipimo vya damu, na orodha ya dawa unazotumia. Bima zote za Kenya
          zinakubaliwa, pamoja na Bupa na Aetna. Unaweza pia kulipa kwa M-Pesa.
        </p>
      </KiswahiliSummary>

      <h2 className="sectionTitle">Booking and clinic hours</h2>
      <section className="visitGrid">
        <div className="card">
          <h3>How to book</h3>
          <ul>
            <li>
              Office line (calls): <a href={`tel:+${OFFICE_PHONE}`}>{OFFICE_PHONE_DISPLAY}</a>
            </li>
            <li>
              WhatsApp enquiries:{" "}
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>No referral is needed.</li>
            <li>Please arrive 15 minutes early for hospital registration.</li>
          </ul>
        </div>
        <div className="card">
          <h3>Clinic hours</h3>
          <ul>
            {CLINIC_HOURS.map((h) => (
              <li key={h.days}>
                {h.days}: {h.time}
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Finding us</h3>
          <p>
            {LOCATION_LINE}. At the hospital, follow the signs to Doctors&apos; Plaza; the clinic is
            on the first floor. Allow extra time for parking and registration at busy
            times.
          </p>
          <div className="btnRow" style={{ marginTop: 12 }}>
            <a className="btn" href={MAPS_DIRECTIONS} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </div>
        </div>
      </section>

      <h2 className="sectionTitle">What to bring</h2>
      <ul className="visitChecklist">
        {BRING.map((b) => (
          <li key={b.title}>
            <strong>{b.title}</strong>
            <span>{b.note}</span>
          </li>
        ))}
      </ul>

      <h2 className="sectionTitle">Depending on your concern</h2>
      <section className="careGrid">
        {BY_CONCERN.map((c, i) => (
          <div key={c.title} className="careItem">
            <span className="stepNum">{i + 1}</span>
            <div>
              <h3>{c.title}</h3>
              <p>
                {c.text}{" "}
                {c.link && (
                  <Link href={c.link.href} style={{ color: "var(--teal)", fontWeight: 600 }}>
                    {c.link.label} →
                  </Link>
                )}
              </p>
            </div>
          </div>
        ))}
      </section>

      <h2 className="sectionTitle">Insurance and payment</h2>
      <section className="visitGrid">
        <div className="card">
          <h3>Insurance</h3>
          <p>
            All Kenyan medical insurers are accepted, together with{" "}
            {INTERNATIONAL_INSURERS.map((i) => i.name).join(" and ")}. Outpatient cover differs
            between plans, so check with your insurer or HR before your visit.{" "}
            <Link href="/#insurance" style={{ color: "var(--teal)", fontWeight: 600 }}>
              See accepted insurers →
            </Link>
          </p>
        </div>
        <div className="card">
          <h3>Pre-authorisation for procedures</h3>
          <p>
            After your consultation, we send your insurer the diagnosis, the planned procedure and the
            estimated costs. We confirm your procedure date once approval is received.
          </p>
        </div>
        <div className="card">
          <h3>Self-pay</h3>
          <p>
            Self-paying patients are welcome and can pay by M-Pesa. For procedures, you receive a
            cost estimate in advance.
          </p>
        </div>
      </section>

      <h2 className="sectionTitle">After your consultation</h2>
      <ol className="pathway pathwayCalm">
        {AFTER.map((a) => (
          <li key={a}>
            <span style={{ fontWeight: 500 }}>{a}</span>
          </li>
        ))}
      </ol>

      <FAQSection title="Frequently asked questions" faqs={faqs} />

      <section className="card" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 22, margin: 0 }}>Coming from outside Mombasa?</h2>
        <p>
          Send your scan reports first for a written specialist opinion within 24 hours. If you need
          surgery, we plan your tests, consultation and procedure together to keep travel to a minimum.
        </p>
        <div className="btnRow">
          <Link className="btn btnPrimary" href="/second-opinion">
            Online second opinion
          </Link>
          <Link className="btn" href="/contact">
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
}
