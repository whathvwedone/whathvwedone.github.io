import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="cutout-shadow skew-collage mb-8">
          <img
            src={logo}
            alt="What Have We Done"
            className="w-full max-w-3xl mx-auto"
            style={{
              filter: "contrast(1.2) brightness(1.05)",
            }}
          />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-center tracking-wide uppercase mt-12 skew-collage-alt">
          <span className="inline-block bg-primary text-primary-foreground px-6 py-3 paper-rip grunge-border">
            Pop-Punk from Munich
          </span>
        </h2>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-secondary opacity-20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
    </section>
  );
};

export default Hero;
