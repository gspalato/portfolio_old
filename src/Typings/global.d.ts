// Modules without typings
declare module 'react-preload-image';
declare module 'react-use-dimensions';

// Image imports
declare module '*.svg' {
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
    export default content;
}

declare module '*.png';
declare module '*.jpg';