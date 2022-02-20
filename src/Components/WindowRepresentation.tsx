import React from 'react';

// Component
interface IWindowRepresentationProps {
    className?: string;
}

export const WindowRepresentation: React.FC<IWindowRepresentationProps> = ({ className, children }) => {
    return (
        <div className={`relative row-start-1 col-start-6 xl:col-start-7 col-span-7 xl:col-span-6 z-10 ${className ?? ""}`}>
            <div className="-mx-4 sm:mx-0 md:min-h-[20rem] md:min-w-[35rem]">
                <div className='relative overflow-hidden shadow-xl
                    flex bg-slate-800 h-[31.625rem] max-h-[60vh]
                    sm:max-h-[none] rounded-xl lg:h-[34.6875rem]
                    xl:h-[31.625rem] bg-overlay-transparent backdrop-blur
                    ring-1 ring-inset ring-gray-500 !h-auto'>
                    <div className='relative w-full flex flex-col'>
                        <div className="flex-none border-b border-gray-500/90">
                            <div className="flex items-center h-8 space-x-1.5 px-3">
                                <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                                <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                                <div className="w-2.5 h-2.5 bg-gray-500 rounded-full"></div>
                            </div>
                        </div>
                        <div className='relative min-h-max flex-auto flex flex-col'>
                            <div className='w-full flex-auto flex min-h-[32rem] overflow-auto'>
                                <div className='w-full relative flex-auto'>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}