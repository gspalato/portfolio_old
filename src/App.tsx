import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import styled from 'styled-components';

import { Store } from './Store/Store';

import { Home } from './Pages/Home';

import './index.css';

// Styles
let AppContainer = styled.div.attrs({
    className: "app h-full w-full",
})`
	background: transparent;
`;

// Main component
function App() {
    return (
        <Provider store={Store}>
            <AppContainer>
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
