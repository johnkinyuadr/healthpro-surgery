import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Services at HealthPro Surgery in Mombasa — vascular and laparoscopic surgery.",
};

const WHATSAPP_NUMBER = "254721446206";

export default function ServicesPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery, I’d like to inquire about services / booking a consultation."
  )}`;

  return (
    <>
      <section className="hero">
        <h1 className="h1">Services</h1>
        <p className="p">
          Specialist vascular and laparoscopic surgical evaluation and management. If you’re unsure what you need,
          contact us and we’ll guide you to the right next step.
        </p>

        <div className="btnRow">
          <Link className="btn btnAccent" href="/contact">
            Contact / Book
          </Link>
          <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </section>

      <h2 className="sectionTitle">Core services</h2>

      <section className="grid">
        <div className="card">
          <img
            src="/images/vasccons.jpg"
            alt="Vascular surgery"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          <h3>Vascular Surgery Consultation</h3>
          <p>
            Assessment of arterial disease, limb ischemia, aneurysms, carotid disease, and vascular access needs.
          </p>
        </div>

        <div className="card">
          <img
            src="/images/varicose.png"
            alt="Venous disease consultation"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          <h3>Varicose Veins &amp; Venous Disease</h3>
          <p>
            Evaluation and treatment planning for varicose veins, venous insufficiency, leg swelling, and ulcers.
          </p>
        </div>

        <div className="card">
          <img
            src="/images/dialysis.jpg"
            alt="Dialysis access and follow-up care"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          <h3>Dialysis &amp; Vascular Access</h3>
          <p>
            Assessment for AV fistula/AV graft planning and management of access complications and follow-up.
          </p>
        </div>

        <div className="card">
          <img
            src="/images/endolap.jpg"
            alt="Laparoscopic surgery"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          <h3>Laparoscopic Surgery</h3>
          <p>
            Minimally invasive approaches for selected abdominal conditions, planned to suit your needs and safety.
          </p>
        </div>
      </section>
    </>
  );
}
