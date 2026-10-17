import type { Metadata } from "next";
import Link from "next/link";
import ServiceCover from "@/components/ServiceCover";
import FAQSection from "../../components/FAQSection";

export const metadata: Metadata = {
  title: "Varicose Veins Treatment in Mombasa | EVLA",
  description:
    "Assessment and minimally invasive treatment of varicose veins in Mombasa, including endovenous laser ablation (EVLA), for leg pain, swelling, skin changes and ulcers.",
  openGraph: {
    type: "website",
    siteName: "HealthPro Surgery",
    title: "Varicose Veins Treatment in Mombasa | EVLA | HealthPro Surgery",
    description: "Assessment and minimally invasive treatment of varicose veins in Mombasa, including endovenous laser ablation (EVLA), for leg pain, swelling, skin changes and ulcers.",
    images: [{ url: "https://www.healthprosurgery.com/images/services/varicose-faq.jpg", width: 1200, height: 800 }],
  },
  alternates: { canonical: "/services/varicose-veins" },
};

const WHATSAPP_NUMBER = "254721446206";

export default function VaricoseVeinsPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery, I’d like to inquire about varicose vein treatment."
  )}`;

  const faqs = [
    {
      question: "What are varicose veins?",
      answer:
        "Varicose veins are enlarged, twisted veins usually affecting the legs. They occur when vein valves fail, causing blood to pool instead of flowing back to the heart.",
    },
    {
      question: "Are varicose veins dangerous?",
      answer:
        "Many varicose veins are harmless, but untreated cases can cause pain, swelling, skin discoloration, ulcers, bleeding, and occasionally blood clots.",
    },
    {
      question: "When should I see a doctor for varicose veins?",
      answer:
        "Seek medical advice if you have persistent pain, swelling, skin changes, ulcers, or bleeding from leg veins.",
    },
    {
      question: "What treatment options are available for varicose veins?",
      answer:
        "Treatment depends on severity and can include compression therapy, minimally invasive procedures, and surgery in selected cases.",
    },
    {
      question: "Is varicose vein treatment a day procedure?",
      answer:
        "Yes. Most modern treatments are done as day procedures, and many patients return home the same day.",
    },
  ];

  return (
    <>
      <section className="hero">
        <h1 className="h1">Varicose Veins</h1>
        <p className="p">
          Assessment and treatment of varicose veins and venous disease in Mombasa, Kenya.
          Get clear explanations and a safe pathway to care.
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
        </div>
      </section>

      <ServiceCover images={[{ src: "/images/services/varicose-faq.jpg", alt: "Vascular surgeon reviewing a duplex ultrasound scan of the leg veins with a patient" }]} />

      <Link className="guideCard" href="/patient-guides/bilateral-evla" style={{ marginTop: 28, display: "flex" }}>
        <h2 style={{ margin: 0, fontSize: 20 }}>Having laser treatment (EVLA)? Read the patient guide</h2>
        <p>
          What happens on the day, compression stockings, returning to work and driving, what is normal
          during recovery, and results — including when both legs are treated together.
        </p>
        <span className="more">Read the EVLA guide →</span>
      </Link>

      <FAQSection title="Varicose Veins – FAQs" faqs={faqs} />
    </>
  );
}
