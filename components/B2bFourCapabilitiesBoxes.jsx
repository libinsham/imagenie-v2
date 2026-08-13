export default function B2bFourCapabilitiesBoxes() {
  const cards = [
    {
      number: "",
      title: "GTM Story & Positioning",
      label: "(WITH DIGITALFABRIC® CONSULTING)",
      image: "/images/b2b/gtm-strategy.jpg",
      items: [
        "Narrative and messaging architecture",
        "Positioning statements and value propositions",
        "ICP and buyer-journey aligned content plans",
        "Battlecards and sales enablement storylines",
      ],
    },

    {
      number: "",
      title: "Thought Leadership & Content",
      label: "",
      image: "/images/b2b/leadership.jpg",
      items: [
        "Research-led whitepapers",
        "Executive POV articles",
        "Case studies and customer stories",
        "Content strategies that build authority",
      ],
    },

    {
    
      title: "B2B Brand & Experience",
      label: "",
      image: "/images/b2b/brand.jpg",
      items: [
        "Brand identity systems",
        "Presentation & sales deck design",
        "Website UX & messaging",
        "Marketing collateral",
      ],
    },
  ];

  return (
    <section className="b2b-capabilities">

      <div className="b2b-capabilities__container">

        {/* HEADER */}
        <div className="b2b-capabilities__header">

          <div className="b2b-capabilities__heading">
            

            <h2>
              Our B2B Services
            </h2>
          </div>

          <p>
            Everything your B2B brand needs to build trust,
            create demand and accelerate growth.
          </p>

        </div>


        {/* CARDS */}
        <div className="b2b-capabilities__grid">

          {cards.map((card) => (

            <article
              className="b2b-capability-card"
              key={card.number}
            >

              {/* IMAGE */}
              <div className="b2b-capability-card__image">

                <img
                  src={card.image}
                  alt={card.title}
                />

                <div className="b2b-capability-card__image-overlay" />

                <span className="b2b-capability-card__image-number">
                  {card.number}
                </span>

              </div>


              {/* CONTENT */}
              <div className="b2b-capability-card__content">

                <h3>
                  {card.title}
                </h3>


                {card.label && (
                  <div className="b2b-capability-card__label">
                    {card.label}
                  </div>
                )}


                <ul>

                  {card.items.map((item, index) => (

                    <li key={index}>
                      <span className="b2b-capability-card__bullet">
                        ·
                      </span>

                      <span>
                        {item}
                      </span>
                    </li>

                  ))}

                </ul>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}