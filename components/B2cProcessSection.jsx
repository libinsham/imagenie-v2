import Image from "next/image";

const steps = [
  {
    title: "Discover",
    description:
      "Understand your category, consumer, price point and competitive set.",
    icon: "/images/icons/discover.svg",
  },
  {
    title: "Define",
    description:
      "Craft a clear positioning and creative direction.",
    icon: "/images/icons/define.svg",
  },
  {
    title: "Design",
    description:
      "Develop identity, packaging and digital assets.",
    icon: "/images/icons/design.svg",
  },
  {
    title: "Deploy",
    description:
      "Launch your brand across channels and refine based on real-world data.",
    icon: "/images/icons/deploy.svg",
  },
];

export default function B2cProcessSection() {
  return (
    <section className="process-section">
      <div className="o-container">

        {/* =========================
            PROCESS HEADER
        ========================= */}
        <div className="process-header">
          <div className="process-header__content">

            <h2 className="process-heading">
              How We Work With <br />
              B2C Brands
            </h2>

            <p className="process-subheading">
              A collaborative process that transforms ideas into memorable
              consumer brands.
            </p>

          </div>
        </div>


        {/* =========================
            PROCESS GRID
        ========================= */}
        <div className="process-grid">

          {steps.map((step, index) => (

            <div
              className="process-card"
              key={step.title}
            >

              {/* =========================
                  ICON CIRCLE
              ========================= */}
              <div className="process-circle">

                <Image
                  src={step.icon}
                  alt={step.title}
                  width={70}
                  height={70}
                  className="process-icon"
                />

              </div>


              {/* =========================
                  ARROW
              ========================= */}
              {index < steps.length - 1 && (
                <div
                  className="process-arrow"
                  aria-hidden="true"
                >
                  →
                </div>
              )}


              {/* =========================
                  CONTENT
              ========================= */}
              <div className="process-content">

                <h3 className="process-title">
                  {step.title}
                </h3>

                <p className="process-description">
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}