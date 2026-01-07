import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact HealthPro Surgery in Mombasa.",
};

const WHATSAPP_NUMBER = "254721446206";
const EMAIL = "johnkinyua@gmail.com";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjnedvp";

export default function ContactPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello HealthPro Surgery, I’d like to book a consultation."
  )}`;

  return (
    <>
      <section className="hero">
        <h1 className="h1">Contact</h1>
        <p className="p">
          Reach us via WhatsApp or email, or send a message using the form below.
        </p>

        <div className="btnRow">
          <a className="btn btnGreen" href={waLink} target="_blank" rel="noreferrer">
            WhatsApp
          </a>
          <a className="btn" href={`mailto:${EMAIL}`}>Email</a>
        </div>
      </section>

      <h2 className="sectionTitle">Send a message</h2>

      <form className="form" action={FORMSPREE_ENDPOINT} method="POST">
        <input className="input" name="name" placeholder="Your name" required />
        <input className="input" type="email" name="email" placeholder="Your email" required />
        <input className="input" name="subject" placeholder="Subject" required />
        <textarea className="textarea" name="message" placeholder="Your message" required />

        {/* Anti-spam honeypot */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        {/* Email subject */}
        <input
          type="hidden"
          name="_subject"
          value="New message from HealthPro Surgery website"
        />

        {/* Redirect after submit */}
        <input
          type="hidden"
          name="_next"
          value="thanks"
        />

        <div className="small">
          Please do not include highly sensitive medical details. We’ll guide you during consultation.
        </div>

        <button className="btn btnAccent" type="submit">
          Send Message
        </button>
      </form>
    </>
  );
}
