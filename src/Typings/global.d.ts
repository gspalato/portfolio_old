// Image imports
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png';
declare module '*.jpg';

// Typeless Modules
declare module 'react-arrow-key-navigation-hook';