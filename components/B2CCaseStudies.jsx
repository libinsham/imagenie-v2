import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    image: "/images/b2c/wellness.jpg",
    category: "D2C WELLNESS",
    title: "Wellness Brand Launch",
    result: "Brand Identity • Packaging • Shopify",
    link: "/contact",
  },
  {
    image: "/images/b2c/hospitality.jpg",
    category: "HOSPITALITY",
    title: "Luxury Hotel Rebrand",
    result: "Brand Refresh • Website • Social Media",
    link: "/contact",
  },
  {
    image: "/images/b2c/fashion.jpg",
    category: "FASHION",
    title: "Retail Fashion Campaign",
    result: "Identity • Ecommerce • Marketing",
    link: "/contact",
  },
  {
    image: "/images/b2c/coffee.jpg",
    category: "FOOD & BEVERAGE",
    title: "Coffee Brand Packaging",
    result: "Packaging • POS • Campaign",
    link: "/contact",
  },
  {
    image: "/images/b2c/beauty.jpg",
    category: "BEAUTY",
    title: "Beauty Product Launch",
    result: "Branding • Packaging",
    link: "/contact",
  },
  {
    image: "/images/b2c/lifestyle.jpg",
    category: "LIFESTYLE",
    title: "Lifestyle Brand Refresh",
    result: "Creative Campaign",
    link: "/contact",
  },
];

export default function B2CCaseStudies() {
  return (
    <section className="case-section">
      <div className="o-container">

        <div className="case-header">
          <div>
            <h2 className="case-heading">
              Featured B2C Work
            </h2>

            <p className="case-subheading">
              Branding, packaging, digital experiences and marketing campaigns
              created for consumer brands across hospitality, retail, fashion,
              wellness and lifestyle sectors.
            </p>
          </div>

          <Link href="/our_work" className="case-btn">
            Our Work
          </Link>
        </div>

        <div className="case-grid">
          {caseStudies.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className="case-card"
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div className="case-image">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="case-content">
                <span className="case-category">
                  {item.category}
                </span>

                <h3 className="case-title">
                  {item.title}
                </h3>

                <p className="case-result">
                  {item.result}
                </p>

                <span className="case-link">
                  View Project →
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}