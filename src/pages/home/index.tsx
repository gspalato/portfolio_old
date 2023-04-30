import { motion } from 'framer-motion';

import Background from '@/components/Background';
import Page from '@/components/Page';

import Styles from './page.module.sass';

export default function Home() {
  return (
    <Page>
        <motion.div className={Styles.bubble}/>
    </Page>
  )
}