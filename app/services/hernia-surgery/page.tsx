import type { Metadata } from "next";
import Link from "next/link";
import ServiceCover from "@/components/ServiceCover";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "Hernia Surgery in Mombasa | Laparoscopic Repair",
  description:
    "Inguinal, umbilical, incisional and epigastric hernia repair in Mombasa, including laparoscopic (keyhole) surgery.",
  openGraph: {
    type: "website",
    siteName: "HealthPro Surgery",
    title: "Hernia Surgery in Mombasa | Laparoscopic Repair | HealthPro Surgery",
    description: "Inguinal, umbilical, incisional and epigastric hernia repair in Mombasa, including laparoscopic (keyhole) surgery.",
    images: [{ url: "https://www.healthprosurgery.com/images/services/hernia-surgery.jpg", width: 1200, height: 800 }],
  },
  alternates: { canonical: "/services/hernia-surgery" },
};

const WHATSAPP_NUMBER = "254721446206";

export default function HerniaSurgeryPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery, I’d like to inquire about hernia surgery."
  )}`;

  const faqs = [
    {
      question: "What is a hernia?",
      answer:
        "A hernia happens when tissue pushes through a weak area in the abdominal wall, causing a bulge that may be painful—especially when coughing or lifting.",
    },
    {
      question: "What types of hernias are common?",
      answer:
        "Common types include inguinal (groin), umbilical (navel), incisional (after previous surgery), and epigastric hernias.",
    },
    {
      question: "Do all hernias need surgery?",
      answer:
        "Most hernias do not heal on their own. Surgery is recommended if painful, enlarging, limiting daily activities, or at risk of complications.",
    },
    {
      question: "What happens if a hernia is left untreated?",
      answer:
        "A hernia can become trapped or strangulated. Strangulation is an emergency and may cause bowel obstruction and severe pain.",
    },
    {
      question: "How long is recovery after hernia surgery?",
      answer:
        "Many patients go home the same day. Full recovery typically takes 2–6 weeks depending on the type of repair.",
    },
  ];

  return (
    <>
      <section className="hero">
        <h1 className="h1">Hernia Surgery</h1>
        <p className="p">
          Assessment and hernia repair in Mombasa, Kenya — with clear guidance on warning signs and recovery.
        </p>

        <div className="btnRow">
          <Link className="btn btnAccent" href="/second-opinion">
            Get an Online Second Opinion
          </Link>
          <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <Link className="btn" href="/services">
            Back to Services
          </Link>
          <Link className="btn" href="/patient-guides/hernia-repair-recovery">
            Recovery guide
          </Link>
        </div>
      </section>

      <ServiceCover images={[{ src: "/images/services/hernia-surgery.jpg", alt: "Laparoscopic hernia repair with mesh" }]} />

      <FAQSection title="Hernia Surgery – FAQs" faqs={faqs} />
    </>
  );
}
