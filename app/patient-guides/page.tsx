import type { Metadata } from "next";
import Link from "next/link";
import { PATIENT_GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Patient Guides",
  description:
    "Patient information from HealthPro Surgery, Mombasa: diabetic foot care, AV fistula care, recovery after hernia repair, varicose veins and dialysis access.",
  alternates: { canonical: "/patient-guides" },
};

export default function PatientGuidesPage() {
  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Patient guides
        </div>
        <h1 className="h1">Information for patients and families</h1>
        <p className="p" style={{ maxWidth: 760, marginBottom: 0 }}>
          Clear, practical guidance on common vascular and surgical conditions — what to expect, how
          to look after yourself, and when to seek help. Several guides include a summary in
          Kiswahili.
        </p>
      </section>

      <section className="serviceGrid" style={{ marginTop: 24 }}>
        {PATIENT_GUIDES.map((g) => (
          <Link key={g.href} className="guideCard" href={g.href}>
            <h2 style={{ margin: 0, fontSize: 19 }}>{g.title}</h2>
            <p>{g.text}</p>
            <span className="more">Read guide →</span>
          </Link>
        ))}
      </section>

      <p className="small" style={{ marginTop: 24 }}>
        These guides are general information and do not replace individual medical advice. In an
        emergency, go to the nearest Accident &amp; Emergency department.
      </p>
    </>
  );
}
