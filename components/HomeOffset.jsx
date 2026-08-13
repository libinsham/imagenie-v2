import Link from "next/link";

const cards = [
  {
    titleOrange: "B2B",
    titleWhite: "Brands",
    image: "/images/B2B_Option-2.jpg",
    description:
      "We help B2B teams turn complex offerings into clear, credible brand narratives that resonate with enterprise buyers. We create go-to-market stories that sales teams can confidently use, along with whitepapers, pitch decks, landing pages, and campaigns that influence buying decisions.",
    href: "/b2b-tech-marketing",
    button: "Explore B2B Services",
  },

  {
    titleOrange: "B2C",
    titleWhite: "Brands",
    image: "/images/B2C_Option-2.jpg",
    description:
      "We help consumer brands build memorable identities that people recognize and trust. Retail and customer-centric by design—from packaging and websites to campaigns and content systems, we create experiences that stand out at every touchpoint.",
    href: "/b2c",
    button: "Explore B2C Services",
  },
];

export default function HomeOffset() {
  return (
    <section className="home-offset">
      <div className="home-offset__container">

        <div className="home-offset__grid">

          {cards.map((card, index) => (
            <article
              className="home-offset__card"
              key={index}
            >

              {/* IMAGE */}
              <Link
                href={card.href}
                className="home-offset__image-link"
              >
                <div className="home-offset__image">
                  <img
                    src={card.image}
                    alt={`${card.titleOrange} ${card.titleWhite}`}
                  />
                </div>
              </Link>


              {/* TITLE */}
              <Link
                href={card.href}
                className="home-offset__title-link"
              >
                <h2 className="home-offset__title">
                  <span className="home-offset__title-orange">
                    {card.titleOrange}
                  </span>{" "}
                  <span className="home-offset__title-white">
                    {card.titleWhite}
                  </span>
                </h2>
              </Link>


              {/* DESCRIPTION */}
              <p className="home-offset__description">
                {card.description}
              </p>


              {/* BUTTON */}
              <div className="home-offset__button-wrapper">
                <Link
                  href={card.href}
                  className="home-offset__button"
                >
                  {card.button}
                </Link>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}