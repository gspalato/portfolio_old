import React from 'react';
import { motion, Variants } from 'framer-motion';

import NavbarSpacer from '../Components/NavbarSpacer';
import Page from '../Components/Page';
import Timeline from '../Components/Timeline';
import TimelineEntry from '../Components/TimelineEntry';
import WindowRepresentation from '../Components/WindowRepresentation';
import Background, { ImageFit } from '../Components/Background';

import ColorBrush from '../Assets/img/color_brush_2.png';

// Other Components
interface IGridLogoProps {
	id: string;
}

const GridLogo: React.FC<IGridLogoProps> = ({ id }) => {
	return (
		<i className={`${id} colored text-center w-fit place-self-center`}></i>
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
    <Page className="flex flex-col md:flex-row md:items-center md:justify-center">
		<Background src={ColorBrush} fit={ImageFit.cover} />
		<NavbarSpacer className="md:hidden"/>
		<div className="m-6 md:w-[40%] md:px-10">
			<h1 className="w-full text-center md:text-left text-white font-bold text-4xl pt-6 pb-12">Experience</h1>
			<Timeline>
				<TimelineEntry 
					date="January 2011 - December 2022"
					title="Colégio Adventista de Tatuí"
					description="Coursed and graduated primary, middle & high school."
				/>
				<TimelineEntry 
					date="January 2022 - December 2022"
					title="SENAI"
					description="Graduated as a Conventional Machining Mechanic."
				/>
				<TimelineEntry 
					date="February 2023 - December 2027"
					title="FACENS"
					description="Coursing Computer Engineering for 10 semesters."
					last
				/>
			</Timeline>
		</div>

		<WindowRepresentation className="m-6 md:m-0 md:px-10 md:w-fit">
			<div className="grid grid-cols-5 gap-6 p-6 text-5xl auto-rows-fr text-offwhite">
				<GridLogo id="devicon-javascript-plain" />
				<GridLogo id="devicon-typescript-plain" />
				<GridLogo id="devicon-nodejs-plain" />
				<GridLogo id="devicon-lua-plain" />
				<GridLogo id="devicon-react-original" />
				<GridLogo id="devicon-html5-plain" />
				<GridLogo id="devicon-css3-plain" />
				<GridLogo id="devicon-tailwindcss-plain" />
				<GridLogo id="devicon-csharp-plain" />
				<GridLogo id="devicon-dotnetcore-plain" />
				<GridLogo id="devicon-git-plain" />
				<GridLogo id="devicon-photoshop-plain" />
				<GridLogo id="devicon-electron-original" />
				<GridLogo id="devicon-mongodb-plain" />
			</div>
		</WindowRepresentation>
    </Page>
  );
}

export default About;