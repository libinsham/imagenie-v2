import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
     image: "/images/case-studies/case-study-4.png",
   
    pdf: "/images/case-studies/T-Hub.pdf",
    category: "T-Hub",
    title: "T-Hub",
    result: "Industry Report",
  },
  {
    image: "/images/case-studies/case-study-2.png",
    
    category: "Digital",
    title: "OKI",
    result: "Research",
  },
  {
    image: "/images/case-studies/case-study-5.png",
    
    category: "Work day",
    title: "Work Days",
    result: "Industry Report",
  },
  
  {
     image: "/images/case-studies/case-study-1.png",
    
    category: "Market Research",
    title: "ReadI Now",
    result: "Industry Report",
  },
 
];

export default function B2BCaseStudies() {
  return (
    <section className="case-section">
      <div className="o-container">
      

        <div className="case-header">
          <div>
            <h2 className="case-heading"> Our Expertise</h2>

    
    
            <p className="case-subheading">
              Real stories of strategy, branding and creative execution that
              helped B2B companies grow.
            </p>
          </div>

          <Link href="/case-studies" className="case-btn">
            View All
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
              
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="case-footer">
          <Link href="/case-studies" className="case-btn">
            View All Case Studies
          </Link>
        </div>


      </div>
    </section>
  );
}