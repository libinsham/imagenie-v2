export default function VideoEmbed({ src, title }) {
  return (
    <section className="c-b-video c-block-background--black">
      <div className="c-b-video__wrapper">
        <iframe
          loading="lazy"
          title={title}
          src={src}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}