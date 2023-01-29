import React, { useState } from "react";
import { motion } from "framer-motion";

import Doing from "../Components/Doing";
import Page from "../Components/Page";

import { defaultFadeInDownVariants } from "../AnimationVariants";

import ColorBrush1 from "../Assets/img/color_brush_1.png";
import ProfilePicture from "../Assets/img/selfie.png";
import NavbarSpacer from "../Components/NavbarSpacer";


// Other Components
interface IGridLogoProps {
	children: string;
}

const GridLogo: React.FC<IGridLogoProps> = ({ children }) => {
	return (
		<i className={`${children} colored text-center w-fit place-self-center`}></i>
	);
}

// Component
const Home: React.FC = () => {
	return (
		<Page className="flex flex-col items-center justify-center">
			<NavbarSpacer />
			<motion.div
			className="flex flex-col items-center justify-between md:flex-row"
			initial="start"
			animate="end"
			exit="start"
			variants={defaultFadeInDownVariants}>
				<img src={ProfilePicture} draggable="false" className="animate-grow h-[22rem] w-auto rounded-full saturate-150 blur" />
				<img src={ProfilePicture} draggable="false" className="relative md:mx-[-22rem] my-[-22rem] h-[22rem] w-auto rounded-full opacity-edge-gradient" />
				<div className="flex flex-col items-left text-white h-fit w-fit pt-[25rem] md:pt-0 md:pl-[25rem] z-10">
					<h1 className="font-light text-3xl md:text-[2.5rem] pb-1 md:text-left">Hello there,</h1>
					<h1 className="font-light text-4xl md:text-[5.75rem] md:leading-[5.75rem] md:text-left">
						I'm <b className="font-semibold">Gabriel Spalato</b>
					</h1>
				</div>
				<div className="fixed pt-10 bottom-8 md:hidden">
					<Doing setActive={() => { }} />
				</div>
			</motion.div>
		</Page>
	);
}

export default Home;