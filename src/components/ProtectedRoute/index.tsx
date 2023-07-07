import { useLazyQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import Loading from '@app/Loading';

import { useAuth } from '@lib/auth';
import { CheckAuth } from '@lib/graphql/queries';

import { CheckAuthenticationPayload } from '@/types/CheckAuthenticationPayload';

const ProtectedRoute: React.FC<React.PropsWithChildren> = (props) => {
	const { token } = useAuth();

	const { isTokenValid, setTokenValidity, expire } = useAuth();

	const [check, { loading, error }] = useLazyQuery<CheckAuth.ReturnType>(
		CheckAuth.Query,
		{
			variables: {
				token: token,
			},
			onCompleted: (data) => {
				let payload: CheckAuthenticationPayload =
					data.checkAuthentication;
				setTokenValidity(payload.successful);

				if (!payload.successful) expire();
			},
			onError: () => {
				setTokenValidity(false);
				expire();
			},
		}
	);

	useEffect(() => {
		check();
	}, [token]);

	if (loading) return <Loading />;

	if (error) {
		console.log(error);
		return <Navigate to='/login' />;
	}

	return isTokenValid ? <>{props.children}</> : <Navigate to='/login' />;
};
export default ProtectedRoute;
