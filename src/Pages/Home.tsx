import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { styled } from '../stitches.config';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';
import { MotionAnimate } from 'react-motion-animate';
import tw from 'twin.macro';

import { BackgroundContainer, ContentContainer, OverlayContainer } from '../Components/Page';
import { Card } from '../Components/Card';
import { DiscordPresence } from '../Components/DiscordPresence';
import { Grid } from '../Components/Grid';
import { GridItem } from '../Components/GridItem';
import { Paragraph } from '../Components/Paragraph';
import { Section } from '../Components/Section';
import { Title } from '../Components/Title';



// Styles
let GridItemFullColumn = styled(GridItem, {
	...tw`
		flex
		h-full
		items-center
		justify-center
	`,
});

let HeroParagraph = styled(Paragraph, {
	...tw`sm:text-2xl`,
});

let MainTitleContainer = styled(motion.div, {
	...tw`
		flex
		flex-col
		h-auto
		items-center
		sm:mx-auto
		w-auto
	`,
});

let TopBorder = styled(motion.div, {
	...tw`
		flex-grow
		h-px
		mx-36
		my-0
		top-0
	`,

	width: `calc(100% - ${2 * 18.75}rem)`,
});

let TypewritterParagraph = styled(Paragraph, {
	fontFamily: 'Karla',
	fontSize: '1.2rem',
	fontWeight: 100,
});

let Doing = styled(DiscordPresence, {
	...tw`
		bottom-0
		left-0
		mt-0
		mr-0
		mb-4
		ml-4
		fixed
	`,
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
					<Section.Container hero flex direction="col" justify="center" align="center">
						<MainTitleContainer>
							<Paragraph style={{ color: '#ffffff', fontSize: '2.4rem', fontWeight: 100 }}>
								<WavingHand/><span> Hello there</span>,
							</Paragraph>
							<Title main style={{ fontFamily: 'inter' }}>I'm Gabriel Spalato</Title>
							<TypewritterParagraph
								style={{ color: '#ffffff', fontSize: '1.8rem', padding: '.75rem 0 0 0' }}
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
					</Section.Container>
					<Section.Container flex direction="col" justify="center" align="center">
						<Section.Content>
							<MotionAnimate reset>
								<Title style={{ fontSize: '3rem', textAlign: 'center' }}>About</Title>
							</MotionAnimate>
							<Section.Spacing>
								<Grid columns={2}>
									<GridItemFullColumn>
										<Paragraph>
											Maybe I could put some skill-related stuff in this column?
										</Paragraph>
									</GridItemFullColumn>
									<GridItemFullColumn>
										<Paragraph
											style={{ textAlign: 'justify' }}
										>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
										</Paragraph>
									</GridItemFullColumn>
								</Grid>
							</Section.Spacing>
						</Section.Content>
					</Section.Container>
					<Section.Container flex direction="col" justify="center" align="center">
						<Section.Content>
							<MotionAnimate reset>
								<Title style={{ fontSize: '3rem', textAlign: 'center' }}>Projects</Title>
							</MotionAnimate>
							<Section.Spacing>
								<Card.Container
									image="https://images.unsplash.com/photo-1616878454012-966ce24cc4de?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
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