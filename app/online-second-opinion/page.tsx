import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Specialist Surgical Second Opinion | KSh 1,000",
  description:
    "Request an online specialist surgical second opinion. Pay KSh 1,000 via M-Pesa PayBill and submit your details securely.",
};

const WHATSAPP_NUMBER = "254721446206";

// M-Pesa Details
const MPESA_PAYBILL = "400200";
const MPESA_ACCOUNT = "1025353";

export default function OnlineSecondOpinionPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery. I have paid KSh 1,000 for an ONLINE second opinion. Kindly confirm the next steps."
  )}`;

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <h1 className="h1">Online Specialist Surgical Second Opinion</h1>
        <p className="p">
          This service provides a professional, independent review of your diagnosis,
          proposed surgery, or investigation. It is ideal if you want clarity before
          making an important medical decision.
        </p>

        <div className="btnRow">
          <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp for Help
          </a>
          <Link className="btn" href="/second-opinion">
            Back to Second Opinion
          </Link>
        </div>
      </section>

      {/* PAYMENT DETAILS */}
      <div className="card" style={{ maxWidth: "720px", margin: "0 auto" }}>
        <h2 style={{ marginTop: 0 }}>Consultation Fee</h2>
        <p className="p">
          <strong>KSh 1,000</strong> — online specialist surgical second opinion (initial review).
        </p>

        <h2 style={{ marginTop: "16px" }}>How to Pay via M-Pesa</h2>
        <ul className="list" style={{ marginTop: "10px" }}>
          <li><strong>Go to:</strong> M-Pesa</li>
          <li><strong>Select:</strong> Pay Bill</li>
          <li><strong>Business Number:</strong> {MPESA_PAYBILL}</li>
          <li><strong>Account Number:</strong> {MPESA_ACCOUNT}</li>
          <li><strong>Amount:</strong> KSh 1,000</li>
        </ul>

        <p className="p" style={{ marginTop: "10px" }}>
          After payment, submit the form below and include your <strong>M-Pesa receipt code</strong>.
        </p>
      </div>

      {/* FORM */}
      <div className="card" style={{ maxWidth: "720px", margin: "20px auto" }}>
        <h2 style={{ marginTop: 0 }}>Submit Your Online Second Opinion Request</h2>

        <form action="https://formspree.io/f/mnjnedvp" method="POST">
          {/* Redirect after submission */}
          <input
            type="hidden"
            name="_redirect"
            value="https://www.healthprosurgery.com/thank-you"
          />
          <input
            type="hidden"
            name="service"
            value="Online Specialist Surgical Second Opinion (Paid)"
          />

          <label className="label">Full Name</label>
          <input className="input" type="text" name="name" required />

          <label className="label">Phone / WhatsApp Number</label>
          <input className="input" type="tel" name="phone" required />

          <label className="label">Email Address</label>
          <input className="input" type="email" name="email" required />

          <label className="label">Brief Clinical Summary</label>
          <textarea
            className="input"
            name="summary"
            rows={5}
            placeholder="Briefly describe your condition, diagnosis, and proposed treatment."
            required
          />

          <label className="label">M-Pesa Receipt Code</label>
          <input
            className="input"
            type="text"
            name="mpesa_receipt"
            placeholder="e.g. QWE123ABC4"
            required
          />

          <label className="label">Reports / Imaging (optional)</label>
          <textarea
            className="input"
            name="reports"
            rows={4}
            placeholder="Paste key report text here. If you have PDFs or images, you may WhatsApp them after submitting."
          />

          <button type="submit" className="btn btnAccent" style={{ marginTop: "12px" }}>
            Submit Online Second Opinion
          </button>

          <p className="p" style={{ marginTop: "12px", opacity: 0.85 }}>
            This service provides professional guidance based on the information submitted.
            It does not replace emergency care. For urgent symptoms, seek immediate medical attention.
          </p>
        </form>
      </div>
    </>
  );
}
