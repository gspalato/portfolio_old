import React, { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import { motion, Variants } from "framer-motion";

import NavbarItem from "./NavbarItem";

import Button from "../Components/Button";


// Other Components
interface INavbarLinkProps {
	className?: string;
  name: string;
  to: any;
}

const NavbarLink: React.FC<INavbarLinkProps> = ({ className, name, to }) => {
	const match = useMatch({ path: to, exact: true });

	const LinkStyle = `font-display font-regular text-base tracking-wide
	transition-all ${match ? "text-white border-b-2 border-b-white" : ""}
	mr-12 ${className ?? ""}`

	return (
		match 
		? ( // Current page, do nothing.
      		<h1 className={LinkStyle}>
      			{name}
      		</h1>
		)
		: ( // Different page, go to.
			<Link className="h-fit w-fit" to={to}>
				<h1 className={LinkStyle}>
					{name}
				</h1>
			</Link>
		)
	)
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
		height: '5.5rem',
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

const Navbar: React.FC = () => {
	const [ isMobileNavbarOpen, setIsMobileNavbar ] = useState(false);

	return (
		<>
		<motion.header
		className="w-[calc(100vw-5px)] flex justify-center items-center
		h-[88px] px-5 top-0 fixed backdrop-blur-lg z-[101] bg-transparent"
		initial="hidden"
		animate={isMobileNavbarOpen ? "open" : "hidden"}
		exit="hidden"
		variants={MobileNavbarVariants}
		>
			<motion.nav className="flex items-center justify-center p-5 w-full h-[3rem]">
				<div className="flex flex-wrap items-center justify-between h-[3rem] w-full">
					<Button
					text=""
					className="block md:hidden !p-0 z-[1100]"
					onClick={() => setIsMobileNavbar(!isMobileNavbarOpen)}
					transparent>
						{
							isMobileNavbarOpen
							? <i className="text-xl text-white fa-solid fa-xmark"></i>
							: <i className="text-xl text-white fa-solid fa-bars"></i>
						}
					</Button>
					<div className="items-center hidden w-auto h-full align-middle md:flex text-white/60">
						{
							links.map( (v, i) => <NavbarLink key={i} name={v.name} to={v.to} /> )
						}
					</div>
					<h1 className="absolute-center-x text-white font-bold text-[1.5rem]">unreaalism.</h1>
					<div className="items-center hidden w-auto h-full md:flex">
						<ul className="flex flex-row w-auto text-white last:pr-0 text-display">
							<NavbarItem link="https://www.instagram.com/gabriel.spalato/">
								<i className="fa-brands fa-instagram fa-lg"></i>
							</NavbarItem>
							<NavbarItem link="https://github.com/gspalato">
								<i className="fa-brands fa-github fa-lg"></i>
							</NavbarItem>
							<NavbarItem link="https://open.spotify.com/user/m0jz86ynx7i5jw05vu4la15hc">
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
			className="flex flex-col items-center justify-center flex-1 w-auto h-full md:hidden text-white/60"
			initial={{ display: 'none' }}
			animate={isMobileNavbarOpen ? { display: 'flex' } : { display: 'none' }}
			>
				<div className="flex flex-col items-center align-middle md:hidden h-fit w-fit">
				{
					links.map( (v) => <NavbarLink className="!mr-0 mb-5 !text-2xl" name={v.name} to={v.to} /> )
				}
				</div>
			</motion.div>
		</motion.header>
		</>
	);
}

export default Navbar;