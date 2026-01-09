import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "HealthPro Surgery services in Mombasa — vascular, laparoscopic, general surgery, and endoscopy (OGD and colonoscopy).",
};

const WHATSAPP_NUMBER = "254721446206";

export default function ServicesPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery, I’d like to inquire about services / booking a consultation."
  )}`;

  const imgStyle: React.CSSProperties = {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "10px",
    border: "1px solid rgba(255,255,255,0.08)",
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1 className="h1">Services</h1>
        <p className="p">
          HealthPro Surgery provides specialist vascular, laparoscopic, and general
          surgical services, as well as diagnostic gastrointestinal endoscopy.
          We offer patient-centred care with clear explanations and safe surgical planning.
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

      {/* CORE SERVICES */}
      <h2 className="sectionTitle">Core Services</h2>

      <section className="grid">
        <div className="card">
          <img
            src="/images/vasccons.jpg"
            alt="Vascular surgery assessment"
            style={imgStyle}
          />
          <h3>Vascular Surgery</h3>
          <p>
            Comprehensive assessment and management of arterial and venous disease,
            including limb ischemia, aneurysms, carotid disease, and vascular access planning.
          </p>
        </div>

        <div className="card">
          <img
            src="/images/varicose.png"
            alt="Varicose veins and venous disease"
            style={imgStyle}
          />
          <h3>Varicose Veins &amp; Venous Disease</h3>
          <p>
            Evaluation and management of varicose veins, chronic venous insufficiency,
            leg swelling, skin changes, and venous ulcers.
          </p>
        </div>

        <div className="card">
          <img
            src="/images/dialysis.jpg"
            alt="Dialysis and vascular access care"
            style={imgStyle}
          />
          <h3>Dialysis &amp; Vascular Access</h3>
          <p>
            Planning and follow-up for AV fistula and AV graft creation,
            as well as management of access-related complications.
          </p>
        </div>

        <div className="card">
          <img
            src="/images/laparoscopic.jpg"
            alt="Laparoscopic surgery"
            style={imgStyle}
          />
          <h3>Laparoscopic Surgery</h3>
          <p>
            Minimally invasive surgical approaches for selected abdominal conditions,
            offering reduced pain and faster recovery where appropriate.
          </p>
        </div>
      </section>

      {/* GENERAL SURGERY */}
      <h2 className="sectionTitle">General Surgery</h2>
      <p className="p" style={{ marginTop: "-8px" }}>
        We manage a wide range of general surgical conditions, offering both elective
        and emergency surgical care.
      </p>

      <section className="grid">
        <div className="card">
          <img
            src="/images/general-surgery.jpg"
            alt="General surgery procedures"
            styl
