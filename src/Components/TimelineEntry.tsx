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
            <div className="absolute h-[0.85rem] w-[0.85rem] rounded-full
                -left-[7px] bg-scheme-gray-500 border-2 border-scheme-background"
            />
            <time className="mb-1 text-sm font-light leading-none text-scheme-offwhite/50">{date}</time>
            <h1 className="text-[1.35rem] font-semibold text-white/90">{title}</h1>
            <p className="mb-4 text-base font-normal text-scheme-offwhite/75 text-wrap max-w-sm">{description}</p>
            {children}
        </li>
    );
}