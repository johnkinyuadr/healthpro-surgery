import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About HealthPro Surgery — Specialist Surgical Care in Mombasa.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero">
        <h1 className="h1">About HealthPro Surgery</h1>
        <p className="p">
          HealthPro Surgery is a specialist surgical practice based in Mombasa, Kenya,
          offering comprehensive vascular, laparoscopic, and general surgical services.
          Our focus is on patient-centered, evidence-based care delivered with professionalism,
          safety, and clear communication.
        </p>
      </section>

      {/* ===== SURGEON 1 ===== */}
      <section className="grid" style={{ alignItems: "center", marginTop: "24px" }}>
        <div className="card" style={{ gridColumn: "span 4" }}>
          <img
            src="/images/dr-kinyua.jpg"
            alt="Dr John Kinyua Murithi - Consultant Vascular and Laparoscopic Surgeon"
            style={{
              width: "100%",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>

        <div className="card" style={{ gridColumn: "span 8" }}>
          <h3>Dr John Kinyua Murithi</h3>
          <p><strong>Consultant General, Vascular & Laparoscopic Surgeon</strong></p>

          <p>
            Dr John Kinyua Murithi is a consultant general, vascular, and laparoscopic surgeon
            practicing in Mombasa, Kenya. He has extensive experience in the management of
            arterial and venous disease, vascular access, and minimally invasive surgery.
          </p>

          <p>
            His approach emphasizes careful evaluation, shared decision-making, and
            individualized treatment planning to achieve safe and durable outcomes.
          </p>

          <p>
            He is actively involved in surgical education, quality improvement initiatives,
            and research, with a strong commitment to advancing surgical care standards
            locally and regionally.
          </p>
        </div>
      </section>

      {/* ===== SURGEON 2 ===== */}
      <section className="grid" style={{ alignItems: "center", marginTop: "24px" }}>
        <div className="card" style={{ gridColumn: "span 4" }}>
          <img
            src="/images/dr-collins-ochieng.jpg"
            alt="Dr Collins Ochieng - General Surgeon"
            style={{
              width: "100%",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>

        <div className="card" style={{ gridColumn: "span 8" }}>
          <h3>Dr Collins Ochieng</h3>
          <p><strong>General Surgeon</strong></p>

          <p>
            Dr Collins Ochieng is a general surgeon with experience in the management of a wide
            range of general surgical conditions. His practice focuses on safe, effective, and
            patient-centered surgical care.
          </p>

          <p>
            He is committed to clear communication, thorough assessment, and evidence-based
            surgical decision-making to ensure optimal outcomes for patients.
          </p>

          <p>
            Working collaboratively within the HealthPro Surgery team, he contributes to
            comprehensive and coordinated surgical care.
          </p>
        </div>
      </section>

      <h2 className="sectionTitle">What you can expect</h2>
      <ul className="list">
        <li>Access to a multidisciplinary surgical team</li>
        <li>Clear explanation of diagnoses and treatment options</li>
        <li>Evidence-based and patient-centered decision-making</li>
        <li>Professional communication and continuity of care</li>
        <li>Respect for patient preferences, safety, and outcomes</li>
      </ul>
    </>
  );
}
