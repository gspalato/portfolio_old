import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { motion } from "framer-motion";

import { NavbarItem } from "./NavbarItem";

import { Button } from "../Components/Button";


// Other Components
interface INavbarLinkProps {
	className?: string;
  name: string;
  to: any;
}

const NavbarLink: React.FC<INavbarLinkProps> = ({ className, name, to }) => {
  const match = useRouteMatch({ path: to, exact: true });

  return (
    <Link className={`pr-12 ${className ?? ""}`} to={to}>
      <h1 className={`font-display font-medium text-base tracking-wide
      transition-all ${match ? "text-white border-b-2 border-b-white" : ""}`}>
        {name}
      </h1>
    </Link>
  );
}

// Main Component
const links = [
	{ name: 'Home', to: '/', order: 0 },
	{ name: 'Projects', to: '/projects', order: 1 },
	{ name: 'About', to: '/about', order: 1 }
]

export const Navbar: React.FC = ({ children }) => {
	const [ isMobileNavbarOpen, setIsMobileNavbar ] = useState(false);

	return (
		<header className="w-[calc(100vw-5px)] flex items-center justify-center
		fixed p-5 top-0 backdrop-blur-lg z-50 bg-transparent">
			<nav className="flex flex-wrap items-center justify-between
			px-5 w-full h-[1.625rem]">
				<Button
				text=""
				className="block md:hidden !p-0 z-[1100]"
				onClick={() => setIsMobileNavbar(!isMobileNavbarOpen)}
				transparent>
					{
						isMobileNavbarOpen
						? <i className="fa-solid fa-xmark text-white text-xl"></i>
						: <i className="fa-solid fa-bars text-white text-xl"></i>
					}
				</Button>
				<div className="hidden md:flex h-full w-auto align-middle items-center text-white/60">
					{
						links.map(
							(v, i) => (
								<NavbarLink name={v.name} to={v.to} />
							)
						)
					}
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
						<NavbarItem link="https://www.linkedin.com/in/gabriel-marques-3aa183a8/" last>
							<i className="fa-brands fa-linkedin fa-lg"></i>
						</NavbarItem>
					</ul>
				</div>
			</nav>
		</header>
	);
}