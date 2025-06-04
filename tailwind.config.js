/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'luxe-dark': '#1a1a1a',
        'luxe-light': '#f8f8f8',
        'luxe-accent': '#a67c52',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'shine': 'shine 1.5s infinite',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
} 