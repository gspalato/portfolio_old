import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';

import { Home } from './Pages/Home';
import { Projects } from './Pages/Projects';
import { About } from './Pages/About';

import ColorBrush1 from "./Assets/img/color_brush_1.png";
import ColorBrush2 from "./Assets/img/color_brush_2.png";
import ProfilePicture from "./Assets/img/selfie.png";
import MisfitsSwirl from "./Assets/img/misfits_swirl.png";
import WondersLogo from "./Assets/img/wonders.png";
import DefaultIcon from "./Assets/img/icon.png";

import { PreloadImages } from './Assets';

import './index.css';
import './tailwind.css';


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

  if (!isLoaded)
    return (
      <motion.div
      className="flex justify-center items-center"
      
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.75 }}
      >
        <h1 className="font-detail text-3xl text-white">Loading...</h1>
      </motion.div>
    );
  else
    return (
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
    	  </Switch>
      </AnimatePresence>
	  );
}

export default App;
