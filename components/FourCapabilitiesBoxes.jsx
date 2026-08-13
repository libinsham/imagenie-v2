import Link from "next/link";


const capabilities = [
  {
        heading: "GTM Strategy & Positioning",
    tagline: "Sharper positioning. Clearer market direction.",
    body: "We develop GTM strategy, messaging, buyer journeys, and launch plans grounded in research and market realities.",
    image: "/images/capabilities/strategy.jpg",
  },
  {
   
    heading: "Brand Identitity & Creative Design",
    tagline: "Brands people recognise, trust, and choose.",
    body: "We create visual and verbal identity systems designed to scale across markets and touchpoints.",
    image: "/images/capabilities/brand.jpg",
  },
  {
  
    heading: " Content Research & Copywriting",
    tagline: "Insights packaged into content that earns attention.",
    body: "We produce research-led whitepapers, reports, articles, infographics, and enablement assets that earn attention and credibility.",
    image: "/images/capabilities/content.jpg",
  },
  {


    heading: " Digital Multi-Channel Marketing Campaigns",
    tagline: "Design that makes strategy visible.",
    body: "We create websites, landing pages, social content, ads, decks, packaging, and collateral across digital and print.",
    image: "/images/capabilities/creative.jpg",
  },
];

export default function FourCapabilitiesBoxes() {
  return (
    <div className="o-container--fluid c-links c-links--black c-font c-font--black c-block-padding--both c-block-background--black">

      <div className="o-container">

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "50px",
          }}
        >
          <h2 className="cap-heading">
  Four Capabilities
</h2>

          
        </div>

        <div className="o-container__row">
          {capabilities.map((card) => (
            <div
              key={card.heading}
              className="o-container__col-12 o-container__col-md-6 o-container__col-lg-3"
            >
             <div className="cap-card">

  <div className="cap-image">
    <img
      src={card.image}
      alt={card.heading}
    />
  </div>

  <h3 className="cap-title">
    {card.heading}
  </h3>

  <div className="cap-content">

    <p className="cap-tagline">
      {card.tagline}
    </p>

    <div className="cap-body">
      <p>{card.body}</p>
    </div>

  </div>

</div>
            </div>
          ))}
        </div>

      </div>

      

    </div>
  );
}