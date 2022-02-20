import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { motion } from "framer-motion";

import { NavbarItem } from "./NavbarItem";

import ProfilePicture from "../Assets/img/selfie.png";


// Other Components
interface INavbarLinkProps {
    name: string;
    to: any;
}

const NavbarLink: React.FC<INavbarLinkProps> = ({ name, to }) => {
    const match = useRouteMatch({ path: to, exact: true });

    return (
        <Link className="pr-12" to={to}>
            <h1 className={`font-detail font-semibold text-lg tracking-wide
            transition-all ${match ? "text-white border-b-2 border-b-subwhite" : ""}`}>
                {name}
            </h1>
        </Link>
    );
}

// Main Component
export const Navbar: React.FC = ({ children }) => {
	return (
		<motion.header
        className="w-full flex items-center justify-center top-0 z-50 border-b py-20 px-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
			<nav className="bg-black bg-opacity-25 backdrop-blur
            flex flex-wrap items-center justify-between
            h-24 w-full mx-auto">
				<div className="hidden md:flex h-full w-auto align-middle items-center">
                    <ul className="flex flex-row last:pr-0 text-display text-subwhite w-auto">
						<NavbarLink name="Home" to="/"/>
                        <NavbarLink name="Projects" to="/projects"/>
					</ul>
				</div>
				<div className="absolute-center flex h-full w-auto justify-center items-center flex-row text-display text-white">
                    <div className="flex flex-col justify-evenly items-center">
                        <div className="flex items-center h-[5rem] w-[5rem]">
                            <img src={ProfilePicture} draggable="false" className="animate-grow h-[5rem] w-[5rem] rounded-full saturate-150 blur" />
				            <img src={ProfilePicture} draggable="false" className="relative mx-[-5rem] h-[5rem] w-[5rem] rounded-full opacity-edge-gradient" />
                        </div>
                        <h1 className="font-detail pt-4 text-white font-bold text-[2rem]">unreaalism</h1>
                    </div>
                </div>
				<div className="hidden md:flex h-full w-auto items-center">
					<ul className="flex flex-row last:pr-0 text-display text-subwhite w-auto">
                        <NavbarItem link="https://www.instagram.com/gabriel.spalato/">
					        <i className="fa-brands fa-instagram fa-xl"></i>
				        </NavbarItem>
				        <NavbarItem link="https://github.com/gspalato">
					        <i className="fa-brands fa-github fa-xl"></i>
				        </NavbarItem>
				        <NavbarItem link="https://open.spotify.com/user/oubhvljhzyudfbxyx20opzxhq">
					        <i className="fa-brands fa-spotify fa-xl"></i>
				        </NavbarItem>
				        <NavbarItem link="https://www.linkedin.com/in/gabriel-marques-3aa183a8/">
					        <i className="fa-brands fa-linkedin fa-xl"></i>
				        </NavbarItem>
					</ul>
				</div>
			</nav>
        </motion.header>
	);
}