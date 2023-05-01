import { motion } from 'framer-motion';
import useFitText from 'use-fit-text';

import Background from '@/components/Background';
import Page from '@/components/Page';

import Styles from './home.module.sass';

export default function Home() {
  	return (
    	<Page>
			<Background src="">
				{/* <motion.div className={Styles.bubble} /> */}
			</Background>
			<section className={Styles.content}>
				<div className={Styles.textContainer}>
					<h1 className={Styles.heroText}>full-stack</h1>
					<h1 className={Styles.heroText}>developer</h1>
					<h1 className={Styles.heroText}>& designer</h1>
				</div>
			</section>
    	</Page>
  	)
}