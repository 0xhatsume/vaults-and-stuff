import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector} from 'wagmi/connectors/metaMask';
import { WalletConnectConnector} from 'wagmi/connectors/walletConnect';

export const injectedConnector = new InjectedConnector();
export const metamaskConnector = new MetaMaskConnector();
export const walletConnectConnector = new WalletConnectConnector({
                                            options: {
                                            qrcode: true,
                                            },
                                        });