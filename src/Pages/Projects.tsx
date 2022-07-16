import React from 'react';
import { motion } from 'framer-motion';
import { v4 as uuid } from 'uuid';

import Button from '../Components/Button';
import Card from '../Components/Card';
import Page from '../Components/Page';

import { defaultFadeInDownVariants } from '../AnimationVariants';

import DefaultIcon from '../Assets/img/icon.png';
import WondersLogo from '../Assets/img/wonders.jpg';
import RealityLogo from '../Assets/img/reality.png';

// Import with a preset style
const MisfitsSwirl = require('../Assets/img/misfits_swirl.png?preset=xlblur');

// Main Components
const ProjectsList = [
    {
      title: 'Reality',
      description: 'My WIP platform and back-end for my projects and deployments.',
      link: 'https://github.com/gspalato/reality',
      image: RealityLogo
    },
    {
      title: 'Wonders',
      description: 'A rainmeter-like widget platform powered by Electron!',
      link: 'https://github.com/wondersorg/wonders',
      image: WondersLogo
    },
    {
      title: 'Portfolio',
      description: 'My portfolio website, bootstrapped with Reactions.',
      link: 'https://github.com/gspalato/portfolio',
      image: DefaultIcon
    },
    {
      title: 'Reactions',
      description: 'A boilerplate for React projects using Webpack 5 and Typescript; preconfigured with TailwindCSS.',
      link: 'https://github.com/gspalato/reactions',
      image: DefaultIcon
    },
]

const Projects: React.FC = () => {
  return (
    <Page className="flex items-center justify-center">
      <motion.img
			src={MisfitsSwirl}
			className="absolute w-full h-full brightness-0"
      key={uuid()}

			initial={{ opacity: 0 }}
			animate={{ opacity: 1, filter: "brightness(0.5)" }}
			exit={{ opacity: 0 }}
			transition={{ delay:.5, duration: 0.75 }}
			/>
      <div className="absolute w-full h-full bg-overlay-transparent" />
      {/*<div className="min-h-0 md:min-h-0 md:h-max w-full grid grid-cols-1 gap-y-4
      md:grid-cols-5 auto-rows-fr mt-[4.125rem] pb-12 md:pb-0 md:px-20 justify-center
      justify-items-center overflow-y-scroll h-[calc(100vh-4.125rem)] max-h-max">*/}
      <div className="grid md:flex md:flex-row md:flex-wrap md:justify-center md:items-center md:content-center
      mt-[4.125rem] pb-12 md:pb-0 md:px-20 md:-mt-4 overflow-y-scroll h-[calc(100vh-4.125rem)] max-h-max
      last:mr-0 md:first:mt-4">
        {
          ProjectsList.map((v, i) => {
            return (
              <Card
              className="mt-8 md:mr-8"
              image={v.image}
              title={v.title}
              description={v.description}
                            
              key={i}
              initial="start"
              animate="end"
              exit="start"
              variants={defaultFadeInDownVariants}>
                <Button text="Repository" link={v.link}>
						      <i className="devicon-github-original my-auto
                  leading-none text-lg text-offwhite pl-[0.4rem]" />
					      </Button>
				      </Card>
            );
          })
        }
  	  </div>
  	</Page>
  );
}

export default Projects;