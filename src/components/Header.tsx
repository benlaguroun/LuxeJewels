import { useEffect, useState } from "react";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import clsx from "clsx";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-black/60 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      )}
    >
      {/* Top Bar */}
      <div className="container relative flex h-16 items-center justify-between px-6">
        {/* Left: Logo (desktop), Hamburger (mobile) */}
        <div className="flex items-center space-x-2">
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? (
                <X className="h-5 w-5 text-white" />
              ) : (
                <Menu className="h-5 w-5 text-white" />
              )}
            </Button>
          </div>

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
          {["rings", "necklaces", "earrings", "bracelets", "collections"].map(
            (item) => (
              <Link
                key={item}
                to={`/${item}`}
                className="text-sm font-medium text-white hover:text-primary transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            )
          )}
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
              <User className="h-5 w-5 text-white" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5 text-white" />
              <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                2
              </span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur px-6 py-4 border-t border-white/10">
          <nav className="flex flex-col space-y-4">
            {["rings", "necklaces", "earrings", "bracelets", "collections"].map(
              (item) => (
                <Link
                  key={item}
                  to={`/${item}`}
                  className="text-sm font-medium text-white hover:text-primary transition"
                  onClick={toggleMobileMenu}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
