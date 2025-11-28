const Gallery = () => {
  // Placeholder images - will be replaced with actual band photos
  const placeholderImages = [
    { id: 1, alt: "Band performance 1" },
    { id: 2, alt: "Band performance 2" },
    { id: 3, alt: "Band performance 3" },
    { id: 4, alt: "Band backstage" },
    { id: 5, alt: "Band rehearsal" },
    { id: 6, alt: "Band on stage" },
  ];

  return (
    <section id="gallery" className="py-20 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center uppercase tracking-tight">
          <span className="inline-block bg-primary text-primary-foreground px-8 py-4 paper-rip cutout-shadow skew-collage-alt">
            Gallery
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderImages.map((img, index) => (
            <div
              key={img.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`bg-card aspect-square paper-rip grunge-border flex items-center justify-center ${
                  index % 3 === 0
                    ? "skew-collage"
                    : index % 3 === 1
                    ? "skew-collage-alt"
                    : ""
                }`}
              >
                <div className="text-center p-8">
                  <svg
                    className="w-16 h-16 mx-auto mb-4 opacity-40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                  <p className="text-sm font-body text-muted-foreground uppercase">
                    {img.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-body text-muted-foreground">
            More photos coming soon! Follow us on social media for updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
