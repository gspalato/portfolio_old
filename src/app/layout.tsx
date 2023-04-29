import { Inter, Karla, Space_Grotesk } from 'next/font/google';

import AnimateWrapper from '@/components/AnimatePresenceWrapper';
import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';

import '@/styles/globals.sass';

/* Fonts */
const inter = Inter({ subsets: ['latin'] });
const karla = Karla({ subsets: ['latin'] });
const space = Space_Grotesk({ subsets: ['latin'] });

const fontClasses = `${inter.className} ${karla.className} ${space.className}`;

export const metadata = {
  title: 'gabriel spalato',
  description: 'A developer portfolio.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={fontClasses}>
        <Cursor/>
        <Navbar />
        <AnimateWrapper>
          <div id="wrapper" style={{ height: '100%', width: '100%', position: 'relative' }}>
            <main id="content" style={{ height: '100%', width: '100%', position: 'relative', zIndex: 1 }}>
              {children}
            </main>
            <div id="background" style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }} />
          </div>
        </AnimateWrapper>
      </body>
    </html>
  )
}
