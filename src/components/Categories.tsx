import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      name: "Rings",
      description: "From engagement to statement pieces",
      imageUrl:
        "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500&h=300&fit=crop",
      itemCount: "120+ items",
      link: "/rings",
    },
    {
      name: "Necklaces",
      description: "Elegant chains and pendants",
      imageUrl:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=300&fit=crop",
      itemCount: "85+ items",
      link: "/necklaces",
    },
    {
      name: "Earrings",
      description: "Studs, hoops, and drops",
      imageUrl:
        "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=500&h=300&fit=crop",
      itemCount: "95+ items",
      link: "/earrings",
    },
    {
      name: "Bracelets",
      description: "Tennis and charm bracelets",
      imageUrl:
        "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&h=300&fit=crop",
      itemCount: "60+ items",
      link: "/bracelets",
    },
  ];

  return (
    <section className="py-16 bg-black/90">
      <div className="container px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold mb-4 text-white">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-400">
            Explore our curated collections of fine jewelry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-lg border border-white/10 transition-all hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-white">
                <h3 className="text-xl font-serif font-semibold mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-300 mb-1">
                  {category.description}
                </p>
                <p className="text-xs text-yellow-400 font-medium mb-4">
                  {category.itemCount}
                </p>
                <Link to={category.link}>
                  <Button
                    size="sm"
                    className="w-full bg-white/10 border border-white/20 text-white hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-500 hover:to-yellow-400 hover:text-black shadow hover:shadow-yellow-500/50 transition"
                  >
                    Shop {category.name}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
