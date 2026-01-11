import React from "react";

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQSection({ title, faqs }: { title: string; faqs: FAQ[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      {/* SEO: FAQ schema */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h2 className="sectionTitle">{title}</h2>

      <section className="grid">
        {faqs.map((faq, idx) => (
          <div className="card" key={idx}>
            <h3 style={{ marginTop: 0 }}>{faq.question}</h3>
            <p style={{ marginTop: 8, marginBottom: 0, opacity: 0.9 }}>{faq.answer}</p>
          </div>
        ))}
      </section>
    </>
  );
}
