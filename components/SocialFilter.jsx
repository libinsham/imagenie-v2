"use client";

const filters = [
  
];

export default function SocialFilter({ active, onSelect }) {
  return (
    <section className="social-filters">
      <div className="o-container">
        <div className="social-filters__list">
          {filters.map((item) => (
            <button
              key={item}
              className={`social-filter ${item === active ? "active" : ""}`}
              onClick={() => onSelect(item)}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
