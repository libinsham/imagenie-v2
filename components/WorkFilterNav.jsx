"use client";

import { useEffect, useState } from "react";

export default function WorkFilterNav({ categories = [] }) {
  const [active, setActive] = useState(categories[0]?.id || "all");

  // Highlight whichever section is currently in view
  useEffect(() => {
    if (!categories.length) return;

    const sections = categories
      .map((cat) => document.getElementById(cat.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [categories]);

  function handleClick(e, id) {
    e.preventDefault();

    setActive(id);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
  }

  function handleAllClick(e) {
    e.preventDefault();

    setActive("all");

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      window.location.pathname
    );
  }

  return (
    <nav className="work-filter-nav">

      {/* ALL */}
      <a
        href="#"
        className={`work-filter-nav__item${
          active === "all" ? " is-active" : ""
        }`}
        onClick={handleAllClick}
      >
        All
      </a>

      {/* CATEGORIES */}
      {categories.map((cat) => (
        <a
          key={cat.id}
          href={`#${cat.id}`}
          className={`work-filter-nav__item${
            active === cat.id ? " is-active" : ""
          }`}
          onClick={(e) => handleClick(e, cat.id)}
        >
          {cat.label}
        </a>
      ))}

    </nav>
  );
}