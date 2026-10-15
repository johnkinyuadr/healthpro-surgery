import type { Metadata } from "next";
import Link from "next/link";
import VideoEmbed, { InstagramEmbed } from "@/components/VideoEmbed";
import { MEDIA, mediaUrl } from "@/lib/media";

export const metadata: Metadata = {
  title: "Media & Interviews",
  description:
    "Television interviews and health videos by Dr John Kinyua Murithi, Consultant General, Vascular and Laparoscopic Surgeon, Mombasa — diabetic foot, varicose veins and venous disease.",
  alternates: { canonical: "/media" },
};

export default function MediaPage() {
  const videoSchema = MEDIA.filter((m) => m.platform === "youtube").map((m) => ({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: `${m.title} — ${m.outlet}`,
    description: m.summary,
    thumbnailUrl: `https://i.ytimg.com/vi/${m.id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${m.id}`,
    contentUrl: mediaUrl(m),
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
        <h1 className="h1">Interviews &amp; health videos</h1>
        <p className="p" style={{ maxWidth: 760, marginBottom: 0 }}>
          Dr John Kinyua Murithi speaks on television and social media about surgical and vascular
          health, helping patients recognise problems early and know when to seek care.
        </p>
      </section>

      <section className="mediaList">
        {MEDIA.map((m) => (
          <article
            key={m.id}
            className={m.platform === "instagram" ? "mediaItem mediaItemReel" : "mediaItem"}
          >
            {m.platform === "youtube" ? (
              <VideoEmbed youtubeId={m.id} title={`${m.title} — ${m.outlet}`} />
            ) : (
              <InstagramEmbed shortcode={m.id} title={`${m.title} — Instagram`} />
            )}
            <div className="mediaText">
              <div className="mediaMeta">
                {m.outlet}
                {m.programme ? ` · ${m.programme}` : ""}
              </div>
              <h2 className="mediaTitle">{m.title}</h2>
              <p>{m.summary}</p>
              <div className="chips" style={{ paddingTop: 2 }}>
                {m.topics.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
              <div className="btnRow" style={{ marginTop: 6 }}>
                {m.guideHref && (
                  <Link className="btn btnPrimary" href={m.guideHref}>
                    {m.guideLabel ?? "Read more"}
                  </Link>
                )}
                <a className="btn" href={mediaUrl(m)} target="_blank" rel="noreferrer">
                  {m.platform === "youtube" ? "Watch on YouTube" : "View on Instagram"}
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="card" style={{ marginTop: 28 }}>
        <h2 style={{ fontSize: 20 }}>Media enquiries</h2>
        <p>
          For interviews, health talks or community outreach, call the HealthPro Surgery office on{" "}
          <a href="tel:+254798595946" style={{ color: "var(--navy)", fontWeight: 600 }}>
            0798 595 946
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
