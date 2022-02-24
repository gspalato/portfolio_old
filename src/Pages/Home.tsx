import React, { useState } from "react";
import { motion } from "framer-motion";

import { Doing } from "../Components/Doing";
import { Page } from "../Components/Page";

import { defaultFadeInDownVariants } from "../AnimationVariants";

import ColorBrush1 from "../Assets/img/color_brush_1.png";
import ProfilePicture from "../Assets/img/selfie.png";


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
export const Home: React.FC = () => {
	return (
		<Page>
			<div className="bg-transparent">
				{/* Custom (Landing) Section */}
				<section className="relative flex items-center flex-col justify-center h-screen max-w-screen-xl mx-auto pl-5 pr-5">
					<div className="absolute h-full w-full">
						<img src={ColorBrush1} className="hidden md:block h-full w-full pt-12" draggable="false" />
					</div>
					<motion.div
					className="flex items-center flex-col md:flex-row justify-between"
					
					initial="start"
          animate="end"
          exit="start"
          variants={defaultFadeInDownVariants}>
						<img src={ProfilePicture} draggable="false" className="animate-grow h-[22rem] w-auto rounded-full saturate-150 blur" />
						<img src={ProfilePicture} draggable="false" className="relative md:mx-[-22rem] my-[-22rem] h-[22rem] w-auto rounded-full opacity-edge-gradient" />
						<div className="flex flex-col items-left text-white h-fit w-fit pt-[25rem] md:pt-0 md:pl-[25rem]">
							<h1 className="font-light text-3xl md:text-[2.5rem] pb-1 md:text-left">Hello there,</h1>
							<h1 className="font-light text-4xl md:text-[5.75rem] md:leading-[5.75rem] md:text-left">
								I'm <b className="font-semibold">Gabriel Spalato</b>
							</h1>
						</div>
						<div className="fixed bottom-8 md:hidden pt-10">
							<Doing setActive={() => {}} />
						</div>
					</motion.div>
				</section>
			</div>
		</Page>
	);
}