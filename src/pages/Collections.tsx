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
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-background">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4">
              Our Collections
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our carefully curated collections, each telling a unique
              story through exceptional craftsmanship and timeless design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => (
              <div
                key={collection.name}
                className="group relative overflow-hidden rounded-lg bg-card shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={collection.imageUrl}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-semibold mb-3">
                    {collection.name}
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    {collection.description}
                  </p>
                  <p className="text-sm text-primary font-medium mb-6">
                    {collection.itemCount}
                  </p>
                  <Button className="w-full">Explore Collection</Button>
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
