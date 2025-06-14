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
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="py-20">
        <div className="container px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-yellow-300 drop-shadow mb-12 text-center">
              Shopping Cart
            </h1>

            {cartItems.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md"
                    >
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        {item.size && (
                          <p className="text-sm text-white/60">{item.size}</p>
                        )}
                        <p className="font-bold text-yellow-400">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          className="bg-white/10 hover:bg-yellow-400 hover:text-black text-white"
                          size="sm"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          className="bg-white/10 hover:bg-yellow-400 hover:text-black text-white"
                          size="sm"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:text-yellow-400"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Order Summary */}
                <div>
                  <div className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6 shadow-md">
                    <h2 className="text-xl font-serif font-semibold mb-4 text-yellow-300">
                      Order Summary
                    </h2>
                    <div className="space-y-3 mb-4 text-white/90">
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
                      <hr className="border-white/20" />
                      <div className="flex justify-between font-semibold text-lg text-yellow-300">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                    <Button className="w-full bg-white/10 hover:bg-yellow-400 hover:text-black text-white font-semibold mb-3">
                      Proceed to Checkout
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full text-white hover:bg-yellow-400 hover:text-black border-white/30"
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-20 bg-white/5 backdrop-blur-md rounded-xl">
                <h2 className="text-2xl font-serif font-semibold mb-4 text-yellow-300">
                  Your cart is empty
                </h2>
                <p className="text-white/60 mb-6">
                  Start shopping to add items to your cart.
                </p>
                <Button className="bg-white/10 hover:bg-yellow-400 hover:text-black text-white">
                  Continue Shopping
                </Button>
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
