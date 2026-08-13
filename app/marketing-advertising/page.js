import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function MarketingAdvertisingPage() {
  return (
    <>
      <Header />

      <main className="marketing-advertising-page">

        {/* =====================================================
            MARKETING & ADVERTISING PAGE
        ===================================================== */}

        <section className="marketing-advertising-section">

          {/* =================================================
              LEFT — ORANGE PANEL
          ================================================= */}

          <div className="marketing-advertising-left">

            {/* Top title */}
            <div className="marketing-advertising-brand">
              Imagenie Marketing & Advertising
            </div>


            {/* Image */}
            <div className="marketing-advertising-image-wrap">
              <img
                src="/images/marketing-advertising/marketing-advertising.png"
                alt="Imagenie Marketing and Advertising"
                className="marketing-advertising-image"
              />
            </div>


            {/* Page number */}
            <span className="marketing-advertising-number">
              01
            </span>


            {/* Main title */}
            <h1 className="marketing-advertising-title">
              MARKETING &
              <br />
              ADVERTISING
            </h1>


            {/* Description */}
            <p className="marketing-advertising-description">
              Guided by Jana-Pravartana,
              we design strategic campaigns
              that connect audiences through
              meaningful and impactful
              communication.
            </p>

          </div>


          {/* =================================================
              RIGHT — CONTENT PANEL
          ================================================= */}

          <div className="marketing-advertising-right">

            <div className="marketing-advertising-content">


              {/* =================================================
                  NAVIGATION
              ================================================= */}

              <nav className="marketing-advertising-nav">

                <div className="marketing-advertising-nav-item active">
                  <span className="marketing-advertising-nav-number">
                    01_
                  </span>

                  <span>
                    Ad Strategy
                  </span>
                </div>


                <div className="marketing-advertising-nav-item">
                  <span className="marketing-advertising-nav-number">
                    02_
                  </span>

                  <span>
                    Ad Management
                  </span>
                </div>


                <div className="marketing-advertising-nav-item">
                  <span className="marketing-advertising-nav-number">
                    03_
                  </span>

                  <span>
                    Omnichannel
                    <br />
                    Campaigns
                  </span>
                </div>


                <div className="marketing-advertising-nav-item">
                  <span className="marketing-advertising-nav-number">
                    04_
                  </span>

                  <span>
                    Ad Budget
                    <br />
                    Optimization
                  </span>
                </div>


                <div className="marketing-advertising-nav-item">
                  <span className="marketing-advertising-nav-number">
                    05_
                  </span>

                  <span>
                    Google Ads
                  </span>
                </div>


                <div className="marketing-advertising-nav-item">
                  <span className="marketing-advertising-nav-number">
                    06_
                  </span>

                  <span>
                    Meta Ads
                  </span>
                </div>

              </nav>


              {/* =================================================
                  DIVIDER
              ================================================= */}

              <div className="marketing-advertising-divider" />


              {/* =================================================
                  FAQ / CONTENT
              ================================================= */}

              <div className="marketing-advertising-faq">


                {/* FAQ 01 */}

                <article className="marketing-advertising-faq-item">

                  <h2 className="marketing-advertising-faq-question">
                    What is the fee structure for IMAGENIE’s ad
                    management services?
                  </h2>

                  <p className="marketing-advertising-faq-answer">
                    We charge a flat fee of 10% on your ad budget for
                    management, optimization, and creative support.
                  </p>

                </article>


                {/* FAQ 02 */}

                <article className="marketing-advertising-faq-item">

                  <h2 className="marketing-advertising-faq-question">
                    Does IMAGENIE™ offer support for landing pages
                    and email campaigns?
                  </h2>

                  <p className="marketing-advertising-faq-answer">
                    Yes, we provide ad hoc support for developing
                    landing pages and managing email marketing
                    campaigns.
                  </p>

                </article>


                {/* FAQ 03 */}

                <article className="marketing-advertising-faq-item">

                  <h2 className="marketing-advertising-faq-question">
                    How is the ad strategy developed at IMAGENIE™?
                  </h2>

                  <p className="marketing-advertising-faq-answer">
                    Our ad strategy is created in collaboration with
                    the GTM strategy team to ensure alignment with
                    your overall marketing goals.
                  </p>

                </article>


              </div>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}