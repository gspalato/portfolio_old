import * as jose from 'jose'
import { createContext, useContext, useState } from 'react';

import { User } from '@/types/User';

interface IAuthContextData {
	user?: any;
	token: string | null;
	isTokenValid: boolean;
	setToken: (token: string) => void;
	setTokenValidity: (valid: boolean) => void;
	expire: () => void;
}

const AuthContext = createContext<IAuthContextData>({} as any);
const useAuth = () => useContext(AuthContext);

const Component: React.FC<React.PropsWithChildren> = (props) => {
	const { children } = props;

	const [isTokenValid, setTokenValidity] = useState<boolean>(false);

	const getUser = (): User | null => {
		let token = getToken();
		if (!token)
			return null;

		let content = jose.decodeJwt(token);
		let user = content.user ? JSON.parse(content.user as string) : null;
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
		isTokenValid,
		setTokenValidity,
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
