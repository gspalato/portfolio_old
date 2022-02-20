import React from 'react';

import { TimelineEntry } from "./TimelineEntry";

// Component
interface ITimelineProps { }

export const Timeline: React.FC<ITimelineProps> = ({ children }) => {
    return (  
        <ol className="relative border-l border-white/30 h-fit">
            {children}
        </ol>
    );
}