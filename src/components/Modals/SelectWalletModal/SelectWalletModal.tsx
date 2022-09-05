import React from 'react';
import { useDispatch } from "react-redux";
import { hideModal } from '../../../redux/application';
import { useConnect } from 'wagmi';
import { Overlay } from '../../Overlay';

export const SelectWalletModal = () => {
  const dispatch = useDispatch();
  const handleHideModal = ()=> dispatch(hideModal("SelectWalletModal"));
  const { connect, connectors, data } = useConnect();
  return (
    <Overlay onClickOutside={handleHideModal}>
      
      {/* card */}
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <button type="button" className="
              absolute top-3 right-2.5 text-gray-400 bg-transparent 
              rounded-lg text-sm p-1.5 ml-auto inline-flex items-center
              hover:bg-gray-200 hover:text-gray-900 
              dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={handleHideModal}
              >
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" 
              xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
                    clipRule="evenodd"></path>
                    </svg>  
            <span className="sr-only">Close modal</span>
          </button>

          {/* card header */}
          <div className="py-4 px-6 rounded-t border-b dark:border-gray-600">
                <h3 className="text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                    Connect wallet
                </h3>
            </div>
          
          <div className="p-6">
          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Connect with one of our available wallet providers or create a new one.</p>

          <ul className="my-4 space-y-3">
            <li>
                <button className="
                      w-full flex flex-row items-center p-3 text-base font-bold text-gray-900 bg-gray-50 rounded-lg 
                      focus:ring-2 focus:outline-none focus:ring-orange-300
                      hover:bg-gray-100 group hover:shadow hover:ring-2 hover:ring-orange-400
                      dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                      onClick={()=>{
                        console.log('connecting to metamask');
                        connect({connector: connectors[0]});
                        handleHideModal();
                      }}
                      >
                    <img className="justify-self-start h-10 rounded" src='/img/ui/logos/metamask.svg'/>
                    <span className="justify-self-start ml-3 mr-auto whitespace-nowrap">MetaMask</span>
                    <span className="justify-self-end inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">Popular</span>
                </button>
            </li>
          </ul>
          </div>

      </div>

    </Overlay>
    
  )
}
