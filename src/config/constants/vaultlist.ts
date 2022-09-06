import DAIyVault_ABI from '../abis/DAIyVault.json';
import { ContractInterface } from "ethers";


export const vaultlist = {
                        
                        'DAIyVault' : { 
                                addressOrName: '0xdA816459F1AB5631232FE5e97a05BBBb94970c95',
                                contractInterface: DAIyVault_ABI as ContractInterface
                            }
                        }