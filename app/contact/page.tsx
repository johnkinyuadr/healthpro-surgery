import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact HealthPro Surgery in Mombasa to book a consultation or appointment.",
};

export default function ContactPage() {
  return (
    <section className="hero">
      <h1 className="h1">Contact & Appointments</h1>

      <p className="p">
        To book a consultation or request an appointment, please fill in the form
        below. Our team will contact you to confirm details and next steps.
      </p>

      <div className="card" style={{ maxWidth: "600px", margin: "20px auto" }}>
        <form
          action="https://formspree.io/f/mnjnedvp"
          method="POST"
        >
          {/* Redirect after successful submission */}
          <input
            type="hidden"
            name="_redirect"
            value="https://www.healthprosurgery.com/thank-you"
          />

          <label className="label">Full Name</label>
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />

          <label className="label">Email Address</label>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="you@example.com"
            required
          />

          <label className="label">Phone / WhatsApp Number</label>
          <input
            className="input"
            type="tel"
            name="phone"
            placeholder="+254..."
            required
          />

          <label className="label">Message</label>
          <textarea
            className="input"
            name="message"
            placeholder="Briefly describe your concern or the service you are booking (e.g. hernia, colonoscopy, varicose veins)."
            rows={4}
            required
          ></textarea>

          <button type="submit" className="btn btnAccent" style={{ marginTop: "12px" }}>
            Submit Request
          </button>
        </form>
      </div>

      <p className="p" style={{ textAlign: "center", marginTop: "20px" }}>
        Prefer WhatsApp? Contact us directly on <strong>+254 721 446 206</strong>.
      </p>
    </section>
  );
}
