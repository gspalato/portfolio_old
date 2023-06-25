import Page from '@/components/Page';

import Styles from './home.module.sass';

const Component: React.FC = () => {
	return (
		<Page>
			<section className={Styles.content}>
				<div className={Styles.textContainer}>
					<h1 className={Styles.heroText}>full-stack</h1>
					<h1 className={Styles.heroText}>developer</h1>
					<h1 className={Styles.heroText}>& designer</h1>
				</div>
			</section>
		</Page>
	);
};

export default Component;
