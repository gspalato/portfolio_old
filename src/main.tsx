import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import Client from '@/lib/graphql/client';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ApolloProvider client={Client}>
				<App />
			</ApolloProvider>
		</BrowserRouter>
	</React.StrictMode>
);
