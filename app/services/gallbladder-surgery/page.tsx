import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Gallbladder Surgery in Mombasa | Laparoscopic Cholecystectomy",
  description:
    "Laparoscopic (keyhole) gallbladder removal in Mombasa for gallstones and gallbladder disease. Consultant-led care at Aga Khan Hospital Mombasa.",
  openGraph: {
    type: "website",
    siteName: "HealthPro Surgery",
    title: "Gallbladder Surgery in Mombasa | Laparoscopic Cholecystectomy | HealthPro Surgery",
    description: "Laparoscopic (keyhole) gallbladder removal in Mombasa for gallstones and gallbladder disease. Consultant-led care at Aga Khan Hospital Mombasa.",
    images: [{ url: "https://www.healthprosurgery.com/images/services/laparoscopic-surgery.jpg", width: 1200, height: 800 }],
  },
  alternates: { canonical: "/services/gallbladder-surgery" },
};

export default function GallbladderSurgeryPage() {
  return (
    <ServicePage
      images={[
        { src: "/images/services/laparoscopic-surgery.jpg", alt: "Surgical team performing laparoscopic (keyhole) surgery" },
      ]}
      eyebrow="Laparoscopic surgery"
      title="Gallbladder Surgery"
      intro="Gallstones are common and often cause no trouble, but when they lead to pain or complications, removal of the gallbladder is the definitive treatment. Most operations are performed laparoscopically (keyhole), allowing a shorter hospital stay and quicker return to normal activity."
      whatsappMessage="Hello HealthPro Surgery, I’d like to book a consultation about gallstones / gallbladder surgery."
      conditions={{
        heading: "Conditions treated",
        items: [
          "Symptomatic gallstones (biliary colic)",
          "Acute and chronic cholecystitis",
          "Gallstone pancreatitis, after recovery",
          "Gallbladder polyps requiring removal",
          "Stones in the bile duct, with endoscopic or surgical management",
        ],
      }}
      approach={{
        heading: "Assessment and treatment",
        items: [
          "Abdominal ultrasound and liver function tests",
          "MRCP or further imaging when bile-duct stones are suspected",
          "Laparoscopic cholecystectomy as the standard approach",
          "Day-case or overnight stay for most patients",
          "Open surgery reserved for selected complex cases",
        ],
      }}
      faqs={[
        {
          question: "What are the symptoms of gallstones?",
          answer:
            "The typical symptom is pain in the upper right or central abdomen, often after fatty meals, sometimes spreading to the back or right shoulder. Fever, yellowing of the eyes or skin, or severe persistent pain needs urgent medical attention.",
        },
        {
          question: "Do all gallstones need surgery?",
          answer:
            "No. Gallstones found incidentally without symptoms usually do not need treatment. Surgery is recommended once stones cause pain or complications, because further attacks are likely.",
        },
        {
          question: "Can I live normally without a gallbladder?",
          answer:
            "Yes. Bile continues to flow from the liver into the bowel. A few people notice looser stools after fatty meals at first, which usually settles.",
        },
        {
          question: "How long is recovery?",
          answer:
            "Most patients go home the same day or the next day and return to desk work within one to two weeks. Heavy lifting is usually avoided for about four weeks.",
        },
      ]}
      related={[
        { label: "Hernia surgery", href: "/services/hernia-surgery" },
        { label: "Endoscopy", href: "/services/gi-endoscopy" },
      ]}
    />
  );
}
