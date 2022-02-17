import React from 'react';

// Component
interface IWindowRepresentationProps { }

export const WindowRepresentation: React.FC<IWindowRepresentationProps> = ({ children }) => {
    return (
        <div className='relative row-start-1 col-start-6 xl:col-start-7 col-span-7 xl:col-span-6'>
            <div className="-mx-4 sm:mx-0 min-h-[20rem] min-w-[35rem]">
                <div className='relative overflow-hidden shadow-xl
                    flex bg-slate-800 h-[31.625rem] max-h-[60vh]
                    sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem]
                    xl:h-[31.625rem] bg-scheme-overlay-transparent backdrop-blur
                    ring-1 ring-inset ring-white/10 !h-auto max-h-[none]'>
                    <div className='relative w-full flex flex-col'>
                        <div className="flex-none border-b border-white/10">
                            <div className="flex items-center h-8 space-x-1.5 px-3">
                                <div className="w-2.5 h-2.5 bg-white/10 rounded-full"></div>
                                <div className="w-2.5 h-2.5 bg-white/10 rounded-full"></div>
                                <div className="w-2.5 h-2.5 bg-white/10 rounded-full"></div>
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