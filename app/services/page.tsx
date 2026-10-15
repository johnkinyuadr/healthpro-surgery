import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";

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

  const imgStyle: CSSProperties = {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "10px",
    border: "1px solid var(--border)",
    aspectRatio: "3 / 2",
    objectFit: "cover",
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
      <div className="servicesSectionHead">
        <div className="eyebrow">What we treat</div>
        <h2 className="sectionTitle" style={{ margin: "6px 0 0" }}>Core Services</h2>
      </div>


      <section className="grid">
        <div className="card">
          <img
            src="/images/services/vascular-surgery.jpg"
            alt="Vascular surgery assessment"
            style={imgStyle}
          />
          <h3>Vascular Surgery</h3>
          <p>
            Assessment and management of arterial and venous disease, aneurysms,
            carotid disease, limb ischaemia, and vascular access planning.
          </p>
          <p style={{ marginTop: 10 }}>
            <Link className="textLink" href="/services/vascular-surgery">Vascular surgery →</Link>{" "}
            · <Link className="textLink" href="/services/carotid-disease">Carotid disease →</Link>
          </p>
        </div>

        <div className="card">
          <img
            src="/images/services/varicose-veins.jpg"
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
            src="/images/services/dialysis-access.jpg"
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
            src="/images/services/laparoscopic-surgery.jpg"
            alt="Laparoscopic surgery"
            style={imgStyle}
          />
          <h3>Laparoscopic Surgery</h3>
          <p>
            Minimally invasive surgical options for selected abdominal conditions,
            offering faster recovery where appropriate.
          </p>
          <p style={{ marginTop: 10 }}>
            <Link className="textLink" href="/services/gallbladder-surgery">Gallbladder surgery →</Link>{" "}
            · <Link className="textLink" href="/services/hernia-surgery">Hernia surgery →</Link>
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
            src="/images/services/general-surgery-procedures.jpg"
            alt="Surgical team performing an open general surgical procedure"
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
          <img
            src="/images/services/minor-surgery.jpg"
            alt="Surgical team performing a minor procedure under ultrasound guidance"
            style={imgStyle}
          />
          <h3>Minor &amp; Day-Case Surgery</h3>
          <p>
            Lipoma excision, ganglion excision, wound care,
            and other minor surgical procedures.
          </p>
        </div>

        <div className="card">
          <img
            src="/images/services/second-opinion.jpg"
            alt="Surgeons discussing a case together outside the operating theatre"
            style={imgStyle}
          />
          <h3>Consultation &amp; Second Opinion</h3>
          <p>
            Clear assessment, explanation of findings,
            and shared decision-making.
          </p>
          <p style={{ marginTop: 10 }}>
            <Link className="textLink" href="/second-opinion">Online second opinion →</Link>
          </p>
        </div>

        <div className="card">
          <img
            src="/images/services/preop-followup.jpg"
            alt="Pre-operative consultation, surgery and post-operative follow-up on the ward"
            style={imgStyle}
          />
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
            src="/images/services/endoscopy.jpg"
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
            src="/images/services/colonoscopy.jpg"
            alt="Lower GI endoscopy (colonoscopy)"
            style={imgStyle}
          />
          <h3>Lower GI Endoscopy (Colonoscopy)</h3>
          <p>
            Colonoscopy for rectal bleeding, anaemia,
            change in bowel habits, or screening.
          </p>
          <p style={{ marginTop: 10 }}>
            <Link className="textLink" href="/services/gi-endoscopy">Endoscopy &amp; colonoscopy →</Link>
          </p>
        </div>
      </section>

      {/* SERVICE FAQs — kept separate from the clinical services above */}
      <section className="faqBand">
        <div className="faqBandHead">
          <div className="eyebrow">Patient information</div>
          <h2 className="sectionTitle" style={{ margin: "6px 0 6px" }}>Service FAQs &amp; preparation guides</h2>
          <p className="p" style={{ margin: 0, maxWidth: 720 }}>
            Answers to the questions patients ask most often — what to expect, how to prepare and
            when to seek care.
          </p>
        </div>
        <div className="faqBandGrid">
          {[
            {
              href: "/services/varicose-veins",
              img: "/images/services/varicose-faq.jpg",
              alt: "Vascular surgeon reviewing a leg vein ultrasound with a patient",
              title: "Varicose Veins – FAQs",
              text: "Symptoms, risks, treatment options, and when to seek care.",
            },
            {
              href: "/services/dialysis-access",
              img: "/images/services/dialysis-faq.jpg",
              alt: "Nurse caring for a patient during haemodialysis",
              title: "Dialysis Access – FAQs",
              text: "AV fistula/graft planning, timelines, and common complications.",
            },
            {
              href: "/services/hernia-surgery",
              img: "/images/services/hernia-surgery.jpg",
              alt: "Laparoscopic hernia repair",
              title: "Hernia Surgery – FAQs",
              text: "Hernia types, warning signs, surgery timing, and recovery guidance.",
            },
            {
              href: "/services/endoscopy-preparation",
              img: "/images/services/endoscopy-preparation.jpg",
              alt: "Doctor explaining bowel preparation for colonoscopy",
              title: "Preparing for Endoscopy & Colonoscopy",
              text: "Diet, ColoPrep and Dulcolax timing, medicines and fasting instructions.",
            },
          ].map((f) => (
            <Link key={f.href} className="faqBandCard" href={f.href}>
              <img src={f.img} alt={f.alt} style={imgStyle} />
              <span className="faqBandTag">FAQ</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <span className="more">Read answers →</span>
            </Link>
          ))}
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
