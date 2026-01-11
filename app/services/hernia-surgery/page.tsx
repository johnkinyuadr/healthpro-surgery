import Link from "next/link";
import FAQSection from "../../components/FAQSection";

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
        </div>
      </section>

      <FAQSection title="Hernia Surgery – FAQs" faqs={faqs} />
    </>
  );
}
