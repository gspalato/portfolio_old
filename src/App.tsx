import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Store } from "./Store/Store";
import { styled } from './stitches.config';

import { Home } from './Pages/Home';
import { AnimatePresence } from 'framer-motion';
import CursorProvider from './Components/Providers/CursorProvider';

// Styles
let AppContainer = styled('div', {
	background: '$black',
	height: '100%',
	width: '100%',
});

// Main component
function App() {
    return (
        <Provider store={Store}>
            <AppContainer className="app">
                <AnimatePresence exitBeforeEnter>
                    <Router>
                        <Switch>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Router>
                </AnimatePresence>
            </AppContainer>
        </Provider>
    );
}

export default App;
