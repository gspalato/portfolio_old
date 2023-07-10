import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

import { GATEWAY_URL } from '@/constants';

const ApiLink = new HttpLink({ uri: GATEWAY_URL });

export const useRealityClient = () => {
	const client = new ApolloClient({
		link: ApiLink,
		cache: new InMemoryCache(),
	});

	return client;
};

const Client = new ApolloClient({
	link: ApiLink,
	cache: new InMemoryCache(),
});

export default Client;
