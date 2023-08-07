import Page from '@/components/Page';

import { useAuth } from '@/lib/auth';

const Component: React.FC = () => {
	const { user } = useAuth();

	return (
		<Page>
			<h1 className='text-gradient my-8 w-full text-center font-exotic !text-3xl font-bold @md/subpage:!text-4xl'>
				Welcome back, {user.Username}.
			</h1>
		</Page>
	);
};

Component.displayName = 'Overview';

export default Component;
