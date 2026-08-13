"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { heroClientLogos } from "../lib/homeContent";

export default function Hero() {
  const videoRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);

  /* =====================================================
     BACKGROUND VIDEO
     ===================================================== */

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Autoplay prevented:", error);
      }
    };

    playVideo();

    return () => {
      video.pause();
    };
  }, []);

  /* =====================================================
     ESCAPE KEY / BODY SCROLL
     ===================================================== */

  useEffect(() => {
    if (!modalOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background page scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <>
      {/* =====================================================
          HERO SECTION
          ===================================================== */}

      <section className="c-b-hero c-b-hero--video">

        {/* ===================================================
            BACKGROUND VIDEO
            =================================================== */}

        <video
          ref={videoRef}
          className="c-b-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source
            src="/video/Abstract_Cubes.mp4"
            type="video/mp4"
          />
        </video>

        {/* ===================================================
            VIDEO OVERLAY
            =================================================== */}

        <div
          className="c-b-hero__video__tint"
          aria-hidden="true"
        />

        {/* ===================================================
            MAIN HERO CONTAINER
            =================================================== */}

        <div className="c-b-hero__container">

          <div className="c-b-hero__content">

            {/* =================================================
                HERO HEADING
                ================================================= */}

            <div className="c-b-hero__title">

              <h1>
                <span className="c-b-hero__head-one">
                  Building
                  <br />
                  Brands That
                  <br />
                  Lead Markets.
                </span>
              </h1>

            </div>

            {/* =================================================
                HERO INTRO
                ================================================= */}

            <div className="c-b-hero__intro">

              <p>
                From strategy and positioning to storytelling,
                design, and marketing, we help B2B and B2C brands
                create clarity, stand apart, and drive measurable
                growth.
                              </p>

              <p>
                We call this creating opportunity. It&rsquo;s what
                we do.
              </p>

            </div>

            {/* =================================================
                HERO BUTTONS
                ================================================= */}

            <div className="c-b-hero__buttons">

              <Link
                href="/contact"
                className="c-b-hero__button"
              >
                Get in Touch
              </Link>

              <button
                type="button"
                className="c-b-hero__button c-b-hero__button--secondary"
                onClick={() => setModalOpen(true)}
              >
                Watch Video
              </button>

            </div>

          </div>

        </div>

        {/* =====================================================
            CLIENT LOGOS
            ===================================================== */}

        <div className="c-b-hero__logos">

          <div className="c-b-hero__logos-inner">

            {heroClientLogos?.map((logo) => (
              <div
                className="c-b-hero__logo"
                key={logo.alt}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  loading="lazy"
                />
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          VIDEO MODAL
          ===================================================== */}

      {modalOpen && (
        <div
          className="c-modal__video is-open"
          role="dialog"
          aria-modal="true"
          aria-label="Imagenie video"
        >

          {/* BACKDROP */}

          <button
            type="button"
            className="c-modal__video__backdrop"
            onClick={() => setModalOpen(false)}
            aria-label="Close video"
          />

          {/* CLOSE BUTTON */}

          <button
            type="button"
            className="c-modal__close"
            onClick={() => setModalOpen(false)}
            aria-label="Close video"
          >
            ×
          </button>

          {/* VIDEO */}

          <div className="c-modal__video__wrapper">

            <iframe
              title="Imagenie - Creating Opportunity"
              src="https://player.vimeo.com/video/1214487870?autoplay=1"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

          </div>

        </div>
      )}
    </>
  );
}