// Extend Window
declare global {
    interface Window {
        PRELOADED_IMAGES: Image[];
    };
};

// Modules without typings
declare module 'react-use-dimensions';

// Image imports
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png';