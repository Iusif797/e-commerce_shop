import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types';

type CategoryType = 'all' | 'shoes' | 'caps' | 'belts';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const categories: { id: CategoryType; label: string }[] = [
    { id: 'all', label: 'All Products' },
    { id: 'shoes', label: 'Shoes' },
    { id: 'caps', label: 'Caps' },
    { id: 'belts', label: 'Belts' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="py-12 sm:py-16">
      {/* Category Tabs */}
      <div className="mb-10 sm:mb-16">
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-5">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 sm:px-8 py-2.5 text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 rounded-md shadow-sm transform ${
                  activeCategory === category.id
                    ? 'bg-luxe-dark text-white translate-y-0 scale-105 shadow-md'
                    : 'bg-white text-luxe-dark border border-gray-200 hover:bg-gray-50 hover:-translate-y-0.5'
                }`}
                style={{ 
                  boxShadow: activeCategory === category.id 
                    ? '0 4px 6px rgba(0, 0, 0, 0.1)' 
                    : '0 1px 3px rgba(0, 0, 0, 0.05)'
                }}
              >
                {category.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {filteredProducts.map((product, index) => (
          <div 
            key={product.id} 
            className="transform transition-all duration-300"
            style={{ 
              animationDelay: `${index * 0.1}s`,
              animationFillMode: 'backwards'
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-lg text-gray-500">No products found in this category.</p>
        </div>
      )}

      {/* View All Button */}
      {filteredProducts.length > 0 && activeCategory !== 'all' && (
        <div className="flex justify-center mt-10 sm:mt-16">
          <button 
            onClick={() => setActiveCategory('all')}
            className="bg-luxe-dark text-white px-6 sm:px-8 py-2.5 sm:py-3 uppercase text-xs sm:text-sm tracking-wider hover:bg-opacity-90 transition-all rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid; 