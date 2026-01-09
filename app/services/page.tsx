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
      <section className="hero">
        <h1 className="h1">Services</h1>
        <p className="p">
          HealthPro Surgery offers specialist vascular, laparoscopic, and general surgical services,
          as well as diagnostic endoscopy (upper GI endoscopy and colonoscopy). If you’re unsure what
          you need, contact us and we’ll guide you to the right next step.
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
          <img src="/images/vascular.jpg" alt="Vascular surgery" style={imgStyle} />
          <h3>Vascular Surgery</h3>
          <p>
            Assessment and management of arterial and venous disease, limb ischemia, aneurysms,
            carotid disease, and vascular access needs.
          </p>
        </div>

        <div className="card">
          <img src="/images/consultation.jpg" alt="Venous disease consultation" style={imgStyle} />
          <h3>Varicose Veins &amp; Venous Disease</h3>
          <p>
            Evaluation and treatment planning for varicose veins, venous insufficiency, leg swelling,
            and venous ulcers.
          </p>
        </div>

        <div className="card">
          <img src="/images/clinic.jpg" alt="Dialysis access and follow-up care" style={imgStyle} />
          <h3>Dialysis &amp; Vascular Access</h3>
          <p>
            Planning for AV fistula/AV graft and management of access complications with appropriate
            follow-up.
          </p>
        </div>

        <div className="card">
          <img src="/images/laparoscopic.jpg" alt="Laparoscopic surgery" style={imgStyle} />
          <h3>Laparoscopic Surgery</h3>
          <p>
            Minimally invasive surgical options for selected abdominal conditions, planned to suit
            your needs and safety.
          </p>
        </div>
      </section>

      <h2 className="sectionTitle">General Surgery</h2>
      <p className="p" style={{ marginTop: "-8px" }}>
        We manage a broad range of general surgical conditions. Common procedures include:
      </p>

      <section className="grid">
        <div className="card">
          <img src="/images/general-surgery.jpg" alt="General surgery" style={imgStyle} />
          <h3>General Surgery Procedures</h3>
          <ul className="list" style={{ marginTop: "10px" }}>
            <li>Hernias (inguinal, umbilical, incisional)</li>
            <li>Thyroid disease and thyroid surgery</li>
            <li>Breast lumps and breast disease</li>
            <li>Laparotomy (open abdominal surgery) – selected cases</li>
            <li>Lipomas and ganglions (excision)</li>
          </ul>
        </div>

        <div className="card">
          <h3>Minor Surgery</h3>
          <p>
            Day-case procedures including lipoma excision, ganglion excision, and other minor
            surgical operations.
          </p>
        </div>

        <div className="card">
          <h3>Consultation &amp; Second Opinion</h3>
          <p>Clear evaluation, explanation of options, and a safe plan tailored to your needs.</p>
        </div>

        <div className="card">
          <h3>Pre-op Assessment &amp; Follow-up</h3>
          <p>Thorough assessment before surgery, and structured follow-up after procedures.</p>
        </div>
      </section>

      <h2 className="sectionTitle">Endoscopy</h2>

      <section className="grid">
        <div className="card">
          <img src="/images/endoscopy-upper.jpg" alt="Upper GI endoscopy (OGD)" style={imgStyle} />
          <h3>Upper GI Endoscopy (OGD)</h3>
          <p>
            Diagnostic upper gastrointestinal endoscopy for symptoms such as heartburn, persistent
            upper abdominal pain, vomiting, swallowing difficulties, or suspected GI bleeding.
          </p>
        </div>

        <div className="card">
          <img
            src="/images/endoscopy-colonoscopy.jpg"
            alt="Lower GI endoscopy (colonoscopy)"
            style={imgStyle}
          />
          <h3>Lower GI Endoscopy (Colonoscopy)</h3>
          <p>
            Colonoscopy for change in bowel habits, rectal bleeding, anemia, abdominal pain, or
            screening where appropriate.
          </p>
        </div>
      </section>

      <div className="card" style={{ marginTop: "18px" }}>
        <h3>Booking</h3>
        <p>
          To book a consultation, procedure, or endoscopy, contact us via WhatsApp or the contact
          form. We’ll advise you on preparation, timing, and the next steps.
        </p>
        <div className="btnRow">
          <Link className="btn btnAccent" href="/contact">
            Contact / Book
          </Link>
          <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
