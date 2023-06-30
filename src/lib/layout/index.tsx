import { createContext, useContext, useState } from 'react';

interface ILayoutContextData {
	defaultNavbarEnabled: boolean;
	setDefaultNavbarEnabled: (enabled: boolean) => void;
	enableDefaultNavbar: () => void;
	disableDefaultNavbar: () => void;

	navbarBlurEnabled: boolean;
	setNavbarBlurEnabled: (enabled: boolean) => void;
	enableNavbarBlur: () => void;
	disableNavbarBlur: () => void;

	contentScrollable: boolean;
	setContentScrollable: (scrollable: boolean) => void;
	enableContentScrolling: () => void;
	disableContentScrolling: () => void;
}

const LayoutContext = createContext<ILayoutContextData>({} as any);
const useLayout = () => useContext(LayoutContext);

const Component: React.FC<React.PropsWithChildren> = (props) => {
	const { children } = props;

	const [defaultNavbarEnabled, setDefaultNavbarEnabled] = useState<boolean>(true);
	const enableDefaultNavbar = () => setDefaultNavbarEnabled(true);
	const disableDefaultNavbar = () => setDefaultNavbarEnabled(false);

	const [navbarBlurEnabled, setNavbarBlurEnabled] = useState<boolean>(true);
	const enableNavbarBlur = () => setNavbarBlurEnabled(true);
	const disableNavbarBlur = () => setNavbarBlurEnabled(false);

	const [contentScrollable, setContentScrollable] = useState<boolean>(false);
	const enableContentScrolling = () => setContentScrollable(true);
	const disableContentScrolling = () => setContentScrollable(false);

	const data = {
		defaultNavbarEnabled,
		setDefaultNavbarEnabled,
		enableDefaultNavbar,
		disableDefaultNavbar,

		navbarBlurEnabled,
		setNavbarBlurEnabled,
		enableNavbarBlur,
		disableNavbarBlur,

		contentScrollable,
		setContentScrollable,
		enableContentScrolling,
		disableContentScrolling,
	};

	return (
		<LayoutContext.Provider value={data}>{children}</LayoutContext.Provider>
	);
};

Component.displayName = 'Layout';

export default Component;
export { LayoutContext, useLayout };
