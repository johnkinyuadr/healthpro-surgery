import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Appointment request received — HealthPro Surgery, Mombasa.",
};

const WHATSAPP_NUMBER = "254721446206";

export default function ThankYouPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery, I have submitted an appointment request on the website. Kindly confirm the next steps."
  )}`;

  return (
    <section className="hero">
      <h1 className="h1">Thank you — we’ve received your request</h1>

      <p className="p">
        Your message has been submitted successfully. Our team will contact you shortly
        to confirm the appointment details and next steps.
      </p>

      <div className="card" style={{ marginTop: "18px" }}>
        <h3>What happens next?</h3>
        <ul className="list" style={{ marginTop: "10px" }}>
          <li>We’ll contact you via phone or WhatsApp.</li>
          <li>We may ask a few follow-up questions to guide your care.</li>
          <li>You’ll receive location details and any preparation instructions if needed.</li>
        </ul>
      </div>

      <div className="btnRow" style={{ marginTop: "18px" }}>
        <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
          WhatsApp us now
        </a>
        <Link className="btn btnAccent" href="/services">
          View Services
        </Link>
        <Link className="btn" href="/">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
