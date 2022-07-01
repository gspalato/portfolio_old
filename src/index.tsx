import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import App from './App';

import Cursor from './Components/Cursor';
import Doing from './Components/Doing';

import './index.css';


ReactDOM.render(
	<main className="antialiased h-max
selection:bg-darkblue selection:text-offwhite/90">
    <Router>
			<App />
		</Router>
		<div className="hidden md:block fixed left-4 bottom-4">
			<Doing setActive={() => {}} />
		</div>
		<Cursor/>
	</main>,
	document.getElementById('root')
);
