import React from 'react';
import { motion, Variants } from 'framer-motion';
import { v4 as uuid } from 'uuid';

import { Button } from '../Components/Button';
import { Card } from '../Components/Card';
import { Page } from '../Components/Page';

import { defaultFadeInDownVariants } from '../AnimationVariants';

import DefaultIcon from '../Assets/img/icon.png';
import WondersLogo from '../Assets/img/wonders.jpg';
import MisfitsSwirl from '../Assets/img/misfits_swirl.png';


// Main Components
const ProjectsList = [
    {
        title: 'Wonders',
        description: 'A rainmeter-like widget platform powered by Electron!',
        link: 'https://github.com/wondersorg/wonders',
        image: WondersLogo
    },
    {
        title: 'Portfolio',
        description: 'My portfolio website, bootstrapped with Reactions.',
        link: 'https://github.com/wondersorg/portfolio',
        image: DefaultIcon
    },
    {
        title: 'Reactions',
        description: 'A boilerplate for React projects using Webpack 5 and Typescript; preconfigured with TailwindCSS.',
        link: 'https://github.com/wondersorg/reactions',
        image: DefaultIcon
    },
]

export const Projects: React.FC = () => {
  return (
    <Page className="flex justify-center items-center">
      <motion.img
			src={MisfitsSwirl}
			className="absolute h-full w-full brightness-0"
      key={uuid()}

			initial={{ opacity: 0 }}
			animate={{ opacity: 1, filter: "brightness(0.5)" }}
			exit={{ opacity: 0 }}
			transition={{ delay:.5, duration: 0.75 }}
			/>
      <div className="absolute backdrop-blur-2xl h-full w-full bg-overlay-transparent" />
      <div className="min-h-full md:min-h-0 md:h-max w-full grid grid-cols-1 gap-y-4
      md:grid-cols-5 auto-rows-fr pt-12 pb-12 md:pb-0 md:px-20 justify-center
      justify-items-center overflow-y-scroll">
        {
          ProjectsList.map((v, i) => {
            return (
              <Card
              className=""
              image={v.image}
              title={v.title}
              description={v.description}
                            
              custom={i}
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