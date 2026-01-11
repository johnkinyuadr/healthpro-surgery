import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Specialist Surgical Second Opinion | KSh 2,000",
  description:
    "Request an online specialist surgical second opinion. Pay KSh 2,000 via M-Pesa PayBill and submit your details securely.",
};

const WHATSAPP_NUMBER = "254721446206";

// M-Pesa Details
const MPESA_PAYBILL = "400200";
const MPESA_ACCOUNT = "1025353";

export default function OnlineSecondOpinionPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery. I have paid KSh 2,000 for an online second opinion. Kindly confirm the next steps."
  )}`;

  return (
    <>
      <section className="hero">
        <h1 className="h1">Online Specialist Surgical Second Opinion</h1>
        <p className="p">
          Get a professional specialist review remotely. Ideal for confirming a diagnosis,
          understanding options, or deciding whether surgery is necessary.
        </p>

        <div className="card" style={{ marginTop: "14px" }}>
          <h2 style={{ marginTop: 0 }}>Response time</h2>
          <p className="p">
            We aim to respond within <strong>24–48 hours</strong> after receiving your
            details and payment.
          </p>
        </div>

        <div className="btnRow">
          <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp for Help
          </a>
          <Link className="btn" href="/second-opinion">
            Back to Second Opinion
          </Link>
        </div>
      </section>

      <div className="card" style={{ maxWidth: "720px", margin: "0 auto" }}>
        <h2 style={{ marginTop: 0 }}>Consultation Fee</h2>
        <p className="p">
          <strong>KSh 2,000</strong> — online specialist surgical second opinion (initial review).
        </p>

        <h2 style={{ marginTop: "16px" }}>How to Pay via M-Pesa</h2>
        <ul className="list" style={{ marginTop: "10px" }}>
          <li><strong>M-Pesa → Pay Bill</strong></li>
          <li><strong>Business Number:</strong> {MPESA_PAYBILL}</li>
          <li><strong>Account Number:</strong> {MPESA_ACCOUNT}</li>
          <li><strong>Amount:</strong> KSh 2,000</li>
        </ul>

        <p className="p" style={{ marginTop: "10px" }}>
          After payment, submit the form below and include your <strong>M-Pesa receipt code</strong>.
        </p>
      </div>

      <div className="card" style={{ maxWidth: "720px", margin: "20px auto" }}>
        <h2 style={{ marginTop: 0 }}>Submit Your Online Second Opinion Request</h2>

        <form action="https://formspree.io/f/mnjnedvp" method="POST">
          <input
            type="hidden"
            name="_redirect"
            value="https://www.healthprosurgery.com/thank-you"
          />
          <input
            type="hidden"
            name="service"
            value="Online Specialist Surgical Second Opinion (KSh 2,000)"
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
            placeholder="Paste key report text here. PDFs/images can be shared via WhatsApp after submission."
          />

          <button type="submit" className="btn btnAccent" style={{ marginTop: "12px" }}>
            Submit Online Second Opinion
          </button>

          <p className="p" style={{ marginTop: "12px", opacity: 0.85 }}>
            This online review provides professional guidance based on submitted information and does
            not replace emergency care.
          </p>
        </form>
      </div>
    </>
  );
}
