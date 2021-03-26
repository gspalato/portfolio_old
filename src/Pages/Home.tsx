import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

import { BackgroundContainer, ContentContainer, OverlayContainer } from '../Components/Page';
import { DiscordPresence } from '../Components/DiscordPresence';
import { Grid } from '../Components/Grid';
import { GridItem } from '../Components/GridItem';
import { Paragraph } from '../Components/Paragraph';
import { Section, InnerSpacing, SectionContent } from '../Components/Section';
import { SectionScroller } from '../Components/SectionScroller';
import { Title } from '../Components/Title';



// Styles
let MainTitleContainer = styled(motion.div, {
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	height: 'fit-content',
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
	height: '1px',
	margin: '0 auto',
	position: 'absolute',
	top: '0%',
	width: '100%',
});

let TypewritterParagraph = styled(Paragraph, {
	fontFamily: 'Karla',
	fontSize: '1vw',
	fontWeight: 100
});

let Doing = styled(DiscordPresence, {
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
		<>
            <BackgroundContainer>

            </BackgroundContainer>
            <ContentContainer>
				<SectionScroller>
					<Section display="flex" direction="column" justify="center" align="center">
						<MainTitleContainer>
							<Paragraph css={{ color: '#ffffff', fontSize: '1.5vw', fontWeight: 100 }}>
								<WavingHand/><span> Hello there</span>,
							</Paragraph>
							<Title css={{ fontSize: '5.5vw' }}>
								I'm Gabriel Spalato
							</Title>
							<TypewritterParagraph css={{ color: '#ffffff' }}>
								<TypistLoop interval={500}>
    								{[
      									'self-taught developer.',
      									'C# enthusiast.',
      									'graphic design apprentice.',
										'diehard discord user.',
										'y u bully me?',
										'based in Brazil.',
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
					</Section>
					<Section display="flex" direction="column" justify="start" align="start">
						<SectionContent>
							<Title css={{ fontSize: '3vw' }}>About</Title>
							<InnerSpacing>
								<Grid columns={2}>
									<GridItemFullColumn>
										<Paragraph>hello1</Paragraph>
									</GridItemFullColumn>
									<GridItemFullColumn>
										<Paragraph>hello2</Paragraph>
									</GridItemFullColumn>
								</Grid>
							</InnerSpacing>
							</SectionContent>
					</Section>
					<Section display="flex" direction="column" justify="start" align="start">
						<SectionContent>
							<Title css={{ fontSize: '3vw' }}>Projects</Title>
							<InnerSpacing>
									<Paragraph>😳</Paragraph>
							</InnerSpacing>
						</SectionContent>
					</Section>
				</SectionScroller>
            </ContentContainer>
			<OverlayContainer>
				<Doing setActive={setPresenceActive}/>
			</OverlayContainer>
        </>
	);
}