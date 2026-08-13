import Link from "next/link";

export default function SocialCTA() {
  return (
    <section className="social-cta">
      <div className="o-container">

        <div className="social-cta__box">

          <div className="social-cta__left">

            <span className="social-cta__eyebrow">
              LET'S BUILD SOMETHING GREAT
            </span>

            <h2>
              Your brand deserves
              <br />
              to be seen.
            </h2>

          </div>

          <div className="social-cta__right">

            <p>
              Whether it's a product launch, social campaign, event coverage,
              or ongoing content creation, Imagenie helps brands create stories
              that people remember, share and engage with.
            </p>

            <div className="social-cta__buttons">

              <div className="c-btn">
                <Link href="/contact">
                  Start Your Project
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}