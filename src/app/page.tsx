'use client';

import { Default as Button, Gradient as GradientButton } from '@/components/Button';
import { motion } from 'framer-motion';

import Background from '@/components/Background';

export default function Home() {
  return (
    <>
        <Background src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=">
            <div style={{
                filter: 'blur(25px)',
                backgroundImage: 'linear-gradient(299deg, #010101 10%, #532ac2 55%, #c577e7)',
                borderRadius: '100%',
                height: '550px',
                width: '550px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
            }}/>
        </Background>
        <motion.div
            style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            
        </motion.div>
    </>
  )
}