"use client";

import React from "react";

const teamMembers = [
  {
    name: "Ashwin Gaidhani",
    role: "COO & FOUNDER",
    company: "DIGITALFABRIC®",
    image: "/images/team/Ashwin_CEO_1.png",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Yagnaseni Gaidhani",
    role: "CEO",
    company: "DIGITALFABRIC® | IMAGENIE™",
    image: "/images/team/Yagnaseni_Gaidhani.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Shreya Gir",
    role: "Project Manager",
    company: "Client Communications",
    image: "/images/team/Shreya_Gir.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Janvi Gehani",
    role: "GTM Strategy",
    company: "",
    image: "/images/team/Janvi.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Apoorva Rao G",
    role: "GTM & Applied Research Associate",
    company: "",
    image: "/images/team/Apoorva_rao.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Sheshender Goswami",
    role: "Data Analyst",
    company: "",
    image: "/images/team/Sheshender_Goswami.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Ajas S",
    role: "Creative Director",
    company: "Ex-Williams Lea | Tag",
    image: "/images/team/Ajas.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Subramani E",
    role: "Creative Associate Lead",
    company: "",
    image: "/images/team/Subramani.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Nafeez Ali",
    role: "Associate - Design Creative",
    company: "",
    image: "/images/team/Nafeez_Al.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Harita",
    role: "Quality Analyst",
    company: "",
    image: "/images/team/Harita.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Meera",
    role: "Quality Analyst",
    company: "",
    image: "/images/team/Meera.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Saraswathi Patra",
    role: "Quality Analyst",
    company: "",
    image: "/images/team/Saraswathi_Patra.jpg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Libin",
    role: "Web Developer",
    company: "",
    image: "/images/team/Libin.jpg",
    linkedin: "https://www.linkedin.com/",
  },
];

export default function TeamSection() {
  return (
    <section className="team-section">

      {/* =========================================
          HEADER
      ========================================= */}

      <div className="team-section__header">

        

        <h2>
          Meet Our <span>        <br />Leadership </span>    Team
        </h2>

        <p>
          Our strategists, designers, marketers and technologists work
          together to create meaningful brand experiences and measurable
          business growth.
        </p>

      </div>


      {/* =========================================
          TEAM GRID
      ========================================= */}

      <div className="team-grid">

        {teamMembers.map((member, index) => (

          <article
  className="team-card"
  key={`${member.name}-${index}`}
>
  {/* IMAGE */}
  <div className="team-card__image">

    <img
      src={member.image}
      alt={member.name}
      loading="lazy"
    />

    {/* HOVER OVERLAY */}
    <div className="team-card__overlay">

      <div className="team-card__hover-content">

        <div className="team-card__role">
          {member.role}
        </div>

        {member.company && (
          <div className="team-card__company">
            {member.company}
          </div>
        )}

        {member.linkedin && (
          <a
            href={member.linkedin}
            className="team-card__linkedin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${member.name}'s LinkedIn profile`}
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.85c0-3.75-2-5.5-4.65-5.5-2.15 0-3.1 1.18-3.64 2v-1.85H9.2V21h3.5v-6.18c0-1.63.3-3.2 2.32-3.2 1.98 0 2 1.86 2 3.3V21H21v-7.15Z" />
            </svg>
          </a>
        )}

      </div>

    </div>

  </div>


  {/* NAME + DESIGNATION BELOW IMAGE */}
  <div className="team-card__info">

    <h3>
      {member.name}
    </h3>

    <p>
      {member.role}
    </p>

  </div>

</article>

        ))}

      </div>

    </section>
  );
}