import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';
import { InView } from 'react-intersection-observer';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

import { BackgroundContainer, ContentContainer, OverlayContainer } from '../Components/Page';
import { Card } from '../Components/Card';
import { DiscordPresence } from '../Components/DiscordPresence';
import { Title } from '../Components/Title';
import { Paragraph } from '../Components/Paragraph';
import { Section } from '../Components/Section';

// Styles
var MainTitleContainer = styled(motion.div, {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	height: 'fit-content',
	width: 'fit-content'
});

var TopBorder = styled(motion.div, {
	background: '#222222',
	height: '1px',
	margin: '0 auto',
	position: 'absolute',
	top: '0%',
	width: '95%',
});

var TypewritterParagraph = styled(Paragraph, {
	fontFamily: 'Karla',
	fontSize: '1vw',
	fontWeight: 100
});

var Doing = styled(DiscordPresence, {
	position: 'fixed',
	left: '15px',
	bottom: '15px',
});

// Other components
const WavingHand = () => (
	<motion.span
		style={{
			display: 'inline-block',
		}}
	  	animate={{ rotate: [null, 14, -8, 14, -4, 10, 0, 0, 0, 0, 0, 0] }}
	  	transition={{
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
		<React.Fragment>
            <BackgroundContainer>

            </BackgroundContainer>
            <ContentContainer>
				<Section display="flex" direction="column" justify="center" align="center">
					<MainTitleContainer>
						<Paragraph style={{ fontSize: '1.5vw', fontWeight: 100 }}>
							<WavingHand/><span> Hello there</span>,
						</Paragraph>
						<Title style={{ fontSize: '5vw' }}>
							I'm Gabriel Spalato
						</Title>
						<TypewritterParagraph>
							<TypistLoop interval={3000}>
    							{[
      								'self-taught developer.',
      								'C# enthusiast.',
      								'graphic design apprentice.',
									'diehard discord user.',
									'y u bully me?',
    							].map(text =>
									<Typist>
										<span>{text}</span>
										{/*<Typist.Delay ms={text.length * 100} />*/}
										<Typist.Backspace count={text.length} delay={text.length * 200} />
									</Typist>
								)}
							</TypistLoop>
						</TypewritterParagraph>
					</MainTitleContainer>
				</Section>
				<Section display="flex" direction="column" justify="center" align="center">
					<InView threshold={.75} delay={200}>{({ inView, ref, entry }) => (
						<TopBorder
							ref={ref}
							initial={{ width: 0 }}
							animate={ inView ? { width: '95%' } : {} }
							transition={{ type: "easeInOut" }}
						/>
					)}</InView>
					<InView threshold={.75} delay={200}>{({ inView, ref, entry }) => (
						<Card
							ref={ref}
							initial={{ opacity: 0, x: -200 }}
							animate={ inView ? { opacity: 1, x: 0 } : {} }
							transition={{ type: "easeInOut" }}
						/>
					)}</InView>
				</Section>
            </ContentContainer>
			<OverlayContainer>
				<Doing setActive={setPresenceActive}/>
			</OverlayContainer>
        </React.Fragment>
	);
}