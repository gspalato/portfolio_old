import React from 'react';
import { motion, Variants } from 'framer-motion';

import Page from '../Components/Page';
import Section from '../Components/Section';
import Timeline from '../Components/Timeline';
import TimelineEntry from '../Components/TimelineEntry';
import WindowRepresentation from '../Components/WindowRepresentation';

import ColorBrush2 from '../Assets/img/color_brush_2.png';


// Other Components
interface IGridLogoProps {
	children: string;
}

const GridLogo: React.FC<IGridLogoProps> = ({ children }) => {
	return (
		<i className={`${children} colored text-center w-fit place-self-center`}></i>
	);
}

// Main Components
const fadeInLeftVariants: Variants = {
  start: {
    opacity: 0,
    translateX: 50
  },
  end: (i: number) => ({
    opacity: 1,
    translateX: 0,
    transition: {
      ease: "easeInOut",
      duration: .75,
      delay: i * 0.3
    },
  }),
}

const About: React.FC = () => {
  return (
    <Page className="flex flex-col">
			<img src={ColorBrush2} className="absolute block h-full mx-auto brightness-50" />
			<div className="mt-[5.5rem] md:mt-0 flex flex-col items-center justify-center h-screen w-full">
				<div className="flex items-center justify-center flex-1 w-full h-full">
					<div className="grid flex-1 w-full h-auto grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2">
						<div className="flex flex-col items-center justify-center flex-auto w-auto h-auto p-6">
							<h1 className="z-10 pb-20 text-4xl font-bold font-display text-offwhite">Experience</h1>
							<div className="h-fit w-fit">
								<Timeline>
									<TimelineEntry 
									date="January 2011 - December 2022"
									title="Colégio Adventista de Tatuí"
									description="Coursed primary, middle & high school."/>
									<TimelineEntry 
									date="January 2022 - December 2022"
									title="SENAI"
									description="Coursing Conventional Machining Mechanics to graduate as professional."
									last/>
								</Timeline>
							</div>
						</div>
						<motion.div
						className="flex items-center justify-center flex-auto w-auto h-auto pt-10 md:pt-0"

						initial="start"
						animate="end"
						exit="start"
						variants={fadeInLeftVariants}>
							<WindowRepresentation className="mb-6 md:mb-0">
								<div className="grid grid-cols-5 gap-6 p-6 text-5xl auto-rows-fr text-offwhite">
									<GridLogo>devicon-javascript-plain</GridLogo>
									<GridLogo>devicon-typescript-plain</GridLogo>
									<GridLogo>devicon-nodejs-plain</GridLogo>
									<GridLogo>devicon-lua-plain</GridLogo>
									<GridLogo>devicon-react-original</GridLogo>
									<GridLogo>devicon-html5-plain</GridLogo>
									<GridLogo>devicon-css3-plain</GridLogo>
									<GridLogo>devicon-tailwindcss-plain</GridLogo>
									<GridLogo>devicon-csharp-plain</GridLogo>
									<GridLogo>devicon-dotnetcore-plain</GridLogo>
									<GridLogo>devicon-git-plain</GridLogo>
									<GridLogo>devicon-photoshop-plain</GridLogo>
									<GridLogo>devicon-electron-original</GridLogo>
									<GridLogo>devicon-mongodb-plain</GridLogo>
								</div>
							</WindowRepresentation>
						</motion.div>
					</div>
				</div>
			</div>
    </Page>
  );
}

export default About;