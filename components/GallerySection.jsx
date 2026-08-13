import Link from "next/link";

const gallery = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
];

export default function GallerySection() {
  return (
    <section className="gallery-section">
      <div className="o-container">

        <div className="gallery-header">
          <h2>Events & Moments Gallery</h2>

          <Link href="/gallery">
            View All Photos →
          </Link>
        </div>

        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <div
              key={index}
              className={`gallery-item ${
                index === 0 ? "gallery-item--large" : ""
              }`}
            >
              <img src={image} alt="" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}