import Link from "next/link";

const WHATSAPP_NUMBER = "254721446206";
const EMAIL = "johnkinyua@gmail.com";

// Payment details (M-Pesa Paybill)
const PAYBILL = "400200";
const ACCOUNT = "1025353";

export default function HomePage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery, I’d like to inquire about a consultation."
  )}`;

  const waSecondOpinionLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello HealthPro Surgery, I would like an Online Second Opinion.\n\nMy main concern is:\n\nI understand the fees are:\n- KSh 2,000 initial review (online)\n- KSh 3,000 in-person consultation (if needed)\n\nPayment:\nPaybill ${PAYBILL}\nAccount ${ACCOUNT}\n\nKindly advise the next steps.`
  )}`;

  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL
  )}&su=${encodeURIComponent("HealthPro Surgery enquiry")}&body=${encodeURIComponent(
    "Hello HealthPro Surgery,\n\nI would like to inquire about a consultation.\n\nName:\nPhone:\n\nConcern:\n"
  )}`;

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1 className="h1">HealthPro Surgery</h1>

        <p className="p">
          General, Laparoscopic &amp; Vascular Surgery in Mombasa, Kenya — compassionate,
          evidence-based care focused on clear explanations, safe surgery, and strong outcomes.
        </p>

        {/* Primary CTA */}
        <div
          className="card"
          style={{
            marginTop: 18,
            padding: 16,
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 16,
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>
            Online Second Opinion
          </h2>

          <p style={{ marginTop: 8, marginBottom: 12, opacity: 0.9 }}>
            Upload your reports and receive a specialist review within{" "}
            <strong>24 hours</strong>, with clear guidance on your diagnosis and treatment options.
          </p>

          <div className="btnRow" style={{ alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <Link className="btn btnAccent" href="/second-opinion">
              Get an Online Second Opinion
            </Link>

            <a
              className="btn btnGreen"
              href={waSecondOpinionLink}
              target="_blank"
              rel="noreferrer"
              title="WhatsApp to start an Online Second Opinion"
            >
              WhatsApp to Start
            </a>

            <div
              style={{
                fontSize: 13,
                opacity: 0.9,
                padding: "8px 10px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(0,0,0,0.18)",
              }}
            >
              <strong>Fees:</strong> KSh 2,000 online review • KSh 3,000 in-person (if required)
            </div>
          </div>

          <p style={{ marginTop: 10, marginBottom: 0, fontSize: 13, opacity: 0.85 }}>
            Pay via M-Pesa: <strong>Paybill {PAYBILL}</strong> •{" "}
            <strong>Account {ACCOUNT}</strong>
          </p>
        </div>

        {/* Main contact buttons */}
        <div className="btnRow" style={{ marginTop: 18 }}>
          <Link className="btn" href="/services">
            View Services
          </Link>

          <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>

          {/* Opens Gmail compose in browser */}
          <a className="btn" href={gmailComposeLink} target="_blank" rel="noreferrer">
            Email
          </a>
        </div>
      </section>

      {/* PRICING */}
      <h2 className="sectionTitle">Pricing</h2>
      <section className="grid">
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Online Second Opinion</h3>
          <p style={{ marginTop: 6, marginBottom: 10, opacity: 0.9 }}>
            Share your scans/reports and history for a specialist review and recommended next steps.
          </p>
          <p style={{ margin: 0 }}>
            <strong>KSh 2,000</strong> — initial review
          </p>
          <p style={{ marginTop: 8, fontSize: 13, opacity: 0.85 }}>
            <strong>Response within 24 hours.</strong>
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>In-Person Consultation</h3>
          <p style={{ marginTop: 6, marginBottom: 10, opacity: 0.9 }}>
            If an in-person review is needed, we’ll examine you and finalize a treatment plan.
          </p>
          <p style={{ margin: 0 }}>
            <strong>KSh 3,000</strong> — in-person consultation
          </p>
          <p style={{ marginTop: 8, fontSize: 13, opacity: 0.85 }}>
            Scheduled at your convenience.
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Payment</h3>
          <p style={{ marginTop: 6, marginBottom: 10, opacity: 0.9 }}>
            M-Pesa Paybill details:
          </p>
          <p style={{ margin: 0 }}>
            <strong>Paybill:</strong> {PAYBILL}
          </p>
          <p style={{ marginTop: 6, marginBottom: 0 }}>
            <strong>Account:</strong> {ACCOUNT}
          </p>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>What to Send</h3>
          <p style={{ marginTop: 6, marginBottom: 0, opacity: 0.9 }}>
            A short summary of symptoms, current medications, and any available reports (labs, CT/MRI,
            ultrasound, discharge summary).
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <h2 className="sectionTitle">Highlights</h2>
      <section className="grid">
        <div className="card">
          <h3>Vascular Expertise</h3>
          <p>
            Evaluation and management of arterial and venous disease, tailored to your condition and
            goals.
          </p>
        </div>

        <div className="card">
          <h3>Minimally Invasive Surgery</h3>
          <p>
            Laparoscopic approaches where appropriate to support faster recovery and reduced
            postoperative pain.
          </p>
        </div>

        <div className="card">
          <h3>Clear Pathway to Care</h3>
          <p>Simple consultation pathway with direct communication via WhatsApp or email.</p>
        </div>

        <div className="card">
          <h3>Quality &amp; Safety</h3>
          <p>
            Focused on evidence-based practice, patient safety, and continuous improvement in outcomes.
          </p>
        </div>
      </section>

      {/* === START: SERVICE FAQs (ADDED - NO EXISTING CONTENT REMOVED) === */}
      <h2 className="sectionTitle">Service FAQs</h2>
      <section className="grid">
        <div className="card">
          <h3 style={{ marginTop: 0 }}>Varicose Veins</h3>
          <p style={{ marginTop: 6, marginBottom: 12, opacity: 0.9 }}>
            Leg pain, swelling, visible veins, skin changes, ulcers — learn what to expect and when to
            seek treatment.
          </p>
          <div className="btnRow" style={{ gap: 10, flexWrap: "wrap" }}>
            <Link className="btn" href="/services/varicose-veins">
              View FAQs
            </Link>
            <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Dialysis Access</h3>
          <p style={{ marginTop: 6, marginBottom: 12, opacity: 0.9 }}>
            AV fistula and AV graft information, planning timelines, and common complications to watch
            for.
          </p>
          <div className="btnRow" style={{ gap: 10, flexWrap: "wrap" }}>
            <Link className="btn" href="/services/dialysis-access">
              View FAQs
            </Link>
            <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>

        <div className="card">
          <h3 style={{ marginTop: 0 }}>Hernia Surgery</h3>
          <p style={{ marginTop: 6, marginBottom: 12, opacity: 0.9 }}>
            Understand hernia types, when surgery is needed, warning signs, and recovery expectations.
          </p>
          <div className="btnRow" style={{ gap: 10, flexWrap: "wrap" }}>
            <Link className="btn" href="/services/hernia-surgery">
              View FAQs
            </Link>
            <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          </div>
        </div>
      </section>
      {/* === END: SERVICE FAQs (ADDED) === */}

      {/* FOCUS AREAS WITH IMAGES */}
      <h2 className="sectionTitle">Our Focus Areas</h2>
      <section className="grid">
        <div className="card">
          <img
            src="/images/vascular.jpg"
            alt="Vascular surgery"
            style={{
              width: "100%",
              borderRadius: 12,
              marginBottom: 10,
              border: "1px solid rgba(255,255,255,0.08)",
              objectFit: "cover",
            }}
          />
          <h3>Vascular Surgery</h3>
          <p>Specialist care for arterial and venous disease with individualized treatment planning.</p>
        </div>

        <div className="card">
          <img
            src="/images/laparoscopic.jpg"
            alt="Laparoscopic surgery"
            style={{
              width: "100%",
              borderRadius: 12,
              marginBottom: 10,
              border: "1px solid rgba(255,255,255,0.08)",
              objectFit: "cover",
            }}
          />
          <h3>Laparoscopic Surgery</h3>
          <p>Minimally invasive surgical options to support faster recovery and reduced pain.</p>
        </div>

        <div className="card">
          <img
            src="/images/consultation.jpg"
            alt="Surgical consultation"
            style={{
              width: "100%",
              borderRadius: 12,
              marginBottom: 10,
              border: "1px solid rgba(255,255,255,0.08)",
              objectFit: "cover",
            }}
          />
          <h3>Consultation</h3>
          <p>Clear explanations, shared decision-making, and patient-centered care.</p>
        </div>

        <div className="card">
          <img
            src="/images/clinic.jpg"
            alt="Clinic environment"
            style={{
              width: "100%",
              borderRadius: 12,
              marginBottom: 10,
              border: "1px solid rgba(255,255,255,0.08)",
              objectFit: "cover",
            }}
          />
          <h3>Care Environment</h3>
          <p>Professional, safe, and modern clinical settings.</p>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section
        className="card"
        style={{
          marginTop: 28,
          padding: 18,
          borderRadius: 18,
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.03)",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: 8 }}>Need a Second Opinion Today?</h2>

        <p style={{ marginTop: 0, marginBottom: 12, opacity: 0.9 }}>
          Start online and get a specialist response within <strong>24 hours</strong>.
        </p>

        <div className="btnRow" style={{ flexWrap: "wrap", gap: 10 }}>
          <Link className="btn btnAccent" href="/second-opinion">
            Get an Online Second Opinion
          </Link>

          <a className="btn btnGreen" href={waSecondOpinionLink} target="_blank" rel="noreferrer">
            WhatsApp Now
          </a>

          <a className="btn" href={gmailComposeLink} target="_blank" rel="noreferrer">
            Email
          </a>
        </div>

        <p style={{ marginTop: 10, marginBottom: 0, fontSize: 13, opacity: 0.85 }}>
          Pay via M-Pesa: <strong>Paybill {PAYBILL}</strong> • <strong>Account {ACCOUNT}</strong>
        </p>
      </section>
    </>
  );
}
