import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              LuxeJewels
            </h2>
            <p className="text-background/80 mb-6 max-w-md">
              Crafting exceptional jewelry since 1985. Each piece tells a story
              of elegance, craftsmanship, and timeless beauty that transcends
              generations.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-background/60 hover:text-primary transition-colors"
              >
                Pinterest
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link
                  to="/rings"
                  className="hover:text-primary transition-colors"
                >
                  Rings
                </Link>
              </li>
              <li>
                <Link
                  to="/necklaces"
                  className="hover:text-primary transition-colors"
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link
                  to="/earrings"
                  className="hover:text-primary transition-colors"
                >
                  Earrings
                </Link>
              </li>
              <li>
                <Link
                  to="/bracelets"
                  className="hover:text-primary transition-colors"
                >
                  Bracelets
                </Link>
              </li>
              <li>
                <Link
                  to="/collections"
                  className="hover:text-primary transition-colors"
                >
                  Collections
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-background/80">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">
            © 2024 LuxeJewels. All rights reserved.
          </p>
          <p className="text-background/60 text-sm flex items-center gap-1 mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-primary" /> for jewelry
            lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
