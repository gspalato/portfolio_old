import React from 'react';

import TimelineEntry from "./TimelineEntry";

// Component
interface ITimelineProps { }

const Timeline: React.FC<ITimelineProps> = ({ children }) => {
    return (  
        <ol className="relative border-l border-gray-400 h-fit">
            {children}
        </ol>
    );
}

export default Timeline;