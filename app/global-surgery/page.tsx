import type { Metadata } from "next";
import Link from "next/link";
import ProfileLinks from "@/components/ProfileLinks";
import data from "@/lib/global-surgery-data.json";
import { EMAIL, SITE_URL, waLink } from "@/lib/site";

// Public content is generated from the Global Surgery Evidence Desk by
// scripts/build_global_surgery_data.py — edit it in the workspace, not here.

type Paper = {
  id: string; title: string; authors: string; journal: string; year: number | null;
  volume: string; doi: string; url: string; themes: string[]; countries: string[]; summary: string;
};
type Priority = { id: string; title: string; summary: string; theme: string; evidence: string[] };

const PAPERS = data.papers as Paper[];
const PRIORITIES = data.priorities as Priority[];

const THEME_LABEL: Record<string, string> = {
  capacity: "Surgical capacity",
  workforce: "Workforce & training",
  implementation: "Implementation",
  financing: "Financing",
  outcomes: "Patient outcomes",
  quality: "Quality of care",
};

export const metadata: Metadata = {
  title: "Global Surgery: Research & Advocacy",
  description:
    "Dr John Kinyua Murithi's research and advocacy for equitable, affordable and safe surgical care in Kenya and sub-Saharan Africa: key evidence, priorities for Kenyan referral hospitals and opportunities to collaborate.",
  openGraph: {
    type: "website",
    siteName: "HealthPro Surgery",
    title: "Global Surgery: Research & Advocacy | HealthPro Surgery",
    description:
      "Evidence and priorities for equitable, affordable and safe surgical care in Kenya and sub-Saharan Africa.",
    images: [{ url: `${SITE_URL}/images/dr-kinyua-theatre.jpg`, width: 1200, height: 800 }],
  },
  alternates: { canonical: "/global-surgery" },
};

const FOCUS = [
  {
    title: "Access and capacity",
    text: "Understanding what county and referral hospitals can safely provide, and where patients fall through the gaps between them.",
  },
  {
    title: "Workforce and training",
    text: "Training surgeons in Kenya through COSECSA, and creating the posts and conditions that keep them in the counties that need them.",
  },
  {
    title: "Safer surgery and emergency care",
    text: "Trauma systems, infection prevention and postoperative monitoring, measured through audit and registries.",
  },
  {
    title: "Financial protection",
    text: "Making sure the cost of an operation, and of getting to it, never decides whether a patient survives.",
  },
];

function citation(p: Paper) {
  return [p.authors && `${p.authors}.`, p.journal && `${p.journal}.`, [p.year, p.volume].filter(Boolean).join(";")]
    .filter(Boolean)
    .join(" ");
}

export default function GlobalSurgeryPage() {
  const byId = Object.fromEntries(PAPERS.map((p) => [p.id, p]));
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Global Surgery: Research & Advocacy",
    url: `${SITE_URL}/global-surgery`,
    author: { "@type": "Physician", name: "Dr John Kinyua Murithi", url: `${SITE_URL}/about` },
    hasPart: PAPERS.map((p) => ({
      "@type": "ScholarlyArticle",
      headline: p.title,
      author: p.authors,
      datePublished: p.year ? String(p.year) : undefined,
      isPartOf: p.journal,
      url: p.url || undefined,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Research &amp; advocacy
        </div>
        <h1 className="h1">Global Surgery</h1>
        <p className="p" style={{ maxWidth: 820 }}>
          Billions of people worldwide cannot get safe, affordable surgery when they need it, and
          sub-Saharan Africa carries a large share of that gap. Alongside clinical practice, Dr Kinyua
          works on what it takes to close it in Kenya: surgical capacity in public hospitals,
          training and keeping surgeons, safer emergency and perioperative care, and protecting
          patients from catastrophic costs.
        </p>
        <p className="p" style={{ maxWidth: 820 }}>
          This page brings together the evidence he tracks and the priorities he advocates for
          Kenyan referral hospitals. It is updated as new research is published.
        </p>
        <div className="btnRow">
          <a className="btn btnPrimary" href="#priorities">
            Priorities
          </a>
          <a className="btn" href="#evidence">
            Key evidence
          </a>
          <a className="btn" href="#collaborate">
            Collaborate
          </a>
        </div>
      </section>

      <h2 className="sectionTitle">Focus areas</h2>
      <section className="grid">
        {FOCUS.map((f) => (
          <div key={f.title} className="card">
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </section>

      <section className="card gsRoles" style={{ marginTop: 28 }}>
        <h2 style={{ fontSize: 22, margin: 0 }}>Why this work</h2>
        <p>
          Dr Kinyua leads emergency care at a public teaching and referral hospital in Mombasa, trains
          surgeons as COSECSA faculty, and is a Fellow of the College of Surgeons of East, Central and
          Southern Africa and of the American College of Surgeons. His earlier work as a trauma
          surgeon in Somalia and his vascular training in Paris shape a practical focus: improvements
          that work in public hospitals with limited resources.
        </p>
        <ProfileLinks />
      </section>

      <h2 id="priorities" className="sectionTitle anchorTarget">
        Priorities for Kenyan referral hospitals
      </h2>
      <p className="p" style={{ maxWidth: 820, margin: "0 0 16px" }}>
        Evidence-based changes that could make surgical and emergency care safer, more accessible and
        more affordable. Each links to the research behind it.
      </p>
      <section className="gsPriorities">
        {PRIORITIES.map((r) => (
          <article key={r.id} id={r.id} className="gsPriority">
            <span className="gsTheme">{THEME_LABEL[r.theme] ?? r.theme}</span>
            <h3>{r.title}</h3>
            <p>{r.summary}</p>
            {r.evidence.length > 0 && (
              <div className="gsEvidence">
                <span>Evidence:</span>
                {r.evidence.map((id) =>
                  byId[id] ? (
                    <a key={id} href={`#${id}`}>
                      {byId[id].authors.split(",")[0].split(" ")[0]} {byId[id].year}
                    </a>
                  ) : null
                )}
              </div>
            )}
          </article>
        ))}
      </section>

      <h2 id="evidence" className="sectionTitle anchorTarget">
        Key evidence
      </h2>
      <p className="p" style={{ maxWidth: 820, margin: "0 0 16px" }}>
        Peer-reviewed research on surgical care in Kenya and sub-Saharan Africa, with a plain-language
        summary of each study.
      </p>
      <section className="pubList">
        {PAPERS.map((p) => (
          <article key={p.id} id={p.id} className="pubCard anchorTarget">
            <div className="pubMeta">
              {p.themes.map((t) => (
                <span key={t} className="pubType">
                  {THEME_LABEL[t] ?? t}
                </span>
              ))}
              {p.countries.length > 0 && <span>{p.countries.join(", ")}</span>}
            </div>
            <h3 className="pubTitle">
              {p.url ? (
                <a href={p.url} target="_blank" rel="noreferrer">
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </h3>
            <p className="gsCite">{citation(p)}</p>
            <p style={{ margin: 0 }}>{p.summary}</p>
          </article>
        ))}
      </section>
      <p className="small" style={{ marginTop: 14 }}>
        Summaries are written for a general audience; please read the original papers for full
        findings. Last updated {new Date(data.updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}.
      </p>

      <section id="collaborate" className="card anchorTarget" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 22, margin: 0 }}>Collaborate</h2>
        <p>
          Dr Kinyua welcomes collaboration with researchers, training programmes, hospitals, county
          health teams and funders working on surgical access, trauma systems and surgical training in
          East Africa. Email <strong>{EMAIL}</strong> or send a WhatsApp message.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello Dr Kinyua, I'd like to discuss a global surgery collaboration.")}
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp
          </a>
          <Link className="btn" href="/publications">
            Dr Kinyua&apos;s publications
          </Link>
        </div>
      </section>
    </>
  );
}
