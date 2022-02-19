import React from "react";

import Slider from 'react-slick';

// Component
interface ICardViewProps {
    className?: string;
}

export const CardView: React.FC<ICardViewProps> = ({ className, children }) => {
    return (
        <div className={`grid gap-6 grid-flow-row md:grid-flow-col auto-cols-max
            auto-rows-min h-auto w-full ${(className ?? "")}`}
        >
            {children}
        </div>
    );
}