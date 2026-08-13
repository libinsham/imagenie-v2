import Link from "next/link";

export default function FeaturedProject() {
  return (
    <section className="featured-project">

      <div className="featured-project__container">

        {/* IMAGE */}
        <div className="featured-project__image">
          <img
            src="/images/work/work1.jpg"
            alt="Digital Transformation"
          />
        </div>

        {/* CONTENT */}
        <div className="featured-project__content">

          <span className="featured-project__eyebrow">
            FEATURED CASE STUDY
          </span>

          <h2>
            Digital Transformation
          </h2>

          <p>
            Helping enterprise brands communicate innovation through
            clearer digital experiences, stronger brand narratives and
            modern technology.
          </p>

          {/* META */}
          <div className="featured-project__meta">

            <div className="featured-project__meta-item">
              <span>Category</span>
              <strong>Website</strong>
            </div>

            <div className="featured-project__meta-item">
              <span>Industry</span>
              <strong>Technology</strong>
            </div>

          </div>

          {/* LINK */}
          <Link
            href="/work/digital-transformation"
            className="featured-project__link"
          >
            <span>View Case Study</span>
            <span className="featured-project__arrow">→</span>
          </Link>

        </div>

      </div>

    </section>
  );
}