import { Mail, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center uppercase tracking-tight">
          <span className="inline-block bg-primary text-primary-foreground px-8 py-4 paper-rip cutout-shadow skew-collage">
            Get in Touch
          </span>
        </h2>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Booking */}
          <div className="animate-slide-up">
            <div className="bg-card p-8 paper-rip grunge-border skew-collage-alt">
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4 flex items-center gap-3">
                <Mail className="w-8 h-8" />
                Booking
              </h3>
              <p className="text-lg font-body mb-4">
                Want us to play at your venue? Let's make it happen!
              </p>
              <a
                href="mailto:booking@whathavewedone.com"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 text-lg font-bold uppercase paper-rip hover:scale-105 transition-transform"
              >
                booking@whathavewedone.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-secondary text-secondary-foreground p-8 paper-rip grunge-border skew-collage">
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4 flex items-center gap-3">
                <Instagram className="w-8 h-8" />
                Follow Us
              </h3>
              <p className="text-lg font-body mb-4">
                Stay updated with our latest shows, releases, and shenanigans.
              </p>
              <a
                href="https://instagram.com/whathvwedone"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 text-lg font-bold uppercase paper-rip hover:scale-105 transition-transform"
              >
                @whathvwedone
              </a>
            </div>
          </div>

          {/* General Contact */}
          <div className="animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-accent text-accent-foreground p-8 paper-rip grunge-border skew-collage-alt">
              <h3 className="text-2xl md:text-3xl font-bold uppercase mb-4">
                General Inquiries
              </h3>
              <a
                href="mailto:info@whathavewedone.com"
                className="inline-block bg-primary text-primary-foreground px-6 py-3 text-lg font-bold uppercase paper-rip hover:scale-105 transition-transform"
              >
                info@whathavewedone.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
