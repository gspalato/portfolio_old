import Page from '@/components/Page';

const Component: React.FC = () => {
	return (
		<Page>
			<h1 className='text-gradient my-8 w-full text-center font-exotic !text-xl font-bold md:!text-4xl'>
				Deployments
			</h1>
		</Page>
	);
};

Component.displayName = 'Deploys';

export default Component;
