import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import FeaturedCategories from '../components/FeaturedCategories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { products } from '../data/products';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LUXE - Premium Fashion</title>
        <meta name="description" content="Premium footwear, headwear and accessories for the modern individual" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          <div className="absolute top-0 right-0 -mr-10 sm:-mr-20 -mt-10 sm:-mt-20 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-luxe-dark bg-opacity-5"></div>
          <div className="absolute bottom-0 left-0 -ml-10 sm:-ml-20 -mb-10 sm:-mb-20 w-48 sm:w-96 h-48 sm:h-96 rounded-full bg-luxe-dark bg-opacity-5"></div>
          
          <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
              <div className="max-w-xl">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-4 sm:mb-6 md:mb-8 leading-tight">
                  Timeless Elegance for the <span className="relative inline-block">
                    Modern Individual
                    <span className="absolute bottom-1 left-0 w-full h-1 bg-luxe-dark bg-opacity-20"></span>
                  </span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 text-gray-600">
                  Discover our curated collection of premium footwear, headwear, and accessories crafted with exceptional attention to detail and quality materials.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                  <Link href="/products" className="bg-luxe-dark text-white px-6 sm:px-8 py-3 sm:py-4 uppercase tracking-wider text-xs sm:text-sm inline-flex justify-center items-center font-medium rounded shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300">
                    Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <Link href="/about" className="border border-luxe-dark px-6 sm:px-8 py-3 sm:py-4 uppercase tracking-wider text-xs sm:text-sm inline-flex justify-center items-center font-medium rounded hover:bg-gray-50 transform hover:-translate-y-0.5 transition-all duration-300">
                    Explore Brand
                  </Link>
                </div>
                
                <div className="mt-8 sm:mt-10 md:mt-12 hidden sm:flex items-center space-x-4 md:space-x-8">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 text-luxe-dark mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs sm:text-sm">Premium Quality</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 text-luxe-dark mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs sm:text-sm">Worldwide Shipping</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5 text-luxe-dark mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-xs sm:text-sm">Elegant Design</span>
                  </div>
                </div>
              </div>
              
              <div className="relative mt-6 sm:mt-0">
                <div className="relative h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] bg-[#F9F7F5] rounded-lg overflow-hidden shadow-xl sm:shadow-2xl">
                  <Image 
                    src="/images/products/shoes-style2.jpg"
                    alt="Premium Fashion"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-white shadow-lg py-2 sm:py-3 px-3 sm:px-4 rounded">
                    <p className="text-xs sm:text-sm font-medium">New Collection</p>
                    <p className="text-[10px] sm:text-xs text-gray-500">Summer 2023</p>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[10px] sm:text-xs md:text-sm font-semibold">Limited</p>
                    <p className="text-base sm:text-lg md:text-xl font-bold">Edition</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories Section */}
        <FeaturedCategories />

        {/* Product Grid Section */}
        <div className="container mx-auto px-4 sm:px-6 pb-12 sm:pb-16 md:pb-20">
          <ProductGrid products={products} />
        </div>

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Home; 