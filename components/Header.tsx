import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
  const [activeTab, setActiveTab] = useState<'men' | 'women'>('women');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleTabChange = (tab: 'men' | 'women') => {
    setActiveTab(tab);
    router.push('/products');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full relative">
      {/* Main Header */}
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-luxe-dark"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold tracking-wider absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
          LUXE
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="uppercase text-sm tracking-wider hover:opacity-70 transition-opacity">
            Home
          </Link>
          <Link href="/products" className="uppercase text-sm tracking-wider hover:opacity-70 transition-opacity">
            Men
          </Link>
          <Link href="/products" className="uppercase text-sm tracking-wider hover:opacity-70 transition-opacity">
            Women
          </Link>
          <Link href="/products" className="uppercase text-sm tracking-wider hover:opacity-70 transition-opacity">
            Collections
          </Link>
          <Link href="/about" className="uppercase text-sm tracking-wider hover:opacity-70 transition-opacity">
            About
          </Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="hover:opacity-70 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link href="/account" aria-label="Account" className="hover:opacity-70 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative hover:opacity-70 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 md:hidden">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="py-2 uppercase text-sm tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="py-2 uppercase text-sm tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Men
              </Link>
              <Link 
                href="/products" 
                className="py-2 uppercase text-sm tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Women
              </Link>
              <Link 
                href="/products" 
                className="py-2 uppercase text-sm tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                Collections
              </Link>
              <Link 
                href="/about" 
                className="py-2 uppercase text-sm tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Category Tabs */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="flex space-x-6 sm:space-x-12">
            <button
              onClick={() => handleTabChange('men')}
              className={`py-3 sm:py-4 px-3 sm:px-6 text-sm sm:text-base transition-all ${
                activeTab === 'men' ? 'border-b-2 border-luxe-dark' : ''
              }`}
            >
              Men
            </button>
            <button
              onClick={() => handleTabChange('women')}
              className={`py-3 sm:py-4 px-3 sm:px-6 text-sm sm:text-base transition-all ${
                activeTab === 'women' ? 'border-b-2 border-luxe-dark' : ''
              }`}
            >
              Women
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 