import React, { useState } from "react";

import { faInstagram, faGithub, faSpotify, faTwitter, faTwitch, faDiscord } from "@fortawesome/free-brands-svg-icons";

import ProfilePicture from "../Assets/img/selfie.png";
import { SocialButton } from "../Components/SocialButton";
import { Doing } from "../Components/Doing";

import DiscordSVG from "../Assets/img/discord.svg";

const DiscordLink = "https://discordapp.com/users/341377366079045632";
const InstagramLink = "https://www.instagram.com/spalatx/";
const GithubLink = "https://github.com/gspalato";
const SpotifyLink = "https://open.spotify.com/user/m0jz86ynx7i5jw05vu4la15hc";
const TwitterLink = "https://twitter.com/gspalato";
const TwitchLink = "https://www.twitch.tv/spalato_";

export const Links: React.FC = () => {
	const [presenceActive, setPresenceActive] = useState(false);

	return (
		<>
			<div className="flex flex-col h-full items-center justify-center max-w-lg mr-auto p-16 w-full">
				<div className="flex flex-col h-fit items-center justify-center px-8 md:px-16 pt-16 w-fit">
					<img className="rounded-full h-60 mb-8 w-auto" src={ProfilePicture} />
					<p className="font-body font-medium mb-2 text-center text-2xl text-white">Gabriel Spalato</p>
				</div>
				<ul className="flex flex-row flex-wrap h-fit items-center justify-center max-w-lg px-16 pb-16 pt-16 w-fit">
					<li className="p-4">
						<SocialButton icon={faDiscord} link={DiscordLink}/>
					</li>
					<li className="p-4">
						<SocialButton icon={faInstagram} link={InstagramLink}/>
					</li>
					<li className="p-4">
						<SocialButton icon={faGithub} link={GithubLink}/>
					</li>
					<li className="p-4">
						<SocialButton icon={faSpotify} link={SpotifyLink}/>
					</li>
					<li className="p-4">
						<SocialButton icon={faTwitter} link={TwitterLink}/>
					</li>
					<li className="p-4">
						<SocialButton icon={faTwitch} link={TwitchLink}/>
					</li>
				</ul>
			</div>
		</>
	);
}