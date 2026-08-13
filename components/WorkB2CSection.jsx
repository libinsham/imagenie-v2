"use client";

import Link from "next/link";
import { workCategories } from "../lib/workPageContent";

function ProjectRow({ title, description, projects }) {
  return (
    <div className="b2c-project-row">
      {/* =========================================
          CATEGORY INTRO
      ========================================= */}
      <div className="b2c-project-intro">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>

      {/* =========================================
          PROJECT GRID
      ========================================= */}
      <div className="b2c-project-grid">
        {projects.map((project, index) => (
          <article
            className="b2c-project-card"
            key={`${project.title}-${index}`}
          >
            {/* IMAGE */}
            <Link
              href={project.href || "/work"}
              className="b2c-project-image-link"
            >
              <div className="b2c-project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
              </div>
            </Link>

            {/* PROJECT INFORMATION */}
            <div className="b2c-project-info">
              <span>{project.tag}</span>

              <h4>{project.title}</h4>

              <Link
                href={project.href || "/work"}
                className="b2c-project-link"
              >
               
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function WorkB2CSection() {
  /* =========================================
     GET SOCIAL MEDIA DATA
  ========================================= */

  const socialMedia = workCategories.find(
    (category) => category.id === "social-media"
  );

  return (
    <section className="work-b2c-section" id="b2c">

      {/* =========================================
          SECTION HEADER
      ========================================= */}

      <div className="b2c-section-header">
        <div className="b2c-section-header__content">

          <span className="b2c-eyebrow">
            
          </span>

          <h2>
            B2C
          </h2>

          <p>
            Creating memorable brands and experiences for
            consumer businesses that people love.
          </p>

        </div>

        <Link
          href="/work"
          className="b2c-view-all"
        >
          
        </Link>
      </div>


      {/* =========================================
          FILTERS
      ========================================= */}

      <nav className="b2c-filters">

        <a
          href="#b2c"
          className="is-active"
        >
          All
        </a>

        <a href="#b2c-website">
          Website
        </a>

        <a href="#b2c-social">
          Social Media
        </a>

        <a href="#b2c-digital">
          Digital
        </a>

      </nav>


      {/* =========================================
          SOCIAL MEDIA
      ========================================= */}

      {socialMedia && (
        <div
          id="b2c-social"
          className="b2c-category"
        >

          <ProjectRow
            title={socialMedia.heading}
            description={socialMedia.description}
            projects={socialMedia.items}
          />

        </div>
      )}

    </section>
  );
}