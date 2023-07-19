import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useFoundationClient } from '@lib/graphql/client';

import App from './App';

const Component = () => {
	const client = useFoundationClient();

	return (
		<React.StrictMode>
			<BrowserRouter>
				<ApolloProvider client={client}>
					<App />
				</ApolloProvider>
			</BrowserRouter>
		</React.StrictMode>
	);
};

export default Component;
