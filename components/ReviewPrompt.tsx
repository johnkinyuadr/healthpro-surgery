import { GOOGLE_REVIEW_LINK } from "@/lib/site";

// Invitation to leave a Google review, shown after the visit information.
export default function ReviewPrompt() {
  return (
    <section className="reviewPrompt">
      <div className="reviewStars" aria-hidden="true">
        ★★★★★
      </div>
      <div className="reviewText">
        <h2>Been seen at HealthPro Surgery?</h2>
        <p>
          A short Google review helps other patients find specialist care. It takes less than a
          minute. <span lang="sw">Tuachie maoni yako kwenye Google.</span>
        </p>
      </div>
      <a className="btn btnPrimary" href={GOOGLE_REVIEW_LINK} target="_blank" rel="noreferrer">
        Leave a Google review
      </a>
    </section>
  );
}
