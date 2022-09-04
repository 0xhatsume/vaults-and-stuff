import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WagmiConfig } from 'wagmi';
import { wagmiclient } from '../utils';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiclient}>
      <Component {...pageProps} />
    </WagmiConfig>
    )
}

export default MyApp
