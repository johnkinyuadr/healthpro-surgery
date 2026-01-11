import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Specialist Surgical Second Opinion",
  description:
    "Online and in-person specialist surgical second opinions in Mombasa. Clear guidance before major surgical decisions.",
};

const WHATSAPP_NUMBER = "254721446206";

export default function SecondOpinionPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery. I would like to book a specialist surgical second opinion."
  )}`;

  return (
    <>
      <section className="hero">
        <h1 className="h1">Specialist Surgical Second Opinion</h1>
        <p className="p">
          A second opinion helps you understand your diagnosis, confirm whether surgery is necessary,
          and explore safe alternatives. We provide clear, independent specialist guidance.
        </p>

        <div className="card" style={{ marginTop: "14px" }}>
          <h2 style={{ marginTop: 0 }}>Response time (online review)</h2>
          <p className="p">
            We aim to respond within <strong>24–48 hours</strong> after receiving your details and payment.
          </p>
        </div>

        <div className="btnRow">
          <Link className="btn btnAccent" href="/online-second-opinion">
            Online Second Opinion (KSh 2,000)
          </Link>
          <Link className="btn" href="/contact">
            In-Person Second Opinion (KSh 3,000)
          </Link>
          <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h2>Online second opinion — KSh 2,000</h2>
          <p className="p">
            A structured remote review based on your history and reports. Ideal if you want expert
            guidance without travelling.
          </p>
          <Link className="btn btnAccent" href="/online-second-opinion">
            Start Online Review
          </Link>
        </div>

        <div className="card">
          <h2>In-person second opinion — KSh 3,000</h2>
          <p className="p">
            Best for complex problems or when a physical examination is required.
          </p>
          <Link className="btn" href="/contact">
            Book In-Person Consultation
          </Link>
        </div>

        <div className="card">
          <h2>Conditions commonly reviewed</h2>
          <ul className="list">
            <li>Hernias</li>
            <li>Thyroid disease</li>
            <li>Breast disease</li>
            <li>Abdominal surgery decisions</li>
            <li>Varicose veins and vascular disease</li>
            <li>Colonoscopy and endoscopy findings</li>
            <li>Dialysis access decisions</li>
          </ul>
        </div>

        <div className="card">
          <h2>Important note</h2>
          <p className="p">
            A second opinion does not commit you to surgery. Our role is to provide honest,
            independent medical advice in your best interest.
          </p>
        </div>
      </section>
    </>
  );
}
