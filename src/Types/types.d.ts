// Declared Modules
declare module 'react-page-scroller';

declare module 'react-motion-animate' {
    import React from 'react';

    export interface IMotionAnimateProps {
        animation?: "fade" | "fadeInUp" | "scrollOpacity" | "scrollFadeIn" | "scrollFadeOut" | "scrollPosition";
        delay?: number;
        distance?: number,
        ease?: string | number[];
        reset?: boolean;
        scrollPositions?: number[];
        speed?: number;
        threshold?: number;
        variant?: { hidden: object, show: object };
    };

    export const MotionAnimate: React.FC<IMotionAnimateProps>;
};

declare module 'react-typist-loop';

// Declared Interfaces
declare interface ExtraProps {
    [key: string]: any;
}