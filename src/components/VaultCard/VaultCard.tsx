import React, {ReactNode, useEffect, useState, useMemo} from "react";
import { vaultlist } from '../../config/constants';
import { useContractReads, useProvider } from 'wagmi';
import { parseHugeNum, parseBigNum } from "../../utils";
import { VaultMetric } from "./VaultMetric";
import { daiyvaultfuncs } from "../../config/constants/contractfuncs";
import {BigNumberish} from 'ethers';

// interface Props {
//     children: ReactNode;
//     title?: string;
// }

export const VaultCard = ()=>{
    //const { children, title } = props;
    
    const [isOpen, setIsOpen ] = useState(false);
    const provider = useProvider();
    const {data, isError, isLoading} = useContractReads({ 
            contracts:daiyvaultfuncs,});

    return (

            <details open={isOpen} 
                onToggle={(e: React.ChangeEvent<HTMLDetailsElement>)=>{
                    setIsOpen(e.target.open)
                }}
                className='
                    w-3/4 mt-2 
                    bg-none focus:ring focus:ring-blue-300
                    '>
                <summary className="
                flex content-center 
                p-4 font-normal text-left border border-b-0 border-gray-200 rounded-t-xl 
                bg-blue-100 text-blue-600 
                dark:border-gray-700 dark:bg-gray-800 dark:text-white
                hover:bg-blue-100 dark:hover:bg-gray-800"
                
                >
                    <span className="bg-blue-400 rounded-md 
                    text-white font-medium p-2  
                    ">
                        {data? `${data[0]}: ` :'Vault Unknown'}</span>
                    <span className="mx-1 bg-yellow-500 rounded-md 
                    text-black font-medium p-2 
                    ">{data? `$${data[1]}` :''}</span>
                    <span className="
                    p-2"
                    ><a href={`https://etherscan.io/address/${daiyvaultfuncs[0].addressOrName}#code`}
                    target="_blank">
                    {`at : ${daiyvaultfuncs[0].addressOrName}`}
                    </a></span>
                    <svg className={`w-6 h-6 my-2 ml-auto shrink-0 ${isOpen? "": "rotate-90"}`} fill="currentColor">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                        </svg>
                </summary>

                <div className='
                grid grid-cols-2 
                p-4 font-normal text-left
                border border-x-gray-200 border-b-gray-200 rounded-b-xl
                '>  
                    <div className="
                        p-3 px-4 mr-3 
                        border rounded border-gray-300
                        ">
                    {(()=>{
                        const metrics: React.ReactNode[]= []
                        daiyvaultfuncs.forEach((d, i)=>{
                            if(i>=2 && i<12){
                                metrics.push(
                                    <VaultMetric title={`${d.functionName}: `} 
                                    metric={data?parseHugeNum(parseBigNum(data[i])):'??'}/>
                                )
                            }else if(i>=12){
                                metrics.push(
                                    <VaultMetric title={`${d.functionName}: `} 
                                    metric={data?parseHugeNum(data[i].toString()):'??'}/>
                                )
                            }
                        });
                        return metrics
                    })()}
                    </div>
                </div>
            </details>
        
    )
}