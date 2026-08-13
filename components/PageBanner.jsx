import Link from "next/link";

export default function PageBanner() {
  return (
    <section className="b2b-hero">
      <div className="b2b-hero__overlay"></div>

      <div className="o-container">
        <div className="b2b-hero__content">
          <span className="b2b-hero__eyebrow">
            B2B MARKETING FOR TECHNOLOGY BRANDS
          </span>

          <h1>B2B Tech Marketing</h1>

          <p className="b2b-hero__subtitle">
            Strategic storytelling for complex B2B products and services.
          </p>

          <p className="b2b-hero__description">
            We help technology companies, SaaS platforms, enterprise software
            providers, and professional services firms transform complex
            offerings into compelling brand narratives that drive trust,
            demand, and measurable business growth.
          </p>

          <div className="b2b-hero__actions">
            <div className="c-btn c-btn--black-transparent">
              <Link href="/b2b-tech-marketing">
                Talk to our Team
              </Link>
            </div>

            <div className="c-btn c-btn--black-transparent">
              <Link href="/our_work">
                View our work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}