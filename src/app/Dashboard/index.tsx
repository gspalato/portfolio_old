import { useEffect } from 'react';

import Page from '@components/Page';
import { Tab, Tabs } from '@components/Tabs';

import { useLayout, usePortrait } from '@lib/layout';
import '@lib/utils/array.extensions';

import { useAuth } from '@/lib/auth';
import classes from '@/lib/classes';

import { DashboardNavbar } from './components/DashboardNavbar';
import { Subpages } from './subpages';

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

	const AllSubpages = [ ...Subpages.base, ...Subpages.project ];

	return (
		<Page className={classNames}>
			<Tabs defaultTab='UPx Refill Station'>
				<DashboardNavbar position={isPortrait ? 'bottom' : 'side'} />
				<div className={contentClassNames}>
					{AllSubpages
						.filter((s) => s.roles.intersects(user.Roles))
						.map((subpage) => {
							return (
								<Tab
									value={subpage.id}
									className={subpage.className}
									key={subpage.id}
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
