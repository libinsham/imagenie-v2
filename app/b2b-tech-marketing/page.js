import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import Link from "next/link";

import TextText from "../../components/TextText";
import OffsetCards from "../../components/OffsetCards";
import B2bFourCapabilitiesBoxes from "../../components/B2bFourCapabilitiesBoxes";
import B2BProcessSection from "../../components/B2BProcessSection";
import B2BCaseSlide from "../../components/B2BCaseSlide";
import B2BProblemsWeSolve from "../../components/B2BProblemsWeSolve";
import Header from "../../components/Header";


export const metadata = {
  title: "B2B Tech Marketing | Imagenie",
  description:
    "Strategic storytelling for complex B2B products and services.",
};


/* =========================================================
   B2B OFFSET CARDS
========================================================= */

const b2bOffsetCards = [
  {
   
  },

  {
   

    
  },

  {
    
  },

  {
    
  },
];


/* =========================================================
   PAGE
========================================================= */

export default function B2BTechMarketingPage() {
  return (
    <>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
<Header/>
      <main id="content">


        {/* =====================================================
            HERO — B2B TECH MARKETING
        ===================================================== */}

        <section className="b2b-hero">


          {/* VIDEO BACKGROUND */}

          <div className="b2b-hero__video">

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

            </video>

          </div>


          {/* DARK OVERLAY */}

          <div className="b2b-hero__overlay" />


          {/* HERO CONTENT */}

          <div className="b2b-hero__container">

            <div className="b2b-hero__content">


              {/* EYEBROW */}

              <span className="b2b-hero__eyebrow">
              </span>


              {/* TITLE */}

              <h1 className="b2b-hero__title">
                B2B Services  
              </h1>


              {/* SUBTITLE */}

              <p className="b2b-hero__subtitle">
                Strategic storytelling for complex B2B
                products and services.
              </p>


              {/* DESCRIPTION */}

              <p className="b2b-hero__description">
                We help technology companies, SaaS platforms,
                enterprise software providers, and professional
                services firms transform complex offerings into
                compelling brand narratives that drive trust,
                demand, and measurable business growth.
              </p>


              {/* BUTTON */}

              <div className="b2b-hero__actions">

                <Link
                  href="/contact"
                  className="b2b-hero__button"
                >
                  Talk to our Team
                </Link>

              </div>


            </div>

          </div>


        </section>



        {/* =====================================================
            B2B STORYTELLING & GTM SUPPORT
        ===================================================== */}

       {/* <TextText heading="B2B Storytelling & GTM Support." variant="white">
  <p>
    We turn GTM strategy into clear narratives, content, and design that help
    decision-makers understand, trust, and buy.
  </p>

  <Link href="/work" className="c-btn c-btn--orange">
    Talk to Our B2B Team 
  </Link>

</TextText>  */}


        {/* =====================================================
            FOUR CAPABILITIES
        ===================================================== */}

        <B2bFourCapabilitiesBoxes />



        {/* =====================================================
            PROBLEMS WE SOLVE
        ===================================================== */}

        <B2BProblemsWeSolve />



        {/* =====================================================
            PROCESS
        ===================================================== */}

        <B2BProcessSection />



        {/* =====================================================
            CASE STUDIES
        ===================================================== */}

        <B2BCaseSlide />



        {/* =====================================================
            OFFSET CARDS
        ===================================================== */}

        <OffsetCards
          cards={b2bOffsetCards}
        />


      </main>



      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />



      {/* =====================================================
          COOKIE CONSENT
      ===================================================== */}

      <CookieConsent />

    </>
  );
}