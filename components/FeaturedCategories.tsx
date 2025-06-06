import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedCategories = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-center mb-8 sm:mb-12 md:mb-16 relative">
          <span className="relative z-10">Featured Collections</span>
          <span className="absolute w-16 sm:w-24 h-1 bg-luxe-dark bottom-0 left-1/2 transform -translate-x-1/2 -mb-2"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {/* Footwear Card */}
          <div className="product-card group relative rounded-lg bg-white overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            style={{
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(229, 231, 235, 0.8)'
            }}>
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-6 h-48 sm:h-56 md:h-64 relative product-card-shine overflow-hidden">
              <Image
                src="/images/products/obuv-iz-koricnevoi-kozi.jpg"
                alt="Premium Footwear"
                fill
                sizes="(max-width: 768px) 100%, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white bg-opacity-90 py-1 px-2 sm:px-3 text-[10px] sm:text-xs uppercase tracking-wider">
                Premium Quality
              </div>
            </div>
            <div className="px-4 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 flex-grow">
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-center mb-2 sm:mb-3">Premium Footwear</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center mb-4 sm:mb-5 md:mb-6">
                Handcrafted shoes made with the finest materials and exceptional craftsmanship.
              </p>
              <div className="text-center mt-auto">
                <Link href="/products?category=shoes" className="inline-flex items-center justify-center w-full bg-white border border-luxe-dark text-luxe-dark py-2.5 sm:py-3 px-3 sm:px-4 rounded-md hover:bg-luxe-dark hover:text-white transition-all duration-300 text-xs sm:text-sm md:text-base font-medium">
                  EXPLORE COLLECTION 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Headwear Card */}
          <div className="product-card group relative rounded-lg bg-white overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            style={{
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(229, 231, 235, 0.8)'
            }}>
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-6 h-48 sm:h-56 md:h-64 relative product-card-shine overflow-hidden">
              <Image
                src="/images/products/shoes-style.jpg"
                alt="Elegant Headwear"
                fill
                sizes="(max-width: 768px) 100%, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white bg-opacity-90 py-1 px-2 sm:px-3 text-[10px] sm:text-xs uppercase tracking-wider">
                New Arrival
              </div>
            </div>
            <div className="px-4 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 flex-grow">
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-center mb-2 sm:mb-3">Elegant Headwear</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center mb-4 sm:mb-5 md:mb-6">
                Sophisticated caps and hats designed for the modern connoisseur.
              </p>
              <div className="text-center mt-auto">
                <Link href="/products?category=caps" className="inline-flex items-center justify-center w-full bg-white border border-luxe-dark text-luxe-dark py-2.5 sm:py-3 px-3 sm:px-4 rounded-md hover:bg-luxe-dark hover:text-white transition-all duration-300 text-xs sm:text-sm md:text-base font-medium">
                  EXPLORE COLLECTION 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Belts Card */}
          <div className="product-card group relative rounded-lg bg-white overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
            style={{
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
              border: '1px solid rgba(229, 231, 235, 0.8)'
            }}>
            <div className="flex justify-center mb-3 sm:mb-4 md:mb-6 h-48 sm:h-56 md:h-64 relative product-card-shine overflow-hidden">
              <Image
                src="/images/products/remen-1.jpg"
                alt="Luxury Belts"
                fill
                sizes="(max-width: 768px) 100%, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-300"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white bg-opacity-90 py-1 px-2 sm:px-3 text-[10px] sm:text-xs uppercase tracking-wider">
                Limited Edition
              </div>
            </div>
            <div className="px-4 sm:px-6 md:px-8 pb-5 sm:pb-6 md:pb-8 flex-grow">
              <h3 className="text-base sm:text-lg md:text-xl font-medium text-center mb-2 sm:mb-3">Luxury Belts</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center mb-4 sm:mb-5 md:mb-6">
                Timeless belt designs that combine heritage craftsmanship with contemporary style.
              </p>
              <div className="text-center mt-auto">
                <Link href="/products?category=belts" className="inline-flex items-center justify-center w-full bg-white border border-luxe-dark text-luxe-dark py-2.5 sm:py-3 px-3 sm:px-4 rounded-md hover:bg-luxe-dark hover:text-white transition-all duration-300 text-xs sm:text-sm md:text-base font-medium">
                  EXPLORE COLLECTION 
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories; 