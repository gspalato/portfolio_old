import React from 'react';

// Component
interface ITimelineEntryProps {
    date: string;
    title: string;
    description: string;
    last?: boolean;
}

export const TimelineEntry: React.FC<ITimelineEntryProps> = ({ date, title, description, last, children }) => {
    return (
        <li className={last ? "ml-4" : "mb-10 ml-4"}>
            <div className="absolute w-3 h-3 rounded-full -left-1.5 bg-[#444] border border-scheme-gray-100" />
            <time className="mb-1 text-sm font-light leading-none text-scheme-offwhite">{date}</time>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mb-4 text-base font-normal text-scheme-offwhite text-wrap max-w-sm">{description}</p>
            {children}
        </li>
    );
}