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

      <div className="faqList">
        {faqs.map((faq, idx) => (
          <details className="faqItem" key={idx} open={idx === 0}>
            <summary>
              <span>{faq.question}</span>
              <span className="faqIcon" aria-hidden="true" />
            </summary>
            <div className="faqAnswer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
