import { Button } from "@/components/ui/button";
import heroImage from "../assets/hero.jpeg";

const Hero = () => {
  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-center bg-cover bg-fixed md:bg-scroll"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row h-full">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-white/10 backdrop-blur-md border-r border-white/10">
          <div className="max-w-md text-center md:text-right text-white">
            <h1 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">
              ATELIER
            </h1>
            <h2 className="text-xl md:text-2xl font-light tracking-widest mt-2 text-gray-200">
              LONDON
            </h2>
            <p className="mt-6 text-sm md:text-base text-gray-300">
              YOUR CLUB. YOUR COLLECTION.
              <br />
              25 DUKE STREET · MAYFAIR · LONDON W1S 1AX
            </p>
            <div className="mt-10 space-x-4">
              <Button size="lg">Explore</Button>
              <Button variant="outline" size="lg">
                Lookbook
              </Button>
            </div>
          </div>
        </div>

        {/* Right spacer for desktop layout */}
        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>
  );
};

export default Hero;
