import React from 'react';


// Main component
interface ISpacingProps {
    height?: string,
    width?: string,
};

export const Spacing: React.FC<ISpacingProps> = props => {
    let height = props.height ?? '10vh';
    let width = props.width ?? '100%';

    return (
        <div style={{ height, width }} />
    );
}