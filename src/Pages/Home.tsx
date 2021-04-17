import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faSpotify } from "@fortawesome/free-brands-svg-icons";
import React from "react";

import { DefaultNavbar } from "../Partials/DefaultNavbar";
import { NavbarItem } from "../Partials/NavbarItem";


export const Home: React.FC = () => {
	return (
		<>
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
			<section className="flex items-center justify-center h-screen max-w-screen-xl mx-auto pl-5 pr-5">
				<div className="flex flex-col items-center text-white h-fit w-fit">
					<h1 className="font-light text-3xl md:text-5xl pb-1">Hello there,</h1>
					<h1 className="font-light text-6xl md:text-8xl">
						I'm <b className="font-semibold">Gabriel Spalato</b>
					</h1>
				</div>
			</section>
		</>
	);
}