import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';

import Navbar from './Partials/Navbar';

import Palette from './Components/CommandPalette';

import ColorBrush1 from "./Assets/img/color_brush_1.png";
import ColorBrush2 from "./Assets/img/color_brush_2.png";
import ProfilePicture from "./Assets/img/selfie.png";
import MisfitsSwirl from "./Assets/img/m_liquid.png";
import WondersLogo from "./Assets/img/wonders.png";
import DefaultIcon from "./Assets/img/icon.png";

import { PreloadImages } from './Assets';

import './index.css';
import './tailwind.css';



// Main Component
const App: React.FC = () => {
  const location = useLocation();
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    PreloadImages([
      ColorBrush1, ColorBrush2,
      DefaultIcon, MisfitsSwirl,
      ProfilePicture, WondersLogo
    ], () => { setIsLoaded(true) })
  }, []);

  return (
    isLoaded
    ? (
      <>
        <div id="background" className="absolute h-full w-full overflow-hidden" />
        <Navbar />
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Navigate to="/" />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
      	  </Routes>
          {/* <Palette/> */}
        </AnimatePresence>
      </>
    )
    : (
      <motion.div
      className="flex items-center justify-center w-screen h-screen"
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      >
        <h1 className="text-3xl text-white font-detail">Loading...</h1>
      </motion.div>
    )
  );
}

export default App;
