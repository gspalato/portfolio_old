import React from 'react';
import { Variants } from 'framer-motion';

import { Button } from '../Components/Button';
import { Card } from '../Components/Card';
import { Page } from '../Components/Page';

import DefaultIcon from '../Assets/img/icon.png';
import WondersLogo from '../Assets/img/wonders.png';
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

const cardVariants: Variants = {
    start: {
        opacity: 0,
        translateY: -50
    },
    end: (i: number) => ({
      opacity: 1,
      translateY: 0,
      transition: {
        ease: "easeInOut",
        duration: .75,
        delay: i * 0.3
      },
    }),
}

export const Projects: React.FC = () => {
    return (
        <Page className="flex justify-center items-center">
            <img src={MisfitsSwirl} className="absolute h-full w-full brightness-50" />
            <div className="absolute h-full w-full backdrop-blur-2xl bg-overlay-transparent" />
            <div className="h-max w-full grid grid-cols-1 gap-y-4
            md:grid-cols-5 auto-rows-fr pt-12 px-20 justify-center">
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
                            variants={cardVariants}>
					            <Button text="Repository" link={v.link}>
						            <i className="devicon-github-original my-auto
                                    leading-none text-lg text-offwhite pl-[0.4rem]" />
					            </Button>
				            </Card>
                        );
                    })
                }
            </div>
            {/*
            <div className="flex h-full w-full items-center justify-center">
				<PietileCarousel className="pc-center-children w-full" count={1}>
					<Card image={WondersLogo} title="Wonders" description="A rainmeter-like widget platform powered by Electron!">
						<Button text="Repository" link="https://github.com/wondersorg/wonders">
							<i className="devicon-github-original my-auto leading-none text-lg text-offwhite pl-[0.4rem]"></i>
						</Button>
					</Card>
					<Card image={DefaultIcon} title="Portfolio" description="My portfolio website, bootstrapped with Reactions.">
						<Button text="Repository" link="https://github.com/gspalato/portfolio">
							<i className="devicon-github-original my-auto leading-none text-lg text-offwhite pl-[0.4rem]"></i>
						</Button>
					</Card>
					<Card image={DefaultIcon} title="Reactions" description="A boilerplate for React projects using Webpack 5 and Typescript; preconfigured with TailwindCSS.">
						<Button text="Repository" link="https://github.com/gspalato/reactions">
							<i className="devicon-github-original my-auto leading-none text-lg text-offwhite pl-[0.4rem]"></i>
						</Button>
					</Card>
				</PietileCarousel>
			</div>
            */}
        </Page>
    );
}