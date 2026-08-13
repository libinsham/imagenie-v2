"use client";

import { useState } from "react";
import { industriesOrbit } from "../lib/industriesContent";
import Image from "next/image";

// ============================================================
// ORBIT SETTINGS
// ============================================================

// 01 = Top
// 02 = Top Right
// 03 = Bottom Right
// 04 = Bottom
// 05 = Bottom Left
// 06 = Top Left

const ANGLES = [-90, -30, 30, 90, 150, 210];

// Distance of cards from the center
const RADIUS = 245;

// SVG size
const SIZE = 560;

// Exact center of SVG
const CENTER = SIZE / 2;

// Orange dot position on the connector line
// 0.50 = center
// 0.55 = slightly away from center
// 0.60 = closer to cards
const DOT_POSITION = 0.55;


// ============================================================
// CENTER CIRCLE
// ============================================================

function CenterCircle({ active, onBack }) {
  return (
    <div
      className="io-center"
      onClick={active ? onBack : undefined}
    >
      <div className="io-center__inner">

        {active ? (
          <>
            <div className="io-center__badge">
              {active.n}
            </div>

            <div className="io-center__title">
              {active.name}
            </div>

            <div className="io-center__desc">
              {active.blurb}
            </div>
          </>
        ) : (
          <>
            <div className="io-center__logo">
              <Image
                src="/images/imagenie-logo-black.png"
                alt="Imagenie"
                width={180}
                height={30}
                priority
              />
            </div>

            <div className="io-center__tagline">
           
            </div>
          </>
        )}

      </div>
    </div>
  );
}


// ============================================================
// INDUSTRY POPUP
// ============================================================

function IndustryPopup({
  cat,
  side,
  pinned,
  onClose,
}) {
  return (
    <div className={`io-popup io-popup--${side}`}>

      <div className="io-popup__image">

        <img
          src={cat.image}
          alt={cat.name}
        />

        {pinned && (
          <button
            className="io-popup__close"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        )}

      </div>

      <div className="io-popup__body">

        <h4>
          {cat.name}
        </h4>

        <p>
          {cat.blurb}
        </p>

        <a
          href={cat.href}
          className="io-popup__cta"
        >
          See our services &rarr;
        </a>

      </div>

    </div>
  );
}


// ============================================================
// MAIN INDUSTRIES ORBIT
// ============================================================

export default function IndustriesOrbit() {

  const { items } = industriesOrbit;

  const categories = items.map((item, i) => ({
    ...item,
    n: String(i + 1).padStart(2, "0"),
  }));


  // ==========================================================
  // STATE
  // ==========================================================

  const [activeIndex, setActiveIndex] = useState(null);

  const [pinnedIndex, setPinnedIndex] = useState(null);

  const [hoverIndex, setHoverIndex] = useState(null);


  const active =
    activeIndex !== null
      ? categories[activeIndex]
      : null;


  const popupIndex =
    hoverIndex !== null
      ? hoverIndex
      : pinnedIndex;


  // ==========================================================
  // BADGE CLICK
  // ==========================================================

  function handleBadgeClick(e, i) {

    e.stopPropagation();

    setActiveIndex((cur) =>
      cur === i ? null : i
    );

    setPinnedIndex((cur) =>
      cur === i ? null : i
    );
  }


  // ==========================================================
  // RETURN
  // ==========================================================

  return (

    <section className="o-container--fluid c-block-padding--both c-block-background--white">

      <div className="o-container">

        <div
          className="io-panel"
          onClick={() => setPinnedIndex(null)}
        >

          <div className="io-panel__grid">


            {/* ==================================================
                LEFT CONTENT
            ================================================== */}

            <div>

              <div className="io-eyebrow">
                INDUSTRIES
              </div>


              <h2>
                Across sectors,
                <br />
                Across stages.
              </h2>


              <p>
                From startups to enterprise teams, we work across
                categories where clarity, credibility, and
                differentiation create real impact.
              </p>


              <div className="io-quote">

                <p>
                  Every industry has a story.
                  <br />

                  We make it{" "}

                  <span className="io-orange">
                    visible, valuable
                  </span>

                  {" "}and{" "}

                  <span className="io-orange">
                    memorable
                  </span>
                  .
                </p>

              </div>

            </div>


            {/* ==================================================
                DESKTOP HUB DIAGRAM
            ================================================== */}

            <div
              className="io-hub"
              onClick={(e) => e.stopPropagation()}
            >


              {/* ------------------------------------------------
                  CENTER RING
              ------------------------------------------------ */}

              <div className="io-hub__ring" />


              {/* ------------------------------------------------
                  SVG CONNECTORS
              ------------------------------------------------ */}

              <svg
                className="io-hub__svg"
                viewBox={`0 0 ${SIZE} ${SIZE}`}
              >

                {ANGLES.map((angle) => {

                  // Convert degrees to radians
                  const rad =
                    (angle * Math.PI) / 180;


                  // =================================================
                  // CARD X / Y
                  // =================================================

                  const x =
                    CENTER +
                    RADIUS *
                      Math.cos(rad);


                  const y =
                    CENTER +
                    RADIUS *
                      Math.sin(rad);


                  // =================================================
                  // ORANGE DOT
                  // =================================================
                  //
                  // IMPORTANT:
                  //
                  // The connector starts at:
                  //
                  // CENTER, CENTER
                  //
                  // and ends at:
                  //
                  // x, y
                  //
                  // The dot uses the EXACT same line.
                  //
                  // Therefore the orange dot will always be
                  // perfectly aligned with the grey connector.
                  // =================================================

                  const dotX =
                    CENTER +
                    (x - CENTER) *
                      DOT_POSITION;


                  const dotY =
                    CENTER +
                    (y - CENTER) *
                      DOT_POSITION;


                  return (

                    <g key={angle}>

                      {/* =========================================
                          GREY CONNECTOR
                      ========================================= */}

                      <line
                        x1={CENTER}
                        y1={CENTER}
                        x2={x}
                        y2={y}
                        stroke="#d8d8d8"
                        strokeWidth="2"
                      />


                      {/* =========================================
                          ORANGE DOT
                      ========================================= */}

                      <circle
                        cx={dotX}
                        cy={dotY}
                        r="6"
                        fill="#ff6a00"
                      />

                    </g>

                  );

                })}

              </svg>


              {/* ==================================================
                  CENTER CIRCLE
              ================================================== */}

              <CenterCircle
                active={active}
                onBack={() =>
                  setActiveIndex(null)
                }
              />


              {/* ==================================================
                  INDUSTRY CARDS
              ================================================== */}

              {categories.map((cat, i) => {

                // Convert angle to radians
                const rad =
                  (ANGLES[i] * Math.PI) / 180;


                // =================================================
                // CARD POSITION
                // =================================================

                const x =
                  CENTER +
                  RADIUS *
                    Math.cos(rad);


                const y =
                  CENTER +
                  RADIUS *
                    Math.sin(rad);


                // =================================================
                // ACTIVE STATE
                // =================================================

                const isActive =
                  activeIndex === i;


                // Dim other cards when one is active
                const isDimmed =
                  activeIndex !== null &&
                  !isActive;


                // Popup state
                const isPopupOpen =
                  popupIndex === i;


                // =================================================
                // POPUP SIDE
                // =================================================

                const side =
                  Math.cos(rad) < 0
                    ? "right"
                    : "left";


                return (

                  <div
                    key={cat.name}

                    className={`io-card${
                      isActive
                        ? " io-card--active"
                        : ""
                    }`}

                    style={{
                      left: x,
                      top: y,

                      opacity:
                        isDimmed
                          ? 0.5
                          : 1,

                      zIndex:
                        isPopupOpen
                          ? 50
                          : isActive
                          ? 3
                          : 1,
                    }}

                    onMouseEnter={() =>
                      setHoverIndex(i)
                    }

                    onMouseLeave={() =>
                      setHoverIndex(null)
                    }
                  >


                    {/* ==========================================
                        NUMBER BADGE
                    ========================================== */}

                    <button
  className="io-card__badge"
  onClick={(e) =>
    handleBadgeClick(e, i)
  }
  aria-pressed={isActive}
  aria-label={`Show ${cat.name}`}
>
</button>


                    {/* ==========================================
                        CARD TITLE
                    ========================================== */}

                    <div className="io-card__title">
                      {cat.name}
                    </div>


                    {/* ==========================================
                        CARD DESCRIPTION
                    ========================================== */}

                    <p className="io-card__desc">
                      {cat.blurb}
                    </p>


                    {/* ==========================================
                        POPUP
                    ========================================== */}

                    {isPopupOpen && (

                      <IndustryPopup
                        cat={cat}
                        side={side}

                        pinned={
                          pinnedIndex === i
                        }

                        onClose={(e) => {

                          e.stopPropagation();

                          setPinnedIndex(null);

                          setHoverIndex(null);

                        }}
                      />

                    )}

                  </div>

                );

              })}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}