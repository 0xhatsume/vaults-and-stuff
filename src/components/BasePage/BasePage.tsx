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
                        mx-auto px-4 
                        pt-20 
                        bg:green'>

                {children}
            </div>
        
    )
}