import Image from "next/image";

const capabilities = [
  {
    n: "",
    heading: "Brand Identity & Creative Design",
    subtitle: "",
    image: "/images/b2c/brand.jpg",
    body: [
      "Brand naming when needed",
      "Visual identity including logo, colours, typography, and imagery",
      "Verbal identity including tone of voice, messaging, and taglines",
      "Brand guidelines and ready-to-use asset kits",
      "Positioning statements and value propositions",
    ],
  },

  {
    n: "",
    heading: "Digital Multi-Channel Marketing Campaign",
    subtitle: "",
    image: "/images/b2c/marketing.jpg",
    body: [
      "Primary and secondary packaging concepts",
      "On-shelf mock-ups and POS materials",
      "Print collateral (flyers, posters, brochures)",
      "Brand books and launch kits",
    ],
  },

  {
    n: "",
    heading: "Content, Research & Copywriting",
    subtitle: "",
    image: "/images/b2c/research.jpg",
    body: [
      "Brand and campaign websites (WordPress, Shopify)",
      "Social media visual systems and templates",
      "Performance creative for Meta, Google, LinkedIn",
      "Email and retention design (flows, newsletters)",
    ],
  },
];

export default function B2cFourCapabilitiesBoxes() {
  return (
    <section className="b2c-capabilities">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="cap-header">

        <h2>
          Our B2C Services
        </h2>

        <p className="cap-subheading">
    
        </p>

      </div>


      {/* =====================================================
          SERVICES GRID
      ===================================================== */}

      <div className="o-container__row">

        {capabilities.map((card) => (

          <div
            key={card.n}
            className="
              o-container__col-12
              o-container__col-md-6
              o-container__col-lg-4
            "
          >

            <article className="cap-card">

              {/* IMAGE */}

              <div className="cap-image">

                <Image
                  src={card.image}
                  alt={card.heading}
                  width={800}
                  height={500}
                />

              </div>


              {/* NUMBER */}

              <span className="cap-number">
                {card.n}
              </span>


              {/* HEADING */}

              <h3 className="cap-title">
                {card.heading}
              </h3>


              {/* OPTIONAL SUBTITLE */}

              {card.subtitle && (
                <p className="cap-subtitle">
                  {card.subtitle}
                </p>
              )}


              {/* CONTENT */}

              <ul className="cap-list">

                {card.body.map((item, index) => (

                  <li key={`${card.n}-${index}`}>
                    {item}
                  </li>

                ))}

              </ul>

            </article>

          </div>

        ))}

      </div>

    </section>
  );
}