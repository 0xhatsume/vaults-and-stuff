import React from 'react';
import {useNetwork} from 'wagmi';


export const NetworkButton = () => {
    const {chain} = useNetwork();
    return (
        <button type="button" className={`text-white text-center font-medium 
                bg-gradient-to-r from-green-400 via-green-500 to-green-600 
                hover:bg-gradient-to-br
                rounded-md border border-slate-300 
                mx-2 px-5 py-2.5
                `}>
                    {chain ? chain?.name : 'Network Unknown'}
                </button>
    )
}
