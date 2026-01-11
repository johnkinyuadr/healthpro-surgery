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
            Book a Second Opinion
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
              <strong>Book an appointment</strong> via the contact form or WhatsApp.
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
          Second opinion consultations are offered on a professional fee basis. To book, use the
          contact form and select “Second Opinion” in your message, or WhatsApp us directly.
        </p>

        <div className="btnRow" style={{ marginTop: "10px" }}>
          <Link className="btn btnAccent" href="/contact">
            Book via Website
          </Link>
          <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp Booking
          </a>
          <Link className="btn" href="/services">
            View Services
          </Link>
        </div>
      </div>
    </>
  );
}
