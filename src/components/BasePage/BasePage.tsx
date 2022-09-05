import React, {ReactNode} from "react";

interface Props {
    children: ReactNode;
    width?: string;
    maxWidth?: string;
    title?: string;
}

export const BasePage = (props: Props)=>{
    const { children, title, width, maxWidth } = props;
    return (
        
            <div className='container min-h-screen 
                        mx-auto flex flex-row justify-center 
                        pt-20'>

                {children}
            </div>
        
    )
}