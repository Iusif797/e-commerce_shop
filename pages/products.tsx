import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import ProductGrid from '../components/ProductGrid';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Product } from '../types';

const Products: NextPage = () => {
  const router = useRouter();
  const { search } = router.query;
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  // Filter products based on search query
  useEffect(() => {
    if (search && typeof search === 'string') {
      const searchTerm = search.toLowerCase();
      const results = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm) ||
          (product.subcategory && product.subcategory.toLowerCase().includes(searchTerm))
      );
      setFilteredProducts(results);
    } else {
      setFilteredProducts(products);
    }
  }, [search]);

  return (
    <div>
      <Head>
        <title>
          {search ? `Search results for "${search}" | ` : ''}
          Products | LUXE - Premium Fashion
        </title>
        <meta 
          name="description" 
          content={search 
            ? `Search results for "${search}" in our collection of premium products` 
            : "Discover our curated collection of premium products"
          } 
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="container mx-auto px-4">
          {/* Page Title */}
          <div className="py-8 mb-4">
            {search ? (
              <>
                <h1 className="text-3xl font-light mb-2">Search Results</h1>
                <p className="text-gray-600">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'result' : 'results'} for "{search}"
                </p>
              </>
            ) : (
              <h1 className="text-3xl font-light">Our Collection</h1>
            )}
          </div>

          {/* Product Grid */}
          <ProductGrid products={filteredProducts} />

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 mb-6">No products found for "{search}"</p>
              <button 
                onClick={() => router.push('/products')}
                className="bg-luxe-dark text-white px-6 py-3 uppercase tracking-wider text-sm inline-block"
              >
                View All Products
              </button>
            </div>
          )}
        </div>

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default Products; 