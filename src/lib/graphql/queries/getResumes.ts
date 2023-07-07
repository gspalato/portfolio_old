import { gql } from '@apollo/client';

import { Resume } from '@/types/Resume';

export const Query = gql`
	query {
		resumes {
			timestamp
			totalUses
			totalDuration
			distributedWater
			economizedPlastic
			bottleQuantityEquivalent
		}
	}
`;

export type ReturnType = { resumes: Resume[] };
