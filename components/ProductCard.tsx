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
      className="product-card group relative rounded-lg bg-white overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(229, 231, 235, 0.8)'
      }}
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative product-card-shine">
          <div className="mb-3 sm:mb-4 overflow-hidden bg-gray-50 aspect-square flex items-center justify-center">
            <div className="relative w-full h-full transition-transform duration-500">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={`object-contain p-5 sm:p-8 transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
              />
            </div>
          </div>
          <div className="p-4">
            <span className="inline-block mb-2 px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
              {product.category}
            </span>
            <h3 className="font-medium text-sm sm:text-base mb-0.5 sm:mb-1 truncate">{product.name}</h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">{product.subcategory}</p>
            <p className="font-semibold text-sm sm:text-lg">${product.price}</p>
          </div>
        </div>
      </Link>
      <div className="px-4 pb-4">
        <button
          ref={buttonRef}
          onClick={handleAddToCart}
          className="w-full bg-luxe-dark text-white py-2.5 text-xs sm:text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all rounded-md relative overflow-hidden group-hover:bg-black"
        >
          <span className="relative z-10">Add to Cart</span>
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