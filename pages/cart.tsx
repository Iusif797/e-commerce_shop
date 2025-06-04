import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../contexts/CartContext';

const Cart: NextPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  return (
    <div>
      <Head>
        <title>Shopping Cart | LUXE - Premium Fashion</title>
        <meta name="description" content="Your shopping cart" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-light mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-xl mb-6">Your cart is empty</p>
            <Link href="/products" className="bg-luxe-dark text-white px-6 py-3 uppercase tracking-wider text-sm inline-block">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-8">
              <div className="mb-8">
                {/* Cart Item Headers - Desktop */}
                <div className="hidden md:grid md:grid-cols-12 text-sm text-gray-500 pb-3 border-b">
                  <div className="md:col-span-6">PRODUCT</div>
                  <div className="md:col-span-2 text-center">PRICE</div>
                  <div className="md:col-span-2 text-center">QUANTITY</div>
                  <div className="md:col-span-2 text-center">SUBTOTAL</div>
                </div>

                {/* Cart Items */}
                {cartItems.map((item) => (
                  <div key={item.id} className="py-6 border-b flex flex-col md:grid md:grid-cols-12 items-center gap-4">
                    <div className="md:col-span-6 flex items-center w-full">
                      <div className="w-20 h-20 bg-gray-50 mr-4 relative flex-shrink-0">
                        <Image 
                          src={item.image} 
                          alt={item.name} 
                          fill 
                          className="object-contain p-2"
                          sizes="80px"
                        />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm md:text-base mb-1">{item.name}</h3>
                        <p className="text-xs text-gray-500">{item.subcategory}</p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600 text-xs mt-2 hover:underline"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2 text-center">
                      <span className="md:hidden text-sm text-gray-500 mr-2">Price:</span>
                      <span>${item.price}</span>
                    </div>

                    <div className="md:col-span-2 flex items-center justify-center">
                      <div className="flex border border-gray-300">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border-r border-gray-300 text-lg"
                          disabled={item.quantity <= 1}
                        >
                          -
                        </button>
                        <span className="w-10 h-8 flex items-center justify-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border-l border-gray-300 text-lg"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2 text-center font-medium">
                      <span className="md:hidden text-sm text-gray-500 mr-2">Subtotal:</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <Link href="/products" className="text-luxe-dark hover:underline text-sm">
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="bg-gray-50 p-6">
                <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between py-4 text-lg font-medium">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <button className="w-full bg-luxe-dark text-white py-3 uppercase tracking-wider text-sm mt-4 hover:bg-opacity-90 transition-all">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Cart; 