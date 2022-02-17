import React, { useState } from "react";

import { DefaultNavbar } from "../Partials/DefaultNavbar";
import { NavbarItem } from "../Partials/NavbarItem";
import { DiscordPresence } from "../Components/DiscordPresence";

import { Card } from "../Components/Card";
import { CardView } from "../Components/CardView";
import { Button } from "../Components/Button";

import ProfilePicture from "../Assets/img/selfie.png";
import MisfitsSwirl from "../Assets/img/misfits_swirl.png";
import ArrowDown from "../Assets/img/arrow_down.svg";
import { WindowRepresentation } from "../Components/WindowRepresentation";
import { Timeline } from "../Components/Timeline";
import { TimelineEntry } from "../Components/TimelineEntry";


// Other Components
interface IGridLogoProps {
	children: string;
}

const GridLogo: React.FC<IGridLogoProps> = ({ children }) => {
	return (
		<i className={`${children} colored text-center`}></i>
	);
}

// Component
export const Home: React.FC = () => {
	const [presenceActive, setPresenceActive] = useState(false);

	return (
		<>
			<div className="bg-transparent backdrop-blur">
				<DefaultNavbar>
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
				</DefaultNavbar>
				<section className="relative flex items-center flex-col justify-center h-screen max-w-screen-xl mx-auto pl-5 pr-5">
					<div className="flex items-center flex-col md:flex-row justify-between">
						<img src={ProfilePicture} draggable="false" className="h-[22rem] w-auto rounded-full saturate-150 blur" />
						<img src={ProfilePicture} draggable="false" className="relative md:mx-[-22rem] my-[-22rem] h-[22rem] w-auto rounded-full opacity-edge-gradient" />
						<div className="flex flex-col items-left text-white h-fit w-fit pt-[25rem] md:pt-0 md:pl-[25rem]">
							<h1 className="font-light text-3xl md:text-[2.5rem] pb-1 md:text-left">Hello there,</h1>
							<h1 className="font-light text-4xl md:text-[5.75rem] md:leading-[5.75rem] md:text-left">
								I'm <b className="font-semibold">Gabriel Spalato</b>
							</h1>
						</div>
						<div className="md:hidden pt-10">
							<DiscordPresence
								setActive={setPresenceActive}
							/>
						</div>
					</div>
					<ArrowDown className="h-8 w-auto animate-bounce bottom-6 absolute mb-4 invert opacity-75" />
				</section>
				<section className="relative flex flex-col justify-center h-screen mx-auto">
					<img src={MisfitsSwirl} className="absolute h-full w-full brightness-50" draggable="false" />
					<div className="flex justify-center bg-scheme-contrast-transparent backdrop-blur-2xl h-full w-full pl-5 pr-5">
						<div className="flex flex-col items-center justify-center max-w-screen-xl h-full w-full">
							<h1 className="font-display font-bold text-scheme-offwhite text-5xl py-20">Projects</h1>
							<CardView className="flex-1">
								<Card image={MisfitsSwirl} title="Portfolio" description="My portfolio's repository.">
									<Button text="Check Out" link="https://github.com/gspalato/portfolio">
										<i className="fa-solid fa-up-right-from-square text-scheme-offwhite pl-[0.4rem]"></i>
									</Button>
								</Card>
							</CardView>
						</div>
					</div>
				</section>
				<section className="relative flex items-center flex-col justify-center h-screen max-w-screen-xl mx-auto pl-5 pr-5">
					<div className="flex items-center flex-col md:flex-row flex-1 w-full">
						<div className="flex flex-col items-center justify-center h-full w-full flex-1">
							<h1 className="font-display font-bold text-scheme-offwhite text-5xl py-20">Experience</h1>
							<div className="flex flex-col md:flex-row flex-1 h-auto w-full">
								<div className="flex flex-auto h-auto w-auto justify-center items-center">
									<Timeline>
										<TimelineEntry 
											date="January 2011 - December 2022"
											title="Colégio Adventista de Tatuí"
											description="Coursed primary, middle & high school."
										/>
										<TimelineEntry 
											date="January 2022 - December 2022"
											title="SENAI"
											description="Coursing Conventional Machining Mechanics to graduate as professional."
											last
										/>
									</Timeline>
								</div>
								<div className="flex flex-auto h-auto w-auto justify-center items-center">
									<WindowRepresentation>
										<div className="p-6 grid grid-cols-5 gap-6 auto-rows-min text-5xl text-scheme-offwhite">
											<GridLogo>devicon-nodejs-plain</GridLogo>
											<GridLogo>devicon-typescript-plain</GridLogo>
											<GridLogo>devicon-react-original</GridLogo>
											<GridLogo>devicon-html5-plain</GridLogo>
											<GridLogo>devicon-css3-plain</GridLogo>
											<GridLogo>devicon-tailwindcss-plain</GridLogo>
											<GridLogo>devicon-csharp-plain</GridLogo>
											<GridLogo>devicon-dotnetcore-plain</GridLogo>
											<GridLogo>devicon-git-plain</GridLogo>
											<GridLogo>devicon-photoshop-plain</GridLogo>
											<GridLogo>devicon-electron-original</GridLogo>

										</div>
									</WindowRepresentation>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className="hidden md:block fixed left-4 bottom-4">
				<DiscordPresence
					setActive={setPresenceActive}
				/>
			</div>
		</>
	);
}