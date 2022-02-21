import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";

import { NavbarItem } from "./NavbarItem";

import ProfilePicture from "../Assets/img/problems_dark.png";


// Other Components
interface INavbarLinkProps {
    name: string;
    to: any;
}

const NavbarLink: React.FC<INavbarLinkProps> = ({ name, to }) => {
    const match = useRouteMatch({ path: to, exact: true });

    return (
        <Link className="pr-12" to={to}>
            <h1 className={`font-display font-medium text-base tracking-wide
            transition-all ${match ? "text-white border-b-2 border-b-white" : ""}`}>
                {name}
            </h1>
        </Link>
    );
}

export const DefaultNavbar: React.FC = ({ children }) => {
	return (
		<header className="w-[calc(100vw-5px)] flex items-center justify-center
		fixed p-5 top-0 backdrop-blur-lg z-50 bg-transparent">
			<nav className="flex flex-wrap items-center justify-between
			px-5 w-full h-[1.625rem]">
				<div className="hidden md:flex h-full w-auto align-middle items-center text-white/60">
					<NavbarLink name="Home" to="/"/>
                    <NavbarLink name="Projects" to="/projects"/>
					<NavbarLink name="About" to="/about"/>
				</div>
				<ul className="absolute-center flex flex-row last:pr-0 text-display text-white w-auto">
					<h1 className="text-white font-bold text-[1.5rem]">unreaalism.</h1>
				</ul>
				<div className="hidden md:flex h-full w-auto items-center">
					<ul className="flex flex-row last:pr-0 text-display text-white w-auto">
						<NavbarItem link="https://www.instagram.com/gabriel.spalato/">
							<i className="fa-brands fa-instagram fa-lg"></i>
						</NavbarItem>
						<NavbarItem link="https://github.com/gspalato">
							<i className="fa-brands fa-github fa-lg"></i>
						</NavbarItem>
						<NavbarItem link="https://open.spotify.com/user/oubhvljhzyudfbxyx20opzxhq">
							<i className="fa-brands fa-spotify fa-lg"></i>
						</NavbarItem>
						<NavbarItem link="https://www.linkedin.com/in/gabriel-marques-3aa183a8/">
							<i className="fa-brands fa-linkedin fa-lg"></i>
						</NavbarItem>
					</ul>
				</div>
			</nav>
		</header>
	);
}