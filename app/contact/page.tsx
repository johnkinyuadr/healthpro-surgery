import type { Metadata } from "next";
import Link from "next/link";
import {
  CLINIC_HOURS,
  EMAIL,
  INSURANCE,
  MAPS_DIRECTIONS,
  MAPS_EMBED,
  OFFICE_PHONE,
  OFFICE_PHONE_DISPLAY,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
  waLink,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact, Clinic Hours & Insurance",
  description:
    "Contact HealthPro Surgery at Aga Khan Hospital Mombasa, Doctors' Plaza, First Floor. Clinic hours Monday–Friday 9am–5pm, Saturday 9am–12 noon. All Kenyan insurers, Bupa and Aetna accepted.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero">
        <h1 className="h1">Contact &amp; Appointments</h1>
        <p className="p" style={{ maxWidth: 720 }}>
          Book on WhatsApp or by phone, or send the form below and we will contact you to confirm
          your appointment.
        </p>
        <div className="btnRow">
          <a
            className="btn btnPrimary"
            href={waLink("Hello HealthPro Surgery, I’d like to book a consultation.")}
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
          <a className="btn" href={`tel:+${OFFICE_PHONE}`}>
            Call {OFFICE_PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <section className="grid">
        <div className="card">
          <h2 style={{ fontSize: 20 }}>Location</h2>
          <p>
            <strong>Aga Khan Hospital Mombasa</strong>
            <br />
            Doctors&apos; Plaza, First Floor
            <br />
            Mombasa, Kenya
          </p>
          <p style={{ marginTop: 12 }}>
            Office (calls &amp; appointments):{" "}
            <a href={`tel:+${OFFICE_PHONE}`} style={{ color: "var(--navy)", fontWeight: 600 }}>{OFFICE_PHONE_DISPLAY}</a>
            <br />
            WhatsApp enquiries &amp; second opinions:{" "}
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" style={{ color: "var(--navy)", fontWeight: 600 }}>{WHATSAPP_DISPLAY}</a>
            <br />
            Email: <a href={`mailto:${EMAIL}`} style={{ color: "var(--navy)", fontWeight: 600 }}>{EMAIL}</a>
          </p>
          <div className="btnRow" style={{ marginTop: 16 }}>
            <a className="btn btnPrimary" href={MAPS_DIRECTIONS} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </div>
        </div>

        <div className="card">
          <h2 style={{ fontSize: 20 }}>Clinic hours</h2>
          <table className="hoursTable">
            <tbody>
              {CLINIC_HOURS.map((h) => (
                <tr key={h.days}>
                  <th scope="row">{h.days}</th>
                  <td>{h.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="small" style={{ marginTop: 10 }}>
            Consultations by appointment. For emergencies, go to the nearest Accident &amp; Emergency
            department.
          </p>

          <h2 style={{ fontSize: 20, marginTop: 22 }}>Insurance</h2>
          <p>
            {INSURANCE.local} accepted, plus major international insurers including{" "}
            {INSURANCE.international.join(" and ")}.{" "}
            <Link href="/#insurance" style={{ color: "var(--teal)", fontWeight: 600 }}>See the full list</Link>.
          </p>
          <p className="small" style={{ marginTop: 8 }}>
            {INSURANCE.note}
          </p>
        </div>
      </section>

      <div className="card" style={{ marginTop: 18, padding: 0, overflow: "hidden" }}>
        <iframe
          src={MAPS_EMBED}
          width="100%"
          height="340"
          style={{ border: 0, display: "block" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="HealthPro Surgery location at Aga Khan Hospital Mombasa"
        />
      </div>

      <div className="card" style={{ maxWidth: 680, margin: "28px auto 0" }}>
        <h2 style={{ fontSize: 22 }}>Request an appointment</h2>
        <form className="form" action="https://formspree.io/f/mnjnedvp" method="POST">
          <input type="hidden" name="_redirect" value="https://www.healthprosurgery.com/thank-you" />

          <label className="label" htmlFor="c-name">Full name</label>
          <input id="c-name" className="input" type="text" name="name" placeholder="Your full name" required />

          <label className="label" htmlFor="c-email">Email address</label>
          <input id="c-email" className="input" type="email" name="email" placeholder="you@example.com" required />

          <label className="label" htmlFor="c-phone">Phone / WhatsApp number</label>
          <input id="c-phone" className="input" type="tel" name="phone" placeholder="+254..." required />

          <label className="label" htmlFor="c-insurer">Insurer (optional)</label>
          <input id="c-insurer" className="input" type="text" name="insurer" placeholder="e.g. Jubilee, AAR, Bupa — or self-pay" />

          <label className="label" htmlFor="c-message">Message</label>
          <textarea
            id="c-message"
            className="textarea"
            name="message"
            placeholder="Briefly describe your concern or the service you are booking."
            rows={4}
            required
          ></textarea>

          <label className="consent">
            <input type="checkbox" name="consent" value="yes" required />
            <span>
              I consent to HealthPro Surgery using the information I provide, including health
              information, to respond to my request and provide care, as described in the{" "}
              <Link href="/privacy-policy">privacy policy</Link>.
            </span>
          </label>

          <button type="submit" className="btn btnPrimary">
            Submit request
          </button>
        </form>
      </div>
    </>
  );
}
