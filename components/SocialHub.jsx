"use client";

import { useState } from "react";
import { socialPosts } from "../lib/socialContent";

const filters = [
 
];

export default function SocialHub() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPosts =
    activeFilter === "All"
      ? socialPosts
      : socialPosts.filter(
          (post) => post.category === activeFilter
        );

  return (
    <section className="social-hub">

      {/* Filter Buttons */}
      <div className="o-container">
        <div className="social-filter">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={
                activeFilter === filter
                  ? "social-filter__btn active"
                  : "social-filter__btn"
              }
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="social-grid">
          {filteredPosts.map((post) => (
            <article className="social-card" key={post.id}>
              <img src={post.image} alt={post.title} />

              <div className="social-card__content">

                <span className="social-card__tag">
                  {post.category}
                </span>

                <h3>{post.title}</h3>

                <p>{post.description}</p>

                <a href={post.link}>
                  {post.button}
                </a>

              </div>
            </article>
          ))}
        </div>

      </div>

    </section>
  );
}