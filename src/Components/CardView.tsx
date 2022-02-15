import React from "react";

// Component
interface ICardViewProps {
    className?: string;
}

export const CardView: React.FC<ICardViewProps> = ({ className, children }) => {
    return (
        <div className={`flex flex-row justify-center items-center rounded-md h-auto w-full ${(className ?? "")}`}>
            {children}
        </div>
    );
}