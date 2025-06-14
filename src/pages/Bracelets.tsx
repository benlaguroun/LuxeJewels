import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Bracelets = () => {
  const braceletProducts = [
    {
      id: "4",
      name: "Tennis Bracelet",
      price: 1299.99,
      originalPrice: 1599.99,
      imageUrl:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
      category: "Bracelets",
      isSale: true,
    },
    {
      id: "14",
      name: "Gold Bangle Set",
      price: 799.99,
      imageUrl:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
      category: "Bracelets",
      isNew: true,
    },
    {
      id: "15",
      name: "Charm Bracelet",
      price: 599.99,
      imageUrl:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
      category: "Bracelets",
    },
    {
      id: "16",
      name: "Silver Cuff",
      price: 399.99,
      originalPrice: 499.99,
      imageUrl:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop",
      category: "Bracelets",
      isSale: true,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="py-20">
        <div className="container px-6">
          {/* Glassmorphism Container */}
          <div className="rounded-2xl bg-white/5 backdrop-blur-lg p-10 shadow-xl border border-white/10">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-yellow-300 drop-shadow mb-4">
                Bracelets Collection
              </h1>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Elegant bracelets and bangles to adorn your wrists. From tennis
                bracelets to charm collections.
              </p>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {braceletProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bracelets;
