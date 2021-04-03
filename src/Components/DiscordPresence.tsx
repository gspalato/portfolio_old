import { forwardRef, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import tw from 'twin.macro';
import { Presence } from '../Types/lanyard';

import { Paragraph } from './Paragraph';
import { Image } from "./Image";

// Styles
let SmallParagraph = styled(Paragraph)`
	font-size: '1rem !important';
	line-height: '.9rem !important';
`;

const Container = styled(motion.div)`
	${tw`
		bg-black
		duration-200
		ease-in-out
		h-auto
		p-4
		rounded-md
		transition-all
		w-56
		hidden md:block
	`}

	border: '1px solid #101010';
`;

const LiveDot = styled(motion.div)`
	${tw`
		animate-pulse
		bg-red-500
		h-2
		inline-block
		m-1
		rounded-full
		w-2
	`}
`;

const ActivityRow = styled(motion.div)`
	${tw`
		duration-200
		ease-in-out
		flex
		flex-row
		items-center
		transition-all
	`}
`;

const ActivityImageContainer = styled(motion.div)`
	${tw`
		duration-200
		ease-in-out
		h-12
		relative
		transition-all
		w-12
	`}
`;

const ActivityImage = styled(Image)`
	${tw`
		duration-200
		ease-in-out
		h-12
		rounded-sm
		transition-all
		w-12
	`}
`;

const ActivitySecondaryImage = styled(Image)`
	${tw`
		absolute
		bg-black
		-bottom-1
		duration-200
		ease-in-out
		h-5
		p-0.5
		-right-1
		rounded-full
		transition-all
		w-5
	`}
`;

const ActivityInfo = styled(motion.div)`
	${tw`
		duration-200
		ease-in-out
		ml-4
		transition-all
	`}

	p {
		margin: 0;
		font-size: '0.8rem !important';
	}
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
	
	let initial = { opacity: 0, x: -100 };
	let final = { opacity: 1, x: 0 }
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
			<Container layout
				animate={ shouldBeDisplayed && final }
				exit={initial}
				initial={initial}
				ref={ref}
				transition={{ ease: "easeInOut", duration: .5 }}
				{...props}
			>
				<SmallParagraph style={{ marginTop: '0' }}>
			 	{
					 doing?.listening_to_spotify
					 ? (<><span>Listening to Spotify</span> <LiveDot/></>)
					 : currentActivity
					 	? (<span>Doing something</span>)
						: "Nothing going on"
				}
				</SmallParagraph>
				<>
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
								? doing.spotify?.song
								: currentActivity
									? (<><span>{ActivityType[currentActivity.type]} </span><b>{currentActivity?.name}</b></>)
									: null
							}
							</SmallParagraph>
							<SmallParagraph>
							{
								doing?.listening_to_spotify
								? `by ${doing.spotify?.artist}`
								: currentActivity
									? currentActivity?.details
									: null
							}
							</SmallParagraph>
							{
								currentActivity?.state && !doing?.listening_to_spotify
								? (<SmallParagraph>{currentActivity?.state}</SmallParagraph>)
								: null
							}
						</ActivityInfo>
			  		</ActivityRow>
				</>
			</Container>
		</AnimatePresence>
	);
};

export const DiscordPresence = forwardRef(DiscordActivity);