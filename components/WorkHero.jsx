import Link from "next/link";

export default function WorkHero() {
  return (
    <section className="work-hero">
      <div className="work-hero__inner">

        {/* LEFT CONTENT */}
        <div className="work-hero__content">

          <span className="work-hero__eyebrow">
          
          </span>

          <h1 className="work-hero__title">
            Stories we’ve built.
            <br />
            Brands we’ve helped <span>grow.</span>
          </h1>

          <p className="work-hero__description">
            A selection of work across B2B, B2C, strategy, branding,
            websites, campaigns, packaging and digital experiences.
          </p>

          <div className="work-hero__filters">

            <Link
              href="/work"
              className="work-hero__filter work-hero__filter--active"
            >
              All 
            </Link>

            <Link
              href="#b2b"
              className="work-hero__filter"
            >
              B2B 
            </Link>

            <Link
              href="#b2c"
              className="work-hero__filter"
            >
              B2C 
            </Link>

            <Link
              href="#featured"
              className="work-hero__filter"
            >
              Reports &amp; Docs
            </Link>

            <Link
              href="#digital"
              className="work-hero__filter"
            >
              Web &amp; Digital
            </Link>

            <Link
              href="#social-media"
              className="work-hero__filter"
            >
              Social &amp; Campaigns
            </Link>

          </div>
        </div>

        {/* RIGHT IMAGE */}
       

      </div>
    </section>
  );
}