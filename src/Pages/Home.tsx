import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import { MotionAnimate } from 'react-motion-animate';

import { BackgroundContainer, ContentContainer, OverlayContainer } from '../Components/Page';
import { BaseButton } from '../Components/BaseButton';
import { Card } from '../Components/Card';
import { DiscordPresence as NewDiscordPresence } from '../Components/DiscordPresence'; 
import { DiscordPresence } from '../Components/OldDiscordPresence';
import { Grid } from '../Components/Grid';
import { GridItem } from '../Components/GridItem';
import { Paragraph } from '../Components/Paragraph';
import { Section } from '../Components/Section';
import { SectionScroller } from '../Components/SectionScroller';
import { Title } from '../Components/Title';
import { Parallax } from '../Components/Parallax';



// Styles
let MainTitleContainer = styled(motion.div, {
	alignItems: 'start',
	display: 'flex',
	flexDirection: 'column',
	height: 'fit-content',
	margin: '0 18.75rem',
	width: 'fit-content'
});

let GridItemFullColumn = styled(GridItem, {
	display: 'flex',
	height: '100%',
	justifyContent: 'center',
	alignItem: 'center',
});

let TopBorder = styled(motion.div, {
	background: '#151515',
	flexGrow: 100,
	height: '1px',
	margin: '0 18.75rem',
	top: '0%',
	width: 'calc(100% - 37.5rem)',
});

let TypewritterParagraph = styled(Paragraph, {
	fontFamily: 'Karla',
	fontSize: '1vw',
	fontWeight: 100
});

let Doing = styled(DiscordPresence, {
	bottom: '0',
	left: '0',
	margin: '0 0 1rem 1rem',
	position: 'fixed',
});
let Doing2 = styled(NewDiscordPresence, {
	margin: '0 0 2.5rem 0',
	position: 'absolute',
});

// Other components
const WavingHand = () => (
	<motion.span
		style={{
			display: 'inline-block',
		}}
	  	animate={{ rotate: [null, 14, -8, 14, -4, 10, 0, 0, 0, 0, 0, 0] }}
	  	transition={{
			delay: 1,
			from: 0,
			duration: 2,
			ease: "easeInOut",
			type: "tween",
	  	}}
	>
	  👋
	</motion.span>
  );

// Main component
export const Home: React.FC = () => {
	const [presenceActive, setPresenceActive] = useState(false);

	return (
		<motion.div
			initial={{ opacity: 0 }}
        	animate={{ opacity: 1 }}
        	exit={{ opacity: 0 }}
		>
            <BackgroundContainer>

            </BackgroundContainer>
            <ContentContainer>
				{/*<SectionScroller>*/}
					<Section.Container hero display="flex" direction="column" justify="center" align="center">
						<MainTitleContainer>
							<Paragraph css={{ color: '#ffffff', fontSize: '2vw', fontWeight: 100 }}>
								<WavingHand/><span> Hello there</span>,
							</Paragraph>
							<Title css={{ fontSize: '7.5vw' }}>
								I'm Gabriel Spalato
							</Title>
							<TypewritterParagraph
								css={{ color: '#ffffff', fontSize: '1.5vw', padding: '0 0 0 .3vw' }}
							>
								<TypistLoop interval={500}>
    								{[
      									'self-taught developer.',
      									'C# lover.',
      									'graphic design apprentice.',
										'diehard discord user.',
										'y u bully me?',
										'born & based in Brazil.',
										'XVI years old.',
										'ambitious bonehead.',
    								].map(text =>
										<Typist>
											<span>{text}</span>
											<Typist.Backspace count={text.length} delay={text.length * 200} />
										</Typist>
									)}
								</TypistLoop>
							</TypewritterParagraph>
						</MainTitleContainer>
						{/*<Doing2 setActive={setPresenceActive}/>*/}
					</Section.Container>
					<Section.Container display="flex" direction="column" justify="start" align="start">
						<TopBorder/>
						<Section.Content>
							<Title css={{ fontSize: '2.75vw' }}>About</Title>
							<Section.Spacing>
								<Grid columns={2}>
									<GridItemFullColumn>
										<Paragraph>Maybe I could put some skill-related stuff in this column?</Paragraph>
									</GridItemFullColumn>
									<GridItemFullColumn>
										<Paragraph
											css={{ textAlign: 'justify' }}
										>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</Paragraph>
									</GridItemFullColumn>
								</Grid>
							</Section.Spacing>
						</Section.Content>
					</Section.Container>
					<Section.Container display="flex" direction="column" justify="start" align="start">
						<TopBorder/>
						<Section.Content>
							<Title css={{ fontSize: '2.75vw' }}>Projects</Title>
							<Section.Spacing>
								<Card.Container
									image="https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
								>
									<Card.Info
										name="test card"
										description="currently, it's pretty close to the aesthetic i want."
									/>
								</Card.Container>
							</Section.Spacing>
						</Section.Content>
					</Section.Container>
				{/*</SectionScroller>*/}
            </ContentContainer>
			<OverlayContainer>
				<Doing setActive={setPresenceActive}/>
			</OverlayContainer>
        </motion.div>
	);
}