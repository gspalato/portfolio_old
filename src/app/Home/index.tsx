import Page from '@components/Page';

import Styles from './home.module.sass';

const Component: React.FC = () => {
	return (
		<Page>
			<section className='flex h-screen w-screen items-center p-8 pt-20 tracking-tighter lg:p-20'>
				<div className={Styles.textContainer}>
					<h1 className={Styles.heroText}>full-stack</h1>
					<h1 className={Styles.heroText}>developer</h1>
					<h1 className={Styles.heroText}>& student</h1>
				</div>
			</section>
		</Page>
	);
};

export default Component;
