import {
	ApolloClient,
	ApolloLink,
	HttpLink,
	InMemoryCache,
	NormalizedCacheObject,
	from,
} from '@apollo/client';
import { useMemo } from 'react';

import { useAuth } from '@lib/auth';

import { GATEWAY_URL } from '@/constants';

const ApiLink = new HttpLink({ uri: GATEWAY_URL });

const AuthMiddleware = (token: string) =>
	new ApolloLink((operation, forward) => {
		if (token) {
			operation.setContext({
				headers: {
					authorization: `Bearer ${token}`,
				},
			});
		}

		return forward(operation);
	});

export const useRealityClient = () => {
	const { token, isTokenValid } = useAuth();

	const client = useMemo<ApolloClient<NormalizedCacheObject>>(() => {
		return new ApolloClient({
			link:
				token && isTokenValid
					? from([AuthMiddleware(token), ApiLink])
					: ApiLink,
			cache: new InMemoryCache(),
		});
	}, [token]);

	return client;
};

const Client = new ApolloClient({
	link: ApiLink,
	cache: new InMemoryCache(),
});

export default Client;
