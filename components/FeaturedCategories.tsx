import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedCategories = () => {
  return (
    <section className="py-10 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-light text-center mb-8 sm:mb-12">Featured Categories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Footwear Card */}
          <div className="bg-white rounded shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8">
            <div className="flex justify-center mb-4 sm:mb-6 h-48 relative">
              <Image
                src="/images/products/obuv.jpg"
                alt="Premium Footwear"
                fill
                sizes="(max-width: 768px) 100%, 33vw"
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-center mb-2">Premium Footwear</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-4 sm:mb-6">
              Handcrafted shoes made with the finest materials and exceptional craftsmanship.
            </p>
            <div className="text-center">
              <Link href="/products?category=shoes" className="inline-flex items-center text-luxe-dark hover:opacity-70 transition-opacity text-sm sm:text-base">
                EXPLORE COLLECTION 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Headwear Card */}
          <div className="bg-white rounded shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8">
            <div className="flex justify-center mb-4 sm:mb-6 h-48 relative">
              <Image
                src="/images/products/kepka.jpg"
                alt="Elegant Headwear"
                fill
                sizes="(max-width: 768px) 100%, 33vw"
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-center mb-2">Elegant Headwear</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-4 sm:mb-6">
              Sophisticated caps and hats designed for the modern connoisseur.
            </p>
            <div className="text-center">
              <Link href="/products?category=caps" className="inline-flex items-center text-luxe-dark hover:opacity-70 transition-opacity text-sm sm:text-base">
                EXPLORE COLLECTION 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
          
          {/* Belts Card */}
          <div className="bg-white rounded shadow-sm hover:shadow-md transition-shadow duration-300 p-6 sm:p-8">
            <div className="flex justify-center mb-4 sm:mb-6 h-48 relative">
              <Image
                src="/images/products/remen.jpg"
                alt="Luxury Belts"
                fill
                sizes="(max-width: 768px) 100%, 33vw"
                className="object-contain"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-medium text-center mb-2">Luxury Belts</h3>
            <p className="text-sm sm:text-base text-gray-600 text-center mb-4 sm:mb-6">
              Timeless belt designs that combine heritage craftsmanship with contemporary style.
            </p>
            <div className="text-center">
              <Link href="/products?category=belts" className="inline-flex items-center text-luxe-dark hover:opacity-70 transition-opacity text-sm sm:text-base">
                EXPLORE COLLECTION 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories; 