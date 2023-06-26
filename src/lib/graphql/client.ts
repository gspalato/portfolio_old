import {
	ApolloClient,
	InMemoryCache,
	ApolloLink,
	HttpLink,
	NormalizedCacheObject,
	from,
} from '@apollo/client';
import { useMemo } from 'react';

import { useAuth } from '@/lib/auth/useAuth';

const ApiLink = new HttpLink({ uri: 'http://3.223.11.90/api' });

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
	const { token } = useAuth();

	const client = useMemo<ApolloClient<NormalizedCacheObject>>(() => {
		return new ApolloClient({
			link: token ? from([AuthMiddleware(token), ApiLink]) : ApiLink,
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
