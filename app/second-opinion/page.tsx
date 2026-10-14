import type { Metadata } from "next";
import Link from "next/link";
import FAQSection from "@/app/components/FAQSection";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Specialist Surgical Second Opinion | Online or In Person",
  description:
    "Independent specialist surgical second opinion from Dr John Kinyua Murithi, Mombasa. Submit your case online, pay only once it is accepted, and receive a written report within 24 hours. For patients, families abroad and referring doctors.",
  alternates: { canonical: "/second-opinion" },
};

const WHO_FOR = [
  "You have been advised to have surgery and want to be sure it is necessary",
  "You are choosing between treatment options",
  "You are unsure about a diagnosis or a scan result",
  "A relative is being treated elsewhere and you want independent advice",
  "Your condition is not improving with the current plan",
];

const STEPS = [
  {
    title: "Submit your case",
    text: "Complete the form below — no payment yet. Then send your scan reports, lab results and discharge summaries on WhatsApp.",
  },
  {
    title: "We confirm suitability",
    text: "We review your details and contact you to confirm that the case is suitable for an online opinion, or whether an in-person review would serve you better.",
  },
  {
    title: "Pay once accepted",
    text: "Only after acceptance, pay KSh 2,000 by M-Pesa. We send the payment details with your confirmation.",
  },
  {
    title: "Receive your written report",
    text: "A signed written opinion within 24 hours of payment. Requests over the weekend may take slightly longer.",
  },
];

const REPORT_CONTENTS = [
  "A summary of your history and the findings reviewed",
  "An assessment of the diagnosis",
  "The treatment options available, with their benefits and risks",
  "A clear recommendation and suggested next steps",
  "Questions to discuss with your treating team",
];

const WHAT_TO_SEND = [
  "Radiology reports — ultrasound, duplex, CT, MRI, angiography",
  "Laboratory results",
  "Endoscopy or colonoscopy reports and histology",
  "Discharge summaries and operation notes",
  "The treatment or operation you have been offered",
  "A list of current medications",
];

const CONDITIONS = [
  "Vascular disease, aneurysms and carotid disease",
  "Diabetic foot and limb-salvage decisions",
  "Varicose veins and venous disease",
  "Dialysis access",
  "Hernias and gallbladder disease",
  "Thyroid and breast disease",
  "Abdominal and colorectal surgery decisions",
  "Endoscopy and colonoscopy findings",
];

const faqs = [
  {
    question: "Do I pay before submitting?",
    answer:
      "No. Submit your case first. We confirm it is suitable for an online opinion before asking for payment, so you never pay for a review we cannot provide.",
  },
  {
    question: "Do you review the scan images themselves?",
    answer:
      "The online opinion is based on the written reports of your scans, together with your history and other results. If the images themselves need to be reviewed, we will advise you on the next step.",
  },
  {
    question: "How quickly will I receive the report?",
    answer:
      "Within 24 hours of payment. Requests received on Saturday afternoon or Sunday may be delayed until the next working day.",
  },
  {
    question: "Does a second opinion commit me to surgery?",
    answer:
      "No. The purpose is independent advice in your best interest. You are free to continue with your current team, and the report is written so that you can share it with them.",
  },
  {
    question: "Can I request an opinion for a family member?",
    answer:
      "Yes. Many requests come from relatives, including family living abroad. Please confirm that the patient agrees to their information being shared with us.",
  },
  {
    question: "Is this suitable for emergencies?",
    answer:
      "No. Sudden severe pain, heavy bleeding, a cold, pale or painful limb, signs of stroke, or a rapidly spreading infection need emergency care. Go to the nearest Accident & Emergency department.",
  },
];

export default function SecondOpinionPage() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Second opinion
        </div>
        <h1 className="h1">Independent specialist surgical second opinion</h1>
        <p className="p" style={{ maxWidth: 780 }}>
          Clear, honest advice before an important surgical decision. Submit your case online —
          you pay only once it is accepted — and receive a written specialist report within 24 hours.
        </p>
        <div className="btnRow">
          <a className="btn btnPrimary" href="#request">
            Submit your case
          </a>
          <a
            className="btn"
            href={waLink("Hello HealthPro Surgery, I have a question about a second opinion.")}
            target="_blank"
            rel="noreferrer"
          >
            Ask on WhatsApp
          </a>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h2 style={{ fontSize: 20 }}>A second opinion may help if</h2>
          <ul className="list" style={{ marginTop: 10 }}>
            {WHO_FOR.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 style={{ fontSize: 20 }}>Conditions commonly reviewed</h2>
          <ul className="list" style={{ marginTop: 10 }}>
            {CONDITIONS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <h2 className="sectionTitle">How it works</h2>
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

      <section className="grid" style={{ marginTop: 32 }}>
        <div className="card">
          <h2 style={{ fontSize: 20 }}>Your written report includes</h2>
          <ul className="list" style={{ marginTop: 10 }}>
            {REPORT_CONTENTS.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p className="small" style={{ marginTop: 12 }}>
            Issued on HealthPro Surgery letterhead and signed by Dr John Kinyua Murithi, MBChB,
            FCS(ECSA), FACS.
          </p>
        </div>
        <div className="card">
          <h2 style={{ fontSize: 20 }}>What to send</h2>
          <ul className="list" style={{ marginTop: 10 }}>
            {WHAT_TO_SEND.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
          <p className="small" style={{ marginTop: 12 }}>
            The online opinion is based on written scan reports rather than the images themselves.
          </p>
        </div>
      </section>

      <h2 className="sectionTitle">Fees</h2>
      <section className="priceCard" style={{ maxWidth: 640 }}>
        <div className="priceRow">
          <div>
            <b>Online second opinion</b>
            <small>Written report within 24 hours of payment</small>
          </div>
          <div className="price">KSh 2,000</div>
        </div>
        <div className="priceRow">
          <div>
            <b>In-person second opinion</b>
            <small>When examination is needed — Aga Khan Hospital Mombasa</small>
          </div>
          <div className="price">KSh 3,000</div>
        </div>
        <p className="payNote">
          Payment is requested only after your case is accepted. Medical insurance is accepted for
          in-person consultations.
        </p>
      </section>

      <section className="grid" style={{ marginTop: 32 }}>
        <div className="card">
          <div className="eyebrow" style={{ marginBottom: 8 }}>
            For families abroad
          </div>
          <h2 style={{ fontSize: 20 }}>Caring for a relative in Kenya from overseas?</h2>
          <p>
            If a parent or relative in Kenya has been advised to have surgery, you can request an
            independent opinion on their behalf from anywhere in the world. We communicate with you by
            WhatsApp or email, share the written report with you and the patient, and can arrange an
            in-person review in Mombasa if needed. Please indicate your country on the form; payment
            arrangements for overseas payers are confirmed with your acceptance.
          </p>
        </div>
        <div className="card">
          <div className="eyebrow" style={{ marginBottom: 8 }}>
            For referring doctors
          </div>
          <h2 style={{ fontSize: 20 }}>Clinician-to-clinician opinion</h2>
          <p>
            Doctors and clinical officers can request a vascular or general surgical opinion on a
            patient, including diabetic foot, limb ischaemia, aneurysm, carotid disease and dialysis
            access. Select &ldquo;Referring doctor&rdquo; on the form and include your facility and
            contact details; we will reply to you directly. For urgent vascular cases, please call{" "}
            <a href="tel:+254721446206" style={{ color: "var(--navy)", fontWeight: 600 }}>
              0721 446 206
            </a>
            .
          </p>
        </div>
      </section>

      <section id="request" className="card requestCard">
        <h2 style={{ fontSize: 24 }}>Submit your case</h2>
        <p className="small" style={{ marginBottom: 6 }}>
          No payment is needed now. After submitting, you will be asked to send your reports on
          WhatsApp.
        </p>
        <form className="form" action="https://formspree.io/f/mnjnedvp" method="POST">
          <input type="hidden" name="_redirect" value="https://www.healthprosurgery.com/second-opinion/received" />
          <input type="hidden" name="service" value="Second opinion request (pay after acceptance)" />
          <input type="hidden" name="_subject" value="New second opinion request — HealthPro Surgery" />

          <label className="label" htmlFor="so-role">I am</label>
          <select id="so-role" className="input" name="requester_role" required defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            <option>The patient</option>
            <option>A relative or carer of the patient</option>
            <option>A referring doctor or clinician</option>
          </select>

          <label className="label" htmlFor="so-name">Your full name</label>
          <input id="so-name" className="input" type="text" name="name" required />

          <label className="label" htmlFor="so-phone">Phone / WhatsApp number</label>
          <input id="so-phone" className="input" type="tel" name="phone" placeholder="+254..." required />

          <label className="label" htmlFor="so-email">Email address</label>
          <input id="so-email" className="input" type="email" name="email" required />

          <label className="label" htmlFor="so-country">Country where you live</label>
          <input id="so-country" className="input" type="text" name="country" placeholder="e.g. Kenya, United Kingdom" required />

          <label className="label" htmlFor="so-patient">Patient&apos;s name and age (if not you)</label>
          <input id="so-patient" className="input" type="text" name="patient_details" placeholder="e.g. Mary W., 68" />

          <label className="label" htmlFor="so-facility">Referring doctor: facility and role (optional)</label>
          <input id="so-facility" className="input" type="text" name="referrer_facility" />

          <label className="label" htmlFor="so-summary">Brief clinical summary</label>
          <textarea
            id="so-summary"
            className="textarea"
            name="summary"
            rows={5}
            placeholder="Main problem, how long it has been present, diagnosis so far, and treatment or surgery offered."
            required
          />

          <label className="label" htmlFor="so-question">What question would you like answered?</label>
          <textarea
            id="so-question"
            className="textarea"
            name="question"
            rows={3}
            placeholder="e.g. Is surgery necessary? Which option is safest? Can this wait?"
            required
          />

          <label className="consent">
            <input type="checkbox" name="consent" value="yes" required />
            <span>
              I consent to HealthPro Surgery using the information I provide, including health
              information, to assess this request, as described in the{" "}
              <Link href="/privacy-policy">privacy policy</Link>. If I am requesting on behalf of
              someone else, I confirm that they agree to their information being shared.
            </span>
          </label>

          <button type="submit" className="btn btnPrimary">
            Submit — no payment yet
          </button>
          <p className="small" style={{ margin: 0 }}>
            Not for emergencies. If symptoms are severe or sudden, go to the nearest Accident &amp;
            Emergency department.
          </p>
        </form>
      </section>

      <FAQSection title="Frequently asked questions" faqs={faqs} />
    </>
  );
}
