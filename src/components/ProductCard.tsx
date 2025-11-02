import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  brand: string;
  year: string;
  price: number;
  image: string;
  hasVideoTest: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#1A1A1A]/5"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#E8DCC4]/20">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Video Test Badge */}
        {product.hasVideoTest && (
          <Badge className="absolute top-3 right-3 bg-[#1A1A1A] text-white border-0">
            <Play size={12} className="mr-1" />
            Video Test
          </Badge>
        )}

        {/* Hover Overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-[#1A1A1A]/80 flex items-center justify-center transition-opacity duration-300">
            <Play size={48} className="text-white opacity-90" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <p className="text-[#A0522D] text-sm mb-1">
            {product.brand} · {product.year}
          </p>
          <h3 className="text-[#1A1A1A] mb-2 playfair-heading">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-[#1A1A1A] playfair-large">
            €{product.price}
          </div>
          <Link to={`/product/${product.id}`}>
            <Button
              className="bg-[#D97941] hover:bg-[#A0522D] text-white transition-colors"
            >
              Scopri la Storia
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
