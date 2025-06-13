import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-background">
        <div className="container px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-serif font-bold mb-4">
                About LuxeJewels
              </h1>
              <p className="text-lg text-muted-foreground">
                Crafting exceptional jewelry since 1985
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-semibold mb-4">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-6">
                  Founded in 1985, LuxeJewels began as a small family business
                  with a passion for creating extraordinary jewelry. What
                  started as a dream in a modest workshop has grown into a
                  renowned destination for luxury jewelry and accessories.
                </p>
                <p className="text-muted-foreground mb-6">
                  Our commitment to exceptional craftsmanship and timeless
                  design has remained unchanged throughout our journey. Each
                  piece in our collection tells a story of elegance, quality,
                  and the artistry that defines our brand.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-serif font-semibold mb-4">
                  Our Craftsmanship
                </h2>
                <p className="text-muted-foreground mb-6">
                  Every piece of jewelry at LuxeJewels is meticulously crafted
                  by skilled artisans who bring decades of experience to their
                  work. We use only the finest materials, including ethically
                  sourced diamonds and precious metals, to ensure that each
                  creation meets our exacting standards.
                </p>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-serif font-semibold mb-4">
                  Our Promise
                </h2>
                <p className="text-muted-foreground mb-6">
                  At LuxeJewels, we understand that jewelry is more than just an
                  accessory – it's a symbol of life's most precious moments.
                  Whether you're celebrating an engagement, anniversary, or
                  simply treating yourself, we're here to help you find the
                  perfect piece that will be treasured for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
