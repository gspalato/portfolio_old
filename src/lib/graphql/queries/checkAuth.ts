import { gql } from '@apollo/client';

import { Has } from '@/types/Has';
import { IsAuthenticatedPayload } from '@/types/IsAuthenticatedPayload';

export const Query = gql`
	query ($token: String!) {
		isAuthenticated(token: $token) {
			successful
			roles
		}
	}
`;

export type ReturnType = Has<'isAuthenticated', IsAuthenticatedPayload>;
