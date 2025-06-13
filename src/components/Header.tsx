import { ShoppingCart, Search, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/">
            <h1 className="text-2xl font-serif font-bold text-primary">
              LuxeJewels
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/rings"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Rings
          </Link>
          <Link
            to="/necklaces"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Necklaces
          </Link>
          <Link
            to="/earrings"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Earrings
          </Link>
          <Link
            to="/bracelets"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Bracelets
          </Link>
          <Link
            to="/collections"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Collections
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Heart className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="sm" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                2
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
