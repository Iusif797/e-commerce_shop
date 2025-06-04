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
    <div className="group relative">
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
      <button
        ref={buttonRef}
        onClick={handleAddToCart}
        className="mt-2 w-full bg-luxe-dark text-white py-2 text-xs sm:text-sm uppercase tracking-wider hover:bg-opacity-90 transition-all"
      >
        Add to Cart
      </button>
      
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