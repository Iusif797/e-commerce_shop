import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { CartProvider } from '../contexts/CartContext';
import { UserProvider } from '../contexts/UserContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <CartProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        </Head>
        <Component {...pageProps} />
      </CartProvider>
    </UserProvider>
  );
}

export default MyApp; 