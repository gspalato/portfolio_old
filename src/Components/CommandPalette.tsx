import React from 'react';

import Input from './Input';

const CommandPalette: React.FC = () => {
    return (
        <div className="hidden fixed md:flex items-center justify-center
        top-0 left-0 h-screen w-screen z-[100]
        bg-[#000a]">
            <div className="rounded-3xl bg-gray-300/75
            flex flex-col m-auto h-1/2 w-1/2 z-[101] border
            border-border backdrop-blur-lg">
                <Input
                className="!border-b !border-b-border pl-6"
                placeholder="Type something to search."/>
                <div className="">
                    
                </div>
            </div>
        </div>
    );
}

export default CommandPalette;