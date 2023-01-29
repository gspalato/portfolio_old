import React from 'react';

interface INavbarSpacer {
    className?: string;
}

const NavbarSpacer: React.FC<INavbarSpacer> = ({ className }) => {
    return (
        <div className={`min-h-[5.5rem] w-full ${className}`} />
    );
}

export default NavbarSpacer;