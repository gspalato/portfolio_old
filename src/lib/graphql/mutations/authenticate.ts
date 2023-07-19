import { gql } from '@apollo/client';

import { AuthenticationPayload } from '@/types/AuthenticationPayload';

export const Mutation = gql`
	mutation Authenticate($username: String!, $password: String!) {
		authenticate(username: $username, password: $password) {
			successful
			token
			error
		}
	}
`;

export type ReturnType = {
	authenticate: AuthenticationPayload;
};
