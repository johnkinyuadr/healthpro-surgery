import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/app/components/FAQSection";
import {
  LOCATION_LINE,
  OFFICE_PHONE,
  OFFICE_PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  waLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Referring Doctors | Refer a Patient to a Vascular & General Surgeon in Mombasa",
  description:
    "Refer patients to Dr John Kinyua Murithi, Consultant General, Vascular and Laparoscopic Surgeon, Mombasa. Online referral form, urgent referral line and a written report back to the referring doctor.",
  openGraph: {
    type: "website",
    siteName: "HealthPro Surgery",
    title: "Referring Doctors | HealthPro Surgery, Mombasa",
    description:
      "Online referral form, urgent referral line and a written report back to you. Vascular, dialysis access, laparoscopic and general surgery, and GI endoscopy.",
    images: [{ url: "https://www.healthprosurgery.com/images/vasccons.jpg", width: 1200, height: 800 }],
  },
  alternates: { canonical: "/referring-doctors" },
};

const SCOPE = [
  {
    title: "Vascular",
    items: [
      "Diabetic foot with ischaemia or infection",
      "Peripheral arterial disease and chronic limb-threatening ischaemia",
      "Abdominal and peripheral aneurysms",
      "Carotid stenosis and TIA work-up",
      "Varicose veins, venous ulcers and chronic venous insufficiency",
      "Vascular trauma and iatrogenic vascular injury",
    ],
  },
  {
    title: "Dialysis access",
    items: [
      "Planning and creation of AV fistulas and AV grafts",
      "Failing, non-maturing or thrombosed access",
      "Aneurysmal access, steal syndrome and access bleeding",
      "Central venous stenosis and arm swelling",
    ],
  },
  {
    title: "General, laparoscopic & GI",
    items: [
      "Inguinal, umbilical, incisional and recurrent hernias",
      "Gallstone disease and cholecystitis",
      "OGD and colonoscopy, including surveillance and polypectomy",
      "Colorectal and anorectal conditions",
      "Soft-tissue lumps and minor procedures",
    ],
  },
];

const URGENT = [
  "Acute limb ischaemia: a cold, pale, painful or numb limb",
  "Diabetic foot sepsis: spreading cellulitis, gas, abscess or systemic illness",
  "Suspected ruptured or symptomatic aneurysm",
  "Bleeding, thrombosed or infected dialysis access",
  "Vascular trauma or active haemorrhage",
];

const STEPS = [
  {
    title: "Send the referral",
    text: "Use the form below, or send your referral letter on WhatsApp. Attach results and imaging reports where available.",
  },
  {
    title: "We contact the patient",
    text: "Our office calls the patient to arrange an appointment, usually within one working day, and confirms insurance details.",
  },
  {
    title: "Assessment and plan",
    text: "The patient is reviewed at our clinic, investigations are completed and a management plan is agreed with them.",
  },
  {
    title: "Report back to you",
    text: "You receive a written summary of findings, the plan and any procedure performed. Patients return to your care for ongoing management.",
  },
];

const INCLUDE = [
  "Patient name, age and phone number",
  "Reason for referral and the question you want answered",
  "Relevant history, comorbidities and current medicines (especially anticoagulants and antiplatelets)",
  "Results: renal function, HbA1c, full blood count, as relevant",
  "Imaging and Doppler reports, with images if available",
  "Insurance provider, if known",
];

const faqs = [
  {
    question: "Does the patient need a referral to be seen?",
    answer:
      "No, patients may book directly. A referral letter is still very helpful, and ensures that you receive a report on the outcome.",
  },
  {
    question: "Will I receive feedback on my patient?",
    answer:
      "Yes. A written summary is sent to you by email or WhatsApp after the consultation, and after any procedure. Patients are returned to your care for ongoing management.",
  },
  {
    question: "Can I ask for an opinion without the patient travelling?",
    answer:
      "Yes. For an opinion based on imaging and reports, use the online second opinion service and select “Referring doctor”. A written opinion is provided within 24 hours of acceptance.",
  },
  {
    question: "Which hospitals do you operate in?",
    answer:
      "Consultations are held at Aga Khan Hospital Mombasa, Doctors’ Plaza. Procedures are performed at Aga Khan Hospital Mombasa and other hospitals in Mombasa and the South Coast.",
  },
  {
    question: "Are referrals from outside Mombasa accepted?",
    answer:
      "Yes. Referrals are welcome from across Kenya and the region. For patients travelling long distances, reports can be reviewed first so that the visit is planned efficiently.",
  },
];

export default function ReferringDoctorsPage() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          For referring doctors
        </div>
        <h1 className="h1">Refer a patient</h1>
        <p className="p" style={{ maxWidth: 800 }}>
          Specialist vascular, dialysis access, laparoscopic and general surgery, and GI endoscopy in
          Mombasa. Referrals are seen promptly, and you receive a written report on every patient you
          refer.
        </p>
        <div className="btnRow">
          <a className="btn btnPrimary" href="#referral-form">
            Referral form
          </a>
          <a
            className="btn"
            href={waLink("Hello Dr Kinyua, I would like to refer a patient.\n\nReferring doctor:\nFacility:\nPatient:\nReason for referral:")}
            target="_blank"
            rel="noreferrer"
          >
            Refer on WhatsApp
          </a>
        </div>
      </section>

      <section id="urgent" className="alertCard">
        <h2>Urgent referrals: call directly</h2>
        <p>
          For the following, please call{" "}
          <a href={`tel:+${WHATSAPP_NUMBER}`} style={{ color: "#8a2414", fontWeight: 700 }}>
            {WHATSAPP_DISPLAY}
          </a>{" "}
          and send the patient to the Accident &amp; Emergency department at Aga Khan Hospital Mombasa:
        </p>
        <ul>
          {URGENT.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
        <p className="alertNote">Do not use the online form for urgent cases.</p>
      </section>

      <h2 className="sectionTitle">How the referral works</h2>
      <section className="careGrid">
        {STEPS.map((s, i) => (
          <div key={s.title} className="careItem">
            <span className="stepNum">{i + 1}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          </div>
        ))}
      </section>

      <h2 className="sectionTitle">Conditions we accept</h2>
      <section className="visitGrid">
        {SCOPE.map((s) => (
          <div key={s.title} className="card">
            <h3>{s.title}</h3>
            <ul>
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <h2 className="sectionTitle">What to include</h2>
      <ul className="visitChecklist">
        {INCLUDE.map((i) => (
          <li key={i}>
            <strong>{i}</strong>
          </li>
        ))}
      </ul>

      <section id="referral-form" className="card requestCard anchorTarget" style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 24 }}>Referral form</h2>
        <p className="small" style={{ marginBottom: 6 }}>
          For routine and soon referrals. After submitting, you can send imaging and reports on
          WhatsApp to {WHATSAPP_DISPLAY}.
        </p>
        <form className="form" action="https://formspree.io/f/mnjnedvp" method="POST">
          <input type="hidden" name="_redirect" value="https://www.healthprosurgery.com/referring-doctors/received" />
          <input type="hidden" name="service" value="Doctor referral" />
          <input type="hidden" name="_subject" value="New patient referral — HealthPro Surgery" />

          <h3 className="formGroupTitle">Referring doctor</h3>
          <label className="label" htmlFor="rf-name">Your name</label>
          <input id="rf-name" className="input" type="text" name="referrer_name" placeholder="Dr ..." required />

          <label className="label" htmlFor="rf-role">Role / specialty</label>
          <input id="rf-role" className="input" type="text" name="referrer_role" placeholder="e.g. Physician, GP, Nephrologist" required />

          <label className="label" htmlFor="rf-facility">Facility and town</label>
          <input id="rf-facility" className="input" type="text" name="referrer_facility" required />

          <label className="label" htmlFor="rf-phone">Phone / WhatsApp</label>
          <input id="rf-phone" className="input" type="tel" name="referrer_phone" placeholder="+254..." required />

          <label className="label" htmlFor="rf-email">Email (for the report back)</label>
          <input id="rf-email" className="input" type="email" name="email" required />

          <h3 className="formGroupTitle">Patient</h3>
          <label className="label" htmlFor="rf-patient">Patient name and age</label>
          <input id="rf-patient" className="input" type="text" name="patient_details" placeholder="e.g. John M., 64" required />

          <label className="label" htmlFor="rf-patient-phone">Patient phone number</label>
          <input id="rf-patient-phone" className="input" type="tel" name="patient_phone" placeholder="+254..." required />

          <label className="label" htmlFor="rf-insurance">Insurance (if known)</label>
          <input id="rf-insurance" className="input" type="text" name="patient_insurance" placeholder="e.g. AAR, Jubilee, SHA, self-pay" />

          <label className="label" htmlFor="rf-urgency">Urgency</label>
          <select id="rf-urgency" className="input" name="urgency" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>Routine</option>
            <option>Soon (within 1 week)</option>
          </select>

          <label className="label" htmlFor="rf-reason">Reason for referral and your question</label>
          <textarea
            id="rf-reason"
            className="textarea"
            name="reason"
            rows={4}
            placeholder="Working diagnosis, key findings and what you would like us to address."
            required
          />

          <label className="label" htmlFor="rf-history">Relevant history, medicines and results</label>
          <textarea
            id="rf-history"
            className="textarea"
            name="history"
            rows={4}
            placeholder="Comorbidities, anticoagulants/antiplatelets, renal function, HbA1c, imaging or Doppler findings."
          />

          <label className="consent">
            <input type="checkbox" name="consent" value="yes" required />
            <span>
              I confirm that the patient has agreed to this referral and to their information being
              shared with HealthPro Surgery, as described in the{" "}
              <Link href="/privacy-policy">privacy policy</Link>.
            </span>
          </label>

          <button type="submit" className="btn btnPrimary">
            Send referral
          </button>
          <p className="small" style={{ margin: 0 }}>
            Urgent case? Do not use this form — call {WHATSAPP_DISPLAY}.
          </p>
        </form>
      </section>

      <FAQSection title="Questions from colleagues" faqs={faqs} />

      <section className="card" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 22, margin: 0 }}>Contact the clinic</h2>
        <p>
          {LOCATION_LINE}. Office:{" "}
          <a href={`tel:+${OFFICE_PHONE}`} style={{ color: "var(--navy)", fontWeight: 600 }}>
            {OFFICE_PHONE_DISPLAY}
          </a>
          . WhatsApp and urgent referrals:{" "}
          <a href={`tel:+${WHATSAPP_NUMBER}`} style={{ color: "var(--navy)", fontWeight: 600 }}>
            {WHATSAPP_DISPLAY}
          </a>
          .
        </p>
        <div className="btnRow">
          <Link className="btn btnPrimary" href="/second-opinion">
            Opinion on imaging only
          </Link>
          <Link className="btn" href="/patient-guides">
            Patient guides to share
          </Link>
        </div>
      </section>
    </>
  );
}
