import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faSpotify,  } from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useRef, useState } from "react";

import { DefaultNavbar } from "../Partials/DefaultNavbar";
import { NavbarItem } from "../Partials/NavbarItem";
import { DiscordPresence } from "../Components/DiscordPresence";

import ProfilePicture from "../Assets/img/selfie.png";
import MisfitsSwirl from "../Assets/img/misfits_swirl.png";
import ArrowDown from "../Assets/img/arrow_down.svg";

export const Home: React.FC = () => {
	const [presenceActive, setPresenceActive] = useState(false);

	return (
		<>
			<div className="bg-transparent backdrop-blur">
				<DefaultNavbar>
					<NavbarItem link="https://www.instagram.com/gabriel.spalato/">
						<FontAwesomeIcon className=" text-white" icon={faInstagram} size="lg" />
					</NavbarItem>
					<NavbarItem link="https://github.com/gspalato">
						<FontAwesomeIcon className=" text-white" icon={faGithub} size="lg" />
					</NavbarItem>
					<NavbarItem link="https://open.spotify.com/user/oubhvljhzyudfbxyx20opzxhq">
						<FontAwesomeIcon className=" text-white" icon={faSpotify} size="lg" />
					</NavbarItem>
				</DefaultNavbar>
				<section className="relative flex items-center flex-col justify-center h-screen max-w-screen-xl mx-auto pl-5 pr-5">
					<div className="flex items-center flex-col md:flex-row justify-between">
						<img src={ProfilePicture} className="h-[22rem] w-auto rounded-full saturate-150 blur" />
						<img src={ProfilePicture} className="relative md:mx-[-22rem] my-[-22rem] h-[22rem] w-auto rounded-full opacity-edge-gradient" />
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
				<section className="relative flex flex-col items-center justify-center h-screen mx-auto">
					<img src={MisfitsSwirl} className="absolute h-full w-full"></img>
					<div className="flex bg-scheme-contrast-transparent backdrop-blur-2xl h-full w-full pl-5 pr-5">

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