import React from 'react';
import { useAccount, useDisconnect, useNetwork } from "wagmi";
import { shortenAddress } from '../../utils';
import { useDispatch } from 'react-redux';
import { showModal } from '../../redux/application';

export const WalletButton = () => {
    const dispatch = useDispatch();
    
    const { address, connector: activeConnector, 
        isConnecting, isConnected} = useAccount();
    const {chain} = useNetwork();
    const { disconnect } = useDisconnect();
    
    return (

        isConnecting?
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
                    "text-white bg-green-500 hover:bg-green-800 \
                        focus:ring-4 focus:outline-none focus:ring-green-300 \
                        font-medium rounded-lg text-sm px-5 py-2.5 \
                        text-center mr-3 md:mr-0 \
                        dark:bg-green-400 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        
                        onClick={()=>{
                            console.log('disconnecting...')
                            disconnect()
                        }}
                        >
                        {shortenAddress(address as string , 4)}
                    </button>
            ):
            (<button type="button" className=
                "text-white bg-blue-700 hover:bg-blue-800 \
                    focus:ring-4 focus:outline-none focus:ring-blue-300 \
                    font-medium rounded-lg text-sm px-5 py-2.5 \
                    text-center mr-3 md:mr-0 \
                    dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    
                    onClick={() => dispatch(showModal("SelectWalletModal"))}
                    >
                Connect Wallet
                </button>
            )
        )
    )
}
