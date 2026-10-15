import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProfileLinks from "@/components/ProfileLinks";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Dr John Kinyua Murithi | Vascular & General Surgeon, Mombasa",
  description:
    "Dr John Kinyua Murithi, MBChB, FCS(ECSA), FACS — Consultant General, Vascular and Laparoscopic Surgeon in Mombasa. Vascular fellowship in Paris, Head of Accident & Emergency at Coast General Teaching and Referral Hospital and COSECSA faculty.",
  alternates: { canonical: "/about" },
};

const QUALIFICATIONS = [
  { title: "MBChB", text: "Bachelor of Medicine and Bachelor of Surgery" },
  { title: "FCS(ECSA)", text: "Fellow, College of Surgeons of East, Central & Southern Africa — General Surgery" },
  { title: "FACS", text: "Fellow, American College of Surgeons" },
  { title: "Vascular fellowship", text: "Vascular surgery fellowship training in Paris, France" },
];

const ROLES = [
  "Founder and Lead Consultant, HealthPro Surgery",
  "Head of Accident & Emergency, Coast General Teaching and Referral Hospital (CGTRH)",
  "Surgical educator and COSECSA faculty member, training the next generation of surgeons",
  "Quality-improvement and patient-safety lead",
];

const INTERESTS = [
  "Vascular surgery",
  "Endovascular surgery",
  "Diabetic foot & limb salvage",
  "Carotid disease",
  "Aneurysm surgery",
  "Varicose veins & EVLA",
  "Dialysis access",
  "Laparoscopic surgery",
  "Trauma surgery",
  "GI endoscopy",
  "Colorectal surgery",
  "Global surgery",
];

const EXPECT = [
  {
    title: "Time to understand",
    text: "Every diagnosis and option is explained clearly, with time for your questions and your family's.",
  },
  {
    title: "Shared decisions",
    text: "Treatment plans are made with you — including when the best option is not to operate.",
  },
  {
    title: "Evidence-based care",
    text: "Recommendations follow current international guidance, adapted to your circumstances.",
  },
  {
    title: "Continuity",
    text: "Direct communication with your surgeon before and after treatment, and coordinated care with your other doctors.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="hero aboutHero">
        <div className="aboutHeroText">
          <div className="eyebrow">About</div>
          <h1 className="h1" style={{ margin: 0 }}>
            Dr John Kinyua Murithi
          </h1>
          <p className="aboutCreds">MBChB, FCS(ECSA), FACS</p>
          <p className="p" style={{ margin: 0 }}>
            Consultant General, Vascular and Laparoscopic Surgeon based in Mombasa, and founder of
            HealthPro Surgery. Dr Kinyua trained in vascular surgery in Paris and has worked as a
            trauma surgeon in Somalia. He now combines private practice at Aga Khan Hospital Mombasa
            with leadership of the Accident &amp; Emergency department at Coast General Teaching and
            Referral Hospital, and with surgical training as COSECSA faculty.
          </p>
          <p className="p" style={{ margin: 0 }}>
            His practice centres on arterial and venous disease, limb salvage, dialysis access and
            minimally invasive surgery — with careful assessment, honest advice and shared decisions.
          </p>
          <div className="btnRow" style={{ paddingTop: 4 }}>
            <a
              className="btn btnPrimary"
              href={waLink("Hello HealthPro Surgery, I’d like to book a consultation with Dr Kinyua.")}
              target="_blank"
              rel="noreferrer"
            >
              Book a consultation
            </a>
            <Link className="btn" href="/media">
              Watch interviews
            </Link>
          </div>
          <ProfileLinks />
        </div>
        <div className="aboutHeroMedia">
          <div className="portrait">
            <Image
              src="/images/dr-kinyua.jpg"
              alt="Dr John Kinyua Murithi in surgical scrubs"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 400px"
            />
          </div>
        </div>
      </section>

      <h2 className="sectionTitle">Qualifications &amp; training</h2>
      <section className="credList">
        {QUALIFICATIONS.map((q) => (
          <div key={q.title} className="credItem">
            <strong>{q.title}</strong>
            <span>{q.text}</span>
          </div>
        ))}
      </section>

      <section className="grid" style={{ marginTop: 32 }}>
        <div className="card">
          <h2 style={{ fontSize: 20 }}>Current roles</h2>
          <ul className="list" style={{ marginTop: 10 }}>
            {ROLES.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <p style={{ marginTop: 14 }}>
            <Link className="textLink" href="/publications">
              Publications &amp; research →
            </Link>
          </p>
        </div>
        <div className="card">
          <h2 style={{ fontSize: 20 }}>Clinical interests</h2>
          <div className="chips" style={{ paddingTop: 10 }}>
            {INTERESTS.map((i) => (
              <span key={i} className="chip">
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      <h2 className="sectionTitle">What you can expect</h2>
      <section className="careGrid">
        {EXPECT.map((e, i) => (
          <div key={e.title} className="careItem">
            <span className="stepNum">{i + 1}</span>
            <div>
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </div>
          </div>
        ))}
      </section>

      <h2 className="sectionTitle">The team</h2>
      <section className="teamCard card">
        <div className="teamPhoto">
          <Image
            src="/images/dr-collins-ochieng-20260108.jpg"
            alt="Dr Collins Ochieng, General Surgeon"
            fill
            sizes="(max-width: 700px) 90vw, 240px"
          />
        </div>
        <div className="teamText">
          <h3 style={{ margin: 0, fontSize: 21 }}>Dr Collins Ochieng</h3>
          <p className="aboutRole">General Surgeon</p>
          <p>
            Dr Collins Ochieng is a general surgeon with experience in the management of a wide range
            of general surgical conditions. His practice focuses on safe, effective and
            patient-centred surgical care, with clear communication, thorough assessment and
            evidence-based decision-making. He works collaboratively within the HealthPro Surgery team
            to provide comprehensive, coordinated care.
          </p>
        </div>
      </section>
    </>
  );
}
