import {ethers, BigNumberish} from 'ethers';

export const parseHugeNum = (v:string, d:number=0) => {
    return parseFloat(v).toLocaleString("en",
    {   
        minimumFractionDigits: d,
        maximumFractionDigits: d,
    }
        );
}

export const parseBigNum = (v: BigNumberish) =>{
    return ethers.utils.formatEther(v);
}