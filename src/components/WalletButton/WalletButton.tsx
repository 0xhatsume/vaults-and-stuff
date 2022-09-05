import React from 'react';
import { useAccount, useDisconnect, useNetwork } from "wagmi";
import { shortenAddress } from '../../utils';
import { useDispatch } from 'react-redux';
import { showModal } from '../../redux/application';
import { NetworkButton } from './NetworkButton';

export const WalletButton = () => {
    const dispatch = useDispatch();
    
    const { address, connector: activeConnector, 
        isConnecting, isConnected} = useAccount();
    const {chain} = useNetwork();
    const { disconnect } = useDisconnect();
    
    return (
        <>
            <NetworkButton/>
            
            {isConnecting?
            (
                <button type="button" className=
                    'text-white bg-blue-300 \
                        font-medium rounded-lg text-sm px-5 py-2.5 \
                        text-center mr-3 md:mr-0 \
                        dark:bg-blue-200'>
                    Connecting...
                    </button>
            )
            :
            (
                isConnected?
                (
                    <button type="button" className=
                        "text-white bg-gradient-to-r from-cyan-500 to-blue-500 \
                            hover:bg-gradient-to-bl hover:ring-4 hover:ring-blue-400\
                            focus:ring-4 focus:outline-none focus:ring-cyan-300 \
                            font-medium rounded-lg text-sm px-5 py-2.5 \
                            text-center mr-3 md:mr-0 \
                            shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 \
                            dark:focus:ring-cyan-800"
                            
                            onClick={()=>{
                                console.log('disconnecting...')
                                disconnect()
                            }}
                            >
                            {shortenAddress(address as string , 4)}
                        </button>
                ):
                (<button type="button" className=
                    "text-white bg-gradient-to-br from-pink-500 to-orange-400 \
                        hover:bg-gradient-to-bl hover:ring-4 hover:ring-orange-500 \
                        focus:ring-4 focus:outline-none focus:ring-pink-200 \
                        font-medium rounded-lg text-sm px-5 py-2.5 \
                        text-center mr-3 md:mr-0 \
                        dark:focus:ring-pink-800"
                        
                        onClick={() => dispatch(showModal("SelectWalletModal"))}
                        >
                    Connect Wallet
                    </button>
                )
            )
            }

        </>
    )
        
}
