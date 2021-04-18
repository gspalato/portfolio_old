import React, { useState } from "react";

import { faInstagram, faGithub, faSpotify, faTwitter, faTwitch, faDiscord } from "@fortawesome/free-brands-svg-icons";

import ProfilePicture from "../Assets/img/problems_dark.png";
import { SocialButton } from "../Components/SocialButton";
import { DiscordPresence } from "../Components/DiscordPresence";

const DiscordLink = "https://dsc.bio/spalato/";
const InstagramLink = "https://www.instagram.com/gabriel.spalato/";
const GithubLink = "https://github.com/gspalato";
const SpotifyLink = "https://open.spotify.com/user/oubhvljhzyudfbxyx20opzxhq";
const TwitterLink = "https://twitter.com/gspalato";
const TwitchLink = "https://www.twitch.tv/spalato_";

export const Links: React.FC = () => {
	const [presenceActive, setPresenceActive] = useState(false);

	return (
		<>
			<div className="flex flex-col h-full items-center justify-center max-w-lg mx-auto p-16 w-full">
				<div className="flex flex-col h-fit items-center justify-center px-8 md:px-16 pt-16 pb-10 w-fit">
					<img className="rounded-full h-60 mb-8 w-auto" src={ProfilePicture} />
					<p className="font-body mb-2 text-center text-2xl text-white">gabriel spalato marques</p>
					<p className="font-body mb-2 text-lg text-white">@spalato</p>
				</div>
				<ul className="flex flex-row flex-wrap h-fit items-center justify-center max-w-lg px-16 pb-16 pt-10 w-fit">
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
				<DiscordPresence
					style={{ display: 'block' }}
					setActive={setPresenceActive}
				/>
			</div>
		</>
	);
}