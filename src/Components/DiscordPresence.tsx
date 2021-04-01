import { AnimatePresence, motion } from "framer-motion";
import { forwardRef, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Presence } from '../Types/lanyard';

import { Paragraph } from '../Components/Paragraph';
import { Image } from "./Image";

// Styles
let SmallParagraph = styled(Paragraph)`
	font-size: .9rem;
`;

const Container = styled(motion.div)`
	background-color: $backgroundColor;
	border: 1px solid #101010;
	border-radius: 5px;
	padding: 1rem;
	transition: .25s ease;
	width: 25%;
`;

const ActivityRow = styled(motion.div)`
	align-items: center;
	display: flex;
	flex-direction: row;
	transition: .25s ease;
`;

const ActivityImageContainer = styled(motion.div)`
	height: 50px;
	position: relative;
	transition: .25s ease;
`;

const ActivityImage = styled(Image)`
	border-radius: 5px;
	height: 50px;
	transition: .25s ease;
	width: 50px;
`;

const ActivitySecondaryImage = styled(Image)`
	border-radius: 50%;
	background-color: #000;
	border: 2px solid #000;
	bottom: -5px;
	height: 20px;
	position: absolute;
	right: -5px;
	transition: .25s ease;
	width: 20px;
`;

const ActivityInfo = styled(motion.div)`
	margin-left: 1rem;
	transition: .25s ease;
`;


// Main component
enum Operation {
	Event,
	Hello,
	Initialize,
	Heartbeat,
}

enum EventType {
	INIT_STATE = 'INIT_STATE',
	PRESENCE_UPDATE = 'PRESENCE_UPDATE',
}

enum ActivityType {
	Playing,
	Streaming,
	Listening,
	None,
	Custom,
	Competing,
}

type SocketEvent = {
	op: Operation;
	t? : EventType;
	d: Presence | unknown;
};

const logLanyardEvent = (eventName: string, data: any) => {
	// eslint-disable-next-line no-console
	console.log(
		`%cLanyard%c ${eventName} %o`,
		'background-color: #d7bb87; border-radius: 5px; padding: 3px; color: #372910;',
		'background: none; color: #d7bb87;',
		data
	);
};

const discordId = "341377366079045632";

const DiscordActivity = ({ setActive, ...props }: { setActive: (active: boolean) => void } & any, ref: any) => {
	const [socket, setSocket] = useState<WebSocket | null>(null);
	const [doing, setDoing] = useState<Presence>();
  
	const send = (op: Operation, d?: unknown): void => {
	  	if (socket !== null) socket.send(JSON.stringify({ op, d }));
	};
  
	useEffect(() => {
	  	if (socket === null) return () => {};
  
	  	socket.onmessage = function ({ data }: MessageEvent): void {
			const { op, t, d }: SocketEvent = JSON.parse(data);
  
			if (op === Operation.Hello) {
		  		setInterval(
					() => send(Operation.Heartbeat),
					(d as { heartbeat_interval: number }).heartbeat_interval
		  		);
		  		send(Operation.Initialize, { subscribe_to_id: discordId });
			} else if (op === Operation.Event && t) {
		  		logLanyardEvent(t, d);
  
		  		if ([EventType.INIT_STATE, EventType.PRESENCE_UPDATE].includes(t)) {
					let presence = d as Presence;
					setDoing(presence);
				}
			}
	  	};
  
	  	socket.onclose = () => {
			setSocket(null);
	  	};
	}, [socket]);
  
	useEffect(() => {
	  	if (!socket)
		  	setSocket(new WebSocket("wss://api.lanyard.rest/socket"));
	}, [socket]);
  
	const currentActivity = useMemo(
	  	() => doing?.activities.filter((activity) => activity.type === 0)[0],
	  	[doing]
	);
  
	useEffect(() => {
	  	setActive(doing?.listening_to_spotify || currentActivity);
	}, [doing, currentActivity])
  
	if (!doing || !doing?.discord_status)
		return null;
	
	let initial = { opacity: 0, y: -100 };
	let final = { opacity: 1, y: 0 }
	let shouldBeDisplayed = doing?.listening_to_spotify || currentActivity;

	let getAppDataFromId = (id?: number, item?: string): string =>
		`https://cdn.discordapp.com/app-assets/${id}/${item}.png`;

	let primaryActivityImage = doing?.listening_to_spotify
		? doing.spotify.album_art_url
		: currentActivity && currentActivity.assets
			? getAppDataFromId(currentActivity?.application_id, currentActivity?.assets.large_image)
			: null;

	let secondaryActivityImage = doing?.listening_to_spotify
		? "img/spotify-logo.svg"
		: currentActivity && currentActivity.assets
			? getAppDataFromId(currentActivity?.application_id, currentActivity?.assets.small_image)
			: null;

	return (
		<AnimatePresence>
			<Container>
				<ActivityRow>
					<ActivityImageContainer
						style={{ height: primaryActivityImage ? '50px' : 0 }}
					>
				  		<ActivityImage
						  	src={primaryActivityImage ?? ""}
							style={{ display: primaryActivityImage ? 'block' : 'none' }}
						/>
				  		<ActivitySecondaryImage
						  	src={secondaryActivityImage ?? ""}
							  style={{ display: secondaryActivityImage ? 'block' : 'none' }}
						/>
					</ActivityImageContainer>
					<ActivityInfo style={{ marginLeft: primaryActivityImage ? '1rem' : 0 }}>
						<SmallParagraph style={{ color: '#ffffff' }}>
						{
							doing?.listening_to_spotify
							? (<span>Listening to <b>{doing.spotify?.song}</b> by <b>{doing.spotify?.artist}</b></span>)
							: currentActivity
								? (<span>{ActivityType[currentActivity.type]} <b>{currentActivity?.name}</b></span>)
								: null
						}
						</SmallParagraph>
					</ActivityInfo>
			  	</ActivityRow>
			</Container>
		</AnimatePresence>
	);
};

export const DiscordPresence = forwardRef(DiscordActivity);