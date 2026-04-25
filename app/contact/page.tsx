import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact HealthPro Surgery at Aga Khan Hospital Mombasa, Drs Plaza, First Floor, to book a consultation or appointment.",
};

const GOOGLE_MAPS_DIRECTIONS =
  "https://www.google.com/maps/search/?api=1&query=Aga%20Khan%20Hospital%20Mombasa%20Drs%20Plaza";

const GOOGLE_MAPS_EMBED =
  "https://www.google.com/maps?q=Aga%20Khan%20Hospital%20Mombasa%20Drs%20Plaza&output=embed";

export default function ContactPage() {
  return (
    <section className="hero">
      <h1 className="h1">Contact & Appointments</h1>

      <p className="p">
        To book a consultation or request an appointment, please fill in the form
        below. Our team will contact you to confirm details and next steps.
      </p>

      <div className="card" style={{ maxWidth: "760px", margin: "20px auto" }}>
        <h2 style={{ marginTop: 0 }}>Our Location</h2>

        <p className="p">
          HealthPro Surgery is now located at:
        </p>

        <p className="p">
          <strong>
            Aga Khan Hospital Mombasa<br />
            Drs Plaza, First Floor<br />
            Mombasa, Kenya
          </strong>
        </p>

        <p className="p" style={{ marginTop: "10px" }}>
          📞 Phone / WhatsApp: <strong>+254 721 446 206</strong>
        </p>

        <div className="btnRow" style={{ marginTop: "12px" }}>
          <a
            className="btn btnAccent"
            href={GOOGLE_MAPS_DIRECTIONS}
            target="_blank"
            rel="noreferrer"
          >
            Get Directions
          </a>
        </div>

        <div
          style={{
            marginTop: "16px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <iframe
            src={GOOGLE_MAPS_EMBED}
            width="100%"
            height="320"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="HealthPro Surgery location at Aga Khan Hospital Mombasa"
          />
        </div>
      </div>

      <div className="card" style={{ maxWidth: "600px", margin: "20px auto" }}>
        <form action="https://formspree.io/f/mnjnedvp" method="POST">
          <input
            type="hidden"
            name="_redirect"
            value="https://www.healthprosurgery.com/thank-you"
          />

          <label className="label">Full Name</label>
          <input className="input" type="text" name="name" placeholder="Your full name" required />

          <label className="label">Email Address</label>
          <input className="input" type="email" name="email" placeholder="you@example.com" required />

          <label className="label">Phone / WhatsApp Number</label>
          <input className="input" type="tel" name="phone" placeholder="+254..." required />

          <label className="label">Message</label>
          <textarea
            className="input"
            name="message"
            placeholder="Briefly describe your concern or the service you are booking."
            rows={4}
            required
          ></textarea>

          <button type="submit" className="btn btnAccent" style={{ marginTop: "12px" }}>
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
}