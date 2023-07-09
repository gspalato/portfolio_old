import Page from '@components/Page';

const Component: React.FC = () => {
	return (
		<Page>
			<section className='bg-black text-foreground'>
				<h1 className='font-display text-4xl font-bold'>Loading...</h1>
			</section>
		</Page>
	);
};

Component.displayName = 'Loading';

export default Component;
