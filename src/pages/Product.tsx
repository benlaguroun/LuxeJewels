import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Heart,
  ShoppingCart,
  Star,
  Truck,
  Shield,
  RotateCcw,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Product = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const { toast } = useToast();

  // Mock product data - in a real app, this would come from an API
  const productData = {
    "1": {
      name: "Diamond Solitaire Ring",
      price: 2499.99,
      originalPrice: 2999.99,
      category: "Rings",
      isNew: true,
      isSale: true,
      rating: 4.8,
      reviews: 24,
      description:
        "This stunning diamond solitaire ring features a brilliant-cut diamond set in a classic 18k white gold band. Perfect for engagements or special occasions, this timeless piece combines elegance with exceptional craftsmanship.",
      features: [
        "1.5 carat brilliant-cut diamond",
        "18k white gold band",
        "Certified diamond with GIA certificate",
        "Professional setting and finishing",
        "Lifetime warranty included",
      ],
      images: [
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1588444837495-b8d18c4e5c3e?w=600&h=600&fit=crop",
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop&brightness=1.1",
      ],
      inStock: true,
      specifications: {
        Metal: "18k White Gold",
        Stone: "Diamond",
        Carat: "1.5ct",
        Cut: "Brilliant",
        Color: "D",
        Clarity: "VS1",
      },
    },
    // Default fallback for other products
    default: {
      name: "Premium Jewelry Piece",
      price: 999.99,
      originalPrice: 1199.99,
      category: "Jewelry",
      isNew: false,
      isSale: false,
      rating: 4.5,
      reviews: 12,
      description:
        "A beautiful piece of jewelry crafted with precision and attention to detail. Perfect for any occasion.",
      features: [
        "High-quality materials",
        "Expert craftsmanship",
        "Elegant design",
        "Perfect for gifting",
      ],
      images: [
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=600&fit=crop",
      ],
      inStock: true,
      specifications: {
        Material: "Premium Metal",
        Finish: "Polished",
        Style: "Contemporary",
      },
    },
  };

  const product =
    productData[id as keyof typeof productData] || productData.default;

  const handleAddToCart = () => {
    toast({
      title: "Added to Cart",
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const handleAddToWishlist = () => {
    setIsInWishlist(!isInWishlist);
    toast({
      title: isInWishlist ? "Removed from Wishlist" : "Added to Wishlist",
      description: isInWishlist
        ? `${product.name} removed from your wishlist.`
        : `${product.name} added to your wishlist.`,
    });
  };

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-8 bg-background">
        <div className="container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-secondary/20">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-square w-20 rounded-md overflow-hidden border-2 transition-colors ${
                        selectedImage === index
                          ? "border-primary"
                          : "border-transparent hover:border-primary/50"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-2">
                  {product.category}
                </p>
                <h1 className="text-3xl font-serif font-bold mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-bold text-foreground">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice &&
                    product.originalPrice > product.price && (
                      <span className="text-xl text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  {product.isSale && (
                    <span className="bg-destructive text-destructive-foreground text-sm px-2 py-1 rounded-full font-medium">
                      Sale
                    </span>
                  )}
                  {product.isNew && (
                    <span className="bg-primary text-primary-foreground text-sm px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="font-semibold mb-3">Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Quantity
                  </label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={decreaseQuantity}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-medium">
                      {quantity}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={increaseQuantity}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    className="flex-1"
                    size="lg"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleAddToWishlist}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        isInWishlist ? "fill-current text-destructive" : ""
                      }`}
                    />
                  </Button>
                </div>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 gap-4 pt-6 border-t">
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-primary" />
                  <span className="text-sm">
                    Free shipping on orders over $500
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm">Lifetime warranty included</span>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="w-5 h-5 text-primary" />
                  <span className="text-sm">30-day return policy</span>
                </div>
              </div>

              {/* Specifications */}
              <div className="pt-6 border-t">
                <h3 className="font-semibold mb-3">Specifications</h3>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div key={key} className="contents">
                        <span className="text-muted-foreground">{key}:</span>
                        <span className="font-medium">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
