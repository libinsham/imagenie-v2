import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    image: "/images/case-studies/case-study-1.png",
    pdf: "/images/case-studies/Third.pdf",
    category: "Research",
    title: "Third Eye Research Shorts",
    result: "Series 4",
  },
  {
    image: "/images/case-studies/case-study-2.png",
    pdf: "/images/case-studies/Dual-2pdf",
    category: "Enterprise AI",
    title: "Dual Judge Enterprise Language Models",
    result: "Research Paper",
  },
  {
    image: "/images/case-studies/case-study-3.png",
    pdf: "/images/case-studies/Financial-3.pdf",
    category: "Markeing Analysic",
    title: "GCC Market",
    result: "B2B Market",
  },
  {
    image: "/images/case-studies/case-study-4.png",
    pdf: "/images/case-studies/GCC-4.pdf",
    category: "Market Research",
    title: "T-Hub",
    result: "Industry Report",
  },
  {
    image: "/images/case-studies/case-study-5.png",
    pdf: "/images/case-studies/Workday.pdf",
    category: "CASE Study",
    title: "Work Day Battlecard",
    result: "Work Day",
  },
  
  {
    image: "/images/case-studies/case-study-7.png",
    pdf: "/images/case-studies/T-Hub.pdf",
    category: "Innovation",
    title: "T-Hub Whitepaper",
    result: "Innovation Report",
  },
];

export default function B2BCaseStudies() {
  return (
    <section className="case-section">
      <div className="o-container">
        <div className="case-header">
          <div>
            <h2 className="case-heading">Our Expertise</h2>

            <p className="case-subheading">
              Real stories of strategy, branding and creative execution that
              helped B2B companies grow.
            </p>
          </div>

          <Link href="/our_work" className="case-btn">
            Our Work
          </Link>
        </div>

        <div className="case-grid">
          {caseStudies.map((item) => (
            <a
              key={item.title}
              href={item.pdf}
              target="_blank"
              rel="noopener noreferrer"
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
                <span className="case-category">{item.category}</span>

                <h3 className="case-title">{item.title}</h3>

                <p className="case-result">{item.result}</p>

                <span className="case-link">
                  Read Case Study →
                </span>
              </div>
            </a>
          ))}
        </div>

      
      </div>
    </section>
  );
}