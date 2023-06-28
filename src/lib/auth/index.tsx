import * as jose from 'jose'
import { createContext, useContext } from 'react';

import { User } from '@/types/User';

interface IAuthContextData {
	user?: any;
	token: string | null;
	setToken: (token: string) => void;
	expire: () => void;
}

const AuthContext = createContext<IAuthContextData>({} as any);
const useAuth = () => useContext(AuthContext);

const Component: React.FC<React.PropsWithChildren> = (props) => {
	const { children } = props;

	const getUser = (): User | null => {
		let token = getToken();
		if (!token)
			return null;

		let content = jose.decodeJwt(token);
		let user = JSON.parse(content.user as string);
		return user;
	};

	const getToken = (): string | null => {
		return window.sessionStorage.getItem('reality-token');
	};

	const setToken = (token: string) => {
		window.sessionStorage.setItem('reality-token', token);
	};

	const expire = () => {
		window.sessionStorage.removeItem('reality-token');
	};


	const data = {
		user: getUser(),
		token: getToken(),
		setToken,
		expire
	};

	return (
		<AuthContext.Provider value={data}>{children}</AuthContext.Provider>
	);
};

Component.displayName = 'AuthProvider';

export default Component;
export { AuthContext, useAuth };
