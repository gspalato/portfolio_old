import { motion } from 'framer-motion';

import Background from '@/components/Background';

import Styles from './page.module.sass';

export default function Home() {
  return (
    <motion.div
        className={Styles.contentWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
    >
        <motion.div className={Styles.bubble}/>
    </motion.div>
  )
}