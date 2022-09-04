import React from 'react';
import { WalletButton } from '../WalletButton';

export const NavBar = () => {
    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 \
                    fixed w-full z-20 top-0 left-0 \
                    border-b border-gray-200 dark:border-gray-600">
        
            {/* flex container for nav */}
            <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="" className="flex items-center">
                {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"></img> */}
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Logo Placeholder</span>
            </a>

            <div className="flex md:order-2">
                <WalletButton/>
                
                {/* hidden button for sticky burger */}
                <button data-collapse-toggle="navbar-sticky" type="button" 
                    className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd">
                        </path>
                        </svg>
                </button>
            </div>

            {/* sticky dropdown burger */}
            <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            </div>

            </div>

        </nav>
    )
}
