import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HealthPro Surgery | Vascular, General & Laparoscopic Surgery in Mombasa",
  description:
    "HealthPro Surgery provides vascular, general, and laparoscopic surgery services in Mombasa, including endoscopy, colonoscopy, and specialist surgical second opinions.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">
        <h1 className="h1">
          HealthPro Surgery
        </h1>

        <p className="p">
          Specialist vascular, general, and laparoscopic surgical care in Mombasa.
          We also offer gastrointestinal endoscopy services and expert surgical second opinions.
        </p>

        <div className="btnRow">
          <Link href="/contact" className="btn btnAccent">
            Book Appointment
          </Link>
          <Link href="/services" className="btn">
            View Services
          </Link>
        </div>
      </section>

      {/* SECOND OPINION CTA */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h2 style={{ marginTop: 0 }}>Need a Specialist Surgical Second Opinion?</h2>

        <p className="p">
          Get clarity before making an important surgical decision.
          We offer both <strong>online</strong> and <strong>in-person</strong> specialist
          surgical second opinions.
        </p>

        <ul className="list">
          <li>✔ Online second opinion (initial review): <strong>KSh 2,000</strong></li>
          <li>✔ In-person specialist second opinion: <strong>KSh 3,000</strong></li>
          <li>✔ We aim to respond within <strong>24–48 hours</strong></li>
        </ul>

        <div className="btnRow" style={{ marginTop: "12px" }}>
          <Link href="/online-second-opinion" className="btn btnAccent">
            Start Online Second Opinion
          </Link>
          <Link href="/second-opinion" className="btn">
            Learn More
          </Link>
        </div>
      </div>

      {/* SERVICES SUMMARY */}
      <section className="grid" style={{ marginTop: "20px" }}>
        <div className="card">
          <h3>Vascular Surgery</h3>
          <p className="p">
            Management of varicose veins, peripheral arterial disease, dialysis access,
            and vascular consultations.
          </p>
        </div>

        <div className="card">
          <h3>General & Laparoscopic Surgery</h3>
          <p className="p">
            Hernias, thyroid disease, breast disease, laparotomy,
            lipomas, ganglions, and other general surgical conditions.
          </p>
        </div>

        <div className="card">
          <h3>Endoscopy Services</h3>
          <p className="p">
            Upper gastrointestinal endoscopy (OGD) and lower GI endoscopy
            (colonoscopy) for diagnosis and screening.
          </p>
        </div>
      </section>

      {/* TRUST / CLOSING */}
      <div className="card" style={{ marginTop: "20px" }}>
        <p className="p">
          At HealthPro Surgery, our focus is patient-centred, ethical,
          and evidence-based surgical care.
        </p>

        <div className="btnRow">
          <Link href="/contact" className="btn btnAccent">
            Contact Us
          </Link>
          <Link href="/about" className="btn">
            About the Practice
          </Link>
        </div>
      </div>
    </>
  );
}
