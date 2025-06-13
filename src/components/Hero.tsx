import { Button } from "@/components/ui/button";
import heroImageMobile from "../assets/hero.png";
import heroImageDesktop from "../assets/hero1.png";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-center bg-cover bg-fixed md:bg-scroll">
      {/* Mobile Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed md:hidden"
        style={{ backgroundImage: `url(${heroImageMobile})` }}
      />
      {/* Desktop Background */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{ backgroundImage: `url(${heroImageDesktop})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 md:bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-0 flex flex-col md:flex-row h-full">
        {/* Left: Text */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center p-8 md:p-16 bg-white/10 backdrop-blur-md border-r border-white/10 mt-20 md:mt-0">
          <div className="max-w-md text-center md:text-right text-white">
            {/* Subheading - hidden on mobile */}
            <h2 className="hidden md:block text-2xl font-light tracking-widest mt-2 text-gray-200">
              Timeless Elegance
            </h2>

            {/* Paragraph - hidden on mobile */}
            <p className="hidden md:block mt-6 text-base text-gray-300">
              Discover handcrafted fine jewelry designed to celebrate you.
              <br />
              Classic beauty. Modern sophistication.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-end gap-4">
              <Button
                size="lg"
                className="backdrop-blur bg-white/20 text-white border border-white/30 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-400 hover:text-black shadow-md hover:shadow-yellow-500/60 transition duration-300"
              >
                Shop Collection
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="backdrop-blur bg-white/10 text-white border border-white/30 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-400 hover:text-black shadow-md hover:shadow-yellow-500/60 transition duration-300"
              >
                View Lookbook
              </Button>
            </div>
          </div>
        </div>

        {/* Right spacing for layout on desktop */}
        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>
  );
};

export default Hero;
