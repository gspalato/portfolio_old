import React from 'react';

interface IInputProps {
    className?: string;
    placeholder?: string;
}

export const Input: React.FC<IInputProps> = ({ className, placeholder }) => {
    return (
        <input className={`transparent h-16 w-full rounded-t-3xl
        active:outline-none focus:outline-none p-4 transition-all
        text-offwhite placeholder:text-gray-900/10
        font-display outline-transparent ${className}`}
        placeholder={placeholder} />
    );
}