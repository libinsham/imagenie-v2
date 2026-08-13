"use client";

import Link from "next/link";
import { workCategories } from "../lib/workPageContent";

export default function B2BWorkSection() {
  // ============================================================
  // B2B CATEGORIES
  // Only Website is currently displayed in the B2B section.
  // Social Media and Digital are reserved for B2C.
  // ============================================================

  const website = workCategories.find(
    (category) => category.id === "website"
  );

  const report = workCategories.find(
  (category) => category.id === "report"
);

const sections = [
  website,
  report,
].filter(Boolean);

  return (
    <section className="b2b-work-section" id="b2b">

      {/* =====================================================
          SECTION HEADER
      ===================================================== */}

      <div className="b2b-work-header">

        <div className="b2b-work-header-content">

          <span className="b2b-work-eyebrow">
          
          </span>

          <h2>
            B2B 
          </h2>

          <p>
            Helping enterprise and technology brands communicate
            complex ideas, build trust and drive measurable impact.
          </p>

        </div>

        <Link
          href="/work"
          className="b2b-work-view-all"
        >
      
          <span></span>
        </Link>

      </div>


      {/* =====================================================
          CATEGORY FILTERS
      ===================================================== */}

      <div className="b2b-work-filters">

        <a
          href="#b2b"
          className="b2b-work-filter b2b-work-filter--active"
        >
          All
        </a>

        <a
          href="#website"
          className="b2b-work-filter"
        >
          Website
        </a>

           <a
          href="#website"
          className="b2b-work-filter"
        >
          Reports
        </a>

      </div>


      {/* =====================================================
          PROJECT SECTIONS
      ===================================================== */}

      <div className="b2b-work-projects">

        {sections.map((section) => (

          <div
            key={section.id}
            id={section.id}
            className="b2b-category-row"
          >

            {/* =================================================
                CATEGORY INFORMATION
            ================================================= */}

            <div className="b2b-category-info">

              <span className="b2b-category-number">
              </span>

              <h3>
                {section.heading}
              </h3>

              <p>
                {section.description}
              </p>

              <Link
                href="/work"
                className="b2b-category-link"
              >
              </Link>

            </div>


            {/* =================================================
                PROJECT CARDS
            ================================================= */}

            <div
              className={`b2b-project-grid ${
                section.items.length === 3
                  ? "b2b-project-grid--three"
                  : "b2b-project-grid--four"
              }`}
            >

              {section.items.map((project, index) => (

                <article
                  key={`${section.id}-${index}`}
                  className="b2b-project-card"
                >

                  {/* PROJECT IMAGE */}

                  <Link
                    href={project.href || "/work"}
                    className="b2b-project-image-link"
                  >

                    <div className="b2b-project-image">

                      <img
                        src={project.image}
                        alt={project.title}
                      />

                    </div>

                  </Link>


                  {/* PROJECT INFORMATION */}

                  <div className="b2b-project-meta">

                    <span className="b2b-project-tag">
                      {project.tag}
                    </span>

                    <h4>
                      {project.title}
                    </h4>

                    <Link
                      href={project.href || "/work"}
                      className="b2b-project-link"
                    >
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}