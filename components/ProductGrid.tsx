import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

type CategoryType = 'all' | 'shoes' | 'caps' | 'belts';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category.toLowerCase() === activeCategory);

  return (
    <div className="py-8 sm:py-12">
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:space-x-4 sm:gap-0 mb-8 sm:mb-12">
        <button 
          onClick={() => setActiveCategory('all')}
          className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors ${
            activeCategory === 'all' 
              ? 'bg-luxe-dark text-white' 
              : 'bg-gray-100 text-luxe-dark hover:bg-gray-200'
          }`}
        >
          All
        </button>
        <button 
          onClick={() => setActiveCategory('shoes')}
          className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors ${
            activeCategory === 'shoes' 
              ? 'bg-luxe-dark text-white' 
              : 'bg-gray-100 text-luxe-dark hover:bg-gray-200'
          }`}
        >
          Shoes
        </button>
        <button 
          onClick={() => setActiveCategory('caps')}
          className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors ${
            activeCategory === 'caps' 
              ? 'bg-luxe-dark text-white' 
              : 'bg-gray-100 text-luxe-dark hover:bg-gray-200'
          }`}
        >
          Caps
        </button>
        <button 
          onClick={() => setActiveCategory('belts')}
          className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-colors ${
            activeCategory === 'belts' 
              ? 'bg-luxe-dark text-white' 
              : 'bg-gray-100 text-luxe-dark hover:bg-gray-200'
          }`}
        >
          Belts
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10 sm:mt-16">
        <button className="bg-luxe-dark text-white px-6 sm:px-8 py-2.5 sm:py-3 uppercase text-xs sm:text-sm tracking-wider hover:bg-opacity-90 transition-all">
          VIEW ALL PRODUCTS
        </button>
      </div>
    </div>
  );
};

export default ProductGrid; 