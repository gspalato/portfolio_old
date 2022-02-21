import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import App from './App';

import { DefaultNavbar as Navbar } from './Partials/DefaultNavbar';
import { NavbarItem } from "./Partials/NavbarItem";

import { Cursor } from './Components/Cursor';
import { DiscordPresence } from './Components/DiscordPresence';

import './index.css';


ReactDOM.render(
	<main className="antialiased h-max
selection:bg-darkblue selection:text-offwhite/90">
    <Router>
			<Navbar/>
			<App />
		</Router>
		<div className="hidden md:block fixed left-4 bottom-4">
			<DiscordPresence setActive={() => {}} />
		</div>
		<Cursor/>
	</main>,
	document.getElementById('root')
);
