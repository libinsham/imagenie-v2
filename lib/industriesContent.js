// Industries served, matching the labels already used in lib/navigation.js.

export const industries = [
  {
    name: "Automotive",
    blurb: "Marketing and PR for automotive and mobility brands navigating a fast-changing industry.",
  },
  {
    name: "SaaS",
    blurb: "Positioning and growth marketing for SaaS companies competing in crowded markets.",
  },
  {
    name: "Industry 4.0",
    blurb: "Turning complex industrial and engineering capability into clear market leadership.",
  },
  {
    name: "Fintech",
    blurb: "Building trust and driving demand for fintech and financial services brands.",
  },
  {
    name: "IT & Cloud",
    blurb: "Helping IT, cloud and infrastructure providers stand out from the hyperscalers.",
  },
  {
    name: "Transformation",
    blurb: "Communicating transformation and consultancy propositions to enterprise buyers.",
  },
  {
    name: "Electronics",
    blurb: "Marketing support for electronics manufacturers and technology suppliers.",
  },
  {
    name: "Telco & IoT",
    blurb: "Campaigns for telecoms, connectivity and IoT brands driving the next generation of networks.",
  },
];

// Data for the radial "orbit" industries diagram on the homepage.
// `image` is shown in the expanded hover state - swap these for real photos.
export const industriesOrbit = {
  centerLabel: "IMAGENIE",
  centerSubLabel: "DESIGNING DESIRES",
  items: [
    {
      name: "Technology & SaaS",
      blurb: "Complex products, clearer stories.",
      image: "/images/industries/saas.jpg",
      href: "/industries",
    },
    {
      name: "Professional & IT Services",
      blurb: "Stronger narratives for expertise-led firms.",
      image: "/images/industries/professional-it.jpg",
      href: "/industries",
    },
    {
      name: "Government & International Agencies",
      blurb: "Policy, impact, and data made accessible.",
      image: "/images/industries/government-international.jpg",
      href: "/industries",
    },
    {
      name: "Healthcare & Life Sciences",
      blurb: "Trusted communication for sensitive categories.",
      image: "/images/industries/science.jpg",
      href: "/industries",
    },
    {
      name: "Financial Services",
      blurb: "Clear, credible communication for regulated environments.",
      image: "/images/industries/finance.jpg",
      href: "/industries",
    },
    {
      name: "Hospitality & Real Estate",
      blurb: "Launch-ready experiences across print and digital.",
      image: "/images/industries/hospitality.jpg",
      href: "/industries",
    },
  ],
};
