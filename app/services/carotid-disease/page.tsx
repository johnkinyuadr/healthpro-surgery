import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Carotid Artery Disease & Stroke Prevention | Mombasa",
  description:
    "Assessment and surgical treatment of carotid artery stenosis in Mombasa, including carotid endarterectomy, to reduce the risk of stroke.",
  alternates: { canonical: "/services/carotid-disease" },
};

export default function CarotidDiseasePage() {
  return (
    <ServicePage
      eyebrow="Vascular surgery"
      title="Carotid Artery Disease"
      intro="Narrowing of the carotid arteries in the neck is an important and treatable cause of stroke. Assessment focuses on how severe the narrowing is, whether it has caused symptoms, and whether you would benefit from surgery in addition to best medical treatment."
      whatsappMessage="Hello HealthPro Surgery, I’d like to book a consultation about carotid artery disease."
      conditions={{
        heading: "Who should be assessed",
        items: [
          "Transient ischaemic attack (TIA, or 'mini-stroke')",
          "Recent minor stroke",
          "Temporary loss of vision in one eye (amaurosis fugax)",
          "Carotid narrowing found on a scan",
          "A neck bruit found on examination",
        ],
      }}
      approach={{
        heading: "Assessment and treatment",
        items: [
          "Carotid duplex ultrasound to grade the narrowing",
          "CT angiography when planning intervention",
          "Best medical therapy: antiplatelets, statins, blood pressure and diabetes control",
          "Carotid endarterectomy for suitable patients",
          "Coordination with neurology and cardiology where needed",
        ],
      }}
      faqs={[
        {
          question: "What is carotid artery disease?",
          answer:
            "It is a build-up of plaque in the carotid arteries, which carry blood to the brain. Fragments of plaque or clot can break off and cause a TIA or stroke.",
        },
        {
          question: "I had a mini-stroke. How urgent is assessment?",
          answer:
            "Very urgent. The risk of a full stroke is highest in the first days and weeks after a TIA. If you have new weakness, facial droop or difficulty speaking, go to A&E immediately; once stable, carotid assessment should follow promptly.",
        },
        {
          question: "Does everyone with carotid narrowing need surgery?",
          answer:
            "No. Surgery is mainly recommended for significant narrowing that has caused symptoms. Many patients without symptoms are best managed with medication and regular monitoring.",
        },
        {
          question: "What is a carotid endarterectomy?",
          answer:
            "It is an operation through a small incision in the neck to remove plaque from the artery. Most patients stay in hospital for one or two nights.",
        },
      ]}
      related={[
        { label: "Vascular surgery", href: "/services/vascular-surgery" },
        { label: "Online second opinion", href: "/second-opinion" },
      ]}
    />
  );
}
