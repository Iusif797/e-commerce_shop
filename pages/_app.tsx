import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CartProvider } from '../contexts/CartContext';
import { UserProvider } from '../contexts/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </UserProvider>
  );
}

export default MyApp; 