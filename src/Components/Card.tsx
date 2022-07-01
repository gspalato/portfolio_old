import React, { useEffect, useState } from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';


// Component
interface ICardProps extends HTMLMotionProps<"div"> {
  className?: string,
  image: any,
  title: string,
  description: string,
}

const Card: React.FC<ICardProps> = ({ className, image, title, description, children, ...props }) => {
	return (
    <motion.div className={`flex flex-col justify-center items-center
    backdrop-blur-md bg-overlay-transparent
    border border-solid border-border/50
    p-6 left-4 rounded-xl h-[25rem] min-h-[20rem] w-[15rem]
    ${className ?? ""}`} {...props}>
      <img src={image} height="200" width="200" className="rounded-full h-24 w-24"/>
      <h1 className="text-offwhite font-display text-2xl
      font-bold my-4 active:brightness-75
      transition-all">
        {title}
      </h1>
      <div className="flex justify-center items-center flex-1 w-full">
        <p className="text-offwhite
        font-body text-base text-center mb-6 break-words">
          {description}
        </p>
      </div>
      {children}
    </motion.div>
  );
}

export default Card;