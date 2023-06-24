import { ApolloClient, InMemoryCache } from '@apollo/client';

const Client = new ApolloClient({
    uri: 'http://3.223.11.90:4000/gql',
    cache: new InMemoryCache(),
});

export default Client;