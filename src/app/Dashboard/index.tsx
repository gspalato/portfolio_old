import { useEffect } from 'react';

import Page from '@components/Page';
import { Tab, Tabs } from '@components/Tabs';

import { useLayout, usePortrait } from '@lib/layout';

import { DashboardNavbar } from './components/DashboardNavbar';
import CronJobsPage from './pages/CronJobs';
import DeploysPage from './pages/Deploys';
import OverviewPage from './pages/Overview';
import RefillStationPage from './pages/RefillStation';
import classes from '@/lib/classes';

const Component: React.FC = () => {
	const isPortrait = usePortrait();

	const {
		enableDefaultNavbar,
		disableDefaultNavbar,
		enableContentScrolling,
		disableContentScrolling,
	} = useLayout();

	useEffect(() => {
		enableContentScrolling();
		disableDefaultNavbar();

		return () => {
			disableContentScrolling();
			enableDefaultNavbar();
		};
	});

	const classNames = classes(
		'flex items-center !justify-start !gap-0 pt-8 !font-title md:pt-0',
		isPortrait ? 'flex-col-reverse' : 'flex-row'
	);

	const contentClassNames = classes(
		'flex h-full flex-1 flex-col @container/subpage',
		isPortrait && 'w-full'
	);

	return (
		<Page className={classNames}>
			<Tabs defaultTab='UPx Refill Station'>
				<DashboardNavbar position={isPortrait ? 'bottom' : 'side'} />
				<div className={contentClassNames}>
					<Tab value='Overview'>
						<OverviewPage />
					</Tab>

					<Tab value='Service Catalog'></Tab>

					<Tab value='Flow'></Tab>

					<Tab value='Deploys'>
						<DeploysPage />
					</Tab>

					<Tab value='Cron Jobs'>
						<CronJobsPage />
					</Tab>

					{/* Projects */}
					<Tab
						className='h-full min-h-full min-w-full'
						value='UPx Refill Station'
					>
						<RefillStationPage />
					</Tab>
				</div>
			</Tabs>
		</Page>
	);
};

export default Component;
