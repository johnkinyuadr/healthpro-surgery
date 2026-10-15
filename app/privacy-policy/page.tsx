import type { Metadata } from "next";
import { EMAIL, LOCATION_LINE, OFFICE_PHONE_DISPLAY } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How HealthPro Surgery collects, uses and protects your personal and health information, in line with the Kenya Data Protection Act, 2019.",
  alternates: { canonical: "/privacy-policy" },
};

const sections: { h: string; body: React.ReactNode }[] = [
  {
    h: "Who we are",
    body: (
      <p>
        HealthPro Surgery is the private surgical practice of Dr John Kinyua Murithi, Consultant
        General, Vascular and Laparoscopic Surgeon, located at {LOCATION_LINE}, Mombasa, Kenya. We
        are the data controller for the personal information described in this policy.
      </p>
    ),
  },
  {
    h: "Information we collect",
    body: (
      <ul className="list">
        <li>Contact details: name, phone or WhatsApp number and email address.</li>
        <li>
          Health information you choose to share: symptoms, medical history, medications, test
          results, imaging and reports.
        </li>
        <li>Payment references, such as M-Pesa receipt codes. We do not store card or account numbers.</li>
        <li>
          Website usage data collected by Google Analytics, such as pages visited and device type,
          which does not identify you by name.
        </li>
      </ul>
    ),
  },
  {
    h: "How we use your information",
    body: (
      <ul className="list">
        <li>To respond to enquiries and book consultations, procedures and follow-up.</li>
        <li>To provide clinical assessment, second opinions and treatment.</li>
        <li>To communicate with hospitals, laboratories, insurers and other clinicians involved in your care, where necessary.</li>
        <li>To process payments and insurance claims.</li>
        <li>To improve our website and services.</li>
      </ul>
    ),
  },
  {
    h: "Legal basis and consent",
    body: (
      <p>
        Health information is sensitive personal data under the Kenya Data Protection Act, 2019. We
        process it with your consent, which you give when you submit a form or send us your
        records, and where necessary for your medical care. You may withdraw consent at any time by
        contacting us; this does not affect care already provided or records we are legally required
        to keep.
      </p>
    ),
  },
  {
    h: "Sharing your information",
    body: (
      <p>
        We do not sell your information. We share it only with those involved in your care or
        payment (such as the hospital, anaesthetist, laboratory or your insurer), with service
        providers who help us operate the website and forms, or where required by law. Messages sent
        by WhatsApp or email pass through those providers&apos; systems.
      </p>
    ),
  },
  {
    h: "Storage and security",
    body: (
      <p>
        We take reasonable technical and organisational measures to protect your information.
        Medical records are retained for as long as required by Kenyan medical record-keeping
        requirements and are then securely disposed of.
      </p>
    ),
  },
  {
    h: "Your rights",
    body: (
      <p>
        You have the right to be informed about how your data is used, to access the information we
        hold about you, to ask for corrections, to object to certain processing, and to request
        deletion where the law allows. You may also lodge a complaint with the Office of the Data
        Protection Commissioner (ODPC).
      </p>
    ),
  },
  {
    h: "Contact",
    body: (
      <p>
        For any privacy question or request, contact us on {OFFICE_PHONE_DISPLAY} or at{" "}
        <a href={`mailto:${EMAIL}`} style={{ color: "var(--teal)", fontWeight: 600 }}>
          {EMAIL}
        </a>
        .
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="hero">
        <h1 className="h1">Privacy Policy</h1>
        <p className="p" style={{ maxWidth: 760, marginBottom: 0 }}>
          How HealthPro Surgery collects, uses and protects your personal and health information.
          Last updated October 2026.
        </p>
      </section>
      <section className="card" style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 22 }}>
        {sections.map((s) => (
          <div key={s.h} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <h2 style={{ fontSize: 20, margin: 0 }}>{s.h}</h2>
            <div style={{ color: "var(--muted)" }}>{s.body}</div>
          </div>
        ))}
      </section>
    </>
  );
}
