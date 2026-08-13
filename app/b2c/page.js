import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import TextText from "../../components/TextText";
import B2cFourCapabilitiesBoxes from "../../components/B2cFourCapabilitiesBoxes";
import B2CIndustriesGrid from "../../components/B2CIndustriesGrid";
import B2cProcessSection from "../../components/B2cProcessSection";
import B2CCaseStudiesSummary from "../../components/B2CCaseStudiesSummary";
import B2CChallengesWeAddress from "../../components/B2CChallengesWeAddress";
import Link from "next/link";

export const metadata = {
  title: "B2C Brands | Imagenie",
  description:
    "We help consumer brands build memorable identities that people recognize and trust across every touchpoint.",
};

export default function B2CPage() {
  return (
    <>

    <Header/>
      <main id="content">

        {/* =====================================================
            B2C HERO
        ===================================================== */}

        <section className="b2c-hero">

          {/* BACKGROUND VIDEO */}
          <div className="b2c-hero__video">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source
                src="/video/b2b-tech-marketing.mp4"
                type="video/mp4"
              />

              Your browser does not support the video tag.
            </video>
          </div>


          {/* FULL DARK OVERLAY */}
          <div className="b2c-hero__overlay" />


          {/* HERO CONTENT */}
          <div className="b2c-hero__container">

            <div className="b2c-hero__content">

              {/* EYEBROW */}
              <span className="b2c-hero__eyebrow">
         
              </span>


              {/* H1 */}
              <h1 className="b2c-hero__title">
                B2C Brands <br/>People Remember
                <br />
                and Return To.
              </h1>


              {/* SUBTITLE */}
              <p className="b2c-hero__subtitle">
                From identity and packaging to campaigns and content.
              </p>


              {/* DESCRIPTION */}
              <p className="b2c-hero__description">
                We help consumer brands build stronger presence,
                consistency, and conversion.
              </p>


              {/* BUTTON */}
              <div className="b2c-hero__actions">
                <Link
                  href="/contact"
                  className="b2c-hero__button"
                >
                  Talk to Our B2C Team
                </Link>
              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            B2C CHALLENGES
        ===================================================== */}

       


        {/* =====================================================
            B2C CAPABILITIES
        ===================================================== */}

        <B2cFourCapabilitiesBoxes />

 <B2CChallengesWeAddress />

        {/* =====================================================
            B2C PROCESS
        ===================================================== */}

        <B2cProcessSection />


        {/* =====================================================
            B2C INDUSTRIES
        ===================================================== */}

        <B2CIndustriesGrid />


        {/* =====================================================
            B2C CASE STUDIES
        ===================================================== */}

        <B2CCaseStudiesSummary />


        {/* =====================================================
            B2C CTA
        ===================================================== */}

        <section className="b2c-cta-section">

          <div className="b2c-cta-wrapper">

            <span className="b2c-cta-eyebrow">
              READY TO GROW?
            </span>


            <h2 className="b2c-cta-title">
              Ready for your next
              <br />
              launch or refresh?
            </h2>


            <p className="b2c-cta-description">
              Let&apos;s build a consumer brand that people
              remember, trust, and return to.
            </p>


            <div className="b2c-cta-actions">

              <Link
                href="/contact"
                className="c-btn--orange"
              >
                Talk to Our B2C Team →
              </Link>

            </div>

          </div>

        </section>

      </main>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

      <CookieConsent />
    </>
  );
}