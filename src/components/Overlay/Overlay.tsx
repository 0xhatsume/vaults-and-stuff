import React, { MouseEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClickOutside?: (e: MouseEvent) => void;
}

export const Overlay = (props: Props) => {

  const { children, onClickOutside } = props;
  const handleClickBacking = (e: MouseEvent) => {
    if (onClickOutside) onClickOutside(e);
  };

  return (
    <div className="
      flex justify-center
      overflow-y-auto overflow-x-hidden 
      fixed top-0 right-0 left-0 z-40 
      w-full md:inset-0 h-modal md:h-full
      bg-gray-500/75
      "
      >

        {/* absolute surface for clickbacking */}
        <div className="
          flex justify-center 
          absolute top-0 left-0 w-full h-full"
          onClick={handleClickBacking}
          />
          
        <div className="
          relative p-4 z-50
          w-full max-w-md h-full md:h-auto"
        >
          {children}
        </div>
        
      </div>
  )
}
