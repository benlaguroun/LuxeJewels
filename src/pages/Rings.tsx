import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Rings = () => {
  const ringProducts = [
    {
      id: "1",
      name: "Diamond Solitaire Ring",
      price: 2499.99,
      originalPrice: 2999.99,
      imageUrl:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "Rings",
      isNew: true,
      isSale: true,
    },
    {
      id: "5",
      name: "Sapphire Cocktail Ring",
      price: 1899.99,
      imageUrl:
        "https://images.unsplash.com/photo-1588444837495-b8d18c4e5c3e?w=400&h=400&fit=crop",
      category: "Rings",
    },
    {
      id: "7",
      name: "Emerald Cut Ring",
      price: 3299.99,
      imageUrl:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop",
      category: "Rings",
      isNew: true,
    },
    {
      id: "8",
      name: "Vintage Gold Band",
      price: 799.99,
      originalPrice: 999.99,
      imageUrl:
        "https://images.unsplash.com/photo-1588444837495-b8d18c4e5c3e?w=400&h=400&fit=crop",
      category: "Rings",
      isSale: true,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-background">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4">
              Rings Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From engagement rings to statement pieces, discover our exquisite
              collection of rings crafted with precision and passion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {ringProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rings;
