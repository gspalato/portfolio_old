import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { Home } from './Pages/Home';
import { Links } from './Pages/Links';

import './index.css';


const App: React.FC = () => {
    return (
        <main className="bg-black-25">
            <AnimatePresence exitBeforeEnter>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/links"/>
                            {/* Home isn't finished yet, so redirect to links. */}
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
        </main>
    );
}

export default App;
