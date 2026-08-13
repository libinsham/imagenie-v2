"use client";

const problems = [
  {
    icon: "message",
    text: (
      <>
        Your offer is valuable, but the story around it feels{" "}
        <span>unclear.</span>
      </>
    ),
  },
  {
    icon: "browser",
    text: (
      <>
        Your website explains what you do, but{" "}
        <span>doesn’t persuade</span> enterprise buyers.
      </>
    ),
  },
  {
    icon: "users",
    text: (
      <>
        Your sales and marketing teams use{" "}
        <span>inconsistent</span> messaging.
      </>
    ),
  },
  {
    icon: "puzzle",
    text: (
      <>
        Technical expertise isn’t translated into{" "}
        <span>business value.</span>
      </>
    ),
  },
  
  
  {
  icon: "document",
  text: (
    <>
      Marketing assets exist, but they{" "}
      <span>don’t generate trust</span>
      <br />
      or qualified leads.
    </>
  ),
},


  {
    icon: "trophy",
    text: (
      <>
        Your brand looks credible, but doesn’t{" "}
        <span>differentiate</span> you from competitors.
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

  if (type === "message") {
    return (
      <svg {...common}>
        <path
          d="M10 12C10 8.7 12.7 6 16 6H32C35.3 6 38 8.7 38 12V25C38 28.3 35.3 31 32 31H23L16 37V31H16C12.7 31 10 28.3 10 25V12Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="28" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
        <path
          d="M28 17V21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="28" cy="24" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "browser") {
    return (
      <svg {...common}>
        <rect
          x="7"
          y="9"
          width="34"
          height="29"
          rx="3"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M7 16H41"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12.5" r="1" fill="currentColor" />
        <circle cx="16" cy="12.5" r="1" fill="currentColor" />
        <circle cx="20" cy="12.5" r="1" fill="currentColor" />
        <rect
          x="15"
          y="21"
          width="18"
          height="10"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (type === "users") {
    return (
      <svg {...common}>
        <circle
          cx="24"
          cy="17"
          r="6"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M14 36C14 29.9 18.5 26 24 26C29.5 26 34 29.9 34 36"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="11"
          cy="21"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle
          cx="37"
          cy="21"
          r="4"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (type === "puzzle") {
    return (
      <svg {...common}>
        <path
          d="M18 9H28V14C28 16.2 29.8 18 32 18C34.2 18 36 16.2 36 14V9H40V20H35C32.8 20 31 21.8 31 24C31 26.2 32.8 28 35 28H40V39H29V34C29 31.8 27.2 30 25 30C22.8 30 21 31.8 21 34V39H10V28H15C17.2 28 19 26.2 19 24C19 21.8 17.2 20 15 20H10V9H18Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "document") {
    return (
      <svg {...common}>
        <path
          d="M14 6H29L37 14V42H14V6Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M29 6V15H37"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M19 23H32M19 29H32M19 35H28"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path
        d="M24 6L29 16L40 18L32 26L34 38L24 33L14 38L16 26L8 18L19 16L24 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24 10V30"
        stroke="currentColor"
        strokeWidth="2"
        opacity=".5"
      />
    </svg>
  );
}

export default function B2BProblemsWeSolve() {
  return (
    <section className="problems-section">
      <div className="problems-background-circle" />
      <div className="problems-glow" />

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

          {problems.map((problem, index) => (
            <div
              className="problem-row"
              key={index}
            >

              <div className="problem-node" />

              <div className="problem-card">

                <div className="problem-icon">
                  <Icon type={problem.icon} />
                </div>

                <div className="problem-text">
                  {problem.text}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Bottom visual */}
      <div className="problems-mountain" />

    </section>
  );
}