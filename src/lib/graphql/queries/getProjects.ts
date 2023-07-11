import { gql } from '@apollo/client';

import { Project } from '@/types/Project';

export const Query = gql`
	query {
		projects {
			name
			description
			iconUrl
			fallbackIconUrl
			bannerUrl
			fallbackBannerUrl
			repositoryUrl
			deploymentUrl
		}
	}
`;

export type ReturnType = { projects: Project[] };
