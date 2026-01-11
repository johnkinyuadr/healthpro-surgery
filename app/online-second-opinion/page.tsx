import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Online Surgical Second Opinion | KSh 2,000",
  description:
    "Request an online specialist surgical second opinion. Pay KSh 2,000 via M-Pesa and submit your details securely.",
};

const WHATSAPP_NUMBER = "254721446206";
const MPESA_PAYBILL = "400200";
const MPESA_ACCOUNT = "1025353";

export default function OnlineSecondOpinionPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery. I have paid KSh 2,000 for an online second opinion."
  )}`;

  return (
    <>
      <section className="hero">
        <h1 className="h1">Online Specialist Surgical Second Opinion</h1>
        <p className="p">
          Get a professional specialist review remotely. Ideal for confirming a diagnosis,
          understanding treatment options, or deciding whether surgery is necessary.
        </p>
      </section>

      <div className="card" style={{ maxWidth: "720px", margin: "0 auto" }}>
        <h2>Fee</h2>
        <p className="p"><strong>KSh 2,000</strong> — online initial review</p>

        <h2>Pay via M-Pesa</h2>
        <ul className="list">
          <li><strong>PayBill:</strong> {MPESA_PAYBILL}</li>
          <li><strong>Account:</strong> {MPESA_ACCOUNT}</li>
          <li><strong>Amount:</strong> KSh 2,000</li>
        </ul>

        <p className="p">
          After payment, submit the form below and include your M-Pesa receipt code.
        </p>
      </div>

      <div className="card" style={{ maxWidth: "720px", margin: "20px auto" }}>
        <h2>Submit your request</h2>

        <form action="https://formspree.io/f/mnjnedvp" method="POST">
          <input
            type="hidden"
            name="_redirect"
            value="https://www.healthprosurgery.com/thank-you"
          />
          <input
            type="hidden"
            name="service"
            value="Online Second Opinion (KSh 2,000)"
          />

          <label className="label">Full Name</label>
          <input className="input" type="text" name="name" required />

          <label className="label">Phone / WhatsApp</label>
          <input className="input" type="tel" name="phone" required />

          <label className="label">Email</label>
          <input className="input" type="email" name="email" required />

          <label className="label">Clinical summary</label>
          <textarea className="input" name="summary" rows={5} required />

          <label className="label">M-Pesa Receipt Code</label>
          <input className="input" type="text" name="mpesa_receipt" required />

          <button type="submit" className="btn btnAccent" style={{ marginTop: "12px" }}>
            Submit Online Review
          </button>
        </form>

        <div className="btnRow" style={{ marginTop: "12px" }}>
          <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp After Payment
          </a>
          <Link className="btn" href="/second-opinion">
            Back
          </Link>
        </div>
      </div>
    </>
  );
}
