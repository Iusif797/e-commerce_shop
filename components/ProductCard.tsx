import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group">
      <Link href={`/products/${product.id}`}>
        <div className="mb-3 sm:mb-4 overflow-hidden bg-gray-50 aspect-square flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-contain p-5 sm:p-8 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
        <h3 className="font-medium text-sm sm:text-base mb-0.5 sm:mb-1 truncate">{product.name}</h3>
        <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{product.subcategory}</p>
        <p className="font-medium text-sm sm:text-base">${product.price}</p>
      </Link>
    </div>
  );
};

export default ProductCard; 