import Link from "next/link";
import { socialPosts } from "../lib/socialContent";

// This previously just did `return null` - no posts were ever rendered,
// which is why filtering appeared broken: there was nothing to filter.
export default function SocialGrid({ active }) {
  const posts =
    active === "All" ? socialPosts : socialPosts.filter((p) => p.category === active);

  return (
    <section className="social-feed">
      <div className="o-container">
        <div className="social-feed__grid">
          {posts.map((post) => (
            <article className="social-card" key={post.id}>
              <div className="social-card__image">
                <img src={post.image} alt={post.title} />
                <span className="social-card__badge">{post.category}</span>
              </div>

              <div className="social-card__content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <Link href={post.link}>{post.button}</Link>
              </div>
            </article>
          ))}
        </div>

        {posts.length === 0 && (
          <p style={{ textAlign: "center", color: "#888", padding: "40px 0" }}>
            No posts in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
