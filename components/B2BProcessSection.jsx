import Image from "next/image";
import Link from "next/link";

const process = [
  {
    step: "",
    icon: "/images/process/strategy.svg",
    title: "Understand the GTM",
    description:
      "Sit with your leadership, product and sales teams and review your GTM documentation.",
  },
  {
    step: "",
    icon: "/images/process/story.svg",
    title: "Define the Story",
    description:
      "Align your core narrative, value proposition, customer challenges and proof points.",
  },
  {
    step: "",
    icon: "/images/process/design.svg",
    title: "Design the System",
    description:
      "Turn the strategy into presentations, templates, content and design systems.",
  },
  {
    step: "",
    icon: "/images/process/execution.svg",
    title: "Scale the Execution",
    description:
      "Support your team with ongoing campaigns, creative assets and marketing content.",
  },
];

export default function B2BProcessSection() {
  return (
    <section className="process-section">
      <div className="o-container">

        {/* Header */}
        <div className="process-header">

          <div className="process-header__content">
            <h2 className="process-heading">
              How We Partner With B2B Teams
            </h2>

           
          </div>


        


        </div>

        {/* Process Steps */}
        <div className="process-grid">

          {process.map((item, index) => (
            <div
              key={item.step}
              className="process-card"
            >

              {/* Arrow */}
              {index < process.length - 1 && (
                <div className="process-arrow">
                  →
                </div>
              )}

              {/* Circle */}
              <div className="process-circle">

                <span className="step-number">
                  {item.step}
                </span>

                <Image
                  src={item.icon}
                  alt={item.title}
                  width={90}
                  height={90}
                  className="process-icon"
                />

              </div>

              {/* Content */}
              <div className="process-content">

                <h3 className="process-title">
                  {item.title}
                </h3>

                <p className="process-description">
                  {item.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}