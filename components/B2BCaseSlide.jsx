"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* =========================================================
   B2B CASE STUDIES DATA
========================================================= */

const caseStudies = [
  {
    category: "T-HUB",
    title: "T-Hub",
    result: "Industry Report",
    link: "/contact",
    images: [
      "/images/b2b/thub-1.png",
      "/images/b2b/thub-2.png",
      "/images/b2b/thub-3.png",
    ],
  },

  {
    category: "DIGITAL",
    title: "OKI",
    result: "Research",
    link: "/contact",
    images: [
      "/images/b2b/oki-1.png",
      "/images/b2b/oki-2.png",
      "/images/b2b/oki-3.png",
    ],
  },

  {
    category: "WORKDAY",
    title: "WorkDay",
    result: "Industry Report",
    link: "/contact",
    images: [
      "/images/b2b/workday-1.png",
      "/images/b2b/workday-2.png",
      "/images/b2b/workday-3.png",
    ],
  },

  {
    category: "MARKET RESEARCH",
    title: "ReadiNow",
    result: "Industry Report",
    link: "/contact",
    images: [
      "/images/b2b/readl-1.png",
      "/images/b2b/readl-2.png",
      "/images/b2b/readl-3.png",
    ],
  },

    {
    category: "MARKET RESEARCH",
    title: "Third Eye",
    result: "Industry Report",
    link: "/contact",
    images: [
      "/images/b2b/Third-eye-1.png",
      "/images/b2b/Third-eye-2.png",
      "/images/b2b/Third-eye-3.png",
    ],
  },
];

/* =========================================================
   CASE STUDY CARD
========================================================= */

function B2BCaseStudyCard({ item }) {
  const [current, setCurrent] = useState(0);

  // Each card has its own timer
  const timerRef = useRef(null);

  /* =======================================================
     CLEAR TIMER
  ======================================================= */

  const clearSlider = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  /* =======================================================
     START SLIDER
     ONLY WHEN CARD IS HOVERED
  ======================================================= */

  const startSlider = () => {
    // Don't create another timer
    if (timerRef.current) {
      return;
    }

    // Nothing to slide
    if (!item.images || item.images.length <= 1) {
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrent((previous) => {
        return previous === item.images.length - 1
          ? 0
          : previous + 1;
      });
    }, 2000);
  };

  /* =======================================================
     STOP SLIDER
     RESET TO FIRST IMAGE
  ======================================================= */

  const stopSlider = () => {
    clearSlider();

    // Always return to first image
    setCurrent(0);
  };

  /* =======================================================
     CLEANUP
========================================================= */

  useEffect(() => {
    return () => {
      clearSlider();
    };
  }, []);

  /* =======================================================
     NEXT SLIDE
========================================================= */

  const nextSlide = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setCurrent((previous) => {
      return previous === item.images.length - 1
        ? 0
        : previous + 1;
    });
  };

  /* =======================================================
     PREVIOUS SLIDE
========================================================= */

  const previousSlide = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setCurrent((previous) => {
      return previous === 0
        ? item.images.length - 1
        : previous - 1;
    });
  };

  /* =======================================================
     GO TO SPECIFIC SLIDE
========================================================= */

  const goToSlide = (event, index) => {
    event.preventDefault();
    event.stopPropagation();

    setCurrent(index);
  };

  /* =======================================================
     CARD
========================================================= */

  return (
    <article
      className="b2b-case-slide-card"
      onMouseEnter={startSlider}
      onMouseLeave={stopSlider}
    >

      {/* ===================================================
          IMAGE SLIDER
      =================================================== */}

      <div className="b2b-case-slide-image">

        {item.images.map((image, index) => (
          <div
            key={`${item.title}-image-${index}`}
            className={`b2b-case-slide-image-item ${
              index === current ? "is-active" : ""
            }`}
          >
            <Image
              src={image}
              alt={`${item.title} project ${index + 1}`}
              fill
              sizes="
                (max-width: 600px) 100vw,
                (max-width: 1100px) 50vw,
                25vw
              "
              priority={index === 0}
            />
          </div>
        ))}

        {/* =================================================
            PREVIOUS BUTTON
        ================================================= */}

        {item.images.length > 1 && (
          <button
            type="button"
            className="
              b2b-case-slide-arrow
              b2b-case-slide-arrow--prev
            "
            onClick={previousSlide}
            aria-label={`Previous ${item.title} image`}
          >
            ←
          </button>
        )}

        {/* =================================================
            NEXT BUTTON
        ================================================= */}

        {item.images.length > 1 && (
          <button
            type="button"
            className="
              b2b-case-slide-arrow
              b2b-case-slide-arrow--next
            "
            onClick={nextSlide}
            aria-label={`Next ${item.title} image`}
          >
            →
          </button>
        )}

        {/* =================================================
            DOTS
        ================================================= */}

        {item.images.length > 1 && (
          <div className="b2b-case-slide-dots">

            {item.images.map((_, index) => (
              <button
                key={`${item.title}-dot-${index}`}
                type="button"
                className={`b2b-case-slide-dot ${
                  index === current ? "is-active" : ""
                }`}
                onClick={(event) =>
                  goToSlide(event, index)
                }
                aria-label={`Show ${item.title} image ${
                  index + 1
                }`}
              />
            ))}

          </div>
        )}

      </div>

      {/* ===================================================
          CARD CONTENT
      =================================================== */}

      <div className="b2b-case-slide-content">

        <span className="b2b-case-slide-category">
          {item.category}
        </span>

        <h3>
          {item.title}
        </h3>

        <p>
          {item.result}
        </p>

        <Link
          href={item.link}
          className="b2b-case-slide-link"
        >
          {/*Read Case Study →*/}
        </Link>

      </div>

    </article>
  );
}

/* =========================================================
   MAIN B2B CASE STUDIES SECTION
========================================================= */

export default function B2BCaseSlide() {
  return (
    <section className="b2b-case-slide">

      <div className="b2b-case-slide-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="b2b-case-slide-header">

          <div>

            <span className="b2b-case-slide-eyebrow">
            
            </span>

            <h2>
          Our Expertise
              <br />
           
            </h2>

            <p>
              Research, strategy, branding and digital
              experiences created for B2B technology and
              enterprise brands.
            </p>

          </div>

          <Link
            href="/our_work"
            className="b2b-case-slide-view-all"
          >
            View All →
          </Link>

        </div>

        {/* =================================================
            CASE STUDY GRID
        ================================================= */}

        <div className="b2b-case-slide-grid">

          {caseStudies.map((item) => (
            <B2BCaseStudyCard
              key={item.title}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}