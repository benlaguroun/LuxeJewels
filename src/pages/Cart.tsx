import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";

const Cart = () => {
  const cartItems = [
    {
      id: "1",
      name: "Diamond Solitaire Ring",
      price: 2499.99,
      imageUrl:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=100&h=100&fit=crop",
      quantity: 1,
      size: "Size 7",
    },
    {
      id: "2",
      name: "Pearl Drop Earrings",
      price: 399.99,
      imageUrl:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=100&h=100&fit=crop",
      quantity: 1,
      size: null,
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16 bg-background">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-serif font-bold mb-8">
              Shopping Cart
            </h1>

            {cartItems.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center gap-4 p-4 border rounded-lg"
                      >
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{item.name}</h3>
                          {item.size && (
                            <p className="text-sm text-muted-foreground">
                              {item.size}
                            </p>
                          )}
                          <p className="font-semibold text-lg">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">
                            {item.quantity}
                          </span>
                          <Button variant="outline" size="sm">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm">
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="border rounded-lg p-6">
                    <h2 className="text-xl font-serif font-semibold mb-4">
                      Order Summary
                    </h2>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shipping</span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tax</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <hr />
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <Button className="w-full mb-4">Proceed to Checkout</Button>
                    <Button variant="outline" className="w-full">
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-16">
                <h2 className="text-2xl font-serif font-semibold mb-4">
                  Your cart is empty
                </h2>
                <p className="text-muted-foreground mb-8">
                  Start shopping to add items to your cart
                </p>
                <Button>Continue Shopping</Button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
