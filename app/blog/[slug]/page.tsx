import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostBody from "@/components/PostBody";
import { POSTS, formatDate, getPost, readingMinutes } from "@/lib/blog";
import { PROFILE_URLS, SITE_URL, waLink } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: "HealthPro Surgery",
      locale: post.lang === "sw" ? "sw_KE" : "en_GB",
      publishedTime: post.date,
      authors: ["Dr John Kinyua Murithi"],
      ...(post.image
        ? {
            images: [
              {
                url: `${SITE_URL}${post.image.src}`,
                secureUrl: `${SITE_URL}${post.image.src}`,
                width: post.image.width,
                height: post.image.height,
                alt: post.image.alt,
                type: "image/jpeg",
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.image ? { images: [`${SITE_URL}${post.image.src}`] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const sw = post.lang === "sw";
  const others = POSTS.filter((p) => p.slug !== post.slug && p.lang === post.lang).slice(0, 2);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    inLanguage: sw ? "sw" : "en-GB",
    datePublished: post.date,
    author: {
      "@type": "Physician",
      name: "Dr John Kinyua Murithi",
      honorificSuffix: "MBChB, FCS(ECSA), FACS",
      url: `${SITE_URL}/about`,
      sameAs: PROFILE_URLS,
    },
    publisher: { "@type": "MedicalBusiness", name: "HealthPro Surgery", url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    ...(post.image ? { image: `${SITE_URL}${post.image.src}` } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="hero postHero" lang={post.lang}>
        <Link href="/blog" className="postBack">
          ← {sw ? "Makala zote" : "All articles"}
        </Link>
        <div className="eyebrow" style={{ margin: "14px 0 12px" }}>
          {post.category}
        </div>
        <h1 className="h1">{post.title}</h1>
        <div className="postByline">
          <span className="postAvatar">
            <Image src="/images/dr-kinyua.jpg" alt="" fill sizes="44px" />
          </span>
          <span>
            <strong>Dr John Kinyua Murithi</strong>
            <span>
              {formatDate(post.date, post.lang)} · {readingMinutes(post)} {sw ? "dakika kusoma" : "min read"}
            </span>
          </span>
        </div>
      </section>

      {post.image && (
        <figure className="postCover">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            width={post.image.width}
            height={post.image.height}
            priority
            sizes="(max-width: 1000px) 100vw, 960px"
          />
        </figure>
      )}

      <article className="postArticle" lang={post.lang}>
        <p className="postLead">{post.excerpt}</p>
        <PostBody body={post.body} />

        <aside className="postCta">
          <h2>{sw ? "Una swali kuhusu afya yako?" : "Concerned about your health?"}</h2>
          <p>
            {sw
              ? "Piga simu ofisini 0798 595 946, au wasiliana nasi kwa WhatsApp 0721 446 206. Kliniki yetu iko Aga Khan Hospital Mombasa, Doctors' Plaza."
              : "Book a consultation at Aga Khan Hospital Mombasa, Doctors' Plaza, or ask us a question on WhatsApp."}
          </p>
          <div className="btnRow">
            <a
              className="btn btnPrimary"
              href={waLink(
                sw
                  ? "Habari HealthPro Surgery, ningependa kupata miadi."
                  : "Hello HealthPro Surgery, I’d like to book a consultation."
              )}
              target="_blank"
              rel="noreferrer"
            >
              {sw ? "Weka miadi" : "Book a consultation"}
            </a>
            <Link className="btn" href="/second-opinion">
              {sw ? "Maoni ya pili" : "Online second opinion"}
            </Link>
          </div>
        </aside>

        <p className="small" style={{ marginTop: 20 }}>
          {sw
            ? "Makala hii ni taarifa ya jumla na haichukui nafasi ya ushauri wa daktari kuhusu hali yako binafsi. Kwa dharura, nenda hospitali iliyo karibu nawe mara moja."
            : "This article is general information and does not replace individual medical advice. In an emergency, go to the nearest Accident & Emergency department."}
        </p>
      </article>

      {others.length > 0 && (
        <>
          <h2 className="sectionTitle">{sw ? "Soma pia" : "Keep reading"}</h2>
          <section className="postGrid postGridTwo">
            {others.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="postCard" lang={p.lang}>
                <div className="postCardMeta">
                  <span className="postCategory">{p.category}</span>
                  <span>{readingMinutes(p)} min</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="more">{sw ? "Soma makala →" : "Read article →"}</span>
              </Link>
            ))}
          </section>
        </>
      )}
    </>
  );
}
