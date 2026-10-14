import type { Metadata } from "next";
import Link from "next/link";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Second Opinion Request Received",
  description: "Your second opinion request has been received — HealthPro Surgery, Mombasa.",
  robots: { index: false },
};

export default function SecondOpinionReceivedPage() {
  const sendReports = waLink(
    "Hello HealthPro Surgery, I have just submitted a second opinion request on the website. I am sending the reports for the case now.\n\nName:\n"
  );

  return (
    <>
      <section className="hero">
        <div className="eyebrow" style={{ marginBottom: 12 }}>
          Request received
        </div>
        <h1 className="h1">Thank you — your case has been submitted</h1>
        <p className="p" style={{ maxWidth: 760 }}>
          No payment is needed yet. The next step is to send us the reports so that we can confirm
          your case is suitable for an online opinion.
        </p>
        <div className="btnRow">
          <a className="btn btnPrimary" href={sendReports} target="_blank" rel="noreferrer">
            Send reports on WhatsApp
          </a>
          <Link className="btn" href="/second-opinion">
            Back to second opinion
          </Link>
        </div>
      </section>

      <h2 className="sectionTitle">What happens next</h2>
      <section className="careGrid">
        <div className="careItem">
          <span className="stepNum">1</span>
          <div>
            <h3>Send your reports</h3>
            <p>
              Share photos or PDFs of scan reports, lab results and discharge summaries on WhatsApp
              to 0721 446 206. Make sure the writing is clear and every page is included.
            </p>
          </div>
        </div>
        <div className="careItem">
          <span className="stepNum">2</span>
          <div>
            <h3>We confirm suitability</h3>
            <p>
              We review your details and contact you by WhatsApp or email to confirm acceptance, or
              to recommend an in-person review.
            </p>
          </div>
        </div>
        <div className="careItem">
          <span className="stepNum">3</span>
          <div>
            <h3>Payment</h3>
            <p>Once accepted, we send the M-Pesa payment details (KSh 2,000).</p>
          </div>
        </div>
        <div className="careItem">
          <span className="stepNum">4</span>
          <div>
            <h3>Your written report</h3>
            <p>
              Delivered within 24 hours of payment. Weekend requests may take slightly longer.
            </p>
          </div>
        </div>
      </section>

      <p className="small" style={{ marginTop: 24 }}>
        If symptoms become severe or sudden while you wait, go to the nearest Accident &amp;
        Emergency department.
      </p>
    </>
  );
}
