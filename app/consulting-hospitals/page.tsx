import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hospitals We Consult At",
  description:
    "Hospitals where HealthPro Surgery consultants provide specialist surgical care in Mombasa, the South Coast, and Nairobi.",
};

type Hospital = {
  name: string;
  url?: string;
  highlight?: boolean;
  narration?: string;
};

const HOSPITALS: Hospital[] = [
  // ===== Highlighted =====
  {
    name: "Avenue Healthcare – Mombasa",
    url: "https://avenuehealthcare.com",
    highlight: true,
    narration:
      "A modern multidisciplinary facility offering comprehensive surgical, diagnostic, and outpatient care with strong emphasis on quality and patient experience.",
  },
  {
    name: "Pandya Memorial Hospital – Mombasa",
    url: "https://pandyahospital.org/dr-john-kinyua/",
    highlight: true,
    narration:
      "A well-established hospital combining affordability with dependable surgical and inpatient services, serving a wide spectrum of patients across the Coast region.",
  },
  {
    name: "The Mombasa Hospital",
    url: "https://www.themombasahospital.com",
    highlight: true,
    narration:
      "A premier referral hospital in the Coast region, offering advanced diagnostics, theatre services, ICU care, and specialist-led multidisciplinary management.",
  },
  {
    name: "Aga Khan Hospital – Mombasa",
    url: "https://www.agakhanhospitals.org/mombasa",
    highlight: true,
    narration:
      "An internationally accredited tertiary hospital delivering world-class specialist care, advanced diagnostics, and evidence-based surgical services.",
  },
  {
    name: "Premier Hospital – Mombasa",
    url: "https://premierhospital.co.ke",
    highlight: true,
    narration:
      "A fast-growing private hospital offering modern surgical facilities, efficient emergency care, and patient-centred specialist services.",
  },
  {
    name: "Welcare Medical Centre – Mombasa",
    url: "https://welcaremedicalcentre.co.ke",
    highlight: true,
    narration:
      "A trusted community-based facility providing accessible, high-quality medical and surgical care with a strong focus on continuity and safety.",
  },
  {
    name: "Bayleaf Hospital – Mombasa",
    url: "https://bayleafhospital.com",
    highlight: true,
    narration:
      "A contemporary healthcare facility delivering efficient outpatient, inpatient, and surgical services in a patient-friendly environment.",
  },

  // ===== Others (add URLs where available) =====
  { name: "Mewa Hospital" },
  { name: "Jocham Hospital" },
  { name: "Sayyida Fatima Hospital" },
  { name: "The Nairobi Women’s Hospital – Mombasa" },
  { name: "The Nairobi Home Hospital – Nyali" },
  { name: "Diani Beach Hospital" },
  { name: "Montana Hospital" },
  { name: "Arawa Hospital" },
  { name: "Beyondscope Hospital" },
  { name: "Al Farouq Hospital" },
  { name: "Bomu Hospital" },
  { name: "AfyaFirst Medical Centre" },
];

export default function ConsultingHospitalsPage() {
  const highlighted = HOSPITALS.filter((h) => h.highlight);
  const others = HOSPITALS.filter((h) => !h.highlight);

  return (
    <>
      <section className="hero">
        <h1 className="h1">Hospitals We Consult At</h1>
        <p className="p">
          HealthPro Surgery consultants provide specialist care across a trusted network
          of hospitals in Mombasa, the South Coast, and Nairobi.
        </p>
      </section>

      <section style={{ marginTop: "24px" }}>
        <h2 className="sectionTitle">Featured Hospitals</h2>

        <div className="grid" style={{ marginTop: "12px" }}>
          {highlighted.map((h) => (
            <div key={h.name} className="card" style={{ gridColumn: "span 4" }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
                <h3 style={{ margin: 0 }}>{h.name}</h3>
                {h.url ? (
                  <a
                    className="link"
                    href={h.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Website →
                  </a>
                ) : null}
              </div>

              {h.narration ? (
                <p className="p" style={{ marginTop: "10px" }}>
                  {h.narration}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "24px" }}>
        <h2 className="sectionTitle">Other Consulting Hospitals</h2>

        <div className="grid" style={{ marginTop: "12px" }}>
          {others.map((h) => (
            <div key={h.name} className="card" style={{ gridColumn: "span 4" }}>
              {h.url ? (
                <a className="link" href={h.url} target="_blank" rel="noreferrer">
                  {h.name}
                </a>
              ) : (
                <span>{h.name}</span>
              )}
            </div>
          ))}
        </div>

        <p className="p" style={{ marginTop: "12px", opacity: 0.85 }}>
          Where an official website link is available, it is included. Additional links can be added anytime.
        </p>
      </section>

      <section style={{ marginTop: "24px" }}>
        <Link className="link" href="/">
          ← Back to Home
        </Link>
      </section>
    </>
  );
}
