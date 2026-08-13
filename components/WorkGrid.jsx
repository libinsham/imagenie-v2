"use client";

export default function WorkGrid({ categories = [] }) {
  return (
    <div className="work-grid-wrapper">
      {categories.map((category) => (
        <section
          key={category.id}
          id={category.id}
          className="work-category-section"
        >
          <div className="o-container">

            {/* Category Header */}
            <div className="work-category-header">

              <div>
                <span className="work-grid-subtitle">
                  {category.label}
                </span>

                <h2 className="work-grid-title">
                  {category.heading}
                </h2>
              </div>

              {category.description && (
                <p className="work-category-description">
                  {category.description}
                </p>
              )}

            </div>


            {/* Projects */}
            <div className="work-project-grid">

              {category.items && category.items.length > 0 ? (

                category.items.map((project, index) => (

                  <article
                    key={`${category.id}-${index}`}
                    className={`work-card ${
                      index === 0 ? "work-card--featured" : ""
                    }`}
                  >

                    {/* Image */}
                    <div className="work-card-image">

                      <img
                        src={project.image}
                        alt={project.title}
                      />

                    </div>


                    {/* Content */}
                    <div className="work-card-content">

                      <span className="work-card-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="work-card-category">
                        {project.tag || category.label}
                      </span>

                      <h3>
                        {project.title}
                      </h3>

                      {project.description && (
                        <p>
                          {project.description}
                        </p>
                      )}

                      {project.href && (
                        <a
                          href={project.href}
                          className="work-card-link"
                        >
                          View Case Study →
                        </a>
                      )}

                    </div>

                  </article>

                ))

              ) : (

                <div className="work-empty">
                  <h3>No projects found.</h3>
                  <p>
                    There are no projects available in this category.
                  </p>
                </div>

              )}

            </div>

          </div>
        </section>
      ))}
    </div>
  );
}