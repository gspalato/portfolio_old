import { gql } from '@apollo/client';

import { Use } from '@/types/Use';

export const Query = gql`
	query {
		uses {
			startTimestamp
			endTimestamp
			duration
			distributedWater
			economizedPlastic
			bottleQuantityEquivalent
		}
	}
`;

export type ReturnType = { uses: Use[] };
