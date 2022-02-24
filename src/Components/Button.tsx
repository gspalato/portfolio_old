import React, { useState } from "react";

import { motion } from "framer-motion";


// Component
interface IButtonProps {
    className?: string;
    text: string;
    link?: string;
    onClick?: () => void;
    transparent?: boolean;
}

export const Button: React.FC<IButtonProps> = ({ className, text, link, onClick, transparent, children }) => {
  if (link) {
    return (
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, filter: "brightness(75%)" }}
        className={`${transparent ? "bg-transparent" : "bg-darkblue"} px-4 py-2 rounded-lg ${className ?? ""}`}
        onClick={(() => onClick?.())}

        target="_blank" href={link}
      >
        <h1 className="flex items-center align-middle text-white font-display font-medium text-base">{text}{children}</h1>
      </motion.a>
    );
  }
  
  return (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, filter: "brightness(75%)" }}
        className={`${transparent ? "bg-transparent" : "bg-darkblue"} px-4 py-2 rounded-lg ${className ?? ""}`}
        onClick={(() => onClick?.())}
    >
        <h1 className="flex items-center align-middle text-white font-display font-medium text-base">{text}{children}</h1>
    </motion.button>
  );
}