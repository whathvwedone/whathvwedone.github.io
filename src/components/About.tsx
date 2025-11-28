import bandPhoto from "@/assets/band-photo.png";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center uppercase tracking-tight">
          <span className="inline-block bg-primary text-primary-foreground px-8 py-4 paper-rip cutout-shadow skew-collage">
            The Band
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative animate-slide-up">
            <div className="paper-rip grunge-border overflow-hidden skew-collage-alt">
              <img
                src={bandPhoto}
                alt="What Have We Done - Band Members"
                className="w-full h-auto"
                style={{
                  filter: "contrast(1.15) saturate(1.1)",
                }}
              />
            </div>
          </div>

          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card text-card-foreground p-6 paper-rip grunge-border skew-collage">
              <p className="text-lg md:text-xl font-body leading-relaxed">
                What Have We Done is a high-energy pop-punk band from Munich, 
                blending catchy melodies with raw, unfiltered attitude. 
              </p>
            </div>

            <div className="bg-secondary text-secondary-foreground p-6 paper-rip grunge-border skew-collage-alt">
              <p className="text-lg md:text-xl font-body leading-relaxed">
                With influences ranging from classic punk to modern alternative rock, 
                we create music that's both nostalgic and fresh, chaotic and controlled.
              </p>
            </div>

            <div className="bg-accent text-accent-foreground p-6 paper-rip grunge-border skew-collage">
              <p className="text-lg md:text-xl font-body leading-relaxed font-bold">
                Fast riffs. Loud drums. No apologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
