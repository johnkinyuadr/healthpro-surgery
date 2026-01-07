import Link from "next/link";

const WHATSAPP_NUMBER = "254721446206";
const EMAIL = "johnkinyua@gmail.com";

export default function HomePage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery, I’d like to inquire about a consultation."
  )}`;

  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL
  )}&su=${encodeURIComponent("HealthPro Surgery enquiry")}&body=${encodeURIComponent(
    "Hello HealthPro Surgery,\n\nI would like to inquire about a consultation.\n\nName:\nPhone:\n"
  )}`;

  return (
    <>
      <section className="hero">
        <h1 className="h1">HealthPro Surgery</h1>
        <p className="p">
          Vascular & Laparoscopic Surgery in Mombasa, Kenya. Patient-centered, evidence-based surgical
          care with a focus on safety, clear communication, and excellent outcomes.
        </p>

        <div className="btnRow">
          <Link className="btn btnAccent" href="/services">
            View Services
          </Link>

          <a
            className="btn btnGreen"
            href={waLink}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>

          {/* Opens Gmail compose in browser (works even if mail app isn't configured) */}
          <a
            className="btn"
            href={gmailComposeLink}
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </div>
      </section>

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
          <p>
            Simple consultation pathway with direct communication via WhatsApp or email.
          </p>
        </div>

        <div className="card">
          <h3>Quality &amp; Safety</h3>
          <p>
            Focused on evidence-based practice, patient safety, and continuous improvement in outcomes.
          </p>
        </div>
      </section>

      <h2 className="sectionTitle">Our Focus Areas</h2>
      <section className="grid">
        <div className="card">
          <img
            src="/images/vascular.jpg"
            alt="Vascular surgery"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          <h3>Vascular Surgery</h3>
          <p>
            Specialist care for arterial and venous disease with individualized treatment planning.
          </p>
        </div>

        <div className="card">
          <img
            src="/images/laparoscopic.jpg"
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
            Minimally invasive surgical options to support faster recovery and reduced pain.
          </p>
        </div>

        <div className="card">
          <img
            src="/images/consultation.jpg"
            alt="Surgical consultation"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          <h3>Consultation</h3>
          <p>
            Clear explanations, shared decision-making, and patient-centered care.
          </p>
        </div>

        <div className="card">
          <img
            src="/images/clinic.jpg"
            alt="Clinic environment"
            style={{
              width: "100%",
              borderRadius: "12px",
              marginBottom: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
          <h3>Care Environment</h3>
          <p>
            Professional, safe, and modern clinical settings.
          </p>
        </div>
      </section>
    </>
  );
}
