import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log('Subscribed with email:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <section className="py-10 sm:py-16">
      <div className="container mx-auto px-6 sm:px-4 max-w-xl">
        <h2 className="text-2xl sm:text-3xl font-light text-center mb-2 sm:mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-center text-gray-600 text-sm sm:text-base mb-6 sm:mb-8">
          Be the first to know about new collections and exclusive offers.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-grow border border-gray-300 px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-1 focus:ring-gray-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-luxe-dark text-white px-6 sm:px-8 py-3 uppercase text-xs sm:text-sm tracking-wider hover:bg-opacity-90 transition-all"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter; 