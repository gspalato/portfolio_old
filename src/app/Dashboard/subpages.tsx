import {
	faArrowRightFromBracket,
	faBolt,
	faClock,
	faCompass,
	faDroplet,
	faHouse,
	faLayerGroup,
	faRocket,
	IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

import CronJobsPage from './pages/CronJobs';
import DeploysPage from './pages/Deploys';
import OverviewPage from './pages/Overview';
import RefillStationPage from './pages/RefillStation';

type SubpageCollection = {
	[key: string]: SubpageDefinition[];
}

type SubpageDefinition = {
	name: string;
	id: string;
	icon: IconDefinition;
	component: JSX.Element;
	roles: number[];
	type: 'base' | 'project';
	className?: string;
};

const Subpages: SubpageCollection = {
	base: [
		{
			name: 'Overview',
			id: 'Overview',
			icon: faHouse,
			component: <OverviewPage />,
			roles: [0, 1],
			type: 'base',
		},
		{
			name: 'Service Catalog',
			id: 'Service Catalog',
			icon: faLayerGroup,
			component: <></>,
			roles: [0, 1],
			type: 'base',
		},
		{
			name: 'Flow',
			id: 'Flow',
			icon: faBolt,
			component: <></>,
			roles: [0, 1],
			type: 'base',
		},
		{
			name: 'Deploys',
			id: 'Deploys',
			icon: faRocket,
			component: <DeploysPage />,
			roles: [0, 1],
			type: 'base',
		},
		{
			name: 'Cron Jobs',
			id: 'Cron Jobs',
			icon: faClock,
			component: <CronJobsPage />,
			roles: [0, 1],
			type: 'base',
		}
	],
	project: [
		{
			name: 'UPx Refill Station',
			id: 'UPx Refill Station',
			icon: faDroplet,
			component: <RefillStationPage />,
			roles: [0, 1, 2],
			type: 'project',
			className: 'h-full min-h-full min-w-full',
		}
	]
};

export type { SubpageDefinition };
export { Subpages };
