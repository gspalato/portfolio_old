import { useEffect } from 'react';

import Page from '@components/Page';
import { Tab, Tabs } from '@components/Tabs';

import { useLayout } from '@lib/layout';
import { usePortrait } from '@lib/portrait';

import { Sidebar } from './components/Sidebar';
import CronJobsPage from './pages/CronJobs';
import DeploysPage from './pages/Deploys';
import OverviewPage from './pages/Overview';
import RefillStationPage from './pages/RefillStation';

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

	return (
		<Page className='flex flex-row items-center !justify-start !gap-0 pt-8 !font-title md:pt-0'>
			<Tabs defaultTab='UPx Refill Station'>
				{!isPortrait && <Sidebar />}
				<div className='flex h-full flex-1 flex-col'>
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
