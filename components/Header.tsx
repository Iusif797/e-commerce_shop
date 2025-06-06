import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useCart } from '../contexts/CartContext';
import { useUser } from '../contexts/UserContext';
import SearchBar from './SearchBar';

const Header = () => {
  const [activeTab, setActiveTab] = useState<'men' | 'women'>('women');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const router = useRouter();
  const { getCartCount, cartItems } = useCart();
  const { userData, isLoggedIn } = useUser();

  const handleTabChange = (tab: 'men' | 'women') => {
    setActiveTab(tab);
    router.push('/products');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const cartItemsCount = getCartCount();

  // Отслеживаем изменения в корзине для анимации
  useEffect(() => {
    if (cartItems.length > 0) {
      setCartPulse(true);
      const timer = setTimeout(() => {
        setCartPulse(false);
      }, 500); // Длительность анимации
      
      return () => clearTimeout(timer);
    }
  }, [cartItems]);

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <header className="w-full relative z-40">
      {/* Search Bar */}
      <SearchBar isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 sm:py-6 flex items-center justify-between">
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
        <Link href="/" className="text-xl sm:text-2xl font-semibold tracking-wider absolute left-1/2 transform -translate-x-1/2 md:static md:translate-x-0">
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
          <button 
            onClick={() => setSearchOpen(true)} 
            aria-label="Search" 
            className="hover:opacity-70 transition-opacity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <Link 
            href="/profile" 
            aria-label="Profile" 
            className="relative hover:opacity-90 transition-all group"
          >
            <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-gray-200 group-hover:border-luxe-dark transition-all duration-300 transform group-hover:scale-110">
              {isLoggedIn && userData.avatarUrl ? (
                <div className="relative w-full h-full">
                  <Image 
                    src={userData.avatarUrl}
                    alt={userData.name || "User avatar"}
                    fill
                    sizes="28px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full p-0.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              )}
            </div>
            {isLoggedIn && (
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></span>
            )}
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative hover:opacity-70 transition-opacity">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-5 w-5 ${cartPulse ? 'cart-pulse' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartItemsCount > 0 && (
              <span className={`absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center ${cartPulse ? 'cart-pulse' : ''}`}>
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={toggleMobileMenu}>
          <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg z-50 md:hidden" onClick={e => e.stopPropagation()}>
            <div className="container mx-auto px-4 py-6">
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
                <Link 
                  href="/profile" 
                  className="flex items-center py-2 uppercase text-sm tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="w-5 h-5 mr-2 rounded-full overflow-hidden">
                    {isLoggedIn && userData.avatarUrl ? (
                      <div className="relative w-full h-full">
                        <Image 
                          src={userData.avatarUrl}
                          alt={userData.name || "User avatar"}
                          fill
                          sizes="20px"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                  </div>
                  Profile
                </Link>
                <Link 
                  href="/cart" 
                  className="flex items-center py-2 uppercase text-sm tracking-wider"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Cart {cartItemsCount > 0 && <span className="ml-1 bg-black text-white text-xs px-1.5 rounded-full">{cartItemsCount}</span>}
                </Link>
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setSearchOpen(true);
                  }}
                  className="flex items-center py-2 uppercase text-sm tracking-wider"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </button>
              </nav>
            </div>
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