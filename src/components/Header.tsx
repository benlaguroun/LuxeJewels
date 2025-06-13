import { useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="container relative flex h-16 items-center justify-between px-6">
        {/* Left: Logo (desktop), Hamburger (mobile) */}
        <div className="flex items-center space-x-2">
          {/* Hamburger - only on mobile */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>

          {/* Logo - aligned left on desktop, centered via absolute on mobile */}
          <div className="hidden md:flex">
            <Link to="/">
              <h1 className="text-2xl font-serif font-bold text-primary">
                LuxeJewels
              </h1>
            </Link>
          </div>
        </div>

        {/* Center Nav (desktop only) */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
          <Link to="/rings" className="text-sm font-medium hover:text-primary">
            Rings
          </Link>
          <Link
            to="/necklaces"
            className="text-sm font-medium hover:text-primary"
          >
            Necklaces
          </Link>
          <Link
            to="/earrings"
            className="text-sm font-medium hover:text-primary"
          >
            Earrings
          </Link>
          <Link
            to="/bracelets"
            className="text-sm font-medium hover:text-primary"
          >
            Bracelets
          </Link>
          <Link
            to="/collections"
            className="text-sm font-medium hover:text-primary"
          >
            Collections
          </Link>
        </nav>

        {/* Mobile Centered Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2 md:hidden">
          <Link to="/">
            <h1 className="text-2xl font-serif font-bold text-primary">
              LuxeJewels
            </h1>
          </Link>
        </div>

        {/* Right: Account & Cart Icons */}
        <div className="flex items-center space-x-2 ml-auto">
          <Link to="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                2
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu (below header) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background px-6 py-4 border-t">
          <nav className="flex flex-col space-y-4">
            <Link
              to="/rings"
              className="text-sm font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Rings
            </Link>
            <Link
              to="/necklaces"
              className="text-sm font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Necklaces
            </Link>
            <Link
              to="/earrings"
              className="text-sm font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Earrings
            </Link>
            <Link
              to="/bracelets"
              className="text-sm font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Bracelets
            </Link>
            <Link
              to="/collections"
              className="text-sm font-medium hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Collections
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
