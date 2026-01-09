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
            Assessment and management of arterial and venous disease, aneurysms,
            carotid disease, limb ischemia, and vascular access planning.
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
            AV fistula and AV graft creation, access surveillance,
            and management of dialysis access complications.
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
            Minimally invasive surgical options for selected abdominal conditions,
            offering faster recovery where appropriate.
          </p>
        </div>
      </section>

      {/* GENERAL SURGERY */}
      <h2 className="sectionTitle">General Surgery</h2>
      <p className="p" style={{ marginTop: "-8px" }}>
        We manage a wide range of general surgical conditions including:
      </p>

      <section className="grid">
        <div className="card">
          <img
            src="/images/general-surgery.jpg"
            alt="General surgery procedures"
            style={imgStyle}
          />
          <h3>General Surgery Procedures</h3>
          <ul className="list" style={{ marginTop: "10px" }}>
            <li>Hernias (inguinal, umbilical, incisional)</li>
            <li>Thyroid disease and thyroid surgery</li>
            <li>Breast disease and breast lumps</li>
            <li>Laparotomy (open abdominal surgery)</li>
            <li>Lipomas and ganglions</li>
          </ul>
        </div>

        <div className="card">
          <h3>Minor &amp; Day-Case Surgery</h3>
          <p>
            Lipoma excision, ganglion excision, wound care,
            and other minor surgical procedures.
          </p>
        </div>

        <div className="card">
          <h3>Consultation &amp; Second Opinion</h3>
          <p>
            Clear assessment, explanation of findings,
            and shared decision-making.
          </p>
        </div>

        <div className="card">
          <h3>Pre-operative Assessment &amp; Follow-up</h3>
          <p>
            Thorough evaluation before surgery and structured
            post-operative follow-up.
          </p>
        </div>
      </section>

      {/* ENDOSCOPY */}
      <h2 className="sectionTitle">Endoscopy</h2>

      <section className="grid">
        <div className="card">
          <img
            src="/images/endoscopy-upper.jpg"
            alt="Upper GI endoscopy (OGD)"
            style={imgStyle}
          />
          <h3>Upper GI Endoscopy (OGD)</h3>
          <p>
            Diagnostic upper gastrointestinal endoscopy for reflux,
            dysphagia, persistent epigastric pain, or GI bleeding.
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
            Colonoscopy for rectal bleeding, anemia,
            change in bowel habits, or screening.
          </p>
        </div>
      </section>

      {/* BOOKING */}
      <div className="card" style={{ marginTop: "18px" }}>
        <h3>Booking &amp; Enquiries</h3>
        <p>
          To book a consultation, procedure, or endoscopy,
          please contact us via WhatsApp or the contact form.
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
