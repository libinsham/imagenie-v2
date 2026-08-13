import Link from "next/link";

const posts = [
  {
    category: "INSTAGRAM",
    image: "/images/work2.png",
    date: "2 DAYS AGO",
    title: "New Campaign Launch",
    description:
      "A glimpse behind the scenes from our latest hospitality brand campaign.",
    link: "#",
  },
  {
    category: "LINKEDIN",
    image: "/images/northline-studio.jpg",
    date: "4 DAYS AGO",
    title: "Thought Leadership",
    description:
      "Key takeaways from our brand strategy session for business leaders.",
    link: "#",
  },
  {
    category: "EVENT",
    image: "/images/showcase6.jpg",
    date: "JULY 28, 2026",
    title: "Brand Launch Event",
    description:
      "Highlights from our B2C brand launch event in Chennai.",
    link: "#",
  },
  {
    category: "YOUTUBE",
    image: "/images/work-bp.jpg",
    date: "JULY 26, 2026",
    title: "Behind The Scenes",
    description:
      "Watch how we bring ideas to life through strategy and creativity.",
    link: "#",
  },
  {
    category: "INSTAGRAM",
    image: "/images/creative-intelligence.jpg",
    date: "JULY 24, 2026",
    title: "Office Moments",
    description:
      "Little moments that fuel big ideas. Here's a reel from our studio.",
    link: "#",
  },
  {
    category: "LINKEDIN",
    image: "/images/go-to-market.jpg",
    date: "JULY 22, 2026",
    title: "Branding Lessons",
    description:
      "Actionable insights to help your brand stand out.",
    link: "#",
  },
];

export default function SocialFeed() {
  return (
    <section className="social-feed">
      <div className="o-container">

        <div className="social-feed__grid">
          {posts.map((post) => (
            <article className="social-card" key={post.title}>

              <div className="social-card__image">
                <img src={post.image} alt={post.title} />

                <span className="social-card__badge">
                  {post.category}
                </span>
              </div>

              <div className="social-card__content">

                <small>{post.date}</small>

                <h3>{post.title}</h3>

                <p>{post.description}</p>

                <Link href={post.link}>
                  Read More →
                </Link>

              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}