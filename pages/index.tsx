import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import FeaturedCategories from '../components/FeaturedCategories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { products } from '../data/products';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LUXE - Premium Fashion</title>
        <meta name="description" content="Premium footwear, headwear and accessories for the modern individual" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 sm:px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6">Timeless Elegance for the Modern Individual</h1>
              <p className="text-base sm:text-lg mb-6 sm:mb-8">Discover our curated collection of premium footwear, headwear, and accessories.</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 sm:space-x-0">
                <button className="bg-luxe-dark text-white px-6 py-3 uppercase tracking-wider text-xs sm:text-sm">
                  Shop Now
                </button>
                <button className="border border-luxe-dark px-6 py-3 uppercase tracking-wider text-xs sm:text-sm">
                  Explore
                </button>
              </div>
            </div>
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] bg-[#F9F7F5] rounded-lg flex items-center justify-center">
              <div className="h-[180px] w-[180px] sm:h-[220px] sm:w-[220px] md:h-[300px] md:w-[300px] rounded-full bg-[#f0ebe7] relative">
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-8xl font-bold text-[#2D2D2D]">
                  T
                </div>
                <div className="absolute -top-12 sm:-top-16 right-0 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 border-t-2 border-r-2 border-[#C4A484] rounded-tr-full"></div>
                <div className="absolute -bottom-12 sm:-bottom-16 left-0 w-16 sm:w-20 md:w-28 h-16 sm:h-20 md:h-28 border-b-2 border-l-2 border-[#C4A484] rounded-bl-full"></div>
              </div>
              <div className="absolute bottom-4 right-4 bg-white text-[10px] sm:text-xs py-1 px-2 sm:px-3 rounded">
                New Collection<br />Summer 2023
              </div>
            </div>
          </div>
        </section>

        {/* Featured Categories Section */}
        <FeaturedCategories />

        {/* Product Grid Section */}
        <div className="container mx-auto px-6 sm:px-4">
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