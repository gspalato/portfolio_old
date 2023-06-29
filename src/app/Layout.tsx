import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useRealityClient } from '@/lib/graphql/client';

import App from './App';

const Component = () => {
	const client = useRealityClient();

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
