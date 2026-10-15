import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Vascular Surgeon in Mombasa | Arterial & Venous Disease",
  description:
    "Consultant vascular surgery in Mombasa: peripheral arterial disease, diabetic foot, aneurysms, carotid disease, venous disease and dialysis access. Aga Khan Hospital Mombasa, Doctors' Plaza.",
  openGraph: {
    type: "website",
    siteName: "HealthPro Surgery",
    title: "Vascular Surgeon in Mombasa | Arterial & Venous Disease | HealthPro Surgery",
    description: "Consultant vascular surgery in Mombasa: peripheral arterial disease, diabetic foot, aneurysms, carotid disease, venous disease and dialysis access. Aga Khan Hospital Mombasa, Doctors' Plaza.",
    images: [{ url: "https://www.healthprosurgery.com/images/services/vascular-surgery.jpg", width: 1200, height: 800 }],
  },
  alternates: { canonical: "/services/vascular-surgery" },
};

export default function VascularSurgeryPage() {
  return (
    <ServicePage
      images={[
        { src: "/images/services/vascular-surgery.jpg", alt: "Vascular surgeon performing an endovascular procedure with angiography guidance" },
      ]}
      eyebrow="Vascular surgery"
      title="Vascular Surgery in Mombasa"
      intro="Specialist assessment and treatment of diseases of the arteries and veins, with open and endovascular options. Care is planned around your symptoms, imaging and overall health, with the aim of relieving pain, healing wounds and preventing limb loss or stroke."
      whatsappMessage="Hello HealthPro Surgery, I’d like to book a vascular surgery consultation."
      conditions={{
        heading: "Conditions treated",
        items: [
          "Peripheral arterial disease — leg pain on walking, rest pain, non-healing wounds",
          "Diabetic foot disease and critical limb ischaemia",
          "Abdominal and peripheral aneurysms",
          "Carotid artery disease and stroke prevention",
          "Varicose veins, venous ulcers and chronic venous insufficiency",
          "Deep vein thrombosis complications and post-thrombotic leg",
          "Dialysis access creation and complications",
          "Vascular trauma",
        ],
      }}
      approach={{
        heading: "Assessment and treatment",
        items: [
          "Clinical examination and ankle–brachial pressure index (ABPI)",
          "Duplex ultrasound, CT angiography or angiography where indicated",
          "Risk-factor control: smoking cessation, diabetes, blood pressure and cholesterol",
          "Endovascular treatment (angioplasty and stenting) for suitable lesions",
          "Open surgery including bypass and endarterectomy",
          "Wound care and limb-salvage planning with your wider care team",
        ],
      }}
      faqs={[
        {
          question: "When should I see a vascular surgeon?",
          answer:
            "Seek review for calf or buttock pain when walking that settles with rest, foot pain at night, a wound on the leg or foot that is not healing, colour change in the toes, or a pulsating swelling in the abdomen. A sudden cold, painful, pale leg is an emergency — go to the nearest A&E immediately.",
        },
        {
          question: "What is peripheral arterial disease?",
          answer:
            "It is narrowing or blockage of the arteries supplying the legs, usually from atherosclerosis. It is more common in people who smoke or have diabetes, high blood pressure or high cholesterol, and it is a marker of increased risk of heart attack and stroke.",
        },
        {
          question: "Do I need surgery for blocked leg arteries?",
          answer:
            "Not always. Many patients with walking pain improve with risk-factor control, medication and a structured walking programme. Angioplasty or bypass is considered when symptoms limit daily life, or when there is rest pain, ulceration or gangrene.",
        },
        {
          question: "Why are diabetic foot wounds urgent?",
          answer:
            "Reduced blood flow and nerve damage mean that small wounds in people with diabetes can deteriorate quickly. Early vascular assessment improves the chances of healing and of avoiding amputation.",
        },
        {
          question: "Which tests will I need?",
          answer:
            "Most patients start with an examination and a bedside pressure measurement. A duplex ultrasound scan is often the next step, and CT angiography is used when planning treatment.",
        },
      ]}
      related={[
        { label: "Diabetic foot guide", href: "/patient-guides/diabetic-foot" },
        { label: "Carotid disease", href: "/services/carotid-disease" },
        { label: "Varicose veins", href: "/services/varicose-veins" },
        { label: "Dialysis access", href: "/services/dialysis-access" },
      ]}
    />
  );
}
