import React, {ReactNode, useState} from "react";

interface Props {
    children: ReactNode;
    title?: string;
}

export const VaultCard = (props: Props)=>{
    const { children, title } = props;

    const [isOpen, setIsOpen ] = useState(false);

    return (

            <details open={isOpen} 
                onToggle={(e: React.ChangeEvent<HTMLDetailsElement>)=>{
                    setIsOpen(e.target.open)
                }}
                className='bg-none focus:ring focus:ring-blue-300'>
                <summary className="
                flex flex-row justify-between
                w-2/3 p-4 font-normal text-left border border-b-0 border-gray-200 rounded-t-xl 
                bg-blue-100 text-blue-600 
                dark:border-gray-700 dark:bg-gray-800 dark:text-white
                hover:bg-blue-100 dark:hover:bg-gray-800"
                
                >
                    <span>{title}</span>
                    <svg className={`w-6 h-6 shrink-0 ${isOpen? "": "rotate-90"}`} fill="currentColor">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                        </svg>
                </summary>

                {children}
            </details>
        
    )
}