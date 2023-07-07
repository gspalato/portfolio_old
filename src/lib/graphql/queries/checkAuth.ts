import { gql } from '@apollo/client';

import { CheckAuthenticationPayload } from '@/types/CheckAuthenticationPayload';
import { Has } from '@/types/Has';

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

export type ReturnType = Has<'checkAuthentication', CheckAuthenticationPayload>;
