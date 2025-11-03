import { Link } from 'react-router-dom';
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
      <Link to={`/product/${product.id}`} className="block relative">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#E8DCC4]/20">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Hover Overlay with Play Icon */}
          {isHovered && (
            <div className="absolute inset-0 bg-[#1A1A1A]/60 flex items-center justify-center transition-opacity duration-300">
              <Play size={48} className="text-white opacity-90" />
            </div>
          )}
        </div>
      </Link>

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
