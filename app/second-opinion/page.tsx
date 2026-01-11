import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specialist Surgical Second Opinion",
  description:
    "Book a specialist surgical second opinion in Mombasa — clear, independent guidance on diagnosis, proposed surgery, alternatives, and next steps.",
};

const WHATSAPP_NUMBER = "254721446206";

export default function SecondOpinionPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery. I would like to book a specialist surgical second opinion. Please guide me on the next steps."
  )}`;

  return (
    <>
      <section className="hero">
        <h1 className="h1">Specialist Surgical Second Opinion</h1>
        <p className="p">
          A surgical decision can be life-changing. We offer specialist second opinions to help you
          understand your diagnosis, confirm whether surgery is necessary, and explore safe
          alternatives where appropriate.
        </p>

        <div className="btnRow">
          <Link className="btn btnAccent" href="/contact">
            Book In-Person / Standard Second Opinion
          </Link>
          <Link className="btn" href="/online-second-opinion">
            Online Second Opinion (KSh 1,000)
          </Link>
          <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h2 style={{ marginTop: 0 }}>What this includes</h2>
          <ul className="list" style={{ marginTop: "10px" }}>
            <li>Review of your medical reports and history</li>
            <li>Review of imaging reports (and images if available)</li>
            <li>Clear explanation of diagnosis and treatment options</li>
            <li>Confirmation or reassessment of proposed surgery</li>
            <li>Discussion of alternatives (non-operative vs operative)</li>
            <li>Risk–benefit guidance and next steps</li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Common reasons patients request a second opinion</h2>
          <ul className="list" style={{ marginTop: "10px" }}>
            <li>You were told you need surgery and want confirmation</li>
            <li>You want to understand the risks and alternatives</li>
            <li>You have persistent symptoms despite treatment</li>
            <li>You need clarity before a major decision</li>
            <li>You want an independent, specialist review</li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>Conditions commonly reviewed</h2>
          <ul className="list" style={{ marginTop: "10px" }}>
            <li>Hernias</li>
            <li>Thyroid disease</li>
            <li>Breast lumps and breast disease</li>
            <li>Abdominal pain and laparotomy decisions</li>
            <li>Varicose veins and venous disease</li>
            <li>Colonoscopy / OGD indications and findings</li>
            <li>Vascular conditions and dialysis access decisions</li>
          </ul>
        </div>

        <div className="card">
          <h2 style={{ marginTop: 0 }}>How it works</h2>
          <ol className="list" style={{ marginTop: "10px" }}>
            <li>
              <strong>Choose your option:</strong> online (KSh 1,000) or standard appointment.
            </li>
            <li>
              <strong>Share your documents</strong> (reports, imaging reports, medication list).
            </li>
            <li>
              <strong>Get a structured specialist review</strong> with clear recommendations.
            </li>
            <li>
              <strong>Decide your next step</strong> with confidence.
            </li>
          </ol>
          <p className="p" style={{ marginTop: "12px" }}>
            A second opinion does not commit you to surgery. Our role is to provide honest,
            independent guidance in your best interest.
          </p>
        </div>
      </section>

      <div className="card" style={{ marginTop: "18px" }}>
        <h2 style={{ marginTop: 0 }}>Booking</h2>
        <p className="p">
          Choose the option that suits you. For an online second opinion, you’ll pay KSh 1,000 via
          M-Pesa and submit your details. For in-person/standard review, use the contact form or
          WhatsApp us.
        </p>

        <div className="btnRow" style={{ marginTop: "10px" }}>
          <Link className="btn btnAccent" href="/online-second-opinion">
            Online Second Opinion (KSh 1,000)
          </Link>
          <Link className="btn" href="/contact">
            Book Standard Appointment
          </Link>
          <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp Booking
          </a>
        </div>
      </div>
    </>
  );
}
