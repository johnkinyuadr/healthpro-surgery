import type { Metadata } from "next";
import Link from "next/link";
import { POSTS, formatDate, readingMinutes, type Post } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Health Insights from a Surgeon",
  description:
    "Articles by Dr John Kinyua Murithi on seeking care early, investing in your health, and the philosophy of medicine — in English and Kiswahili.",
  alternates: { canonical: "/blog" },
};

function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} className={featured ? "postCard postCardFeatured" : "postCard"} lang={post.lang}>
      <div className="postCardMeta">
        <span className="postCategory">{post.category}</span>
        <span>{readingMinutes(post)} min</span>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <span className="more">{post.lang === "sw" ? "Soma makala →" : "Read article →"}</span>
    </Link>
  );
}

export default function BlogPage() {
  const english = POSTS.filter((p) => p.lang === "en");
  const kiswahili = POSTS.filter((p) => p.lang === "sw");
  const [featured, ...rest] = english;

  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Blog
        </div>
        <h1 className="h1">Health insights from a surgeon</h1>
        <p className="p" style={{ maxWidth: 760, marginBottom: 0 }}>
          Reflections by Dr John Kinyua Murithi on seeking care early, investing in your health, and
          the art and philosophy of medicine — written to inform, encourage and empower. Articles in
          English and Kiswahili.
        </p>
      </section>

      <section className="postGrid">
        <PostCard post={featured} featured />
        {rest.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </section>

      <h2 className="sectionTitle" lang="sw">
        Makala kwa Kiswahili
      </h2>
      <section className="postGrid postGridTwo">
        {kiswahili.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </section>

      <p className="small" style={{ marginTop: 28 }}>
        Published {formatDate(POSTS[0].date, "en")}. These articles are general information and do not
        replace individual medical advice.
      </p>
    </>
  );
}
