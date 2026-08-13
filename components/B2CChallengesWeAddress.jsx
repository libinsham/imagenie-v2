"use client";

const challenges = [
  {
    icon: "brand",
    text: (
      <>
        Your brand looks{" "}
        <span>interchangeable</span> in a crowded category.
      </>
    ),
  },
  {
    icon: "channels",
    text: (
      <>
        Your customer experience feels{" "}
        <span>inconsistent</span> across channels.
      </>
    ),
  },
  {
    icon: "heart",
    text: (
      <>
        Content is active, but it isn't building real{" "}
        <span>affinity or loyalty.</span>
      </>
    ),
  },
 
 
  {
    icon: "star",
    text: (
      <>
       Packaging or digital touchpoints are not pulling their <br/>{" "} <span>
        weight in driving conversions </span>
      </>
    ),
  },
];

function Icon({ type }) {
  const common = {
    width: 34,
    height: 34,
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (type === "brand") {
    return (
      <svg {...common}>
        <path
          d="M24 6L29 18L42 19L32 27L35 40L24 33L13 40L16 27L6 19L19 18L24 6Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "channels") {
    return (
      <svg {...common}>
        <rect
          x="7"
          y="8"
          width="34"
          height="25"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M7 15H41"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M15 38H33"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle
          cx="13"
          cy="11.5"
          r="1"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "heart") {
    return (
      <svg {...common}>
        <path
          d="M24 39S8 29 8 18C8 12 12 9 17 9C20 9 23 11 24 14C25 11 28 9 31 9C36 9 40 12 40 18C40 29 24 39 24 39Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "package") {
    return (
      <svg {...common}>
        <path
          d="M8 15L24 7L40 15L24 23L8 15Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M8 15V33L24 41L40 33V15"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M24 23V41"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "campaign") {
    return (
      <svg {...common}>
        <path
          d="M8 26L30 17V31L8 24V26Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M30 17L39 12V36L30 31"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M13 27L16 38"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M24 6L29 18L42 19L32 27L35 40L24 33L13 40L16 27L6 19L19 18L24 6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function B2CChallengesWeAddress() {
  return (
    <section className="b2c-problems-section">

      <div className="problems-container">

        {/* LEFT */}
         <div className="problems-intro">

          <span className="problems-eyebrow">
           
          </span>

          <h2 className="problems-title">
           Challenges
            <br />
            <span>We</span> Solve
          </h2>

          <div className="problems-line" />

        

        </div>


        {/* RIGHT */}
        <div className="problems-list">

          <div className="problems-connector" />

          {challenges.map((challenge, index) => (
            <div
              className="problem-row"
              key={index}
            >

              <div className="problem-node" />

              <div className="problem-card">

                <div className="problem-icon">
                  <Icon type={challenge.icon} />
                </div>

                <div className="problem-text">
                  {challenge.text}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}