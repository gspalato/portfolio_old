import React, { useState } from "react";

import { DefaultFooter } from "../Partials/DefaultFooter";
import { DefaultNavbar } from "../Partials/DefaultNavbar";
import { NavbarItem } from "../Partials/NavbarItem";

import { Button } from "../Components/Button";
import { Card } from "../Components/Card";
import { CardView } from "../Components/CardView";
import { DiscordPresence } from "../Components/DiscordPresence";
import { Timeline } from "../Components/Timeline";
import { TimelineEntry } from "../Components/TimelineEntry";
import { WindowRepresentation } from "../Components/WindowRepresentation";


import ProfilePicture from "../Assets/img/selfie.png";
import MisfitsSwirl from "../Assets/img/misfits_swirl.png";
import ArrowDown from "../Assets/img/arrow_down.svg";
import WondersLogo from "../Assets/img/wonders.png";
import DefaultIcon from "../Assets/img/icon.png";
import { Section } from "../Components/Section";



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
	const [presenceActive, setPresenceActive] = useState(false);

	return (
		<>
			<div className="bg-transparent backdrop-blur">
				{/* Custom (Landing) Section */}
				<section className="relative flex items-center flex-col justify-center h-screen max-w-screen-xl mx-auto pl-5 pr-5">
					<div className="flex items-center flex-col md:flex-row justify-between">
						<img src={ProfilePicture} draggable="false" className="animate-grow h-[22rem] w-auto rounded-full saturate-150 blur" />
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

				<Section
				title="Projects"
				background={
					<img src={MisfitsSwirl} className="h-full w-full brightness-50" draggable="false" />
				}
				blur overlayColor>
					<div className="flex h-full w-full items-center justify-center">
						<CardView className="m-auto !w-min">
							<Card image={WondersLogo} title="Wonders" description="A rainmeter-like widget platform powered by Electron!">
								<Button text="Repository" link="https://github.com/wondersorg/wonders">
									<i className="devicon-github-original my-auto leading-none text-lg text-scheme-offwhite pl-[0.4rem]"></i>
								</Button>
							</Card>
							<Card image={DefaultIcon} title="Portfolio" description="My portfolio website, bootstrapped with Reactions.">
								<Button text="Repository" link="https://github.com/gspalato/portfolio">
									<i className="devicon-github-original my-auto leading-none text-lg text-scheme-offwhite pl-[0.4rem]"></i>
								</Button>
							</Card>
							<Card image={DefaultIcon} title="Reactions" description="A boilerplate for React projects using Webpack 5 and Typescript; preconfigured with TailwindCSS.">
								<Button text="Repository" link="https://github.com/gspalato/reactions">
									<i className="devicon-github-original my-auto leading-none text-lg text-scheme-offwhite pl-[0.4rem]"></i>
								</Button>
							</Card>
						</CardView>
					</div>
				</Section>

				<Section title="Experience">
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
						<div className="flex flex-auto pt-10 md:pt-0 h-auto w-auto justify-center items-center">
									<WindowRepresentation className="mb-6 md:mb-0">
										<div className="p-6 grid grid-cols-5 gap-6 auto-rows-fr text-5xl text-scheme-offwhite">
											<GridLogo>devicon-javascript-plain</GridLogo>
											<GridLogo>devicon-typescript-plain</GridLogo>
											<GridLogo>devicon-nodejs-plain</GridLogo>
											<GridLogo>devicon-lua-plain</GridLogo>
											<GridLogo>devicon-react-original</GridLogo>
											<GridLogo>devicon-html5-plain</GridLogo>
											<GridLogo>devicon-css3-plain</GridLogo>
											<GridLogo>devicon-tailwindcss-plain</GridLogo>
											<GridLogo>devicon-csharp-plain</GridLogo>
											<GridLogo>devicon-dotnetcore-plain</GridLogo>
											<GridLogo>devicon-git-plain</GridLogo>
											<GridLogo>devicon-photoshop-plain</GridLogo>
											<GridLogo>devicon-electron-original</GridLogo>
											<GridLogo>devicon-mongodb-plain</GridLogo>
										</div>
									</WindowRepresentation>
						</div>
					</div>
				</Section>
			</div>

			<DefaultFooter/>
			
			<div className="hidden md:block fixed left-4 bottom-4">
				<DiscordPresence
					setActive={setPresenceActive}
				/>
			</div>
		</>
	);
}