import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { Home } from './Pages/Home';
import { Links } from './Pages/Links';

import { DefaultNavbar } from './Partials/DefaultNavbar';
import { NavbarItem } from './Partials/NavbarItem';

import { Cursor } from './Components/Cursor';

import './index.css';
import './tailwind.css';


const App: React.FC = () => {
    return (
        <main className="antialiased bg-scheme-background h-max">
            <AnimatePresence exitBeforeEnter>
                <DefaultNavbar>
					<NavbarItem link="https://www.instagram.com/gabriel.spalato/">
						<i className="fa-brands fa-instagram fa-lg"></i>
					</NavbarItem>
					<NavbarItem link="https://github.com/gspalato">
						<i className="fa-brands fa-github fa-lg"></i>
					</NavbarItem>
					<NavbarItem link="https://open.spotify.com/user/oubhvljhzyudfbxyx20opzxhq">
						<i className="fa-brands fa-spotify fa-lg"></i>
					</NavbarItem>
					<NavbarItem link="https://www.linkedin.com/in/gabriel-marques-3aa183a8/">
						<i className="fa-brands fa-linkedin fa-lg"></i>
					</NavbarItem>
				</DefaultNavbar>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/home">
                            <Home />
                        </Route>
                        <Route exact path="/links">
                            <Links />
                        </Route>
                    </Switch>
                </Router>
            </AnimatePresence>
            <Cursor/>
        </main>
    );
}

export default App;
