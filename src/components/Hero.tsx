import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImageMobile from "../assets/hero-men.png";
import heroImageDesktop from "../assets/hero-desktop-men.png";

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
            {/* Big H1 Title with Yellow Effect */}
            <h1 className="hidden md:block text-4xl md:text-6xl font-extrabold font-serif mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md">
              Moroccan Handcrafted Jewelry
            </h1>

            {/* Paragraph with Cultural Emphasis
             <p className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed">
              Explore timeless pieces inspired by Moroccan heritage.{" "}
              <br className="hidden md:block" />
              Handcrafted with passion, made to adorn every moment.
            </p> */}

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row sm:justify-center md:justify-end gap-4 w-full max-w-xs mx-auto sm:max-w-none">
              {/* Yellow Bordered Button */}
              <Link to="/collections" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-transparent text-yellow-400 border border-yellow-400 hover:bg-yellow-400 hover:text-black transition duration-300"
                >
                  Shop Collection
                </Button>
              </Link>

              {/* Filled Gradient Button */}
              <Link to="/lookbook" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black font-semibold shadow-md hover:shadow-yellow-500/60 transition duration-300"
                >
                  View Lookbook
                </Button>
              </Link>
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
