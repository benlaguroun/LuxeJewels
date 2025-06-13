import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Earrings = () => {
  const earringProducts = [
    {
      id: "2",
      name: "Pearl Drop Earrings",
      price: 399.99,
      imageUrl:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
      category: "Earrings",
      isNew: true,
    },
    {
      id: "6",
      name: "Rose Gold Hoops",
      price: 299.99,
      imageUrl:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      category: "Earrings",
      isNew: true,
    },
    {
      id: "12",
      name: "Diamond Studs",
      price: 1599.99,
      originalPrice: 1899.99,
      imageUrl:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
      category: "Earrings",
      isSale: true,
    },
    {
      id: "13",
      name: "Chandelier Earrings",
      price: 899.99,
      imageUrl:
        "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop",
      category: "Earrings",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-background">
        <div className="container px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold mb-4">
              Earrings Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From delicate studs to statement hoops, find the perfect earrings
              to frame your face beautifully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {earringProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Earrings;
