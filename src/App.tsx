import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';

import { Home } from './Pages/Home';
import { Links } from './Pages/Links';
import { Projects } from './Pages/Projects';

import ArrowDown from "../Assets/img/arrow_down.svg";
import ColorBrush1 from "../Assets/img/color_brush_1.png";
import ColorBrush2 from "../Assets/img/color_brush_2.png";
import ProfilePicture from "../Assets/img/selfie.png";
import MisfitsSwirl from "../Assets/img/misfits_swirl.png";
import WondersLogo from "../Assets/img/wonders.png";
import DefaultIcon from "../Assets/img/icon.png";

import { PreloadImages } from './Assets';

import './index.css';
import './tailwind.css';


const App: React.FC = () => {
  const location = useLocation();
  const [ isLoading, setIsLoading ] = useState(false);

  /*
  useEffect(() => {
    PreloadImages([
      ColorBrush1, ColorBrush2,
      DefaultIcon, MisfitsSwirl,
      ProfilePicture, WondersLogo
    ], () => { setIsLoading(false) })
  }, []);
  */

  if (isLoading)
    return (
      <>
      </>
    );
  else
    return (
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
    	</Switch>
	  );
}

export default App;
