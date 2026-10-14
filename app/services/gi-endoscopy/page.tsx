import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Endoscopy & Colonoscopy in Mombasa | OGD",
  description:
    "Upper GI endoscopy (OGD) and colonoscopy in Mombasa for reflux, swallowing difficulty, bleeding, anaemia, change in bowel habit and screening. Aga Khan Hospital Mombasa.",
  alternates: { canonical: "/services/gi-endoscopy" },
};

export default function GiEndoscopyPage() {
  return (
    <ServicePage
      eyebrow="GI endoscopy"
      title="Endoscopy and Colonoscopy"
      intro="Diagnostic and therapeutic endoscopy of the upper and lower gastrointestinal tract. Endoscopy allows direct inspection of the lining of the gut, biopsy where needed, and treatment of selected conditions in the same sitting."
      whatsappMessage="Hello HealthPro Surgery, I’d like to book an endoscopy or colonoscopy."
      conditions={{
        heading: "Common reasons for endoscopy",
        items: [
          "Difficulty or pain on swallowing",
          "Persistent heartburn, reflux or upper abdominal pain",
          "Vomiting blood or passing black stools",
          "Rectal bleeding or a change in bowel habit",
          "Unexplained anaemia or weight loss",
          "Colorectal cancer screening and polyp surveillance",
        ],
      }}
      approach={{
        heading: "Procedures offered",
        items: [
          "Upper GI endoscopy (OGD) with biopsy",
          "Colonoscopy with biopsy and polyp removal",
          "Dilatation of oesophageal strictures",
          "Endoscopic assessment before and after surgery",
          "Sedation or anaesthesia support as appropriate",
        ],
      }}
      faqs={[
        {
          question: "How do I prepare for an OGD?",
          answer:
            "You will usually be asked not to eat for about six hours beforehand, with small sips of water allowed until two hours before. Bring a list of your medications, especially blood thinners and diabetes medicines.",
        },
        {
          question: "How do I prepare for a colonoscopy?",
          answer:
            "The bowel must be emptied with a prescribed laxative preparation, taken the evening before and/or the morning of the procedure, with a low-fibre diet beforehand. Detailed written instructions are given at booking.",
        },
        {
          question: "Will I be awake?",
          answer:
            "Most patients receive sedation and remember little of the procedure. A throat spray may be used for OGD. You should not drive for the rest of the day after sedation, so please arrange for someone to accompany you.",
        },
        {
          question: "How long does it take?",
          answer:
            "An OGD typically takes 10–15 minutes and a colonoscopy 20–45 minutes. Allow two to three hours at the hospital for preparation and recovery.",
        },
        {
          question: "When will I get the results?",
          answer:
            "Findings are discussed with you on the day. Biopsy results usually take several working days and are reviewed with you at follow-up.",
        },
      ]}
      related={[
        { label: "Gallbladder surgery", href: "/services/gallbladder-surgery" },
        { label: "Hernia surgery", href: "/services/hernia-surgery" },
      ]}
    />
  );
}
