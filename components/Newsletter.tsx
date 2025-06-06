import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@') || !email.includes('.')) {
      setIsError(true);
      return;
    }
    
    // Here you would normally send the email to your backend
    // For this demo, we'll just simulate success
    setIsSubmitted(true);
    setIsError(false);
    setEmail('');
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-100"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxe-dark to-transparent opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-luxe-dark to-transparent opacity-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 sm:w-40 h-20 sm:h-40 border-2 border-luxe-dark border-opacity-5 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-32 sm:w-60 h-32 sm:h-60 border-2 border-luxe-dark border-opacity-5 rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light mb-3 sm:mb-4 relative inline-block">
            Join Our Newsletter
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-luxe-dark bg-opacity-20"></span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-600">
            Subscribe to receive updates on new collections, special offers, and exclusive content. <br className="hidden sm:block" />
            Be the first to know about our seasonal promotions.
          </p>
          
          <form onSubmit={handleSubmit} className="relative max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className={`flex-grow px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-r-none border ${
                  isError 
                    ? 'border-red-400 focus:border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 focus:border-luxe-dark focus:ring-luxe-dark'
                } focus:ring-2 focus:ring-opacity-20 outline-none transition-all text-sm sm:text-base`}
              />
              <button 
                type="submit"
                className="bg-luxe-dark text-white py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-l-none uppercase tracking-wider text-xs sm:text-sm hover:bg-opacity-90 transition-all font-medium shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </div>
            
            {isError && (
              <p className="text-red-500 text-xs sm:text-sm mt-2 text-left">Please enter a valid email address.</p>
            )}
            
            {isSubmitted && (
              <div className="absolute -bottom-10 sm:-bottom-12 left-0 right-0 text-center">
                <p className="text-green-600 bg-green-50 py-2 px-4 rounded-lg text-xs sm:text-sm inline-block border border-green-100">
                  Thank you for subscribing!
                </p>
              </div>
            )}
          </form>
          
          <div className="mt-10 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-8">
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center mr-2 sm:mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-luxe-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm">Secure & Private</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center mr-2 sm:mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-luxe-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm">Easy to Unsubscribe</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center mr-2 sm:mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-luxe-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm">Weekly Updates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter; 