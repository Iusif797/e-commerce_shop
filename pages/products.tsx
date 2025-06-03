import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { products } from '../data/products';

const Products: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Products | LUXE - Premium Fashion</title>
        <meta name="description" content="Discover our curated collection of premium products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="py-8 mb-4">
            <h1 className="text-3xl font-light">Our Collection</h1>
          </div>

          {/* Product Grid */}
          <ProductGrid products={products} />
        </div>

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Products; 