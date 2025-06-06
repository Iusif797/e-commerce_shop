import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Image from 'next/image';

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About Us | LUXE - Premium Fashion</title>
        <meta name="description" content="Learn about Michael Gibels Internet Shop - Premium fashion and accessories" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-12">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-light mb-8 text-center">About Us</h1>
          
          <div className="mb-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-light mb-6">Michael Gibels Internet Shop</h2>
            
            <p className="mb-4 text-gray-700">
              Welcome to Michael Gibels - a premium online boutique dedicated to providing exceptional quality 
              fashion accessories for the modern individual. Founded in 2018, we've built our reputation on 
              crafting timeless pieces that blend traditional craftsmanship with contemporary design.
            </p>
            
            <p className="mb-4 text-gray-700">
              At Michael Gibels, we believe that true luxury lies in the details. Each of our products is 
              meticulously crafted using only the finest materials sourced from around the world. From our 
              elegant caps to our premium footwear and sophisticated belts, every item reflects our 
              commitment to excellence and attention to detail.
            </p>
            
            <p className="mb-4 text-gray-700">
              Our philosophy is centered around sustainable fashion that transcends seasonal trends. 
              We create versatile, enduring pieces that become staples in your wardrobe for years to come. 
              This approach not only ensures that you receive exceptional value but also contributes to 
              more responsible consumption.
            </p>
            
            <p className="text-gray-700">
              The Michael Gibels collection embodies refined elegance with a modern edge. Whether you're 
              looking for a statement accessory to elevate your everyday look or a special piece for a 
              particular occasion, our curated selection offers sophistication and style for the 
              discerning customer.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-medium mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To create timeless, high-quality fashion accessories that enhance the individual style of 
                our customers while maintaining the highest standards of craftsmanship and ethical production.
                We strive to make luxury accessible without compromising on quality or values.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-medium mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be recognized globally as a brand synonymous with refined elegance, exceptional quality, 
                and responsible fashion. We aspire to build lasting relationships with our customers based 
                on trust, transparency, and shared appreciation for enduring style.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <h3 className="text-xl font-medium mb-4">Craftsmanship & Quality</h3>
            <p className="text-gray-700 mb-6">
              Every Michael Gibels product passes through the hands of skilled artisans who have 
              perfected their craft over generations. We work with specialized workshops that share 
              our commitment to excellence and sustainability. Our rigorous quality control ensures 
              that each item meets our exacting standards before reaching you.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-luxe-dark flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm">Premium Materials</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-luxe-dark flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <span className="text-sm">Ethical Production</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-luxe-dark flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <span className="text-sm">Expert Craftsmanship</span>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-luxe-dark flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <span className="text-sm">Worldwide Shipping</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
};

export default About; 