import type { Metadata } from "next";
import Image from "next/image";
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
    "HealthPro Surgery's research and advocacy for equitable, affordable and safe surgical care in Kenya and sub-Saharan Africa: the evidence we follow, the priorities we advocate for Kenyan referral hospitals, and how to work with us.",
  openGraph: {
    type: "website",
    siteName: "HealthPro Surgery",
    title: "Global Surgery: Research & Advocacy | HealthPro Surgery",
    description:
      "Evidence and priorities for equitable, affordable and safe surgical care in Kenya and sub-Saharan Africa.",
    images: [{ url: `${SITE_URL}/images/global-surgery/og.jpg`, width: 1200, height: 630 }],
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
          sub-Saharan Africa carries a large share of that gap. At HealthPro Surgery, our work goes
          beyond the patients we treat. We study and advocate for what it takes to close the gap in
          Kenya: surgical capacity in public hospitals, training and keeping surgeons, safer
          emergency and perioperative care, and protecting patients from catastrophic costs.
        </p>
        <p className="p" style={{ maxWidth: 820 }}>
          Here we share the evidence we follow and the priorities we are pushing for in Kenyan
          referral hospitals. We update this page as new research is published.
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

      <figure className="gsFigure gsBanner">
        <Image
          src="/images/global-surgery/mombasa-collage.jpg"
          alt="Mombasa's Old Town waterfront and Fort Jesus above scenes of surgical care: an operating theatre, an emergency department, clinical teaching, ward care, a county hospital, monitoring, surgical instruments, health financing and a map of Kenya"
          width={1600}
          height={900}
          priority
          sizes="(max-width: 1200px) 100vw, 1150px"
        />
      </figure>

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
        <figure className="gsFigure gsRolesImg">
          <Image
            src="/images/global-surgery/ward-teaching.jpg"
            alt="A consultant surgeon teaching junior doctors on a hospital ward, reviewing results on a tablet"
            width={1600}
            height={900}
            sizes="(max-width: 900px) 100vw, 520px"
          />
        </figure>
        <div className="gsRolesText">
        <h2 style={{ fontSize: 22, margin: 0 }}>Why we do this work</h2>
        <p>
          Our team works in both private practice and public hospitals in Mombasa. We see every day
          how distance, cost, staffing and equipment shape what happens to a surgical patient, and
          we believe the same standard of safe, timely surgery should be available to every Kenyan.
        </p>
        <p>
          The work is led by Dr John Kinyua Murithi, FCS(ECSA), FACS, who heads emergency care at a
          public teaching and referral hospital in Mombasa and trains surgeons as COSECSA faculty.
          Experience in trauma surgery in Somalia and vascular training in Paris gives our approach
          a practical focus: improvements that work in public hospitals with limited resources.
        </p>
        <ProfileLinks />
        </div>
      </section>

      <h2 id="priorities" className="sectionTitle anchorTarget">
        Priorities for Kenyan referral hospitals
      </h2>
      <p className="p" style={{ maxWidth: 820, margin: "0 0 16px" }}>
        The changes we advocate to make surgical and emergency care safer, more accessible and more
        affordable. Each links to the research behind it.
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
        The peer-reviewed research that guides our work on surgical care in Kenya and sub-Saharan
        Africa, with a plain-language summary of each study.
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

      <figure className="gsFigure" style={{ marginTop: 36 }}>
        <Image
          src="/images/global-surgery/surgical-care-collage.jpg"
          alt="Surgical care across Kenya: surgeons operating, a consultant teaching, an emergency team receiving a patient, a county hospital, theatre equipment, health costs, a patient's hand and an ambulance on a rural road"
          width={1600}
          height={900}
          sizes="(max-width: 1200px) 100vw, 1150px"
        />
      </figure>

      <section id="collaborate" className="card anchorTarget" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 22, margin: 0 }}>Collaborate</h2>
        <p>
          We welcome collaboration with researchers, training programmes, hospitals, county health
          teams and funders working on surgical access, trauma systems and surgical training in East
          Africa. Email us at <strong>{EMAIL}</strong> or send a WhatsApp message.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello HealthPro Surgery, I'd like to discuss a global surgery collaboration.")}
            target="_blank"
            rel="noreferrer"
          >
            Message on WhatsApp
          </a>
          <Link className="btn" href="/publications">
            Our publications
          </Link>
        </div>
      </section>
    </>
  );
}
