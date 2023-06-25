import { createContext, useContext, useState } from 'react';

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

	return (
		<TabContext.Provider value={{ currentTab, setCurrentTab }}>
			{children}
		</TabContext.Provider>
	);
};

export default Component;
export { TabContext, useTabs };
