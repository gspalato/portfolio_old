import Page from '@components/Page';

import classes from '@/lib/classes';

import ProfilePicture from '@assets/img/resonance.jpg';

import Stylesheet from './home.module.sass';

const Component: React.FC = () => {
	return (
		<Page>
			<section className='flex h-screen w-screen flex-col-reverse items-center justify-center gap-[4rem] p-8 pt-20 tracking-tighter md:flex-row md:gap-[8rem] lg:p-20'>
				<div className='flex flex-col gap-4'>
					<h1 className={Styles.greeting}>greetings.</h1>
					<h1 className={Styles.description}>
						My name is{' '}
						<span className={Styles.gradient}>Gabriel Spalato</span>
						.
						<br />
						I'm a full-stack developer
						<br />& student.
					</h1>
				</div>
				<img
					src={ProfilePicture}
					className='w-[66vmin] rounded-full md:w-[50vmin]'
				/>
				{/*
				<img
					src='https://raw.githubusercontent.com/gspalato/foundation/master/.project/icon.webp'
					className={Styles.projectIcon}
				/>
				<div
					className={classes(Styles.projectIcon, Styles.radialBlur)}
				/>
				*/}
			</section>
		</Page>
	);
};

export default Component;

const Styles = {
	container: classes('gap-14', Stylesheet.textContainer),
	description: classes(
		'text-left font-mono leading-snug',
		Stylesheet.descriptionText
	),
	greeting: classes(
		'text-left font-mono text-lg tracking-wide text-overlays-9',
		Stylesheet.greetingText
	),
	gradient: classes(Stylesheet.gradientText),
	projectIcon: classes(
		'absolute bottom-0 right-0 top-0 top-1/2 aspect-square w-[50rem] -translate-y-[calc(50%-2.5rem)] translate-x-1/2 rounded-full',
		'blur-sm',
		Stylesheet.projectIcon
	),
};
