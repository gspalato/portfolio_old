import React, { forwardRef, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Presence } from '../Typings/lanyard';

import SpotifyLogo from "../Assets/img/spotify.svg";

// Styles
let SmallParagraph = "font-body leading-4 text-sm text-white";

let Container = `backdrop-blur-md bg-scheme-overlay-transparent
border border-solid border-scheme-border
bottom-4 duration-200 ease-in-out h-auto
p-4 left-4 rounded-md transition-all w-56`;

let LiveDot = "animate-pulse bg-red h-2 inline-block m-1 my-auto rounded-full w-2";

let ActivityRow = "duration-200 ease-in-out flex flex-row items-center transition-all";

let ActivityImageContainer = "duration-200 ease-in-out h-12 relative transition-all w-12";

let ActivityImage = "duration-200 ease-in-out h-12 max-w-none rounded-sm transition-all w-12";

let ActivitySecondaryImage = `absolute bg-black -bottom-1 duration-200 ease-in-out
h-5 max-w-none p-0.5 -right-1 rounded-full transition-all w-5`;

let ActivityInfo = "duration-200 ease-in-out ml-4 transition-all";


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

        if ([EventType.INIT_STATE, EventType.PRESENCE_UPDATE].includes(t)) setDoing(d as Presence);
      }
    };

    	socket.onclose = () => {
      		setSocket(null);
    	};
  	}, [socket]);

  useEffect(() => {
    if (!socket) setSocket(new WebSocket('wss://api.lanyard.rest/socket'));
  }, [socket]);

  const currentActivity = useMemo(
    () => doing?.activities.filter((activity) => activity.type === 0)[0],
    [doing]
  );

  useEffect(() => {
    setActive(doing?.listening_to_spotify || currentActivity);
  }, [doing, currentActivity]);

  if (!doing || !doing?.discord_status) return null;
	
	let initial = { display: 'none', opacity: 0 };
	let final = { display: 'block', opacity: 1 };
	let shouldBeDisplayed = doing?.listening_to_spotify || currentActivity;

	let getAppDataFromId = (id?: number, item?: string): string =>
		`https://cdn.discordapp.com/app-assets/${id}/${item}.png`;

	let primaryActivityImage = doing?.listening_to_spotify
		? doing.spotify.album_art_url
		: currentActivity && currentActivity.assets
			? getAppDataFromId(currentActivity?.application_id, currentActivity?.assets.large_image)
			: null;

	let secondaryActivityImage = (!doing?.listening_to_spotify && currentActivity && currentActivity.assets)
		? getAppDataFromId(currentActivity?.application_id, currentActivity?.assets.small_image)
		: "";

	return (
		<AnimatePresence>
			<motion.div layout
				animate={ shouldBeDisplayed && final }
				className={(Container + (props.className ?? ""))}
				exit={initial}
				initial={initial}
				transition={{ duration: .5 }}
				{...props}
			>
				<p className={`${SmallParagraph} pb-4`} style={{ marginTop: '0' }}>
			 	{
					 doing?.listening_to_spotify
					 ? (<><span className="text-base">Listening to Spotify</span> <div className={LiveDot}/></>)
					 : currentActivity
					 	? (<span>Doing something</span>)
						: "Nothing going on"
				}
				</p>
				<>
			  		<div className={ActivityRow}>
						<div className={ActivityImageContainer}
							style={{ height: primaryActivityImage ? '50px' : 0 }}
						>
				  			<img className={ActivityImage}
							  	src={primaryActivityImage ?? ""}
								style={{ display: primaryActivityImage ? 'block' : 'none' }}
							/>
				  			{
								doing?.listening_to_spotify
									? <SpotifyLogo className={ActivitySecondaryImage}
										style={{ display: secondaryActivityImage ? 'block' : 'none' }}
									/>
									: <img className={ActivitySecondaryImage}
										src={secondaryActivityImage}
										style={{ display: secondaryActivityImage ? 'block' : 'none' }}
									/>
							}
						</div>
						<div className={ActivityInfo} style={{ marginLeft: primaryActivityImage ? '1rem' : 0 }}>
							<p className={SmallParagraph} style={{ color: '#ffffff', fontSize: '0.8rem !important', margin: 0 }}>
							{
								doing?.listening_to_spotify
								? doing.spotify?.song
								: currentActivity
									? (<><span>{ActivityType[currentActivity.type]} </span><b>{currentActivity?.name}</b></>)
									: null
							}
							</p>
							<p className={SmallParagraph}>
							{
								doing?.listening_to_spotify
								? `by ${doing.spotify?.artist}`
								: currentActivity
									? currentActivity?.details
									: null
							}
							</p>
							{
								currentActivity?.state && !doing?.listening_to_spotify
								? (<p className={SmallParagraph}>{currentActivity?.state}</p>)
								: null
							}
						</div>
			  		</div>
				</>
			</motion.div>
		</AnimatePresence>
	);
};

export const DiscordPresence = forwardRef(DiscordActivity);