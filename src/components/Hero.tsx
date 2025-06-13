import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background to-secondary">
      <div className="container px-6 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-foreground">
            Exquisite
            <span className="text-primary block">Jewelry</span>
            Collection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover handcrafted pieces that tell your unique story. From
            timeless classics to contemporary designs, each piece is created
            with passion and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              View Lookbook
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border-2 border-primary/30 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default Hero;
