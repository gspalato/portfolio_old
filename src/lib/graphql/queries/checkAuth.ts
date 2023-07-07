import { gql } from '@apollo/client';

import { CheckAuthenticationPayload } from '@/types/CheckAuthenticationPayload';

export const Query = gql`
	query ($token: String!) {
		checkAuthentication {
			successful
			user {
				username
			}
		}
	}
`;

export type ReturnType = { checkAuthentication: CheckAuthenticationPayload };
