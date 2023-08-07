import Page from '@/components/Page';

const Component: React.FC = () => {
	return (
		<Page>
			<h1 className='text-gradient my-8 w-full text-center font-exotic !text-3xl font-bold @md/subpage:!text-4xl'>
				Cron Jobs
			</h1>
		</Page>
	);
};

Component.displayName = 'Deploys';

export default Component;
