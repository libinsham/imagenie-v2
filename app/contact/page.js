import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import SimpleContactForm from "../../components/SimpleContactForm";
import { offices } from "../../lib/navigation";

export const metadata = {
  title: "Contact Us | Imagenie",
  description: "Get in touch with Imagenie  - the B2B tech marketing agency.",
};

export default function ContactPage({ searchParams }) {
  const sent = searchParams?.sent === "true";

  return (
    <>
      <Header />

      <main id="content">
        <div className="o-container--fluid c-links c-links--white c-font c-font--white c-block-background--white">
          <div className="o-container">
            <div className="o-container__row c-block-padding--both">
              <div className="o-container__col-12 o-container__col-md-8">
                <h1>Contact us</h1>
                <p>
                  Got a project in mind, or just want to say hello? Send us a message and
                  we&rsquo;ll get back to you as soon as we can.
                </p>
              </div>
            </div>
          </div>
        </div>

        <SimpleContactForm sent={sent} />

<div className="o-container--fluid offices-section">
  <div className="o-container">

    <div className="offices-row">

      {/* =====================================================
          COLUMN 1 — LOGO
      ===================================================== */}

      <div className="offices-column offices-logo">

        <img
          src="/images/imagenie-logo-ink.svg"
          alt="Imagenie"
        />

      </div>


      {/* =====================================================
          COLUMN 2 — OFFICE ADDRESS
      ===================================================== */}

      <div className="offices-column offices-address">

        <h3>Our Office</h3>

        <p>
          Imagenie®  <br />T-HUB, 
         
          Raidurgam, Hyderabad Knowledge City, 
         
          Serilingampally, <br/> Hyderabad,
        
          India
        </p>

      </div>


      {/* =====================================================
          COLUMN 3 — CONTACT
      ===================================================== */}

      <div className="offices-column offices-contact">

        <h3>Contact</h3>

        <p>
          <strong>Email</strong>
          <br />
          <a href="mailto:info@digitalfabric.in">
          info@digitalfabric.in
          </a>
        </p>

        <a
          href="#"
          className="offices-link"
        >
          Get Directions →
        </a>

      </div>

    </div>

  </div>
</div>
      </main>

      <Footer />
      <CookieConsent />
    </>
  );
}
