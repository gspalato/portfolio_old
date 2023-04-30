import { motion } from 'framer-motion';

import Background from '@/components/Background';
import Page from '@/components/Page';

import Styles from './home.module.sass';

export default function Home() {
  return (
    <Page>
        <motion.div className={Styles.bubble}/>
    </Page>
  )
}