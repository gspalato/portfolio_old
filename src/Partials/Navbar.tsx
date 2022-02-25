import React, { useState } from "react";
import { Link, useRouteMatch, withRouter } from "react-router-dom";
import { motion, Variants } from "framer-motion";

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
    <Link className="h-fit w-fit" to={to}>
      <h1 className={`font-display font-regular text-base tracking-wide
      transition-all ${match ? "text-white border-b-2 border-b-white" : ""}
			mr-12 ${className ?? ""}`}>
        {name}
      </h1>
    </Link>
  );
}

// Animation
const MobileNavbarVariants: Variants = {
	open: {
		height: '100vh',
		transition: {
			ease: 'easeInOut',
			duration: 0.25,
		}
	},
	hidden: {
		height: 'auto',
		transition: {
			ease: 'easeInOut',
			duration: 0.25,
		}
	}
}

// Main Component
const links = [
	{ name: 'Home', to: '/', order: 0 },
	{ name: 'Projects', to: '/projects', order: 1 },
	{ name: 'About', to: '/about', order: 2 }
]

export const Navbar: React.FC = () => {
	const [ isMobileNavbarOpen, setIsMobileNavbar ] = useState(false);

	return (
		<>
		<motion.header
		className="w-[calc(100vw-5px)]
		fixed p-5 top-0 backdrop-blur-lg z-[101] bg-transparent"
		initial="hidden"
		animate={isMobileNavbarOpen ? "open" : "hidden"}
		exit="hidden"
		variants={MobileNavbarVariants}
		>
			<motion.nav className="flex items-center justify-center px-5 w-full h-[3rem]">
				<div className="flex flex-wrap items-center justify-between h-[3rem] w-full">
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
							links.map( (v) => <NavbarLink name={v.name} to={v.to} /> )
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
				</div>
			</motion.nav>
			<motion.div
			className="flex flex-col flex-1 md:hidden h-full w-auto
			justify-center items-center text-white/60"
			initial={{ display: 'none' }}
			animate={isMobileNavbarOpen ? { display: 'flex' } : { display: 'none' }}
			>
				<div className="flex flex-col md:hidden h-fit w-fit align-middle items-center">
				{
					links.map( (v) => <NavbarLink className="!mr-0 mb-5 !text-2xl" name={v.name} to={v.to} /> )
				}
				</div>
			</motion.div>
		</motion.header>
		</>
	);
}