import { Calendar, MapPin, Clock } from "lucide-react";

const Shows = () => {
  return (
    <section id="shows" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center uppercase tracking-tight">
          <span className="inline-block bg-primary text-primary-foreground px-8 py-4 paper-rip cutout-shadow skew-collage">
            Shows
          </span>
        </h2>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <div className="bg-card p-10 paper-rip grunge-border skew-collage-alt">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Calendar className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold uppercase mb-2">
                    11th December
                  </h3>
                  <p className="text-xl md:text-2xl font-bold text-secondary">
                    Südstadt
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-2xl font-bold">19:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-8 h-8 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl md:text-2xl font-body leading-relaxed">
                    Thalkirchner Str. 29<br />
                    80337 München
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t-4 border-primary">
                <p className="text-lg font-bold uppercase tracking-wide">
                  Don't miss it!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shows;
