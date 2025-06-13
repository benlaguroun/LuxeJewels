import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
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
      id: "2",
      name: "Pearl Drop Earrings",
      price: 399.99,
      imageUrl:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
      category: "Earrings",
      isNew: true,
    },
    {
      id: "3",
      name: "Gold Chain Necklace",
      price: 899.99,
      imageUrl:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop",
      category: "Necklaces",
    },
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
      id: "5",
      name: "Sapphire Cocktail Ring",
      price: 1899.99,
      imageUrl:
        "https://images.unsplash.com/photo-1588444837495-b8d18c4e5c3e?w=400&h=400&fit=crop",
      category: "Rings",
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
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked pieces that embody elegance and sophistication. Each item
            is carefully selected for its exceptional quality and timeless
            appeal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
