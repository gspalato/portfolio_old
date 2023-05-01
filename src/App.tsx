import { Route, Routes, useLocation, } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from '@/pages/home';
import About from '@/pages/about';
import Projects from "@/pages/projects";

import Cursor from '@/components/Cursor';
import Navbar from '@/components/Navbar';

import '@/styles/globals.sass';

const App: React.FC = () => {
    const location = useLocation();

    return (
        <>
            <Cursor/>
            <Navbar />
            <div id="wrapper" style={{ height: '100%', width: '100%', position: 'relative' }}>
                <main id="content" style={{ height: '100%', width: '100%', position: 'relative', zIndex: 1 }}>
                    <AnimatePresence mode='wait'>
                        <Routes location={location} key={location.pathname}>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </AnimatePresence>
                </main>
                <div id="background" style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0 }} />
            </div>
        </>
    )
}

export default App;