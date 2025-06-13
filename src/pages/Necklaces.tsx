import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Necklaces = () => {
  const necklaceProducts = [
    {
      id: "3",
      name: "Gold Chain Necklace",
      price: 899.99,
      imageUrl:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      category: "Necklaces",
    },
    {
      id: "9",
      name: "Pearl Strand Necklace",
      price: 1299.99,
      imageUrl:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      category: "Necklaces",
      isNew: true,
    },
    {
      id: "10",
      name: "Diamond Pendant",
      price: 1899.99,
      originalPrice: 2199.99,
      imageUrl:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      category: "Necklaces",
      isSale: true,
    },
    {
      id: "11",
      name: "Silver Locket",
      price: 599.99,
      imageUrl:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      category: "Necklaces",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-background">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4">
              Necklaces Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elegant chains and pendants that complement your style. Each piece
              is designed to make a statement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {necklaceProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Necklaces;
