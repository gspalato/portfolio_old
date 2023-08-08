import { useEffect, useLayoutEffect, useMemo, useState } from 'react';

import Page from '@components/Page';
import { Tab, Tabs } from '@components/Tabs';

import { useLayout, usePortrait } from '@lib/layout';
import '@lib/utils/array.extensions';

import { useAuth } from '@/lib/auth';
import classes from '@/lib/classes';

import { DashboardNavbar } from './components/DashboardNavbar';
import CronJobsPage from './pages/CronJobs';
import DeploysPage from './pages/Deploys';
import OverviewPage from './pages/Overview';
import RefillStationPage from './pages/RefillStation';
import { SubpageDefinition, Subpages } from './subpages';

const Component: React.FC = () => {
	const isPortrait = usePortrait();

	const { user } = useAuth();

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

	const AllSubpages = useMemo(() => {
		return Object.values(Subpages)
			.flatMap((s) => s)
			.filter((s) => s.roles.intersects(user.Roles));
	}, [Subpages, user]);

	return (
		<Page className={classNames}>
			<Tabs defaultTab='UPxRefillStation'>
				<DashboardNavbar position={isPortrait ? 'bottom' : 'side'} />
				<div className={contentClassNames}>
					{/*
					<Tab value='Overview'>
						<OverviewPage />
					</Tab>

					<Tab value='Deploys'>
						<DeploysPage />
					</Tab>

					<Tab value='CronJobs'>
						<CronJobsPage />
					</Tab>

					<Tab
						value='UPxRefillStation'
						className='h-full min-h-full min-w-full'
					>
						<RefillStationPage />
					</Tab>
					*/}
					{AllSubpages.map((subpage) => {
						return (
							<Tab
								value={subpage.id}
								className={subpage.className}
								key={`${subpage.id}|Tab`}
							>
								{subpage.component}
							</Tab>
						);
					})}
				</div>
			</Tabs>
		</Page>
	);
};

Component.displayName = 'Dashboard';

export default Component;
