import { RotatingLines } from 'react-loader-spinner';

import Page from '@components/Page';

const Component: React.FC = () => {
	return (
		<Page>
			<section className='text-foreground bg-black'>
				<RotatingLines
					strokeColor='grey'
					animationDuration='1.5'
					strokeWidth='4'
					width='25'
				/>
			</section>
		</Page>
	);
};

Component.displayName = 'Loading';

export default Component;
