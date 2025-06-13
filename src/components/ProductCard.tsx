import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  imageUrl,
  category,
  isNew,
  isSale,
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
              New
            </span>
          )}
          {isSale && (
            <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-medium">
              Sale
            </span>
          )}
        </div>

        {/* Action buttons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
          {category}
        </p>
        <h3 className="font-serif font-medium text-lg mb-2 line-clamp-2">
          {name}
        </h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-semibold text-foreground">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        <Link to={`/product/${id}`}>
          <Button className="w-full" variant="outline">
            See Product
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
