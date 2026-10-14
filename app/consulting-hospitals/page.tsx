import type { Metadata } from "next";
import Link from "next/link";
import { CLINIC_HOURS, MAPS_DIRECTIONS, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hospitals We Consult At",
  description:
    "Hospitals where HealthPro Surgery consultants provide specialist surgical care in Mombasa, the South Coast and Nairobi, including Aga Khan Hospital Mombasa, The Mombasa Hospital and Pandya Memorial Hospital.",
  alternates: { canonical: "/consulting-hospitals" },
};

type Hospital = {
  name: string;
  url?: string;
  narration?: string;
};

const MAIN_CLINIC: Hospital = {
  name: "Aga Khan Hospital – Mombasa",
  url: "https://www.agakhanhospitals.org/mombasa",
  narration:
    "An internationally accredited tertiary hospital delivering world-class specialist care, advanced diagnostics, and evidence-based surgical services.",
};

const FEATURED: Hospital[] = [
  {
    name: "The Mombasa Hospital",
    url: "https://www.themombasahospital.com",
    narration:
      "A premier referral hospital in the Coast region, offering advanced diagnostics, theatre services, ICU care, and specialist-led multidisciplinary management.",
  },
  {
    name: "Pandya Memorial Hospital – Mombasa",
    url: "https://pandyahospital.org/dr-john-kinyua/",
    narration:
      "A well-established hospital combining affordability with dependable surgical and inpatient services, serving a wide spectrum of patients across the Coast region.",
  },
  {
    name: "Avenue Healthcare – Mombasa",
    url: "https://avenuehealthcare.com",
    narration:
      "A modern multidisciplinary facility offering comprehensive surgical, diagnostic, and outpatient care with strong emphasis on quality and patient experience.",
  },
  {
    name: "Premier Hospital – Mombasa",
    url: "https://premierhospital.co.ke",
    narration:
      "A fast-growing private hospital offering modern surgical facilities, efficient emergency care, and patient-centred specialist services.",
  },
  {
    name: "Welcare Medical Centre – Mombasa",
    url: "https://welcaremedicalcentre.co.ke",
    narration:
      "A trusted community-based facility providing accessible, high-quality medical and surgical care with a strong focus on continuity and safety.",
  },
  {
    name: "Bayleaf Hospital – Mombasa",
    url: "https://bayleafhospital.com",
    narration:
      "A contemporary healthcare facility delivering efficient outpatient, inpatient, and surgical services in a patient-friendly environment.",
  },
];

const OTHERS: Hospital[] = [
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
  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Hospitals
        </div>
        <h1 className="h1">Hospitals we consult at</h1>
        <p className="p" style={{ maxWidth: 760, marginBottom: 0 }}>
          HealthPro Surgery consultants provide specialist care across a trusted network of hospitals
          in Mombasa, the South Coast, and Nairobi. Consultations are held at our clinic at Aga Khan
          Hospital Mombasa; surgery and inpatient care can be arranged at the hospital that best suits
          your needs and insurance cover.
        </p>
      </section>

      <section className="mainClinic">
        <div className="mainClinicText">
          <div className="eyebrow">Main clinic</div>
          <h2 className="h2" style={{ fontSize: 32 }}>
            {MAIN_CLINIC.name}
          </h2>
          <p className="lead" style={{ fontSize: 16 }}>
            Doctors&apos; Plaza, First Floor. {MAIN_CLINIC.narration}
          </p>
          <div className="btnRow">
            <a className="btn btnPrimary" href={MAPS_DIRECTIONS} target="_blank" rel="noreferrer">
              Get directions
            </a>
            <a className="btn" href={MAIN_CLINIC.url} target="_blank" rel="noreferrer">
              Hospital website
            </a>
          </div>
        </div>
        <div className="mainClinicHours">
          <b>Clinic hours</b>
          <table className="hoursTable">
            <tbody>
              {CLINIC_HOURS.map((h) => (
                <tr key={h.days}>
                  <th scope="row">{h.days}</th>
                  <td>{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <h2 className="sectionTitle">Featured hospitals</h2>
      <section className="hospitalGrid">
        {FEATURED.map((h) => (
          <article key={h.name} className="hospitalCard">
            <h3>{h.name}</h3>
            <p>{h.narration}</p>
            {h.url && (
              <a className="textLink" href={h.url} target="_blank" rel="noreferrer">
                Visit website →
              </a>
            )}
          </article>
        ))}
      </section>

      <h2 className="sectionTitle">Other consulting hospitals</h2>
      <ul className="hospitalList">
        {OTHERS.map((h) => (
          <li key={h.name}>
            {h.url ? (
              <a href={h.url} target="_blank" rel="noreferrer">
                {h.name}
              </a>
            ) : (
              h.name
            )}
          </li>
        ))}
      </ul>

      <section className="card" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 22, margin: 0 }}>Not sure which hospital is right for you?</h2>
        <p>
          We can advise on the most suitable hospital for your procedure, taking into account the
          facilities required and your insurance cover.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello HealthPro Surgery, I’d like advice on which hospital to use for my procedure.")}
            target="_blank"
            rel="noreferrer"
          >
            Ask on WhatsApp
          </a>
          <Link className="btn" href="/#insurance">
            Insurers accepted
          </Link>
        </div>
      </section>
    </>
  );
}
