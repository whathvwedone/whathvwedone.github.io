import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Shows from "@/components/Shows";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Music />
      <Shows />
      <Gallery />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t-4 border-primary">
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-bold uppercase text-lg mb-2">What Have We Done</p>
          <p className="font-body text-sm text-muted-foreground">
            Pop-punk from Munich • Est. 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
