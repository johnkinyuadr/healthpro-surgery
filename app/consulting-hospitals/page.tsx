// app/consulting-hospitals/page.tsx
import Link from "next/link";

type Hospital = {
  name: string;
  url?: string;
  highlight?: boolean;
  narration?: string;
};

const HOSPITALS: Hospital[] = [
  // Highlighted
  {
    name: "Avenue Healthcare – Mombasa",
    url: "https://avenuehealthcare.com",
    highlight: true,
    narration:
      "A modern multidisciplinary facility offering comprehensive surgical, diagnostic, and outpatient care with strong emphasis on quality and patient experience.",
  },
  {
    name: "Pandya Memorial Hospital – Mombasa",
    url: "https://pandyahospital.org",
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
    name: "Premier Hospital – Nyali, Mombasa",
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
      "A trusted community-based hospital providing accessible, high-quality medical and surgical care with a strong focus on continuity and safety.",
  },
  {
    name: "Bayleaf Hospital – Mombasa",
    url: "https://bayleafhospital.com",
    highlight: true,
    narration:
      "A contemporary healthcare facility delivering efficient outpatient, inpatient, and surgical services in a patient-friendly environment.",
  },

  // Others (links if available; leave url undefined if not sure)
  { name: "Aga Khan Hospital – Mombasa (Aga Khan)", url: "https://www.agakhanhospitals.org/mombasa" }, // optional duplicate; remove if you prefer
  { name: "Avenue Health Centre", url: "https://avenuehealthcare.com" }, // optional naming variant
  { name: "Mewa Hospital" },
  { name: "Jocham Hospital" },
  { name: "Sayyida Fatima Hospital" },
  { name: "Diani Beach Hospital" },
  { name: "Montana Hospital" },
  { name: "Arawa Hospital" },
  { name: "Beyondscope Hospital" },
  { name: "Al Farouq Hospital" },
  { name: "Bomu Hospital" },
  { name: "AfyaFirst Medical Centre" },
  { name: "The Nairobi Women’s Hospital – Mombasa" },
  { name: "The Nairobi Hospital – Nyali (Nairobi Home Hospital)" },
];

function classNames(...c: Array<string | false | undefined>) {
  return c.filter(Boolean).join(" ");
}

export default function ConsultingHospitalsPage() {
  const highlighted = HOSPITALS.filter((h) => h.highlight);
  const others = HOSPITALS.filter((h) => !h.highlight);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          Hospitals We Consult At
        </h1>
        <p className="mt-2 text-gray-600">
          A trusted network of hospitals across Mombasa, the South Coast, and Nairobi.
        </p>
      </div>

      {/* Highlighted "tabs" */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Featured Hospitals</h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlighted.map((h) => (
            <div
              key={h.name}
              className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug">{h.name}</h3>
                {h.url ? (
                  <a
                    href={h.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline whitespace-nowrap"
                  >
                    Visit site →
                  </a>
                ) : null}
              </div>
              {h.narration ? (
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {h.narration}
                </p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* Other hospitals */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Other Consulting Hospitals</h2>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((h) => (
            <div
              key={h.name}
              className="rounded-xl border border-gray-200 bg-white px-4 py-3"
            >
              {h.url ? (
                <a
                  href={h.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 hover:text-blue-600 hover:underline"
                >
                  {h.name}
                </a>
              ) : (
                <span className="text-gray-800">{h.name}</span>
              )}
            </div>
          ))}
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Some facilities may not have an official website listed yet. We can add links as they become available.
        </p>
      </section>

      <div className="border-t pt-6">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
