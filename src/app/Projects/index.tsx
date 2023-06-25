import { useScroll, useTransform } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { Card } from '@/components/Card';
import Carousel from '@/components/Carousel';
import Page from '@/components/Page';

const Component = () => {
	const containerRef = React.useRef<HTMLDivElement | null>(null);
	const ghostRef = React.useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({ container: containerRef });
	const x = useTransform(scrollYProgress, [0, 1], [0, 600]);

	const [scrollWidth, setScrollWidth] = useState(0);

	useEffect(() => {
		console.log(scrollWidth);
	}, []);

	return (
		<Page className='block pt-[5rem]'>
			<section className='sticky flex h-[calc(100vh-5rem)] w-full flex-col items-center justify-center bg-transparent'>
				<h1 className='text-gradient w-full text-center font-exotic text-5xl font-bold md:my-[1.5] md:text-7xl'>
					Projects
				</h1>
				<div className='sticky h-[30rem] w-full px-8'>
					<Carousel
						scrollWidthSetter={setScrollWidth}
						animate={{ x: -x }}
						className='h-[30rem] w-full will-change-transform'
					>
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
						<Card />
					</Carousel>
				</div>
			</section>
		</Page>
	);
};

export default Component;
