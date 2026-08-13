"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* =========================================================
   B2C CASE STUDIES DATA
========================================================= */

const caseStudies = [
  {
    title: "Suvien",
    category: "Fashion",
    result: "Brand & Digital",
    href: "/images/case-studies/eyegenie.pdf",
    images: [
      "/images/b2c/suvien-1.png",
      "/images/b2c/suvien-2.png",
      "/images/b2c/suvien-3.png",
     
    ],
  },

  {
    title: "Native",
    category: "PACKAGING",
    result: "Brand Experience",
    href: "/images/case-studies/native.pdf",
    images: [
      "/images/b2c/readl-1.png",
      "/images/b2c/readl-2.png",
      "/images/b2c/readl-3.png",
      
    ],
  },

  {
    title: "Room N Roof",
    category: "ARCHITECTURE",
    result: "Brand & Website",
    href: "/images/case-studies/room-n-roof.pdf",
    images: [
       "/images/b2c/room-roof-1.jpg",
       "/images/b2c/room-roof-2.jpg",
      
    ],
  },

  {
    title: "Eyegenie ",
    category: "Healthcare ",
    result: "Brand Identity",
    href: "/images/case-studies/imagenie.pdf",
    images: [
      
      "/images/b2c/Eyegenie-1.png",
    ],
  },
];

/* =========================================================
   CASE STUDY CARD
========================================================= */

function B2CCaseStudyCard({ item }) {
  const [current, setCurrent] = useState(0);

  // Each card gets its own timer
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

    // Stop automatic slider when manually controlled
    clearSlider();

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

    // Stop automatic slider when manually controlled
    clearSlider();

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

    // Stop automatic slider when manually controlled
    clearSlider();

    setCurrent(index);
  };

  /* =======================================================
     CARD
  ======================================================= */

  return (
    <article
      className="b2c-case-study-card"
      onMouseEnter={startSlider}
      onMouseLeave={stopSlider}
    >

      {/* ===================================================
          IMAGE SLIDER
      =================================================== */}

      <div className="b2c-case-study-card__image">

        {item.images.map((image, index) => (
          <div
            key={`${item.title}-image-${index}`}
            className={`b2c-case-study-card__slide ${
              index === current ? "is-active" : ""
            }`}
          >
            <Image
              src={image}
              alt={`${item.title} project ${index + 1}`}
              fill
              sizes="
                (max-width: 560px) 100vw,
                (max-width: 768px) 50vw,
                25vw
              "
              priority={index === 0}
            />
          </div>
        ))}

        {/* =================================================
            PREVIOUS
        ================================================= */}

        {item.images.length > 1 && (
          <button
            type="button"
            className="
              b2c-case-study-card__arrow
              b2c-case-study-card__arrow--prev
            "
            onClick={previousSlide}
            aria-label={`Previous ${item.title} image`}
          >
            ←
          </button>
        )}

        {/* =================================================
            NEXT
        ================================================= */}

        {item.images.length > 1 && (
          <button
            type="button"
            className="
              b2c-case-study-card__arrow
              b2c-case-study-card__arrow--next
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
          <div className="b2c-case-study-card__dots">

            {item.images.map((_, index) => (
              <button
                key={`${item.title}-dot-${index}`}
                type="button"
                className={`b2c-case-study-card__dot ${
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

      <div className="b2c-case-study-card__content">

        <span className="b2c-case-study-card__category">
          {item.category}
        </span>

        <h3 className="b2c-case-study-card__title">
          {item.title}
        </h3>

        <p className="b2c-case-study-card__result">
          {item.result}
        </p>

        <Link
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="b2c-case-study-card__link"
        >



        </Link>

      </div>

    </article>
  );
}


/* =========================================================
   MAIN B2C CASE STUDIES
========================================================= */

export default function B2CCaseStudiesSummary() {
  return (
    <section className="b2c-case-studies">

      <div className="b2c-case-studies__container">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="b2c-case-studies__header">

          <div>

            <span className="b2c-case-studies__eyebrow">
              
            </span>

            <h2>
              Our Expertise
            </h2>

            <p>
              Real stories of branding, creative execution and
              digital experiences that helped consumer brands grow.
            </p>

          </div>

          <Link
            href="/#"
            className="b2c-case-studies__view-all"
          >
            View All →
          </Link>

        </div>


        {/* =================================================
            GRID
        ================================================= */}

        <div className="b2c-case-studies__grid">

          {caseStudies.map((item) => (
            <B2CCaseStudyCard
              key={item.title}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}