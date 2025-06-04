import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Product } from '../types';
import { products } from '../data/products';
import Link from 'next/link';
import Image from 'next/image';

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Focus input when search bar opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle clicks outside to close the search bar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Search logic
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const term = searchTerm.toLowerCase();
    const results = products.filter(
      (product) =>
        product.name.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term) ||
        (product.subcategory && product.subcategory.toLowerCase().includes(term))
    );

    setSearchResults(results);
  }, [searchTerm]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchTerm.trim() !== '') {
      // Navigate to products page with search query
      router.push({
        pathname: '/products',
        query: { search: searchTerm },
      });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div 
        ref={containerRef}
        className="w-full max-w-2xl bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="p-4 border-b">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              ref={inputRef}
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for products..."
              className="flex-1 p-2 outline-none text-lg"
              autoComplete="off"
            />
            <button 
              type="submit"
              className="bg-luxe-dark text-white p-2 rounded-md ml-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <button 
              type="button"
              onClick={onClose}
              className="ml-2 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </form>
        </div>

        {searchResults.length > 0 && (
          <div className="max-h-96 overflow-y-auto p-4">
            <h3 className="text-sm font-medium text-gray-500 mb-3">
              {searchResults.length} {searchResults.length === 1 ? 'result' : 'results'} found
            </h3>
            <ul className="space-y-4">
              {searchResults.map((product) => (
                <li key={product.id} className="flex items-center">
                  <Link 
                    href={`/products/${product.id}`}
                    className="flex items-center flex-1 hover:bg-gray-50 p-2 rounded-md"
                    onClick={onClose}
                  >
                    <div className="w-16 h-16 relative bg-gray-100 rounded-md overflow-hidden mr-4 flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="64px"
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{product.name}</h4>
                      <p className="text-sm text-gray-500">{product.subcategory}</p>
                      <p className="text-sm font-medium">${product.price}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {searchTerm.trim() !== '' && searchResults.length === 0 && (
          <div className="p-4 text-center text-gray-500">
            No products found for "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar; 