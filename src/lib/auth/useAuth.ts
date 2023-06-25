export const useAuth = () => {
	const getUser = (): any => {
		const json = window.sessionStorage.getItem('reality-user');
		return json ? JSON.parse(json) : null;
	};

	const setUser = (serializedUser: string) => {
		window.sessionStorage.setItem('reality-user', serializedUser);
	};

	const getToken = (): string | null => {
		return window.sessionStorage.getItem('reality-token');
	};

	const setToken = (token: string) => {
		window.sessionStorage.setItem('reality-token', token);
	};

	const expire = () => {
		window.sessionStorage.removeItem('reality-token');
		window.sessionStorage.removeItem('reality-user');
	};

	return { user: getUser(), setUser, token: getToken(), setToken, expire };
};
