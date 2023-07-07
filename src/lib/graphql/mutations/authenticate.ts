import { gql } from '@apollo/client';

import { AuthenticationPayload } from '@/types/AuthenticationPayload';

export const Mutation = gql`
	mutation ($user: String!, $pwd: String!) {
		authenticate(input: { username: $user, password: $pwd }) {
			authenticationPayload {
				successful
				token
				user {
					username
					roles
					id
				}
			}
		}
	}
`;

export type ReturnType = {
	authenticate: { authenticationPayload: AuthenticationPayload };
};
