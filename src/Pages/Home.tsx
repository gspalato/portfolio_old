import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

import { BackgroundContainer, ContentContainer, OverlayContainer } from '../Components/Page';
import DiscordActivity from '../Components/DiscordActivity';
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

var TypewritterParagraph = styled(Paragraph, {
	fontFamily: 'Karla',
	fontSize: '1vw',
	fontWeight: 100
});

var DiscordPresence = styled(DiscordActivity, {
	position: 'absolute',
	left: '15px',
	bottom: '15px',
});

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
							Hello, 👋
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
					<DiscordPresence style={{ display: 'block' }} setActive={setPresenceActive}/>
				</Section>
				<Section>
					
				</Section>
            </ContentContainer>
			<OverlayContainer>
				
			</OverlayContainer>
        </React.Fragment>
	);
}