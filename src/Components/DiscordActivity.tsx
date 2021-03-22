import {
	motion
} from "framer-motion";
import {
	forwardRef,
	useEffect,
	useState
} from "react";
import {
	styled
} from "../stitches.config";
import {
	Presence
} from '../Types/lanyard';

import {
	Paragraph
} from '../Components/Paragraph';

// Styles
var SmallParagraph = styled(Paragraph, {
	fontSize: '15px',
});


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

type SocketEvent = {
	op: Operation;
	t ? : EventType;
	d: Presence | unknown;
};

const logLanyardEvent = (eventName: string, data: any) => {
	// eslint-disable-next-line no-console
	console.log(
		`%cLanyard%c <~ ${eventName} %o`,
		'background-color: #d7bb87; border-radius: 5px; padding: 3px; color: #372910;',
		'background: none; color: #d7bb87;',
		data
	);
};

const discordId = "341377366079045632";

const DiscordActivity = ({ setActive, ...props }: { setActive: (active: boolean) => void } & any, ref: any) => {
	const [socket, setSocket] = useState < WebSocket | null > (null);
	const [doing, setDoing] = useState <Presence>();
	const [latest, setLatest] = useState<Presence>();

	const send = (op: Operation, d ? : unknown): void => {
		if (socket !== null) socket.send(JSON.stringify({
			op,
			d
		}));
	};

	useEffect(() => {
		if (socket === null)
			return () => {};

		socket.onmessage = function ({ data }: MessageEvent): void {
			const { op, t, d }: SocketEvent = JSON.parse(data);

			if (op === Operation.Hello) {
				setInterval(() => send(Operation.Heartbeat), (d as {
					heartbeat_interval: number
				}).heartbeat_interval);
				send(Operation.Initialize, {
					subscribe_to_id: discordId
				});
			} else if (op === Operation.Event && t) {
				logLanyardEvent(t, d);

				if ([EventType.INIT_STATE, EventType.PRESENCE_UPDATE].includes(t))
				{
					var presence = d as Presence;
					setDoing(presence);

					if (presence.listening_to_spotify)
						setLatest(presence);
				}

				setActive((d as Presence)?.listening_to_spotify);
			}
		};

		socket.onclose = () => {
			setSocket(null);
		}
	}, [socket]);

	useEffect(() => {
		if (!socket)
			setSocket(new WebSocket("wss://api.lanyard.rest/socket"));
	}, [socket]);

	
	//if (!doing || !doing.listening_to_spotify)
	//	return null;

	return (
		<Container
			animate={{ x: doing?.listening_to_spotify ? 0 : -1000 }}
			transition={{ ease: "easeInOut", duration: .5 }}
			{...props}
		>
			<SmallParagraph style={{ marginTop: '0' }}>Listening to Spotify <LiveDot /></SmallParagraph>
			<ActivityRow>
				<ActivityImageContainer>
					<ActivityImage src={latest?.spotify?.album_art_url} />
					<ActivitySecondaryImage src="img/spotify-logo.svg" />
				</ActivityImageContainer>
				<ActivityInfo>
					<SmallParagraph>
						{latest?.spotify?.song}
					</SmallParagraph>
					<SmallParagraph>by {latest?.spotify?.artist}</SmallParagraph>
				</ActivityInfo>
			</ActivityRow>
		</Container>
	)
}

const Container = styled(motion.div, {
	width: '195px',
	backgroundColor: 'transparent',
	border: '1px solid #101010',
	borderRadius: '5px',
	padding: '1rem',
	cursor: 'pointer',
	transition: '.25s ease',
	"&:hover": {
		backgroundColor: '#101010',
		color: '#fff',
	},
	"h5": {
		margin: '0',
		marginBottom: '10px',
	}
});

const LiveDot = styled(motion.div, {
	animation: 'blinking 2s ease-in-out infinite',
	borderRadius: '50%',
	backgroundColor: '#ff5252',
	display: 'inline-block',
	height: '8px',
	marginLeft: '4px',
	width: '8px',
});

const ActivityRow = styled(motion.div, {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'row',
	transition: '.25s ease',
});

const ActivityImageContainer = styled(motion.div, {
	height: '50px',
	position: 'relative',
	transition: '.25s ease',
});

const ActivityImage = styled(motion.img, {
	borderRadius: '5px',
	height: '50px',
	transition: '.25s ease',
	width: '50px',
});

const ActivitySecondaryImage = styled(motion.img, {
	borderRadius: '50%',
	backgroundColor: '#000',
	border: '2px solid #000',
	bottom: '-5px',
	height: '20px',
	position: 'absolute',
	right: '-5px',
	transition: '.25s ease',
	width: '20px',
});

const ActivityInfo = styled(motion.div, {
	marginLeft: '1rem',
	transition: '.25s ease',
	'h5': {
		color: '#fff',
		margin: '0',
	},
	'p': {
		margin: '0',
		fontSize: '0.8rem',
	}
});

export default forwardRef(DiscordActivity);