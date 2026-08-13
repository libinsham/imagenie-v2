"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ResearchWritingPage() {
  return (
    <>
      <Header />

      <main className="research-writing-page">

        {/* =====================================================
            RESEARCH & WRITING
        ===================================================== */}

        <section className="research-writing-section">

          {/* =================================================
              LEFT — ORANGE PANEL
          ================================================= */}

          <div className="research-writing-left">

            {/* Page Image */}
            <div className="research-writing-image-wrap">
              <img
                src="/images/research-writing/research-writing.png"
                alt="Imagenie Research and Writing"
                className="research-writing-image"
              />
            </div>


            {/* Page Number */}
            <span className="research-writing-number">
              01
            </span>


            {/* Main Title */}
            <h1 className="research-writing-title">
              RESEARCH
              <br />
              &amp; WRITING
            </h1>


            {/* Description */}
            <p className="research-writing-description">
              Rooted in structured knowledge, our Likha-Tantra
              approach crafts insightful, research-backed content
              for diverse marketing needs.
            </p>

          </div>


          {/* =================================================
              RIGHT — WHITE PANEL
          ================================================= */}

          <div className="research-writing-right">

            <div className="research-writing-content">


              {/* =============================================
                  NAVIGATION
              ============================================= */}

              <nav className="research-writing-nav">

                <ul className="research-writing-nav-list">

                  <li className="research-writing-nav-item active">
                    <span className="research-writing-nav-number">
                      01_
                    </span>

                    <span>
                      Market Research
                    </span>
                  </li>


                  <li className="research-writing-nav-item">
                    <span className="research-writing-nav-number">
                      02_
                    </span>

                    <span>
                      Infographics
                    </span>
                  </li>


                  <li className="research-writing-nav-item">
                    <span className="research-writing-nav-number">
                      03_
                    </span>

                    <span>
                      Secondary Research
                    </span>
                  </li>


                  <li className="research-writing-nav-item">
                    <span className="research-writing-nav-number">
                      04_
                    </span>

                    <span>
                      Factsheets
                    </span>
                  </li>


                  <li className="research-writing-nav-item">
                    <span className="research-writing-nav-number">
                      05_
                    </span>

                    <span>
                      White Papers
                    </span>
                  </li>


                  <li className="research-writing-nav-item">
                    <span className="research-writing-nav-number">
                      06_
                    </span>

                    <span>
                      SWOT Analysis
                    </span>
                  </li>


                  <li className="research-writing-nav-item">
                    <span className="research-writing-nav-number">
                      07_
                    </span>

                    <span>
                      Thought Leadership
                    </span>
                  </li>

                </ul>

              </nav>


              {/* =============================================
                  VERTICAL DIVIDER
              ============================================= */}

              <div className="research-writing-divider" />


              {/* =============================================
                  FAQ CONTENT
              ============================================= */}

              <div className="research-writing-faq">


                {/* =========================================
                    FAQ 01
                ========================================= */}

                <article className="research-writing-faq-item">

                  <h2>
                    What content does IMAGENIE™ offer for
                    thought leadership production?
                  </h2>

                  <p>
                    IMAGENIE™ specializes in creating high-quality
                    whitepapers, lite papers, and blogs through
                    intensive research. Our goal is to position
                    your brand as a leader by addressing industry
                    trends, challenges, and innovations in a
                    comprehensive manner.
                  </p>

                </article>


                {/* =========================================
                    FAQ 02
                ========================================= */}

                <article className="research-writing-faq-item">

                  <h2>
                    How does IMAGENIE™ enhance research and
                    writing with creative presentation?
                  </h2>

                  <p>
                    Our end-to-end service goes beyond just
                    writing. We integrate visually engaging
                    elements like charts, graphs, and diagrams
                    to ensure that your message is conveyed
                    clearly and professionally, making complex
                    information easier to understand.
                  </p>

                </article>


                {/* =========================================
                    FAQ 03
                ========================================= */}

                <article className="research-writing-faq-item">

                  <h2>
                    What is the timeline for completing a
                    research-based whitepaper?
                  </h2>

                  <p>
                    For an 8-12 page whitepaper, IMAGENIE™
                    typically delivers within 3-4 weeks. This
                    includes thorough research, drafting, and
                    multiple revisions to ensure your content
                    meets industry standards and your expectations.
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