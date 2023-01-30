import React from 'react';

import Background from '../Components/Background';
import Button from '../Components/Button';
import Card from '../Components/Card';
import NavbarSpacer from '../Components/NavbarSpacer';
import Page from '../Components/Page';

import { defaultFadeInDownVariants } from '../AnimationVariants';

import DefaultIcon from '../Assets/img/icon.png';
import WondersLogo from '../Assets/img/wonders.jpg';
import RealityLogo from '../Assets/img/reality.png';


// Import with a preset style
const MisfitsSwirl = require('../Assets/img/m_liquid.png?preset=xlblur');

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
    <Page compensateNavbar className="flex flex-col items-center justify-center overflow-hidden">
      <Background src={MisfitsSwirl} darkOverlay />
      <NavbarSpacer />
      <div className="grid md:flex md:flex-row md:flex-wrap md:justify-center md:items-center md:content-center
      h-[calc(100vh-5.5rem)] pb-12 md:pb-0 md:px-20 overflow-y-scroll last:mr-0 md:first:mt-4 gap-8">
        {
          ProjectsList.map((v, i) => {
            return (
              <Card
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