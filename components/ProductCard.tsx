import React, { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types';
import { useCart } from '../contexts/CartContext';
import CartAnimation from './CartAnimation';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationStartPosition, setAnimationStartPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Получаем позицию кнопки для начала анимации
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setAnimationStartPosition({
        x: rect.left + rect.width / 2 - 32,  // 32 - половина ширины анимации
        y: rect.top
      });
    }
    
    // Показываем анимацию
    setShowAnimation(true);
    
    // Скрываем анимацию через 1 секунду (длительность анимации)
    setTimeout(() => {
      setShowAnimation(false);
      // Добавляем товар в корзину после завершения анимации
      addToCart(product);
    }, 950);
  };

  return (
    <div 
      className="product-card group relative rounded-lg bg-white overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        border: '1px solid rgba(229, 231, 235, 0.8)'
      }}
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative product-card-shine">
          <div className="mb-3 sm:mb-4 overflow-hidden bg-gray-50 aspect-square flex items-center justify-center">
            <div className="relative w-full h-full transition-transform duration-700">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={`object-cover p-0 transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
              />
              <div className={`absolute inset-0 bg-black bg-opacity-5 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}></div>
            </div>
          </div>
          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                {product.category}
              </span>
              <span className="font-semibold text-sm sm:text-lg">${product.price}</span>
            </div>
            <h3 className="font-medium text-sm sm:text-base mb-1 sm:mb-2 truncate">{product.name}</h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-3">{product.subcategory}</p>
          </div>
        </div>
      </Link>
      <div className="px-5 pb-5">
        <button
          ref={buttonRef}
          onClick={handleAddToCart}
          className="w-full bg-luxe-dark text-white py-3 text-xs sm:text-sm uppercase tracking-wider hover:bg-black transition-all rounded-md relative overflow-hidden flex items-center justify-center"
        >
          <span className="relative z-10 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to Cart
          </span>
          <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></span>
        </button>
      </div>
      
      {showAnimation && (
        <CartAnimation 
          productImage={product.image}
          productName={product.name}
          startPosition={animationStartPosition}
        />
      )}
    </div>
  );
};

export default ProductCard; 