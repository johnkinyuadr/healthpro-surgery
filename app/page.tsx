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

          <div className="btnRow" style={{ gap: 10, flexWrap: "wrap" }}>
            <Link className="btn btnAccent" href="/second-opinion">
              Get an Online Second Opinion
            </Link>

            <a
              className="btn btnGreen"
              href={waSecondOpinionLink}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp to Start
            </a>
          </div>

          <p style={{ marginTop: 12, marginBottom: 0, fontSize: 13, opacity: 0.85 }}>
            <strong>KSh 2,000</strong> online review •{" "}
            <strong>KSh 3,000</strong> in-person consultation (if required)
          </p>

          <p style={{ marginTop: 6, marginBottom: 0, fontSize: 13, opacity: 0.85 }}>
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

          <a className="btn" href={gmailComposeLink} target="_blank" rel="noreferrer">
            Email
          </a>
        </div>
      </section>

      {/* Everything else below remains unchanged */}
      {/* PRICING, HIGHLIGHTS, FOCUS AREAS, BOTTOM CTA */}
    </>
  );
}
