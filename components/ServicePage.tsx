import Link from "next/link";
import FAQSection from "@/app/components/FAQSection";
import { waLink } from "@/lib/site";

type FAQ = { question: string; answer: string };

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  whatsappMessage: string;
  conditions: { heading: string; items: string[] };
  approach: { heading: string; items: string[] };
  faqs: FAQ[];
  related?: { label: string; href: string }[];
};

export default function ServicePage({
  eyebrow,
  title,
  intro,
  whatsappMessage,
  conditions,
  approach,
  faqs,
  related = [],
}: Props) {
  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          {eyebrow}
        </div>
        <h1 className="h1">{title}</h1>
        <p className="p" style={{ maxWidth: 760 }}>
          {intro}
        </p>
        <div className="btnRow">
          <a className="btn btnPrimary" href={waLink(whatsappMessage)} target="_blank" rel="noreferrer">
            Book a consultation
          </a>
          <Link className="btn" href="/second-opinion">
            Online second opinion
          </Link>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h2 style={{ fontSize: 20 }}>{conditions.heading}</h2>
          <ul className="list" style={{ marginTop: 10 }}>
            {conditions.items.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h2 style={{ fontSize: 20 }}>{approach.heading}</h2>
          <ul className="list" style={{ marginTop: 10 }}>
            {approach.items.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection title="Frequently asked questions" faqs={faqs} />

      <section className="card" style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 14 }}>
        <h2 style={{ fontSize: 22, margin: 0 }}>Ready to discuss your options?</h2>
        <p>
          Consultations at Aga Khan Hospital Mombasa, Doctors&apos; Plaza. All Kenyan medical insurers
          and major international insurers accepted.
        </p>
        <div className="btnRow">
          <a className="btn btnPrimary" href={waLink(whatsappMessage)} target="_blank" rel="noreferrer">
            Book on WhatsApp
          </a>
          <Link className="btn" href="/contact">
            Contact &amp; hours
          </Link>
        </div>
        {related.length > 0 && (
          <p className="small" style={{ margin: 0 }}>
            Related:{" "}
            {related.map((r, i) => (
              <span key={r.href}>
                {i > 0 && " · "}
                <Link href={r.href} style={{ color: "var(--teal)", fontWeight: 600 }}>
                  {r.label}
                </Link>
              </span>
            ))}
          </p>
        )}
      </section>
    </>
  );
}
