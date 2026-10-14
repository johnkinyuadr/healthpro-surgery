import type { Metadata } from "next";
import Link from "next/link";
import VideoEmbed from "@/components/VideoEmbed";
import { MEDIA } from "@/lib/media";

export const metadata: Metadata = {
  title: "Media & Interviews",
  description:
    "Television interviews and health talks by Dr John Kinyua Murithi, Consultant General, Vascular and Laparoscopic Surgeon, Mombasa.",
  alternates: { canonical: "/media" },
};

export default function MediaPage() {
  const videoSchema = MEDIA.map((m) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: `${m.title} — ${m.outlet}`,
    description: m.summary,
    thumbnailUrl: `https://i.ytimg.com/vi/${m.youtubeId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${m.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${m.youtubeId}`,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />

      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Media
        </div>
        <h1 className="h1">Interviews &amp; health talks</h1>
        <p className="p" style={{ maxWidth: 760, marginBottom: 0 }}>
          Dr John Kinyua Murithi speaks regularly on television and radio about surgical and
          vascular health, helping patients recognise problems early and know when to seek care.
        </p>
      </section>

      <section className="mediaList">
        {MEDIA.map((m) => (
          <article key={m.youtubeId} className="mediaItem">
            <VideoEmbed youtubeId={m.youtubeId} title={`${m.title} — ${m.outlet}`} />
            <div className="mediaText">
              <div className="mediaMeta">
                {m.outlet}
                {m.programme ? ` · ${m.programme}` : ""}
              </div>
              <h2 className="mediaTitle">{m.title}</h2>
              <p>{m.summary}</p>
              <div className="btnRow" style={{ marginTop: 6 }}>
                {m.guideHref && (
                  <Link className="btn btnPrimary" href={m.guideHref}>
                    Read the patient guide
                  </Link>
                )}
                <a
                  className="btn"
                  href={`https://www.youtube.com/watch?v=${m.youtubeId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="card" style={{ marginTop: 28 }}>
        <h2 style={{ fontSize: 20 }}>Media enquiries</h2>
        <p>
          For interviews, health talks or community outreach, contact HealthPro Surgery on{" "}
          <a href="tel:+254721446206" style={{ color: "var(--navy)", fontWeight: 600 }}>
            0721 446 206
          </a>{" "}
          or{" "}
          <a href="mailto:johnkinyua@gmail.com" style={{ color: "var(--navy)", fontWeight: 600 }}>
            johnkinyua@gmail.com
          </a>
          .
        </p>
      </section>
    </>
  );
}
