import { createContext, useContext, useMemo, useState } from 'react';

interface ITabContextData {
	currentTab: string;
	setCurrentTab: (tab: string) => void;
}

const TabContext = createContext<ITabContextData>({} as any);
const useTabs = () => useContext(TabContext);

interface ITabsProps extends React.PropsWithChildren {
	defaultTab: string;
}

const Component: React.FC<ITabsProps> = (props) => {
	const { children, defaultTab } = props;

	const [currentTab, setCurrentTab] = useState<string>(defaultTab);

	const data = useMemo(() => ({ currentTab, setCurrentTab }), [currentTab]);

	return <TabContext.Provider value={data}>{children}</TabContext.Provider>;
};

Component.displayName = 'Tabs';

export default Component;
export { TabContext, useTabs };
