"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function CreativeDesignPage() {
  return (
    <>
      <Header />

      <main className="creative-design-page">

        {/* =====================================================
            CREATIVE DESIGN PAGE
        ===================================================== */}

        <section className="creative-design-section">

          {/* =================================================
              LEFT — ORANGE PANEL
          ================================================= */}

          <div className="creative-design-left">

            {/* Image */}
            <div className="creative-design-image-wrap">
              <img
                src="/images/creative-design/creative-design.png"
                alt="Imagenie Creative Design"
                className="creative-design-image"
              />
            </div>

            {/* Page Number */}
            <span className="creative-design-number">
              01
            </span>

            {/* Main Title */}
            <h1 className="creative-design-title">
              CREATIVE
              <br />
              DESIGN
            </h1>

            {/* Description */}
            <p className="creative-design-description">
              Blending Kala and Rachana, we merge traditional artistry
              with cutting-edge design techniques to create visually
              compelling experiences.
            </p>

          </div>


          {/* =================================================
              RIGHT — WHITE CONTENT
          ================================================= */}

          <div className="creative-design-right">

            <div className="creative-design-content">

              {/* =============================================
                  LEFT NAVIGATION
              ============================================= */}

              <nav className="creative-design-nav">

                <ul className="creative-design-nav-list">

                  <li className="creative-design-nav-item active">
                    <span className="creative-design-nav-number">
                      01_
                    </span>

                    <span>
                      Design @ Scale
                    </span>
                  </li>

                  <li className="creative-design-nav-item">
                    <span className="creative-design-nav-number">
                      02_
                    </span>

                    <span>
                      Design Adaptations
                    </span>
                  </li>

                  <li className="creative-design-nav-item">
                    <span className="creative-design-nav-number">
                      03_
                    </span>

                    <span>
                      Rebranding
                    </span>
                  </li>

                  <li className="creative-design-nav-item">
                    <span className="creative-design-nav-number">
                      04_
                    </span>

                    <span>
                      Branding
                    </span>
                  </li>

                  <li className="creative-design-nav-item">
                    <span className="creative-design-nav-number">
                      05_
                    </span>

                    <span>
                      Websites
                    </span>
                  </li>

                  <li className="creative-design-nav-item">
                    <span className="creative-design-nav-number">
                      06_
                    </span>

                    <span>
                      User Experience
                    </span>
                  </li>

                  <li className="creative-design-nav-item">
                    <span className="creative-design-nav-number">
                      07_
                    </span>

                    <span>
                      Stationery
                    </span>
                  </li>

                </ul>

              </nav>


              {/* =============================================
                  VERTICAL DIVIDER
              ============================================= */}

              <div className="creative-design-divider" />


              {/* =============================================
                  FAQ / CONTENT
              ============================================= */}

              <div className="creative-design-faq">


                {/* FAQ 01 */}

                <article className="creative-design-faq-item">

                  <h2>
                    What design tools does IMAGENIE™ use for
                    creative projects?
                  </h2>

                  <p>
                    We utilize tools like Adobe Suite, Figma,
                    and Draw.io for our wireframing and design
                    production capabilities.
                  </p>

                </article>


                {/* FAQ 02 */}

                <article className="creative-design-faq-item">

                  <h2>
                    How long does a typical website design and
                    development project take?
                  </h2>

                  <p>
                    Our website projects, built on WordPress
                    (Static & Dynamic) or Shopify (eCommerce),
                    typically take 6-8 weeks.
                  </p>

                </article>


                {/* FAQ 03 */}

                <article className="creative-design-faq-item">

                  <h2>
                    What does the branding exercise from
                    IMAGENIE™ include?
                  </h2>

                  <p>
                    Our branding services cover logo creation,
                    motifs, glyphs, stationery concepts,
                    mockups, and digital previews.
                  </p>


                  {/* =========================================
                      SOFTWARE TOOLS
                  ========================================= */}

                  <div className="creative-design-tools">

                    <div className="creative-design-tool">
                      <span className="tool-icon photoshop">
                        Ps
                      </span>

                      <span>
                        Photoshop
                      </span>
                    </div>


                    <div className="creative-design-tool">
                      <span className="tool-icon illustrator">
                        Ai
                      </span>

                      <span>
                        Illustrator
                      </span>
                    </div>


                    <div className="creative-design-tool">
                      <span className="tool-icon indesign">
                        Id
                      </span>

                      <span>
                        InDesign
                      </span>
                    </div>


                    <div className="creative-design-tool">
                      <span className="tool-icon xd">
                        Xd
                      </span>

                      <span>
                        XD
                      </span>
                    </div>


                    <div className="creative-design-tool">
                      <span className="tool-icon aftereffects">
                        Ae
                      </span>

                      <span>
                        After Effects
                      </span>
                    </div>


                    <div className="creative-design-tool">
                      <span className="tool-icon premiere">
                        Pr
                      </span>

                      <span>
                        Premiere Pro
                      </span>
                    </div>


                    <div className="creative-design-tool">
                      <span className="tool-icon figma">
                        F
                      </span>

                      <span>
                        Figma
                      </span>
                    </div>


                    <div className="creative-design-tool">
                      <span className="tool-icon coreldraw">
                        C
                      </span>

                      <span>
                        CorelDraw
                      </span>
                    </div>

                  </div>

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