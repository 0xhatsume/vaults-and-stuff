import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { WagmiConfig } from 'wagmi';
import { wagmiclient } from '../utils';
import { Provider } from "react-redux";
import store from "../redux/store";
import {Modals, Updaters} from "../components";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiclient}>
      <Provider store={store}>
        <Component {...pageProps} />
        <Modals/>
        <Updaters/>
      </Provider>
    </WagmiConfig>
    )
}

export default MyApp
