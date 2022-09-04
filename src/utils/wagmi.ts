import { createClient, configureChains, defaultChains } from 'wagmi';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { injectedConnector, metamaskConnector, walletConnectConnector } from '../connectors';

// wagmi configurer (specs providers)
const { chains, provider } = configureChains(
    defaultChains,
    //WAGMIChains,

    //providers
    [jsonRpcProvider({
        rpc: (chain) => {
            return {
                //http: (RPC as any)[chain.id]
                http: chain.rpcUrls.default
            }
            }
        }),
    ]
    //[publicProvider()],
)

export const wagmiclient = createClient({
    autoConnect: true,
    connectors: [
        injectedConnector,
        metamaskConnector,
        walletConnectConnector
    ],
    provider
})