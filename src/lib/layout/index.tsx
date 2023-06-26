import { createContext, useContext, useState } from 'react';

interface ILayoutContextData {
	defaultNavbarEnabled: boolean;
	setDefaultNavbarEnabled: (enabled: boolean) => void;
	contentScrollable: boolean;
	setContentScrollable: (scrollable: boolean) => void;

	enableDefaultNavbar: () => void;
	disableDefaultNavbar: () => void;
	enableContentScrolling: () => void;
	disableContentScrolling: () => void;
}

const LayoutContext = createContext<ILayoutContextData>({} as any);
const useLayout = () => useContext(LayoutContext);

const Component: React.FC<React.PropsWithChildren> = (props) => {
	const { children } = props;

	const [defaultNavbarEnabled, setDefaultNavbarEnabled] =
		useState<boolean>(true);
	const [contentScrollable, setContentScrollable] = useState<boolean>(false);

	const enableDefaultNavbar = () => setDefaultNavbarEnabled(true);
	const disableDefaultNavbar = () => setDefaultNavbarEnabled(false);

	const enableContentScrolling = () => setContentScrollable(true);
	const disableContentScrolling = () => setContentScrollable(false);

	const data = {
		defaultNavbarEnabled,
		setDefaultNavbarEnabled,
		contentScrollable,
		setContentScrollable,

		enableDefaultNavbar,
		disableDefaultNavbar,
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
