'use client';

import { Default as Button, Gradient as GradientButton } from '@/components/Button';
import { motion } from 'framer-motion';

import Background from '@/components/Background';

import Styles from './page.module.sass';

export default function Home() {
  return (
    <>
        <Background src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=">
            <motion.div className={Styles.bubble}/>
        </Background>
        <motion.div
            className={Styles.contentWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            
        </motion.div>
    </>
  )
}