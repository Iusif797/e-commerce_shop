import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface CartAnimationProps {
  productImage: string;
  productName: string;
  startPosition: { x: number; y: number };
}

const CartAnimation: React.FC<CartAnimationProps> = ({ productImage, productName, startPosition }) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div 
      className="fixed z-50 pointer-events-none" 
      style={{ 
        left: `${startPosition.x}px`, 
        top: `${startPosition.y}px`,
        animation: 'flyToCart 1s ease-out forwards'
      }}
    >
      <div className="relative bg-white rounded-full shadow-lg p-2 w-16 h-16 flex items-center justify-center">
        <img 
          src={productImage} 
          alt={productName} 
          className="max-w-full max-h-full object-contain"
        />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-luxe-dark text-white rounded-full flex items-center justify-center text-xs font-bold">
          +1
        </div>
      </div>
    </div>,
    document.body
  );
};

export default CartAnimation; 