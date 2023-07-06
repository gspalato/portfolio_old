import { gql } from '@apollo/client';

import { Has } from '@/types/Has';
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

export type ReturnType = Has<'resumes', Resume[]>;
