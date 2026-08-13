import Link from "next/link";


export default function OffsetCards({ cards = [] }) {

  return (

    <section className="offset-cards-section">

      <div className="offset-cards-container">

        <div className="offset-cards-grid">

          {cards.map((card, index) => (

            <article
              className={`offset-card offset-card-${index + 1}`}
              key={`${card.title}-${index}`}
            >

              {/* IMAGE */}

              <div className="offset-card__image-wrap">

                <img
                  src={card.image}
                  alt={card.title}
                  className="offset-card__image"
                />

              </div>


              {/* CONTENT */}

              <div className="offset-card__content">

                <h3 className="offset-card__title">
                  {card.title}
                </h3>


                <p className="offset-card__description">
                  {card.description}
                </p>


                {/* LINK */}

                {card.href && (

                  <Link
                    href={card.href}
                    className="offset-card__link"
                  >
                    Explore →
                  </Link>

                )}

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>

  );
}