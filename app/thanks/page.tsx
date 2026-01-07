import Link from "next/link";

export default function ThanksPage() {
  return (
    <section className="hero">
      <h1 className="h1">Message sent</h1>
      <p className="p">
        Thank you for contacting HealthPro Surgery. We’ll get back to you as soon as possible.
      </p>

      <div className="btnRow">
        <Link className="btn btnAccent" href="/">Back to Home</Link>
        <Link className="btn" href="/contact">Send another message</Link>
      </div>
    </section>
  );
}
