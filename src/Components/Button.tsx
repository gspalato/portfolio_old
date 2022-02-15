import React, { useState } from "react";

import { motion } from "framer-motion";


// Component
interface IButtonProps {
    className?: string;
    text: string;
}

export const Button: React.FC<IButtonProps> = ({ className, text, children }) => {
  return (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95, filter: "brightness(75%)" }}
        className={`bg-scheme-darkblue px-4 py-2 rounded-lg ${className ?? ""}`}
    >
        <h1 className="text-white font-display font-semibold text-base">{text}{children}</h1>
    </motion.button>
  );
}