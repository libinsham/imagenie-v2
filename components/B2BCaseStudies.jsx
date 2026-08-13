"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* =========================================================
   B2B CASE STUDIES DATA
========================================================= */

const caseStudies = [
  {
    title: "OKI",
    category: "OKI",
    result: "Industry Report",
    href: "/images/case-studies/T-Hub.pdf",
    images: [
      "/images/b2b/oki-1.png",
      "/images/b2b/oki-2.png",
     "/images/b2b/oki-3.png",
      
    ],
  },

  {
    title: "T- Hub",
    category: "DIGITAL",
    result: "Research",
    href: "/images/case-studies/T-Hub.pdf",
    images: [
      "/images/b2b/thub-1.png",
      " /images/b2b/thub-2.png",
      "/images/b2b/thub-3.png",
    ],
  },



  {
    title: "WorkDay",
    category: "MARKET RESEARCH",
    result: "Industry Report",
    href: "/images/case-studies/GCC-4.pdf",
    images: [
           "/images/b2b/workday-1.png",
      "/images/b2b/workday-2.png",
      "/images/b2b/workday-3.png",
    ],
  },




  
  {
    title: "ReadI Now",
    category: "MARKET RESEARCH",
    result: "Industry Report",
    href: "/images/case-studies/GCC-4.pdf",
    images: [
      "/images/b2b/readl-1.png",
      "/images/b2b/readl-2.png",
      "/images/b2b/readl-3.png",
    ],
  },

];


/* =========================================================
   CASE STUDY CARD
========================================================= */

function CaseStudyCard({ item }) {
  const [current, setCurrent] = useState(0);

  /*
   * Each card gets its own timer.
   * There is NO automatic slider on page load.
   */
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
     ONLY WHEN THIS CARD IS HOVERED
  ======================================================= */

  const startSlider = () => {
    // Prevent duplicate timers
    if (timerRef.current) {
      return;
    }

    // Nothing to slide
    if (!item.images || item.images.length <= 1) {
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrent((previous) => {
        if (previous === item.images.length - 1) {
          return 0;
        }

        return previous + 1;
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
  ======================================================= */

  useEffect(() => {
    return () => {
      clearSlider();
    };
  }, []);


  /* =======================================================
     NEXT SLIDE
  ======================================================= */

  const nextSlide = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setCurrent((previous) => {
      if (previous === item.images.length - 1) {
        return 0;
      }

      return previous + 1;
    });
  };


  /* =======================================================
     PREVIOUS SLIDE
  ======================================================= */

  const previousSlide = (event) => {
    event.preventDefault();
    event.stopPropagation();

    setCurrent((previous) => {
      if (previous === 0) {
        return item.images.length - 1;
      }

      return previous - 1;
    });
  };


  /* =======================================================
     GO TO SPECIFIC SLIDE
  ======================================================= */

  const goToSlide = (event, index) => {
    event.preventDefault();
    event.stopPropagation();

    setCurrent(index);
  };


  /* =======================================================
     CARD
  ======================================================= */

  return (
    <article
      className="b2b-case-card"
      onMouseEnter={startSlider}
      onMouseLeave={stopSlider}
    >

      {/* ===================================================
          IMAGE SLIDER
      =================================================== */}

      <div className="b2b-case-card-image">

        {item.images.map((image, index) => (
          <div
            key={`${item.title}-image-${index}`}
            className={`b2b-case-card-slide ${
              index === current ? "is-active" : ""
            }`}
          >

            <Image
              src={image}
              alt={`${item.title} project ${index + 1}`}
              fill
              sizes="
                (max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
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
              b2b-case-card-arrow
              b2b-case-card-arrow--prev
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
              b2b-case-card-arrow
              b2b-case-card-arrow--next
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
          <div className="b2b-case-card-dots">

            {item.images.map((_, index) => (
              <button
                key={`${item.title}-dot-${index}`}
                type="button"
                className={`b2b-case-card-dot ${
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
          CONTENT
      =================================================== */}

      <div className="b2b-case-card-content">

        <span className="b2b-case-card-category">
          {item.category}
        </span>

        <h3>
          {item.title}
        </h3>

        <p>
          {item.result}
        </p>

        <Link
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="b2b-case-card-link"
        >
         {/* Read Case Study →  */}
        </Link>

      </div>

    </article>
  );
}


/* =========================================================
   MAIN B2B CASE STUDIES
========================================================= */

export default function B2BCaseStudies() {
  return (
    <section className="b2b-case-studies">

      <div className="b2b-case-studies-container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="b2b-case-studies-header">

          <div>

            <span className="b2b-case-studies-eyebrow">
            
            </span>

            <h2>
              Our Expertise
              <br />
            </h2>

            <p>
              Real stories of strategy, branding and creative
              execution that helped B2B companies grow.
            </p>

          </div>


          <Link
            href="/#"
            className="b2b-case-studies-view-all"
          >
            View All →
          </Link>

        </div>


        {/* =================================================
            GRID
        ================================================= */}

        <div className="b2b-case-studies-grid">

          {caseStudies.map((item) => (
            <CaseStudyCard
              key={item.title}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}