"use client";

import {
  FaHotel,
  FaUtensils,
  FaShoppingCart,
  FaSpa,
  FaTshirt,
  FaPlane,
  FaBuilding,
  FaClinicMedical,
  FaGraduationCap,
  FaFilm,
  FaMobileAlt,
  FaGem,
  FaCar,
  FaCouch,
  FaDumbbell,
} from "react-icons/fa";

const industries = [
  
  {
   
    title: "Food & Beverage",
    icon: <FaUtensils />,
    desc: "Helping food & beverage brands grow through storytelling and campaigns.",
  },
  {
  
   title: (
  <>
    Retail & <br /> E-Commerce
  </>
),
    icon: <FaShoppingCart />,
    desc: "Driving growth through seamless retail and digital experiences.",
  },
  {
    
    title: "Beauty & Wellness",
    icon: <FaSpa />,
    desc: "Building beauty and wellness brands that inspire loyalty.",
  },
  {
   
    title: "Fashion & Lifestyle",
    icon: <FaTshirt />,
    desc: "Creative marketing for fashion and lifestyle brands.",
  },
  {
 
    title: "Travel & Tourism",
    icon: <FaPlane />,
    desc: "Helping destinations and tourism brands attract travellers.",
  },
  {
 
    title: "Real Estate",
    icon: <FaBuilding />,
    desc: "Marketing residential, commercial and luxury developments.",
  },
  {
  
    title: "Healthcare & Clinics",
    icon: <FaClinicMedical />,
    desc: "Building trust for healthcare providers and clinics.",
  },
  {
   
    title: "Education",
    icon: <FaGraduationCap />,
    desc: "Helping education providers attract students.",
  },
  {
   
    title: "Entertainment",
    icon: <FaFilm />,
    desc: "Campaigns that build excitement and grow audiences.",
  },
  {
    
    title: "Consumer Technology",
    icon: <FaMobileAlt />,
    desc: "Helping consumer technology brands launch and scale.",
  },
  {
    
    title: "Luxury",
    icon: <FaGem />,
    desc: "Premium brand experiences reflecting quality and exclusivity.",
  },
  
  {
    
    title: "Home & Interiors",
    icon: <FaCouch />,
    desc: "Helping furniture and décor brands inspire customers.",
  },
  {
    
    title: "Sports & Fitness",
    icon: <FaDumbbell />,
    desc: "Building active lifestyle brands through performance marketing.",
  },
];

export default function B2CIndustriesGrid() {
  return (
    <section className="b2c-industries">
      <div className="o-container">

        <div className="b2c-industries__header">
          <span className="b2c-industries__eyebrow">
            B2C INDUSTRIES
          </span>

          <h2>
            Consumer brands
            <br />
            we help <span>grow.</span>
          </h2>

          <p>
            We partner with consumer brands across industries to build strong
            identities, create memorable experiences and drive measurable
            business growth.
          </p>
        </div>

        <div className="b2c-industries__grid">

          {industries.map((item) => (
            <div className="b2c-industry-card" key={item.no}>

              <div className="b2c-industry-card__icon">
                {item.icon}
              </div>

              <div className="b2c-industry-card__no">
                {item.no}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}