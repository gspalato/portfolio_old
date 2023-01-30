import React, { forwardRef, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanyard } from "react-use-lanyard";

import { Presence } from '../Typings/lanyard';

import SpotifyLogo from "../Assets/img/spotify.svg";

// Styles
let ContainerStyle = 
	`bg-[#000]/40 border
	border-solid border-border/50
	bottom-4 duration-200 ease-in-out h-auto
	p-4 left-4 rounded-md transition-all w-56
	md:max-w-[16rem] drop-shadow-2xl
  backdrop-blur-lg`;

let SmallParagraphStyle =
	'font-body leading-4 text-sm text-white';

let ActivityRowStyle =
	`duration-200 ease-in-out flex flex-row
	items-center w-full transition-all`;

let ActivityImageContainerStyle =
	`duration-200 ease-in-out h-12 relative
	transition-all w-12`;

let ActivityImageStyle =
	`duration-200 ease-in-out h-12 max-w-none
	rounded-sm transition-all w-12`;

let ActivitySecondaryImageStyle =
	`absolute bg-black -bottom-1 duration-200 ease-in-out
	h-5 max-w-none p-0.5 -right-1 rounded-full transition-all
	w-5`;

let ActivityInfoStyle =
	`duration-200 ease-in-out ml-4 transition-all`;

// Utilities
const truncate = (s: string, n: number): string => {
	if (s.length <= n)
		return s;
	else
		return s.substring(0, n) + "...";
}

const logLanyardEvent = (eventName: string, data: any) => {
	console.log(
		`%cLanyard%c ${eventName} %o`,
		'background-color: #d7bb87; border-radius: 5px; padding: 3px; color: #372910;',
		'background: none; color: #d7bb87;',
		data
	);
};

const discordId = "341377366079045632";

const DoingHook = (
  { setActive, ...props }: { setActive: (active: boolean) => void } & any,
  ref: any
) => {
  const { loading, status } = useLanyard({
    userId: discordId,
    socket: true
  });

  const currentActivity = useMemo(
    () => status?.activities.filter((activity) => activity.type === 0)[0],
    [status]
  );

  logLanyardEvent("Status Update", status);

  useEffect(() => {
    setActive(status?.listening_to_spotify || currentActivity);
  }, [status, currentActivity]);

	let variants = {
		show: {
			translateX: '0%',
			opacity: 1,
		},
		hidden: {
			translateX: '-200%',
			opacity: 0,
		}
	}



  return (
    <motion.div layout
		initial='hidden'
		animate={ (currentActivity || status?.listening_to_spotify) ? 'show' : 'hidden' }
		exit='hidden'
		variants={variants}
		>
      {status?.listening_to_spotify ? (

        <motion.div
				  className={`${ContainerStyle} ${props.className ?? ''}`}
				  ref={ref}
				  {...props}
          >
            <h1 className={`${SmallParagraphStyle} text-[1rem] mx-auto mt-0 pb-4`}>
						  <i className="text-[1.125rem] fa-brands fa-spotify text-[#0f0] pr-2"/> Listening to Spotify
            </h1>
            <>
              <div className={ActivityRowStyle}>
                <div className={ActivityImageContainerStyle}>
					  			<a target="_blank" href={`https://open.spotify.com/track/${status.spotify?.track_id}`}>
                  	<img className={ActivityImageStyle} src={status.spotify?.album_art_url} />
					  			</a>
                  {/* <img className={ActivitySecondaryImageStyle} src={SpotifyLogo} /> */}
                </div>

                <div className={ActivityInfoStyle}>
                  <h5 className={SmallParagraphStyle}>{truncate(status.spotify?.song ?? '', 17)}</h5>
                  <p className={SmallParagraphStyle}>by {truncate(status.spotify?.artist ?? '', 30)}</p>
                </div>
              </div>
            </>
        </motion.div>

      ) : currentActivity ? (

        <motion.div
				className={`${ContainerStyle} ${props.className ?? ''}`}
				{...props}>
          <h1 className={`${SmallParagraphStyle} text-[1rem] mx-auto mt-0 pb-4`}>Doing something</h1>
          <div className={ActivityRowStyle}>
            {currentActivity.assets ? (
              <div className={ActivityImageContainerStyle}>
                <img className={ActivityImageStyle}
                  src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.large_image}.png`}
                />
                <img className={ActivitySecondaryImageStyle}
                  src={`https://cdn.discordapp.com/app-assets/${currentActivity.application_id}/${currentActivity.assets.small_image}.png`}
                />
              </div>
            ) : null}
            <div className={ActivityInfoStyle}>
              <h5 className={SmallParagraphStyle}>{currentActivity.name}</h5>
              {currentActivity.details ? <p className={SmallParagraphStyle}>{truncate(currentActivity.details, 17)}</p> : null}
              {currentActivity.state ? <p className={SmallParagraphStyle}>{truncate(currentActivity.state, 17)}</p> : null}
            </div>
          </div>
        </motion.div>

      ) : null}
    </motion.div>
  );
};

export default forwardRef(DoingHook);