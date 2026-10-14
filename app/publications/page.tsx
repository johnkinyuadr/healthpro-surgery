import type { Metadata } from "next";
import Link from "next/link";
import { PUBLICATIONS, SCHOLAR_PROFILE, type Publication } from "@/lib/publications";

export const metadata: Metadata = {
  title: "Publications & Research",
  description:
    "Peer-reviewed publications by Dr John Kinyua Murithi, Consultant General, Vascular and Laparoscopic Surgeon, Mombasa — vascular surgery, dialysis access and surgical training in Kenya.",
  alternates: { canonical: "/publications" },
};

function Authors({ authors }: { authors: string }) {
  const parts = authors.split(/(Murithi JK|Murithi J\b|Kinyua J\b)/);
  return (
    <>
      {parts.map((p, i) =>
        /Murithi|Kinyua J/.test(p) ? (
          <strong key={i} style={{ color: "var(--navy)" }}>
            {p}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

function PubCard({ p }: { p: Publication }) {
  return (
    <article className="pubCard">
      <div className="pubMeta">
        <span className="pubType">{p.type}</span>
        <span>{p.topic}</span>
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
      <p className="pubAuthors">
        <Authors authors={p.authors} />
      </p>
      <p className="pubJournal">
        <em>{p.journal}</em> · {p.year}
        {p.details ? ` · ${p.details}` : ""}
        {p.doi ? (
          <>
            {" "}
            · doi:{" "}
            <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer">
              {p.doi}
            </a>
          </>
        ) : null}
      </p>
      <p className="pubSummary">{p.summary}</p>
      {p.url ? (
        <a className="textLink" href={p.url} target="_blank" rel="noreferrer">
          Read the article →
        </a>
      ) : null}
    </article>
  );
}

export default function PublicationsPage() {
  const years = Array.from(new Set(PUBLICATIONS.map((p) => p.year))).sort((a, b) => b - a);
  const schema = PUBLICATIONS.map((p) => ({
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    headline: p.title,
    author: p.authors,
    datePublished: String(p.year),
    isPartOf: { "@type": "Periodical", name: p.journal },
    ...(p.url ? { url: p.url } : {}),
    ...(p.doi ? { sameAs: `https://doi.org/${p.doi}` } : {}),
  }));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Research
        </div>
        <h1 className="h1">Publications &amp; research</h1>
        <p className="p" style={{ maxWidth: 780 }}>
          Dr John Kinyua Murithi&apos;s research spans vascular and aortic surgery in
          resource-limited settings, dialysis access, trauma and emergency care, and the development
          of vascular surgical training in Kenya and East Africa.
        </p>
        <div className="btnRow">
          <a className="btn btnPrimary" href={SCHOLAR_PROFILE} target="_blank" rel="noreferrer">
            Google Scholar profile
          </a>
          <Link className="btn" href="/about">
            About Dr Kinyua
          </Link>
        </div>
      </section>

      <section className="pubStats">
        <div>
          <strong>{PUBLICATIONS.filter((p) => p.type !== "Conference abstract").length}</strong>
          <span>Peer-reviewed papers</span>
        </div>
        <div>
          <strong>{years[years.length - 1]}–{years[0]}</strong>
          <span>Publication years</span>
        </div>
        <div>
          <strong>{new Set(PUBLICATIONS.map((p) => p.journal)).size}</strong>
          <span>Journals</span>
        </div>
      </section>

      {years.map((y) => (
        <section key={y} className="pubYear">
          <h2 className="pubYearLabel">{y}</h2>
          <div className="pubList">
            {PUBLICATIONS.filter((p) => p.year === y).map((p) => (
              <PubCard key={p.title} p={p} />
            ))}
          </div>
        </section>
      ))}

      <section className="card" style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 20 }}>Full publication record</h2>
        <p>
          For the complete and up-to-date list of publications and citations, see Dr Kinyua&apos;s{" "}
          <a href={SCHOLAR_PROFILE} target="_blank" rel="noreferrer" style={{ color: "var(--teal)", fontWeight: 600 }}>
            Google Scholar profile
          </a>
          . For research collaboration, contact{" "}
          <a href="mailto:johnkinyua@gmail.com" style={{ color: "var(--navy)", fontWeight: 600 }}>
            johnkinyua@gmail.com
          </a>
          .
        </p>
      </section>
    </>
  );
}
