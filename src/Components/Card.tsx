import React from "react";

// Styles
let Container = `flex flex-col justify-center items-center
backdrop-blur-md bg-scheme-overlay-transparent
border border-solid border-scheme-border
p-4 left-4 rounded-xl min-h-[20rem] min-w-[15rem]`;

// Component
interface ICardProps {
    image: any,
    title: string,
    description: string,
}

export const Card: React.FC<ICardProps> = ({ image, title, description, children }) => {
    return (
        <div className={Container}>
            <img src={image} className="rounded-full h-24 w-24 mb-6"/>
            <h1 className="text-scheme-offwhite font-display text-2xl font-bold mb-4 active:brightness-75 transition-all">{title}</h1>
            <p className="text-scheme-offwhite font-body text-base mb-6 break-words">{description}</p>
            {children}
        </div>
    );
}