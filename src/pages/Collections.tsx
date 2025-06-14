import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Collections = () => {
  const collections = [
    {
      name: "Bridal Collection",
      description: "Perfect pieces for your special day",
      imageUrl:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=400&fit=crop",
      itemCount: "25 pieces",
    },
    {
      name: "Vintage Inspired",
      description: "Timeless designs with modern craftsmanship",
      imageUrl:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop",
      itemCount: "40 pieces",
    },
    {
      name: "Contemporary",
      description: "Modern designs for the fashion-forward",
      imageUrl:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&h=400&fit=crop",
      itemCount: "35 pieces",
    },
    {
      name: "Luxury Collection",
      description: "Exceptional pieces for discerning tastes",
      imageUrl:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=400&fit=crop",
      itemCount: "15 pieces",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-yellow-300 drop-shadow mb-4">
              Our Collections
            </h1>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Discover our carefully curated collections, each telling a unique
              story through exceptional craftsmanship and timeless design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:shadow-xl max-w-[400px] w-full mx-auto"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={collection.imageUrl}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="text-xl font-serif font-semibold mb-2 text-white">
                    {collection.name}
                  </h3>
                  <p className="text-white/70 mb-2 text-sm md:text-base">
                    {collection.description}
                  </p>
                  <p className="text-sm text-yellow-300 font-medium mb-5">
                    {collection.itemCount}
                  </p>
                  <Button className="w-full bg-white/10 text-white hover:bg-yellow-400 hover:text-black transition">
                    Explore Collection
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Collections;
