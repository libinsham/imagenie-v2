import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function GTMStrategyPage() {
  return (
    <>
      {/* HEADER */}
      <Header />

      <main className="gtm-strategy-page">

        {/* =====================================================
            PAGE 01 — GTM STRATEGY
        ===================================================== */}

        <section className="gtm-strategy-hero">

          {/* =================================================
              LEFT — ORANGE PANEL
          ================================================= */}

          <div className="gtm-strategy-left">

            {/* Logo */}
            <div className="gtm-strategy-logo">
              IMAGENIE™
            </div>


            {/* GTM Image */}
            <div className="gtm-strategy-image-wrap">
              <img
                src="/images/gtm-strategy/gtm-strategy.png"
                alt="Imagenie GTM Strategy"
                className="gtm-strategy-image"
              />
            </div>


            {/* Page Number */}
            <span className="gtm-strategy-number">
              01
            </span>


            {/* Main Title */}
            <h1 className="gtm-strategy-title">
              GTM
              <br />
              STRATEGY
            </h1>


            {/* Description */}
            <p className="gtm-strategy-description">
              Inspired by ancient Indian wisdom, our
              Yojana-Tantra approach fuses strategy with
              time-tested frameworks for impactful planning.
            </p>

          </div>


          {/* =================================================
              RIGHT — WHITE CONTENT
          ================================================= */}

          <div className="gtm-strategy-right">

            <div className="gtm-strategy-content">

              {/* =============================================
                  LEFT NAVIGATION
              ============================================= */}

              <nav className="gtm-strategy-nav">

                <ul className="gtm-strategy-nav-list">

                  <li className="gtm-strategy-nav-item active">
                    <span className="gtm-strategy-nav-number">
                      01_
                    </span>

                    <span>
                      Positioning
                    </span>
                  </li>


                  <li className="gtm-strategy-nav-item">
                    <span className="gtm-strategy-nav-number">
                      02_
                    </span>

                    <span>
                      Website Wireframes
                    </span>
                  </li>


                  <li className="gtm-strategy-nav-item">
                    <span className="gtm-strategy-nav-number">
                      03_
                    </span>

                    <span>
                      Website Wireframes
                    </span>
                  </li>


                  <li className="gtm-strategy-nav-item">
                    <span className="gtm-strategy-nav-number">
                      04_
                    </span>

                    <span>
                      Messaging Approach
                    </span>
                  </li>


                  <li className="gtm-strategy-nav-item">
                    <span className="gtm-strategy-nav-number">
                      05_
                    </span>

                    <span>
                      Buyer Journeys
                    </span>
                  </li>


                  <li className="gtm-strategy-nav-item">
                    <span className="gtm-strategy-nav-number">
                      06_
                    </span>

                    <span>
                      Buyer Personas
                    </span>
                  </li>


                  <li className="gtm-strategy-nav-item">
                    <span className="gtm-strategy-nav-number">
                      07_
                    </span>

                    <span>
                      Content Strategy
                    </span>
                  </li>


                  <li className="gtm-strategy-nav-item">
                    <span className="gtm-strategy-nav-number">
                      08_
                    </span>

                    <span>
                      SWOT Analysis
                    </span>
                  </li>

                </ul>

              </nav>


              {/* =============================================
                  VERTICAL DIVIDER
              ============================================= */}

              <div className="gtm-strategy-divider" />


              {/* =============================================
                  FAQ / CONTENT
              ============================================= */}

              <div className="gtm-strategy-faq">

                {/* FAQ 01 */}

                <article className="gtm-strategy-faq-item">

                  <h2 className="gtm-strategy-faq-question">
                    What is the typical project timeline for
                    IMAGENIE’s GTM strategy services?
                  </h2>

                  <p className="gtm-strategy-faq-answer">
                    Our standard GTM strategy projects are
                    completed within 6-8 weeks, depending on
                    scope and complexity.
                  </p>

                  <a
                    href="#gtm-timeline"
                    className="gtm-strategy-faq-link"
                  >
                    Explore more in this document.
                  </a>

                </article>


                {/* FAQ 02 */}

                <article className="gtm-strategy-faq-item">

                  <h2 className="gtm-strategy-faq-question">
                    What deliverables can we expect from
                    IMAGENIE’s GTM strategy services?
                  </h2>

                  <p className="gtm-strategy-faq-answer">
                    You will receive a comprehensive GTM plan,
                    including market analysis, customer
                    segmentation, positioning, messaging and
                    a detailed launch roadmap.
                  </p>

                </article>


                {/* FAQ 03 */}

                <article className="gtm-strategy-faq-item">

                  <h2 className="gtm-strategy-faq-question">
                    How does IMAGENIE™ ensure the strategy
                    aligns with our business goals?
                  </h2>

                  <p className="gtm-strategy-faq-answer">
                    We collaborate closely with your team to
                    ensure the GTM strategy reflects your
                    objectives, target market, and competitive
                    landscape.
                  </p>

                </article>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            PAGE 02 — GTM TIMELINE
        ===================================================== */}

        <section
          id="gtm-timeline"
          className="gtm-timeline-section"
        >

          <div className="gtm-timeline-image-wrap">

            <img
              src="/images/gtm-strategy/gtm-timeline.png"
              alt="Imagenie GTM Timeline"
              className="gtm-timeline-image"
            />

          </div>

        </section>

      </main>


      {/* FOOTER */}
      <Footer />
    </>
  );
}