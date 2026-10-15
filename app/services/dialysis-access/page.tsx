import type { Metadata } from "next";
import Link from "next/link";
import ServiceCover from "@/components/ServiceCover";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "Dialysis Access Surgery in Mombasa | AV Fistula & Graft",
  description:
    "AV fistula and AV graft creation, planning and complication management for haemodialysis patients in Mombasa, Kenya.",
  openGraph: {
    type: "website",
    siteName: "HealthPro Surgery",
    title: "Dialysis Access Surgery in Mombasa | AV Fistula & Graft | HealthPro Surgery",
    description: "AV fistula and AV graft creation, planning and complication management for haemodialysis patients in Mombasa, Kenya.",
    images: [{ url: "https://www.healthprosurgery.com/images/services/dialysis-faq.jpg", width: 1200, height: 800 }],
  },
  alternates: { canonical: "/services/dialysis-access" },
};

const WHATSAPP_NUMBER = "254721446206";

export default function DialysisAccessPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery, I’d like to inquire about dialysis access (AV fistula/AV graft)."
  )}`;

  const faqs = [
    {
      question: "What is dialysis access?",
      answer:
        "Dialysis access is a surgically created route that allows blood to be removed and returned safely during hemodialysis.",
    },
    {
      question: "What types of dialysis access are available?",
      answer:
        "The main types are an AV fistula, an AV graft, and a dialysis catheter. AV fistulas and grafts are preferred for long-term dialysis.",
    },
    {
      question: "Which dialysis access is best?",
      answer:
        "An AV fistula is usually best because it lasts longer and has fewer infections and complications compared to catheters.",
    },
    {
      question: "When should dialysis access be created?",
      answer:
        "Ideally weeks to months before dialysis starts to allow time for healing and maturation.",
    },
    {
      question: "What problems can occur with dialysis access?",
      answer:
        "Complications can include infection, narrowing (stenosis), clotting, poor flow, bleeding, or arm swelling. Early review helps prevent access failure.",
    },
  ];

  return (
    <>
      <section className="hero">
        <h1 className="h1">Dialysis Access</h1>
        <p className="p">
          AV fistula and AV graft creation, follow-up, and management of access complications in Mombasa, Kenya.
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
          <Link className="btn" href="/patient-guides/av-fistula-care">
            Fistula care guide
          </Link>
        </div>
      </section>

      <ServiceCover images={[{ src: "/images/services/dialysis-faq.jpg", alt: "Nurse caring for a patient during haemodialysis" }]} />

      <FAQSection title="Dialysis Access – FAQs" faqs={faqs} />
    </>
  );
}
