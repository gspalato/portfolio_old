import { gql } from '@apollo/client';

import { Has } from '@/types/Has';
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

export type ReturnType = Has<'uses', Use[]>;
