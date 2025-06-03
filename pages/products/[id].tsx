import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../components/Header';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';
import { products } from '../../data/products';
import { Product } from '../../types';

interface ProductDetailProps {
  product: Product;
}

const ProductDetail: NextPage<ProductDetailProps> = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Head>
        <title>{product.name} | LUXE - Premium Fashion</title>
        <meta name="description" content={`${product.name} - ${product.subcategory}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <Link href="/products" className="text-luxe-dark hover:underline">
              ← Back to Products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 aspect-square flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-12"
                />
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-light mb-2">{product.name}</h1>
              <p className="text-gray-500 mb-6">{product.subcategory}</p>
              <p className="text-2xl font-medium mb-8">${product.price}</p>
              
              <div className="mb-8">
                <h2 className="text-sm uppercase tracking-wider mb-4">Description</h2>
                <p className="text-gray-700">
                  This premium {product.category.slice(0, -1)} is crafted with meticulous attention to detail,
                  using only the finest materials. It embodies timeless elegance and contemporary design,
                  making it a versatile addition to your collection.
                </p>
              </div>
              
              <button className="w-full bg-luxe-dark text-white py-4 uppercase tracking-wider text-sm hover:bg-opacity-90 transition-all mb-4">
                Add to Cart
              </button>
              
              <button className="w-full border border-luxe-dark py-4 uppercase tracking-wider text-sm hover:bg-gray-50 transition-all">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const product = products.find((p) => p.id === params?.id);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductDetail; 